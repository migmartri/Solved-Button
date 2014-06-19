Discourse.TopicListItemView.reopen({
  _markSolved: function() {
    var session = Discourse.Session.current();
    var $topic = this.$();
    var originalCol = $topic.css('backgroundColor').toString();
    //
    // TODO: improve
    solved = this.get('content.is_solved') == true;
    if (solved) {
      var color = originalCol.toString().replace("rgba","").replace("rgb","").replace("(", "").replace(")", "").replace(" ","").split(",");
      // workaround for no background
      if ((color[0] == 0) && (color[1] == 0) && (color[2] == 0))
      {
          color = [255,255,255];
      }
      color[0] = Math.round(color[0] * 0.95);
      color[2] = Math.round(color[2] * 0.95);
      color = "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")";
      $topic
        .css('backgroundColor', color);
    }
  }.on('didInsertElement')
});
