class CreateCourses < ActiveRecord::Migration[5.2]
  def change
    create_table :courses do |t|
      t.integer :number
      t.string :name
      t.string :desc
      t.string :prof

      t.timestamps
    end
  end
end
