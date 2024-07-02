import jwt from "jsonwebtoken";

export default function (req, res, next) {
    const jwtToken = req.headers["authorization"];
    const chavePrivada = process.env.SECRET_KEY;
  
    jwt.verify(jwtToken, chavePrivada, (err, userInfo) => {
      if (err) {
        res.status(403).end();
        return;
      }
  
      next();
    //   res.json(userInfo);
    });
  }