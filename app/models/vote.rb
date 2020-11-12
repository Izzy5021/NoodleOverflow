class Vote < ApplicationRecord
     validates :user_id, :answer_id, :value, presence: true 

    belongs_to :answer,
    primary_key: :id, 
    foreign_key: :answer_id,
    class_name: :Answer

end
