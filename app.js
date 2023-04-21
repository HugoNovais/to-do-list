const express = require('express');
const path = require('path');

const ChecklistsRouter = require('./src/routes/checklist');
const rootRouter = require('./src/routes/index');


const app = express();
require('./config/database');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use('/', rootRouter);
app.use('/Checklists', ChecklistsRouter);


app.listen(3000, () => {
    console.log('Servidor Iniciado');
})