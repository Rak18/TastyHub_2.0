// chck for jwt in headers

const jwt = require ('jsonwebtoken');
const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');

exports.protect = async (req, res, next) => {
let token;

if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    token = req.headers.authorization.split(" ")[1]
}

if (!token){
    return next(new ErrorResponse("Not authorized to access this route", 401));
}

try {

    //here we decode or verify the token we got
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

   //find a user by id //
    const user = await User.findById(decoded.id);

    //if no user is found

    if(!user){
        return next(new ErrorResponse("No user found with this id",404));
    }

    req.user = user;

    next();

} catch (error) {
    return next(new ErrorResponse("Not Authorized to access this route", 401));
}
};
