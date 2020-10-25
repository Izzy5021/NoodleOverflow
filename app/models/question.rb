class Question < ApplicationRecord
    validates :title, :body, :author_id, presence: true 

    belongs_to :author,
    primary_key: :id, 
    foreign_key: :author_id,
    class_name: :User

    has_many :answers, 
    primary_key: :id, 
    foreign_key: :question_id, 
    class_name: :Answer 
end
