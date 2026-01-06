const userModel = require("../Models/user");

const userCreate = async (req, res) => {
  const { Name, Age, Email, Password } = req.body;
  console.log("after DS :", req.body);

  
  try {
    const userDetails = await userModel.create({
      Name,
      Age,
      Email,
      Password,
    });
    res.json({ status: true, data: userDetails });
  } catch (error) {
    res.json({ status: false, error: {} });
    return res.status(500).json("issue warranted");
  }
};

const getUser = async (req, res) => {
  try {
    const userDetails = await userModel.find();
    res.json(userDetails);
  } catch (error) {
    console.log("fetch error :", error);
    return res.status(500).json("internal server issue");
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const deleteUser = await userModel.findByIdAndDelete(userId);
    res.json("Deleted successfully");
  } catch (error) {
    console.log("cant delete :", error);
  }
};

module.exports = { userCreate, getUser, deleteUser };
