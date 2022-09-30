class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.string :question
      t.string :answer

      t.timestamps
    end
  end
end
