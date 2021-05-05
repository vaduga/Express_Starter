import express from "express"


const router = express.Router()

router.use(express.urlencoded({ extended: true }))


router.get('/read', (req,res)=> {
    res.status(200).send(`
    
    <h1>Read</h1>
    <form action="/client/write" method="POST"> 

    <input type="text" name="name"/>
    <input type="submit"/>
    
    </form>
    
    
    `)
})

router.post('/write', (req,res)=> {
    console.dir(req.body.name);
    res.status(200).send(`
    You've sent ${req.body.name}
    <a href="/read"><button>Back</button></a>
    `)
})





export default router