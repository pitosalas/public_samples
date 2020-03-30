class CreateDepartment < ActiveRecord::Migration[5.1]
  def change
    create_table :departments do |t|
      t.string :name
      t.integer :company_id
    end
  end
end
