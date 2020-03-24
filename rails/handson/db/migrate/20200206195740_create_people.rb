class CreatePeople < ActiveRecord::Migration[6.0]
  def change
    create_table :people do |t|
      t.string :name
      t.date :dob
      t.string :gender
      t.string :zipcode

      t.timestamps
    end
  end
end
