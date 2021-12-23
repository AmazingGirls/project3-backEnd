const {Service} = require('../Models/servicesSchema')


const addNewService =  (req, res)=>{
        const newService =   new Service({
            name: req.body.name,
            desc: req.body.desc,
            price: req.body.price
        })
        newService.save()
        .then((result)=>{
                res.json(result)
            })
    
    .catch((error)=>{
        console.log(error)
    })
}

const getAllServices = (req, res)=>{
  Service.find({ Service })
    .then((Service) => {
      res.status(200).json(Service);
    })
    .catch((err) => {
      console.log(err);
    })
    ;}






///////////////get one 
const getOneService = (req, res) => {
    const { name } = req.body;
    Service.findOne({ name: name })
      .then((Service) => {
        if (Service) {
          console.log(Service);
          res.status(200).json(Service);
        } else {
          res.status(404).json("Service  Not Found ");
          console.log(Service);

        }
        return res;
      })
      .catch((err) => console.error(err));
  };
module.exports = {addNewService, getAllServices,getOneService}
