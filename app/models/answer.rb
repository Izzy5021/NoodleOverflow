class Answer < ApplicationRecord
    validates :author_id, :question_id, :body, presence: true 


    belongs_to :user,
    primary_key: :id, 
    foreign_key: :author_id,
    class_name: :User


    belongs_to :question,
    primary_key: :id, 
    foreign_key: :question_id,
    class_name: :Question

    has_many :votes, 
    primary_key: :id, 
    foreign_key: :answer_id, 
    class_name: :Vote 

     def created_at
         attributes['created_at'].strftime("%m/%d/%Y %I:%M%p")
    end
    
end
