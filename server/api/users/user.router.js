const router = require("express").Router();
const auth = require("../middleware/auth");
const {
  createUser,
  getUsers,
  getUserById,
  getUserByIdNumber,
  login,
} = require("./user.controller");
router.post("/", createUser);
router.get("/all", getUsers);
router.get("/", auth, getUserById);
router.post("/login", login);
router.post("/id",getUserByIdNumber)
module.exports = router;
