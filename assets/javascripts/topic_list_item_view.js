Discourse.TopicListItemView.reopen({
  _markSolved: function() {
    var session = Discourse.Session.current();
    var $topic = this.$();
    var originalCol = $topic.css('backgroundColor').toString();

    if (!!this.get('content.is_solved')) {
      if ($topic.is(":nth-child(odd)"))
        color = '#f0fff0';
      else
        color = '#eaf7ea';
      // use backgroundColor to avoid highlight changing the color
      $topic
        .css('backgroundColor', color);
    }
  }.on('didInsertElement')
});
