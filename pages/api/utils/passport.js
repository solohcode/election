const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
import { tokenTypes } from "../utils/tokens";
import { createRouter } from 'next-connect';
import User from "../models/user.model";
import passport from 'passport';
// import passportJwt from 'passport-jwt';
// const JwtStrategy = passportJwt.Strategy;
// const { ExtractJwt } = passportJwt;

passport.serializeUser((user, done) => {
  done(null, user.username);
});

passport.deserializeUser((username, done) => {
  done(null, username);
});

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(new JwtStrategy(options, async (jwtPayload, done) => {
  try {
    if (jwtPayload.type !== tokenTypes.ACCESS) {
      throw new Error('Invalid token type');
    }
    const user = await User.findById(jwtPayload.sub);
    console.log(user);
    if (!user) {
      return done(null, false);
    }
    done(null, user);
  } catch (error) {
    done(error, false);
  }
}));

// const jwtOptions = {
//   secretOrKey: process.env.JWT_SECRET,
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
// };

// const jwtVerify = async (payload, done) => {
//   try {
//     console.log(payload);
//     if (payload.type !== tokenTypes.ACCESS) {
//       throw new Error('Invalid token type');
//     }
//     const user = await User.findById(payload.sub);
//     if (!user) {
//       return done(null, false);
//     }
//     done(null, user);
//   } catch (error) {
//     done(error, false);
//   }
// };

// export const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);

const router = createRouter();
const auth = router
  .use(passport.initialize())
  .use(passport.session())
  .use(passport.authenticate('jwt'));
  // passport.use('jwt', jwtStrategy)

export default auth;