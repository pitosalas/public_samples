class CreateItemxes < ActiveRecord::Migration[7.0]
  def change
    create_table :itemxes do |t|
      t.text :dropdown
      t.text :radiobuttons
      t.boolean :checkbox

      t.timestamps
    end
  end
end
