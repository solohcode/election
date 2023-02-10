const passport = require('passport');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { roleRights } = require('../utils/roles');
import jwt from 'jsonwebtoken';
import User from '../models/user.model';
import connectMongo from '../utils/mongo-connect';

const verifyCallback = (resolve, reject) => async (err, user) => {
  if (err || !user) {
    return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Please authenticate'));
  }
  // req.user = user;

  // if (requiredRights.length) {
  //   const userRights = roleRights.get(user.user_type);
  //   const hasRequiredRights = requiredRights.every((requiredRight) => userRights.includes(requiredRight));
  //   if (!hasRequiredRights && req.params.userId !== user.id) {
  //     return reject(new ApiError(httpStatus.FORBIDDEN, 'Forbidden'));
  //   }
  // }

  resolve();
};

export const auth = (handler) => async (req, res) => {
  // console.log(req, res, next);
  return new Promise((resolve, reject) => {
    passport.authenticate('jwt', { session: false }, verifyCallback(req, resolve, reject))(req, res);
  })
    .then(() => handler(req, res))
    .catch((err) => console.log(err));
};

export const getLoggedInUser = async (token) => {
  await connectMongo();
  return jwt.verify(token, process.env.JWT_SECRET, async(err, decoded) => {
    if (err) throw new ApiError(httpStatus.UNAUTHORIZED, err.message);
    const data = await User.findById(decoded.sub);
    return data;
  });
}
