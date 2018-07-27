const mongoose = require('mongoose');

const URI = 'mongodb://foundation123:foundation123@ds125146.mlab.com:25146/foundation-test1';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;