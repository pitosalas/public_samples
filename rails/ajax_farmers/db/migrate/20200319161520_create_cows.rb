class CreateCows < ActiveRecord::Migration[6.0]
  def change
    create_table :cows do |t|
      t.string :name
      t.belongs_to :farmer, null: false, foreign_key: true
      t.timestamps
    end
  end
end
