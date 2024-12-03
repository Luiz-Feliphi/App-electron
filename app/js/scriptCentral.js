// Seleciona todos os links de navegação
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
        // Remove a classe 'selecionado' de todos os itens
        document.querySelectorAll('.opcoes-lista').forEach(item => {
            item.classList.remove('selecionado');
        });
        
        // Adiciona a classe 'selecionado' ao item clicado
        this.querySelector('.opcoes-lista').classList.add('selecionado');
        
        // Obtém o ID do item clicado
        const id = this.querySelector('.opcoes-lista').id;
        
        // Atualiza o valor do elemento com o ID 'titulo-fora' dependendo do item clicado
        const tituloFora = document.getElementById('titulo-fora');
        const sobre = document.getElementById('sobre');
        const lateral = document.querySelector('#image-lateral');
        const imagem = document.getElementById('image-sobre');
        const tituloAmericaC = document.getElementById('titulo-fora2'); 
        if(id == 'countries'){
            imagem.style.opacity = '0';
        } else{
            imagem.style.opacity = '1'
        }
        if(id != 'countries'){
            lateral.style.opacity = "1";
        }
        switch (id) {
            case 'home':
                tituloFora.textContent = 'Paises do continente americano';
                break;
                
            case 'browser':
                tituloFora.textContent = 'Encontre algum pais do continente latino americano';
            break;
                    
            case 'countries':
                tituloFora.style.display = 'none';
                tituloAmericaC.style.display = 'block';
                tituloFora.style.fontSize = "x-large";
            break;
        }
            //texto sobre
        switch (id) {
            case 'home':
                sobre.textContent = 'Que tal ver mais sobre eles?!';
            break;
                    
            case 'browser':
                sobre.textContent = 'Que paises gostaria de  ver?';
            break;
                        
            case 'countries':
                sobre.textContent = '';
                lateral.style.opacity = "1";
                sobre.style.fontSize = 30;
            break;
        }
        
    });
});
