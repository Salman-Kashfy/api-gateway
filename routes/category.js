const express = require("express");
const router = express.Router();
const {commonHandler,categoryAxios} = require("../config/axios");
const HasRoles = require("../middlewares/has-roles");
const constants = require("../config/constants");
const establishment = require("../middlewares/establishment");
const handler = (req,res) => {
    return commonHandler(categoryAxios,req,res)
}

router.get('/category',[HasRoles([constants.ROLE.ADMIN]),establishment],handler);
router.get('/category/subcategory/:id',[HasRoles([constants.ROLE.ADMIN]),establishment],handler);
// router.post('/category',[HasRoles([constants.ROLE.ADMIN]),establishment],handler);
// router.delete('/category/:id',HasRoles([constants.ROLE.ADMIN]),handler);

module.exports = router;