import { describe, it } from 'node:test';
import assert from 'node:assert';
import { spawn } from 'node:child_process';

describe('O Mosteiro de Silício - MCP Server Protocol', () => {
  it('deve responder à inicialização e à chamada de monastery_get_current_node', async () => {
    const proc = spawn('node', ['--experimental-strip-types', 'src/mcp/server.ts'], {
      cwd: process.cwd(),
      stdio: ['pipe', 'pipe', 'inherit'],
    });

    const responses: any[] = [];

    proc.stdout.on('data', (chunk) => {
      const lines = chunk.toString().split('\n').filter(Boolean);
      for (const line of lines) {
        try {
          responses.push(JSON.parse(line));
        } catch {}
      }
    });

    // 1. Initialize
    proc.stdin.write(JSON.stringify({ jsonrpc: '2.0', id: 1, method: 'initialize', params: {} }) + '\n');
    // 2. Call tool
    proc.stdin.write(JSON.stringify({
      jsonrpc: '2.0',
      id: 2,
      method: 'tools/call',
      params: { name: 'monastery_get_current_node', arguments: { sessionId: 'mcp-test-session' } }
    }) + '\n');

    await new Promise((resolve) => setTimeout(resolve, 600));
    proc.kill();

    const initResp = responses.find(r => r.id === 1);
    const toolResp = responses.find(r => r.id === 2);

    assert.ok(initResp, 'Deve conter resposta de inicialização');
    assert.strictEqual(initResp.result.serverInfo.name, 'mosteiro-de-silicio-mcp');

    assert.ok(toolResp, 'Deve conter resposta da ferramenta');
    const content = JSON.parse(toolResp.result.content[0].text);
    assert.strictEqual(content.nodeId, 'PROL-01');
    assert.strictEqual(content.title, 'O Umbral de Silício e Cinzas');
    assert.strictEqual(content.options.length, 3);
  });
});
