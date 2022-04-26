const jwt = require('jsonwebtoken');

const { TOKEN_SECRET } = process.env;

exports.isAuth = (req, res, next) => {
  try {
    let { authToken } = req.query;

    let verifiedToken = jwt.verify(authToken, TOKEN_SECRET);
    req.user = verifiedToken;

    next();
  } catch (error) {
    return res.status(404).end();
  }
}