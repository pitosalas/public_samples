class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles do |t|
      t.string :name
      t.string :country
      t.string :city

      t.timestamps
    end
  end
end
