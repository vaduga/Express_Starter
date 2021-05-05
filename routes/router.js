import express from "express"


const router = express.Router()

router.use(express.urlencoded({ extended: true }))


router.get('/read', (req,res)=> {
    res.status(200).send(`
    
    <h1>Read</h1>
    <form action="/write" method="POST"> 

    <input type="text" name="name"/>
    <input type="submit"/>
    
    </form>
    
    
    `)
})

router.use('/write', (req,res)=> {
    console.dir(req.body.name);
    res.status(200).send(`
    You've sent ${req.body.name}
    <a href="/read"><button>Back</button></a>
    `)
})


router.use("/",(req,res, next)=> {
    res.redirect('/read')
    next()
})


export default router