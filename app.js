const axios=require('axios')
const cors=require('cors')
const express=require('express')
const app= express()
const characterUrl = 'https://rickandmortyapi.com/api/character'

app.use(cors())
app.get('/characters', async (req, res) => {
    try {
        const response = await axios.get(characterUrl )
        const characters=response.data.results
        res.json(characters)
    } catch(error) {
        res.status(500).json({message: 'No response!'})
    }
});

app.get('/characters/:name', async (req, res) => {
    const name = req.params.name
    const url = `${characterUrl}/?name=${name}`

    try {
        const response = await axios.get(url)
        const character= response.data.results
        res.json(character)

    } catch(error) {
        res.status(404).json({message: 'No character found!'})
    }
});


app.listen(400,()=>{
console.log("Servidos escuchando en http://localhost:400")
})