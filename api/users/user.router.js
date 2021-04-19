const { createUser, login } = require("./user.controller");

const router = require("express").Router();
router.post("/", createUser);
router.post("/login", login)


module.exports = router;