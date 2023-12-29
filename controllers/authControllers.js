import Admin from "../models/adminSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userSchema.js";
import Tabungan from "../models/tabunganSchema.js";

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
  },
  registerUser: async (req, res) => {
    const { username, password, email, phone, address } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    
    try {
      const tabungan = await Tabungan.create({});

      const user = await User.create({
        username,
        password: hashedPassword,
        tabunganId: [tabungan._id],
        email,
        phone, 
        address 
      });
 
      if (!user) {
        return res.status(400).json({ error: "Register Failed" });
      }


      if (!tabungan) {
        return res.status(400).json({ error: "Register Failed" });
      }

      res.json({ message: "Register Success" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  loginUser: async (req, res) => {
    try {
      const { username, password } = req.body;

      const user = await User.findOne({ username });
      
      if (!user) {
        return res.status(400).json({ error: "User not found" });
      }

      const isPasswordValid = bcrypt.compareSync(password, user.password);

      if (!isPasswordValid) {
        return res.status(400).json({ error: "Invalid Password" });
      }

      res.json({ message: "Login Success" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  logoutUser: async (req, res) => {
    try {
      req.session.destroy();
      res.json({ message: "Logout Success" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

export default authController;
