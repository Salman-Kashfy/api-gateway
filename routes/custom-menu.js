const express = require("express");
const router = express.Router();
const {commonHandler,customcategoryAxios} = require("../config/axios");
const Admin = require("../middlewares/admin");
const User = require("../middlewares/user");
const Establishment = require("../middlewares/establishment");
const handler = (req,res) => {
    return commonHandler(customcategoryAxios,req,res)
}

router.get('/custom-menu',[Admin,Establishment],handler);
router.get('/custom-menu/all',[User,Establishment],handler);
router.get('/custom-menu/:id',[Admin,Establishment],handler);

module.exports = router;