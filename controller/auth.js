const User = require ('../models/User');
const ErrorResponse = require ("../utils/errorResponse");

exports.register = async (req, res, next) => {
    const {username, email, password} = req.body;

    try{
const user = await User.create({
    username,
    email,
    password
});

sendToken(user, 201, res);

    }catch(error){
next(error);
    }
};

exports.login = async (req, res, next) => {
    const { email, password} = req.body;

    // if email or password is incorrect or not given

    if(!email || !password){
        return next(new ErrorResponse("Please provide an email and password", 400))     
}

// while it is trying to find the username and password in database

try{
    const user = await User.findOne({ email }).select("+password");

    if(!user){
        return next(new ErrorResponse("Invalid Credentials", 401)) 
    }

    const isMatch = await user.matchPasswords(password);

    if(!isMatch){
        return next(new ErrorResponse("Invalid Credentials", 401)) 
    }

    sendToken(user, 200, res);

}catch(error){
    next(error);
}
};

exports.forgotpassword =  async (req, res, next) => {
  const { email } = res.body;
  try {
      const user = await User.findOne({email});
      if(!user){
          return next (new ErrorResponse("Email could not be sent", 404))
      }

      const resetToken = user.getResetPasswordToken();

      await user.save();
  } catch (error) {
      
  }
  
};

exports.resetpassword = (req, res, next) => {
    res.send("Reset Password Route")
};

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedToken();
    res.status(statusCode).json({ success: true, token})
}

