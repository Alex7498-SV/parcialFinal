const mongoose = require('mongoose');

const user = new mongoose.Schema({
    nickname = {
        type: String,
        unique: true,
        required: true
   },
   Cfav = {
       type: String,
       required: true
   },
   Aingreso = {
       type: Date,
       required: true
   }
});

module.exports = mongoose.model('usuer', user);