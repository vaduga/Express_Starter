import express from 'express'
import router from './routes/router.js'
import bodyParser from 'body-parser'
const Port = 3000
const app = express()

app.use(router)
app.use(bodyParser.urlencoded)

app.use("/",(req,res, next)=> {
    res.status(404).send("Not found what youre looking for")
    next()
})


app.listen(3000, ()=>console.log("ok running on"+" http://localhost:"+Port))

