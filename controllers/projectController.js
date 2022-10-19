const express = require('express');
const router = express.Router();
const app = express();
const Project = require('../modules/project');
const Task = require('../modules/task');

router.post('/',async(req,res)=>{
    try{
        const{title,description,tasks}=req.body;
        const project = await Project.create({title,description});

        await Promise.all(tasks.map(async task=>{
            const projectTask = new Task({...task,project:project._id});

            await projectTask.save();
            project.tasks.push(projectTask);
        }));

        await project.save();
        return res.send({project});
    }catch(err){
        return res.status(400).send({error:'😵 bruh 😵', message:err.message});
    }
});

router.get('/', async(req,res)=>{
    try {
        const projects = await Project.find();//.populate(['tasks']);

        return res.send({projects});
    } catch (error) {
        return res.status(400).send({error:'🖕', message:err.message});

    }
});

router.delete('/:projectId',async(req,res)=>{
    try {
        await Task.deleteMany({project:req.params.projectId});
        await Project.findByIdAndDelete(req.params.projectId);

        return res.send({message:'😈'});
    } catch (error) {
        return res.status(400).send({error:'oof 😖', message:err.message});
    }
})
module.exports = app;
module.exports = router;
