const User = require('../models/userModel')

// login a user
const loginUser = async (req, res) => {
  const { select, username, password } = req.body

  try {
    const user = await User.findOne({username});

    let message = "";

    if(user){
      message = "Successful Login";

      console.log(message);

      res.status(200).json({ username, message });  
    }
    else{
      message = "User not registered";
      res.status(200).json({ username, message });
    }

  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// signup a user
const signupUser = async (req, res) => {
  const { select, username, password } = req.body
  try {

    let check = await User.findOne({username});

    if (!check) {

      const user = new User(req.body);
      const newUser = await user.save();

      const message = "Successfully registered";

      res.status(200).json({ username, message })
    }
    else{
      message = "User Already Logged In";

      res.status(200).json({username, message});
    }
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { signupUser, loginUser }