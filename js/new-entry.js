function entry(title, body) {
  this.title = title;
  this.body = body;
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
