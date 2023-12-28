import Admin from "../models/adminSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authController = {
  registerAdmin: async (req, res) => {
    const { username, password, email } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    try {
      const admin = await Admin.create({
        username,
        password: hashedPassword,
        email,
      });

      if (!admin) {
        return res.status(400).json({ error: "Register Failed" });
      }

      res.json({ message: "Register Success" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  loginAdmin: async (req, res) => {
    const { username, password } = req.body;
    
    try {
      const admin = await Admin.findOne({ username });
      
      if (!admin) {
        return res.status(400).json({ error: "Admin not found" });
      }

      const isPasswordValid = bcrypt.compareSync(password, admin.password);
      
      if (!isPasswordValid) {
        return res.status(400).json({ error: "Invalid Password" });
      }

      const token = jwt.sign(
        { id: admin._id, isAdmin: true },
        process.env.SESSION_SECRET,
        {
          expiresIn: "1h",
          algorithm: "HS256",
          allowInsecureKeySizes: true,
        }
      );

      req.session.session = token;

      res.json({ message: "Login Success" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  logoutAdmin: async (req, res) => {
    try {
      req.session.destroy();
      res.json({ message: "Logout Success" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default authController;