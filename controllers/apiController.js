
const bcrypt = require("bcrypt")
const students = [
    {id:1, name: "Omar"},
    {id:2, name: "Nayem"},
    {id:3, name: "Shahed"},
    {id:4, name: "Utsha"},
    {id:5, name: "Istiak"},
    {id:6, name: "Monika"},
    {id:7, name: "Sadia"}
]

const allStudent = (req, res) => {
    res.json(students)
}

const changePass =async (req, res) => {
    const { pass } = req.body
    // const hash = await bcrypt.hash(pass, +process.env.SALT);
    const oldPass = "$2b$10$uHBo87hF2RddY0qDQ2eGvOX5xEn5i1E7RVppwzocpCQRBqNYYkh8u"
    if (!(await bcrypt.compare(pass, oldPass))) {
      return res.status(401).json({message: "wrong password"})
    }
    res.status(200).json({message: "Correct Password"})
    // res.send(hash);
}

module.exports = {
    allStudent,
    changePass
}