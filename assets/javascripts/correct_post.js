Discourse.PostMenuView.reopen({
  shouldRerenderCorrectButton: Discourse.View.renderIfChanged("post.topic.correct_post_id"),

  /*
  * Method required for Discourse 0.9.9.8+ compatibility.
  * Breaking changes here: https://github.com/discourse/discourse/commit/b749585aa79056f674294f4b4b6dd7e66ad9c2e7
  * Ideally in next releases we should use the Button system to integrate it with the menu using awesome-font
  */

  buttonForCorrect: function(post){
    this.renderCorrect(post, this.buffer);
  },
  renderCorrect: function(post, buffer) {
    var correctPostId = post.get("topic.correct_post_id");

    if (correctPostId && post.get("id") === parseInt(correctPostId, 10)) {
      buffer.push("<div id='correct-text'>This post was marked as correct</div>");
    } else {
      if (post.get("topic.details.can_edit")) {
        buffer.push('<button title="Mark this post as solving your initial question" data-action="correct">Mark as correct</button>');
      }
    }
  },

  clickCorrect: function() {
    this.get('controller').markSolved(this.get("post"));
    this.set("post.topic.correct_post_id", this.get("post.id"));
  }
});
