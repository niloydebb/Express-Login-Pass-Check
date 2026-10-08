const express = require("express")
const { allStudent,changePass } = require("../controllers/apiController")
const router = express.Router()

router.get("/all-student", allStudent)
router.post("/change-pass",changePass)

module.exports = router