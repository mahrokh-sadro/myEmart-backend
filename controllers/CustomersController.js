const express = require("express");
const router = express.Router();
const {
  requireSignin,
  isAuth,
  isAdmin,
} = require("../services/AuthService.js");

const {
  //   userById,
  read,
  //   update,
  //   purchaseHistory,
} = require("../services/CustomerService.js");

router.get("/secret/:id", requireSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile,
  });
});

router.get("/customers/:userId", requireSignin, isAuth, read);
// router.put("/customers/:userId", requireSignin, isAuth, update);
// router.get("/orders/by/user/:userId", requireSignin, isAuth, purchaseHistory);

// router.param("userId", userById);

module.exports = router;
