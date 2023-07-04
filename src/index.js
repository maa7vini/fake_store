import express from 'express'

import connectStore from './database/dataBase.js'
import routes from './routes.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

connectStore().then( () => {
    app.listen(7878, () => {
        console.log('Site e Banco conectados http://localhost:7878/fakestore')
    })
}).catch( (err) => {
    console.log('Ops, something goes wrong')
})