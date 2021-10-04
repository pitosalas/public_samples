class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.references :user, foreign_key: true
      t.text :content
      t.boolean :read, default: false

      t.timestamps
    end
  end
end
