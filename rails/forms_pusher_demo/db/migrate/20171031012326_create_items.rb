class CreateItems < ActiveRecord::Migration[5.1]
  def change
    create_table :items do |t|
      t.string :title
      t.string :description
      t.text :owner
      t.integer :category_id

      t.timestamps
    end
  end
end
