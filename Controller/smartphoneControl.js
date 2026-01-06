const smartphoneModel = require("../Models/smartphone");

const smartphoneCreate = async (req, res) => {
  const { Name, Price, Display, RAM } = req.body;
  console.log("after DS :", req.body);
  

  try {
    const smartphoneDetails = await smartphoneModel.create({
      Name,
      Price,
      Display,
      RAM,
    });
    res.json({ status: true, data: smartphoneDetails });
  } catch (error) {
    return res.status(500).json("issue warranted");
  }
};

module.exports = {smartphoneCreate}
