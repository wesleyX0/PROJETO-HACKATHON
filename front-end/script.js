async function buscarTarefas() {
    try {
        const resposta = await fetch('http://localhost:3000/tarefas/1');
        const listaHtml = document.getElementById('lista-tarefas');
        
        listaHtml.innerHTML = '';

        if (!resposta.ok) {
            const erroJson = await resposta.json();
            listaHtml.innerHTML = `<li>${erroJson.mensagem} 😴</li>`;
            return;
        }
        
        const tarefas = await resposta.json();
        
        tarefas.forEach(tarefa => {
            const item = document.createElement('li');
            item.textContent = `${tarefa.titulo} - Status: ${tarefa.status}`;
            listaHtml.appendChild(item);
        });

    } catch (erro) {
        console.error("Erro:", erro);
        alert("Servidor desligado!");
    }
}

async function cadastrarTarefa() {
    try {
        // 1. PRIMEIRO preparamos a marmita (pegamos os valores)
        const tituloDigitado = document.getElementById('titulo-tarefa').value; 
        const pomodorosDigitado = document.getElementById('qtd-pomodoros').value;

        // Montamos o objeto do jeito que o seu Back-end espera receber
        const novaTarefa = {
            titulo: tituloDigitado,
            esc_pomodoro: pomodorosDigitado,
            usuario_id: 1 // Estamos usando o usuário 1 como teste
        };

        // 2. AGORA chamamos o motoboy e entregamos a mochila pra ele
        const resposta = await fetch('http://localhost:3000/tarefas', {
            method: 'POST', // Avisamos que é para CADASTRAR
            headers: {
                'Content-Type': 'application/json' // Avisamos que a língua é JSON
            },
            body: JSON.stringify(novaTarefa) // Transformamos o objeto em texto pro motoboy levar
        });

        // 3. AQUI VOCÊ CONTINUA...
        if (!resposta.ok) {
            const erroJson = await resposta.json();
            alert("Deu erro ao salvar: " + erroJson.mensagem);
        } else {
            // 1. Avisa o usuário
            alert("Aeeee! Tarefa salva com sucesso no banco!");
            
            // 2. Limpa as caixinhas (é só pegar o campo e dizer que o valor dele é vazio '')
            document.getElementById('titulo-tarefa').value = '';
            document.getElementById('qtd-pomodoros').value = '';

            // 3. O pulo do gato: a gente manda o sistema buscar as tarefas de novo pra tela atualizar!
            buscarTarefas();
        }

    } catch(erro) {
        // Mostra o erro técnico no F12 pra gente investigar
        console.error("Deu ruim na comunicação:", erro);
        
        // Avisa o usuário
       alert("Deu erro ao salvar: " + erroJson.mensagem + " | Código: " + erroJson.detalhe);
    }
}