const Second_Hand_Car_Detail = require("../model/second_hand_car_detail");

const add_second_hand_car_detail = async (req, res) => {
    try {
        const request = req?.body;
        if(!request) return res.status(200).json({ message: "Enter Valid Detail To Proceed Further!.", data: [] });

        if(request){
            var image = request?.image;
            var title = request?.title;
            var description = request?.description;
        }

        const payload = {
            image:image,
            title:title,
            description:description
        }

        if(payload){
            var add = await Second_Hand_Car_Detail.create(payload)
        }

        if(add){
            return res.status(200).json({ message: "Car Detail Added Successfully.", data: [] });
        }
        else{
            return res.status(200).json({ message: "Error while adding car detail.", data: [] });
        }

        
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const get_car_detail = async (req, res) => {
    try {
      const Get = await Second_Hand_Car_Detail.find().lean().exec();
      if (Get) {
        return res.status(200).json({ message: "Car Detail Get Successfully", data: Get });
      } else {
        return res.status(200).json({ message: "Unable To Find Car detail", data: [] });
      }
    } catch (err) {
     return  res.status(500).json({ error: err.message });
    }
  };
  

module.exports = {
    add_second_hand_car_detail,
    get_car_detail,
}