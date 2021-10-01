class CreatePosters < ActiveRecord::Migration[6.1]
  def change
    create_table :posters do |t|
      t.string :name
      t.references :user

      t.timestamps
    end
  end
end
