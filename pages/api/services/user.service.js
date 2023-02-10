import httpStatus from "http-status";
const User = require("../models/user.model");
import ApiError from "../utils/ApiError";
// const bcrypt = require('bcryptjs');

export const createUser = async (userBody) => {
  const { fullname, email, password } = userBody
  if (await User.isEmailTaken(email)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  const body = {
    fullname,
    email,
    user_type: 'agent',
    password
  }
  return User.create(body);
};

export const loginUser = async (email, password) =>{
  const user = await getUserByEmail(email);
  // const pass = await bcrypt.hash(password, 8);
  // console.log(pass);
  if (!user || !(await user.isPasswordMatch(password))) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect email or password');
  }
  return user;
}

export const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

export const getAllAdmin = async (userBody) => {
  return await User.find();
};
