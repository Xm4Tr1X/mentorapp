const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ninaad:' +
  process.env.ATLAS_DB_PASS +
  '@montorcluster-hb2fa.mongodb.net/test?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

setTimeout(() => {
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function () {
    console.log('we are connected!')
  });
}, 3000);
mongoose.set('debug', true);

module.export = {};