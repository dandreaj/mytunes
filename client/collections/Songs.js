// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  initialize: function() {
    this.getData();
  },


  getData: function() {
    var that = this;
    $.ajax({
      url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs',
      type: 'GET',
      data: '',
      contentType: 'application/json',
      success: function (data) {
        that.add(data.results);
        that.trigger('dataLoad');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('Failed to send message', data);
      }
    });
  }
  // url: 'http://parse.sfm8.hackreactor.com/mytunes/classes/songs'

});
