class CreateMusics < ActiveRecord::Migration[6.1]
  def change
    create_table :musics do |t|
      t.string :title
      t.boolean :rock
      t.boolean :classical
      t.boolean :jazz

      t.timestamps
    end
  end
end
