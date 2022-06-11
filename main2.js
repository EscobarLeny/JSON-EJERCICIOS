let elementos = ''

fetch('https://rickandmortyapi.com/api/character')
    .then(response => {
        // console.log(response.json());
        return response.json();
    })
    .then(data => {
        // console.log(data);
        for (let i = 0; i < data.length; i++) {
            console.log(data[i])
            elementos += `<li>${data[i].id}-
            <img src="${data[i].thumbnailUrl}">
            ${data[i].title}
            
            </li>`;
            console.log(data[i].title);
        }
        document.getElementById('posts').innerHTML = elementos;
    })
