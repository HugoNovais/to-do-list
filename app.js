const express = require('express');
const ChecklistsRouter = require('./src/routes/checklist')
const app = express();
require('./config/database');

app.use(express.json());

app.use('/Checklists', ChecklistsRouter);


app.listen(3000, () => {
    console.log('Servidor Iniciado');
})