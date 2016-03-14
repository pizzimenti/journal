$(document).ready(function() {
  $('.journal-form').submit(function(event) {
    event.preventDefault();
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new entry(title, body);
    $('#display').html('<p>Your entry has been created</p><h2>Title:'+title+'</h2><p>'+body+'</p>');
    debugger;
    $('#stats').html(
      '<p>Words:'+newEntry.wordCount()+
      '<br>'+
      '<p>Characters: '+newEntry.charCount()+
      '<p>Date Created: '+newEntry.dateCreated);
  })
})
