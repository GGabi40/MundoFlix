const div = document.querySelector('.filmes');

// img.src = 'https://www.designerd.com.br/wp-content/uploads/2021/07/cartazes-de-filmes-estrangeiros-recriados-com-atores-brasileiros-por-beto-vieira-6-scaled.jpg';

let lista =
['https://www.designerd.com.br/wp-content/uploads/2021/07/cartazes-de-filmes-estrangeiros-recriados-com-atores-brasileiros-por-beto-vieira-6-scaled.jpg', 
'https://www.criatives.com.br/wp-content/uploads/2014/05/v83y3bX-630x933.gif', 
'https://pbs.twimg.com/media/EFJsohFX4AADflx?format=jpg&name=medium', 
'https://exame.com/wp-content/uploads/2017/09/stranger-things-originals-jaws-450x675.jpg?quality=70&strip=info',
'https://i.pinimg.com/originals/3e/69/f2/3e69f242a9b705aef3157696411ee1b9.jpg', 
'https://veja.abril.com.br/wp-content/uploads/2016/06/harry-potter-cartaz-pedra-filosofal-01-original1.jpeg?quality=70&strip=info&w=395', 
'https://veja.abril.com.br/wp-content/uploads/2016/06/harry-potter-cartaz-prisioneiro-azkaban-03-original1.jpeg?quality=70&strip=info&w=395', 
'https://photos.enjoei.com.br/cartaz-poster-do-filme-harry-potter-40120644/828xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8xMDgzODYyL2U5MTMzMDFlMDIyZTI3MmQ1MmI1ODhiZWEwMzMxZmY1LmpwZw', 
'https://lumiere-a.akamaihd.net/v1/images/poster_ig_lightyear_dd189850.jpeg?region=2,0,1078,1195', 
'https://cl.buscafs.com/www.tomatazos.com/public/uploads/images/170610/170610.jpg', 
'https://i.pinimg.com/originals/0d/af/73/0daf73d3471efc7ae0392b9255773ee9.jpg'];

let nomeLista = ['Maléfica', 'Frozen', 'Joker', 'Jaws', 'Harry Potter e a Pedra Filosofal' , 'Harry Potter e a Camara Secreta', 'Harry Potter e o Prisioneiro de Askaban', 'Harry Potter e as Relíquias da Morte', 'Light Year', 'Avengers', 'Avengers End Game'];


for(let i = 0; i < lista.length; i++) {
    const img = document.createElement('img');
    img.src = lista[i];
    img.classList.add('filme');

    const p = document.createElement('p');
    p.classList.add('nomeFilme');
    p.innerText = nomeLista[i];
    
    div.appendChild(img);
    div.appendChild(p);
}

/* document.addEventListener('click', function(e) {
    const event = e.target;

    if(event.classList.contains('filme')) {
        // Agregar trailer
    }
}); */