module.exports = function(app){
    var templateData = {renderDate: 25};
    
    
    app.route("/:query")
        .get(function(req, res){
            res.render("layout", templateData);
         });
};






