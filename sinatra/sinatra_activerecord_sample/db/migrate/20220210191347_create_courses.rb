class CreateCourses < ActiveRecord::Migration[7.0]
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
