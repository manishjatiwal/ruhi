import express, { Express } from 'express'
import { join } from 'path'
import viewHandler from './middlewares/view-handler'

const app: Express = express()
app.disable('x-powered-by')
app.use(express.json())
app.use(express.static(join(__dirname, '..', 'client')))
app.use(viewHandler)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server listining on port :: ${PORT}`)
})
