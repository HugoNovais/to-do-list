const express = require('express');

const checklistDepedentRoute = express.Router();
const simpleRouter = express.Router();

const Checklist = require ('../models/checklist');
const Task = require ('../models/task');

checklistDepedentRoute.get('/:id/tasks/new', async(req, res) => {
    try {
        let task = Task();
        res.status(200).render('tasks/new', {checklistId: req.params.id, task: task})
    } catch (error) {
        res.status(422).render('pages/error', {errors: 'Erro ao carrega o formulário'})
    }
})



checklistDepedentRoute.post('/:id/tasks', async(req, res) => {
    let { name } = req.body.task;
    let task = new Task({name, checklist: req.params.id}) 

    try {
        await task.save();
        let checklist = await Checklist.findById(req.params.id);
        checklist.task.push(task);
        await checklist.save();
        res.redirect(`/checklists/${req.params.id}`);
    } catch (error) {
        let errors = error.errors;
        res.status(422).render('tasks/new', {tasks: {...task, errors}, checklistId: req.params.id})
    }
})


simpleRouter.delete('/:id', async(req, res) => {
    try {
        let tasks = await Task.findByIdAndDelete(req.params.id);
        let checklist = await Checklist.findById(tasks.checklist);
        let taskToRemove = checklist.task.indexOf(tasks._id);
        checklist.task.splice(taskToRemove, 1);
        checklist.save();
        res.redirect(`/checklists/${checklist._id}`);
    } catch (error) {
        res.status(422).render('pages/error', {errors: 'Erro ao remover uma tarefa'})
    }
})

module.exports = {
    checklistDepedent: checklistDepedentRoute,
    simple: simpleRouter
}