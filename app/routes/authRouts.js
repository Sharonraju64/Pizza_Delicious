const express = require("express");
const { createUser, loginUserCtrl, getallUser, getaUser, deleteaUser } = require("../controller/userCtrl");
const router = express.Router();
const {authMiddleware, isAdmin}= require('../middlewares/authMiddleaware');

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get('/all-users', getallUser);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.delete("/:id", deleteaUser);
module.exports=router;