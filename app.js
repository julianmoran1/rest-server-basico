import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { router } from './routes/user.routes.js'

const app = express()
const port = process.env.PORT
const apiRoute = "/api/usuarios"

//define la carpeta pública
app.use(express.static('public'))

//cors, para aceptar peticiones solo desde ciertos puntos
app.use(cors())

//parsea los post, patch, put o delete a json
app.use(express.json())

//define la ruta de la api
app.use(apiRoute, router)

app.listen(port, () =>{
    console.log(`Aplicación escuchando el puerto nuevo ${port}`)
})