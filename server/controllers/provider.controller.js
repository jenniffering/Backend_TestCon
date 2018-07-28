const Provider = require('../models/provider');
const providerCtrl = {};

//All Providers
providerCtrl.getProviders = async (req, res) => {
    const providers = await Provider.find();
    res.json(providers); 
 };
 
 //Create Providers
providerCtrl.createProvider = async (req,res) => {
    const provider = new Provider(req.body);
    await provider.save();
    res.json({
        'status' : 'Provider Saved'
    });
};

//Get provider by ID
providerCtrl.getProvider = async (req,res) =>{
    const provider = await Provider.findById(req.params.id);
    res.json(provider);
};

//Edit Provider 
providerCtrl.editProvider = async (req,res)  =>{
    const provider = {
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        email: req.body.email,
        status: req.body.status,
        specialty: req.body.specialty
    };
    await Provider.findByIdAndUpdate(req.params.id, {$set: provider}, {new: true});
    res.json({
        'status':'Provider Update'
    });
};
// Delete Provider
providerCtrl.deleteProvider = async (req,res) => {
    await  Provider.findByIdAndRemove(req.params.id);
    res.json({
        'status':'Provider Removed'
    });
};




 module.exports = providerCtrl;