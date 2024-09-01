import express from "express";
const app = express();
app.use(express.json());

export const authMiddleware = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};
