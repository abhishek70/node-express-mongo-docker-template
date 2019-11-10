module.exports = (app) => {

    const index = require('../controller/index');

    // GET
    app.get('/', index.get);
};