const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { prisma } = require('../../prisma/prisma');
const { TOKEN_SECRET } = process.env;

exports.login = async (req, res) => {
  try {
    const email = req.query.email;
    const password = req.query.password;

    const user = await prisma.users.findUnique({
      where: {
        email: email
      }
    });
    if (!user) {
      return res.json({
        success: false,
        message: "User not found !"
      })

    } else if (user) {
      let hash = crypto.pbkdf2Sync(password, user.salt,
        1000, 64, `sha512`).toString(`hex`);
      if (hash !== user.hash)
        return res.json({
          success: false,
          message: "Credentials are not valid!"
        })

      let authToken = jwt.sign(user, TOKEN_SECRET);

      return res.json({
        user: user,
        authToken: authToken,
        success: true,
        message: "Logged In successfully"
      });

    }
  } catch (error) {
    return res.json({
      success: false,
      message: error.message
    })
  }
}

exports.register = async (req, res) => {

  try {
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(req.body.email))
      return res.json({
        success: false,
        message: "Invalide email address"
      })
    if (!req.body.password || req.body.password.length < 8)
      return res.json({
        success: false,
        message: "Password must be of minimum 8 in length"
      })
    const email = req.body.email.toLowerCase();
    const firstName = req.body.firstName;
    const lastName = req.body.firstName;
    const password = req.body.password;

    const user = await prisma.users.findUnique({
      where: {
        email: email
      }
    });

    if (user) {

      return res.json({
        success: false,
        message: "Email already exists!"
      })

    } else {
      let salt = crypto.randomBytes(16).toString('hex');
      let hash = crypto.pbkdf2Sync(password, salt,
        1000, 64, `sha512`).toString(`hex`);
      let user = await prisma.users.create({
        data: {
          email: email,
          firstName: firstName,
          lastName: lastName,
          salt: salt,
          hash: hash
        }
      });
      let authToken = jwt.sign(user, TOKEN_SECRET);
      return res.json({
        user: user,
        authToken: authToken,
        success: true,
        message: "Account created successfully"
      })
    }
  }
  catch (error) {
    return res.json({
      success: false,
      message: error && error.message
    })
  }
}