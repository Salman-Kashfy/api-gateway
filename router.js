/*
* Route files
* */
let routes = []
routes.push(require("./routes/auth"));
routes.push(require("./routes/restaurant"));
routes.push(require("./routes/category"));
routes.push(require("./routes/super-admin"));
routes.push(require("./routes/custom-menu"));

module.exports = routes