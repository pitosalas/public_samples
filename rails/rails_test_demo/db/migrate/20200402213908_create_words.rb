class CreateWords < ActiveRecord::Migration[6.0]
  def change
    create_table :words do |t|
      t.string :eng
      t.string :ned

      t.timestamps
    end
  end
end
