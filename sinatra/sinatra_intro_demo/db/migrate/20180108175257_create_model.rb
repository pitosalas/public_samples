class CreateModel < ActiveRecord::Migration[5.1]
  def change
    create_table :models do |t|
      t.string :name
      t.string :color
    end
  end
end
