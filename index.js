import express from 'express'
import router from './routes/router.js'

const Port = 3000
const app = express()

app.use("/client", router)

app.use("/",(req,res, next)=> {
    res.redirect('/client/read')
    next()
})


app.listen(3000, ()=>console.log("ok running on"+" http://localhost:"+Port))

