class ChangeColumnNames < ActiveRecord::Migration[5.2]
  def change
    remove_index :answers, :answer_author_id 
    rename_column :answers, :answer_author_id, :author_id 
    rename_column :answers, :answer_body, :body 
    add_index :answers, :author_id 
  end
end
