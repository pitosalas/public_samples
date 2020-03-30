class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.integer :person_id
      t.integer :hashtag_id
      t.string :status
      t.string :text
    end
  end
end
