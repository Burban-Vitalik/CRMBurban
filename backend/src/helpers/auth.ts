const bcrypt = require("bcrypt");

export const hashPassword = (password: any) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (err: any, salt: any) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err: any, hash: any) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

export const comparePassword = (password: any, hashed: any) => {
  return bcrypt.compare(password, hashed);
};

// module.exports = {
//   hashPassword,
//   comparePassword,
// };
