const axios = require("axios");

const userAxios = axios.create({
    baseURL: process.env.USER_MICROSERVICE,
});

const restaurantAxios = axios.create({
    baseURL: process.env.RESTAURANT_MICROSERVICE,
});

const categoryAxios = axios.create({
    baseURL: process.env.CATEGORY_MICROSERVICE,
});

const customcategoryAxios = axios.create({
    baseURL: process.env.CUSTOM_MENU_MICROSERVICE,
});

const commonHandler = (axiosInstance,req,res) =>{
    let data = {method:req.method,url:req.originalUrl,data:req.body}
    if(req.headers.authorization){
        data.headers = {
            Authorization: req.headers.authorization
        }
    }
    axiosInstance(data).then((response)=>{
        return res.status(response.status).json(response.data);
    }).catch((error) =>{
        //console.log(error.response)
        if(typeof error.response === 'undefined'){
            return res.json(error.message);
        }
        return res.status(error.response.status).json(error.response.data);
    })
}

module.exports = {
    commonHandler,
    userAxios,
    restaurantAxios,
    categoryAxios,
    customcategoryAxios
};