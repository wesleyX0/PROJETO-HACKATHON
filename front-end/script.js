const API_URL = 'http://localhost:3000';

// ==========================================
// 1. ALTERNAR TEMA (ROXO ESCURO / BRANCO)
// ==========================================
function trocarTema() {
    document.body.classList.toggle('light-mode');
    const tema = document.body.classList.contains('light-mode') ? 'light' : 'dark';
    localStorage.setItem('temaFlowUp', tema);
}

// Carrega o tema salvo quando abre a página
window.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('temaFlowUp') === 'light') {
        document.body.classList.add('light-mode');
    }
});

// ==========================================
// 2. LOGIN DA API
// ==========================================
async function fazerLogin(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    try {
        const res = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, senha })
        });
        
        const data = await res.json();
        
        if (res.ok) {
            localStorage.setItem('usuarioLogado', JSON.stringify(data.usuario || { id: 1, nome: "Wesley" }));
            window.location.href = 'index.html'; // Vai pro Dashboard
        } else {
            alert("Erro: " + (data.mensagem || "Credenciais inválidas"));
        }
    } catch (err) {
        alert("Erro no servidor. O Back-end (Nodemon) está rodando?");
    }
}