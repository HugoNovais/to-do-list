const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://hugobt:teste@cluster0.wxegcih.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Conectado ao MongoDB'))
.catch((err) => console.error(err));