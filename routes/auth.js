const express = require("express");
const router = express.Router();
const {commonHandler,userAxios} = require("../config/axios");
const auth = require("../middlewares/auth");
const constants = require("../config/constants");
const HasRoles = require("../middlewares/has-roles");
const handler = (req,res) => {
    return commonHandler(userAxios,req,res)
}

router.post('/login', handler);
router.post('/restaurant-login',handler);
router.post('/logout',auth,handler);
router.post('/signup', handler);
router.post('/forgot-password', handler);
router.post('/verify-otp', handler);
router.post('/reset-password', handler);
router.post('/verify-email', handler);
router.post('/resend-signup-otp', handler);
router.post('/test', auth,handler);
router.post('/admin', HasRoles([constants.ROLE.SUPER_ADMIN,constants.ROLE.ADMIN]),handler);

module.exports = router;