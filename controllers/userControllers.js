import Tabungan from "../models/tabunganSchema.js";
import User from "../models/userSchema.js";

const userControllers = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();

            if (!users) {
                return res.status(400).json({ error: "Users not found" });
            }

            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getUserById: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);

            if (!user) {
                return res.status(400).json({ error: "User not found" });
            }

            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    updateUserById: async (req, res) => {
        try {
            const { username, email, phone, address } = req.body;

            const user = await User.findByIdAndUpdate(
                req.params.id,
                {
                    username,
                    email,
                    phone,
                    address
                },
                { new: true }
            );

            if (!user) {
                return res.status(400).json({ error: "Update Failed" });
            }

            res.json({ message: "Update Success" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    deleteUserById: async (req, res) => {
        try {
            const tabungan = await Tabungan.findByIdAndDelete(req.params.id);

            if (!tabungan) {
                return res.status(400).json({ error: "Delete Failed" });
            }

            const user = await User.findByIdAndDelete(req.params.id);

            if (!user) {
                return res.status(400).json({ error: "Delete Failed" });
            }

            res.json({ message: "Delete Success" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default userControllers;