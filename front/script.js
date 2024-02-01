
function getCharacter() {
    const input = document.getElementById('character');
    const container = document.querySelector('.searchInfo');

    const searchName = input.value.toLowerCase();

    fetch(`http://localhost:400/characters/${searchName}`)
    .then(response => response.json())
    .then(data => { 
        
        container.innerHTML = ''
      
        container.innerHTML += `<h3>${data.length} characters found.</h3>`
        data.map(item => {
    
            let imgUrl
            const { name,status, species, gender, origin: {name:originName}, image} = item
            let length = image.length
            if(image[length - 1] == '/') {
                imgUrl = image.replace('/', '')
            } else {
                imgUrl = image
            }
            container.innerHTML += `
            <div class='card'>
                <img src="${imgUrl}"/>
                <p><b>Name: ${name}</p>
                <p><b>Status: </b>${status}</p>
                <p><b>Species: </b>${species}</p>
                <p><b>Gender: </b>${gender}</p>
                <p><b>Origin: </b>${originName}</p>
            </div>
            `
        })
    })
    .catch(error => console.log(error))
}