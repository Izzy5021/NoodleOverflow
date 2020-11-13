class AddUserNameAndIndexToVoteTable < ActiveRecord::Migration[5.2]
  def change
    add_column :answers, :username, :string, null: false 
    add_column :questions, :username, :string, null: false 
    add_index :votes, [:user_id, :answer_id], unique: true
  end
end
