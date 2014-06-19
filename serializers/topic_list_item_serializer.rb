::TopicListItemSerializer

class ::TopicListItemSerializer
  attributes :is_solved

  def is_solved
    !object.correct_post_id.nil?
  end
end
