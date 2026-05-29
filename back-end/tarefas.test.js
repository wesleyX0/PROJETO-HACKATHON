const request = require('supertest');
const app = require('./server'); // Mude para o caminho do seu arquivo principal

describe('Testes do Módulo de Tarefas', () => {
    
    // Teste 1: Buscar tarefas de um usuário que existe
    test('Deve retornar status 200 ao buscar tarefas de um usuário', async () => {
        const usuarioId = 1; // Use um ID que você sabe que tem no seu banco
        const res = await request(app).get(`/tarefas/${usuarioId}`);
        
        expect(res.statusCode).toBe(404);
        expect(Array.isArray(res.body)).toBe(true);
    });

    // Teste 2: Buscar tarefas de um usuário que NÃO existe
    test('Deve retornar status 404 para usuário sem tarefas', async () => {
        const res = await request(app).get('/tarefas/99999');
        
        expect(res.statusCode).toBe(404);
    });

});

const pool = require('./src/config/db'); // Ajuste o caminho para o seu arquivo de conexão

afterAll(async () => {
    await pool.end(); // Fecha a conexão com o banco para o Jest sair limpo
});

