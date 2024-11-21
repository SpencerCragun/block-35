const express = require("express");
const router = express.Router();
module.exports = router;

const prisma = require("../prisma")

// router.get("/", (req, res) => {
//   res.send("You've reached the Employee List API")
// })

router.get("/", async (req, res, next) => {
  try {
    const employees = await prisma.employee.findMany();
    res.json(employees);
  } catch (e) {
    next(e);
  }
});