let userDataModel = require('../models/userDataModel')

exports.profileData = function(req, res, next) {
    userDataModel.userProfileData(req, res, next, renderProfile)

}

function renderProfile(req, res, next, profileData) {
    console.log("rendering profile")
    console.log(profileData)
    res.render("profile", {appType: "Express", profileData})
}