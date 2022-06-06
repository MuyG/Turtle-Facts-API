
const { response } = require('express')
const express = require('express')
const app = express()
const PORT = 1000

const turtles = {
    'red-eared slider': {
        'name': 'Red-Eared Slider',
        'adult size': 'Around 12 inches long',
        'life span': '20 to 30 years'
    },

    'africansideneckturtle': {
        'name': 'African Sideneck Turtle',
        'adult size': 'Average of 6 to 9 inches long',
        'life-span': '50+ years'
    },

    'eastern box turtle': {
        'name': 'Eastern Box Turtle',
        'adult size': '5 to 7 inches long',
        'life-span': '30 to 40 years'
    },

    'unknown': {
        'name': 'unknown',
        'adult size': 'unknown',
        'life-span': 'unknown'
    },
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const name = req.params.name.toLowerCase()
    
    if(turtles[name]) res.json(turtles[name])
    else if(name === 'random') {
        const arr = Object.keys(turtles)
        const index = Math.floor(Math.random()*(arr.length-1))
        res.json(turtles[arr[index]])
    }
    else res.json(turtles['unknown'])
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})