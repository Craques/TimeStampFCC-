'use strict';
var moment = require('moment');

module.exports = function(app) {

    app.get('/:query', function(req, res) {
        var date = req.params.query;
        var unix = "null";
        var natural = "null";
        
        // Check for initial unix time
        if (+date >= 0) {
            unix = +date;
            natural = unixToNat(unix);
        } 
        
        // Check for initial natural time
        if (isNaN(+date) && moment(date, "MMMM D, YYYY").isValid()) {
            unix = natToUnix(date);
            natural = unixToNat(unix);
        }
        
        var dateObj = { "unix": unix, "natural": natural };
        res.render("layout", dateObj)
        //res.write(JSON.stringify(dateObj));
       
        
    });
    
    function natToUnix(date) {
        // Convert from natural date to unix timestamp
        return moment(date, "MMMM D, YYYY").format("X");
    }
    
    function unixToNat(unix) {
        // Convert unix timestamp to natural date
        return moment.unix(unix).format("MMMM D, YYYY");
    }
    
    
    
};