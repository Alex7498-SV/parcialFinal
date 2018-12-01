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
        data.save(function(err, saved){
            if(err){
                res.status(500);
                res.json({status: 500, err})
            } else {
                res.json({status: 200, saved})
            }
        })
    } else {
        res.json({status: 404, message = "No ingreso datos"})
    }
};

user.getAll = function(req, res){
    model.find({}, function(err, users){
        if(err){
            res.status(500);
            res.json({status: 500, err });
        } else {
            res.json({status: 200, users});
        }
    })
}

user.get = function(req, res){
    model.findById({_id: req.params.id}, function(err, result){
        if(err){
            res.status(500);
            res.json({status: 500, err});
        } else {
            res.json({status: 200, result})
        }
    })
}

user.update = function(req, res){
    model.findByIdAndUpdate({_id: req.params.id}, function(err, old){
        if(err){
            res.status(500);
            res.json({status: 500, err});
        } else {
            res.json({status: 200, old})
        }
    })
}

user.delete = function(req, res){
    model.findByIdAndRemove({_id: req.params.id}, function(err, old){
        if(err){
            res.status(500);
            res.json({status: 500, err});
        } else {
            res.json({status: 200, old})
        }
    })
}

module.exports = model;