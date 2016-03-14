var moment = require('moment');

function entry(title, body) {
  this.title = title;
  this.body = body;
  this.dateCreated = moment().format('MMMM Do YYYY, h:mm a');
}

entry.prototype.wordCount = function() {
  var bodyArray = this.body.split(" ");
  var bodyWordCount = bodyArray.length;
  return bodyWordCount;
}

entry.prototype.charCount = function() {
  var bodyArray = this.body.split("");
  var bodyCharCount = bodyArray.length;
  return bodyCharCount;
}

entry.prototype.getDate = function() {
  return this.dateCreated();
}
