const express = require('express');
const router = express.Router();
const app = express();
const Project = require('../modules/project');

router.post('/',async(req,res)=>{
    try{
        const{title,description}=req.body;
        const project = await Project.create({title,description});

        await project.save();
        return res.send({project});
    }catch(err){
        return res.status(400).send({error:'😵 bruh 😵', message:err});
    }
});

module.exports = app;
module.exports = router;
