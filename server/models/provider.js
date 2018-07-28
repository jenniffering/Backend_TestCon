const mongoose = require('mongoose');
const { Schema } =  mongoose;

const ProviderSchema = new Schema ({
    firstName: { type: String},
    middleName: {type: String},
    lastName: { type: String},
    email: { type: String},
    status: { type: String},
    specialty:{ type: String} 
});

module.exports = mongoose.model('Provider', ProviderSchema);