class CreateHumen < ActiveRecord::Migration[6.1]
  def change
    create_table :humen do |t|
      t.string :name
      t.date :dob
      t.string :gender
      t.string :zipcode

      t.timestamps
    end
  end
end
