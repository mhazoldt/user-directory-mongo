let userDataModel = require('../models/userDataModel')

exports.index = function(req, res, next) {
    userDataModel.getAllData(req, res, next, renderIndex)

}

function renderIndex(req, res, next, robotData) {
    console.log("rendering index")
    let data = {"users": robotData}
    console.log(data)
    res.render("index", {appType: "Express", data})
}