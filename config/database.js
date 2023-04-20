const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1/to-do-list', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Conectado ao MongoDB'))
.catch((err) => console.error(err));