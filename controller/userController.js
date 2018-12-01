const mongoose = require('mongoose'),
    model = require('../model/profileModel');

let user = {};

user.create = function(req, res){
    temp = {
        nickname : req.body.nickname,
        Cfav: req.body.campeon,
        Aingreso : req.body.Aingreso
    }
    if(temp.nickname && temp.Cfav && temp.Aingreso && temp.nickname!='' && temp.Cfav!='' && temp.Aingreso!=''){
        data = new model(temp);
        data.save()
    }
};