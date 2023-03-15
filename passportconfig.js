const LocalStrategy = require("passport-local");
const bcrypt = require("bcrypt");

module.exports = function initialize(passport, getUsersEmail, getUserbyId) {
  const authenticateUsers = async (email, password, done) => {
    //get users email
    const Users = getUsersEmail(email);
    if (Users == null) {
      return done(null, false, {
        messages: `No Users Found with that ${email}`,
      });
    }
    try {
      if (await bcrypt.compare(password, Users.password)) {
        return done(null, Users);
      } else {
        return done(null, false, { messages: `${password} is Incorrect` });
      }
    } catch (error) {
      console.log(error);
      return done(error);
    }
  };
  passport.use(
    new LocalStrategy({ usernamefield: "email" }, authenticateUsers)
  );
  passport.serializeUser((Users, done) => done(null, Users.id));
  passport.deserializeUser((id, done) => {
    return done(null, getUserbyId(id));
  });
};
