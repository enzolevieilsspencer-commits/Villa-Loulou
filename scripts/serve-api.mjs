import './load-env.mjs';
import { createServer } from 'http';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import handler from '../api/contact.js';

const API_PORT = 3001;

function createRes(nodeRes) {
  let statusCode = 200;
  return {
    setHeader(key, value) {
      nodeRes.setHeader(key, value);
    },
    status(code) {
      statusCode = code;
      return {
        json(obj) {
          nodeRes.writeHead(statusCode, { 'Content-Type': 'application/json' });
          nodeRes.end(JSON.stringify(obj));
        },
      };
    },
  };
}

const server = createServer(async (nodeReq, nodeRes) => {
  if (nodeReq.method === 'OPTIONS') {
    nodeRes.writeHead(204);
    nodeRes.end();
    return;
  }
  if (nodeReq.method !== 'POST' || nodeReq.url !== '/api/contact') {
    nodeRes.writeHead(404, { 'Content-Type': 'application/json' });
    nodeRes.end(JSON.stringify({ success: false }));
    return;
  }

  let body = '';
  for await (const chunk of nodeReq) body += chunk;
  let parsed = body;
  try {
    parsed = JSON.parse(body);
  } catch {
    parsed = {};
  }

  const req = { method: 'POST', body: parsed };
  const res = createRes(nodeRes);
  try {
    await handler(req, res);
  } catch (err) {
    console.error('[api] Handler error:', err);
    if (!nodeRes.writableEnded) {
      nodeRes.writeHead(500, { 'Content-Type': 'application/json' });
      nodeRes.end(JSON.stringify({ success: false, message: err?.message || 'Erreur serveur' }));
    }
  }
});

server.listen(API_PORT, () => {
  console.log(`[api] Contact API: http://localhost:${API_PORT}/api/contact`);
});
