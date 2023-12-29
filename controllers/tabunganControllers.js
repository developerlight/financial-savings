import Tabungan from "../models/tabunganSchema.js";
import User from "../models/userSchema.js";

const tabunganController = {
  getAllTabungan: async (req, res) => {
    try {
      const tabungan = await Tabungan.find();

      if (!tabungan) {
        return res.status(400).json({ error: "Tabungan not found" });
      }

      res.json(tabungan);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getTabunganById: async (req, res) => {
    const { userId } = req.params;
    try {
      const tabungan = await Tabungan.find({ userId: userId });

      if (!tabungan) {
        return res.status(400).json({ error: "Tabungan not found" });
      }

      res.json(tabungan);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateTabunganById: async (req, res) => {
    const { tabunganId } = req.params;
    try {
      const { uang, status } = req.body;

      const prevTabungan = await Tabungan.findById({ _id: tabunganId });
      prevTabungan.saldo += uang - prevTabungan.uang;

      const tabungan = await Tabungan.findOneAndUpdate(
        { _id: tabunganId },
        { uang, saldo: prevTabungan.saldo, status },
        { new: true }
      );

      if (!tabungan) {
        return res.status(400).json({ error: "Tabungan Not Found" });
      }

      res.json({ message: "Update Success" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteTabunganById: async (req, res) => {
    try {
      const tabungan = await Tabungan.findByIdAndDelete(req.params.tabunganId);

      if (!tabungan) {
        return res.status(400).json({ error: "Delete Failed" });
      }

      res.json({ message: "Delete Success" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  postTabungan: async (req, res) => {
    try {
      const { userId, tabunganId } = req.params;
      const { uang, status } = req.body;

      // update saldo
      const prevTabungan = await Tabungan.findById({ _id: tabunganId });
      prevTabungan.saldo += uang;

      // create new tabungan
      const tabungan = await Tabungan.create({
        uang,
        saldo: prevTabungan.saldo,
        status,
      });
      
      if (!tabungan) {
        return res.status(400).json({ error: "Tabungan Not Found" });
      }

      await User.findOneAndUpdate(
        { _id: userId },
        { $push: { tabunganId: tabungan._id } },
        { new: true }
      );

      res.json({ message: "Menabung Success" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

export default tabunganController;
