(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function() {
  $('.journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new entry(title, body);
    $('#display').html('<p>Your entry has been created</p><h2>Title:'+title+'</h2><p>'+body+'</p>');
    $('#stats').html('<p>Words:'+newEntry.wordCount())
  })
})

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

},{}]},{},[1]);
