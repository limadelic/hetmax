// Generated by CoffeeScript 1.5.0
(function() {
  var ObjectId, Schema;

  global.mongoose = require('mongoose');

  Schema = mongoose.Schema;

  ObjectId = Schema.ObjectId;

  mongoose.connect("mongodb://" + settings.db + "/fmp");

  mongoose.connection.on('open', function() {
    return console.log('connected to db');
  });

}).call(this);
