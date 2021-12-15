// const passport = require('passport');
// const FacebookStrategy = require('passport-facebook').Strategy

// passport.use(new FacebookStrategy({
//     clientID: process.env.FB_CLIENT_ID,
//     clientSecret: process.env.FB_CLIENT_SECRET,
//     callbackURL: "http://localhost:3000/auth/facebook/callback"
//   },
//   function(accessToken, refreshToken, profile, done) {
//     User.findOrCreate(..., function(err, user) {
//       if (err) { return done(err); }
//       done(null, user);
//     });
//   }
// ));