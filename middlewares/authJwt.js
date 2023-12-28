import jwt from "jsonwebtoken";

const authJwt = {
    verifyToken: (req, res, next) => {
        const token = req.session.session;

        if (!token) {
            return res.status(403).json({ error: "No token provided" });
        }

        jwt.verify(token, process.env.SESSION_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ error: "Unauthorized" });
            }

            req.userId = decoded.id;
            req.isAdmin = decoded.isAdmin;

            next();
        });
    },
    isAdmin: (req, res, next) => {
        if (!req.isAdmin) {
            return res.status(403).json({ error: "Require Admin Role" });
        }

        next();
    },
    isUser: (req, res, next) => {
        if (req.isAdmin) {
            return res.status(403).json({ error: "Require User Role" });
        }

        next();
    }
}

export default authJwt;