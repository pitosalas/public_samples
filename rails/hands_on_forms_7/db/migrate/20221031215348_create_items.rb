class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :title
      t.string :description
      t.text :owner
      t.integer :category_id
      t.boolean :available
      t.text :condition
      t.timestamps
    end
  end
end
