class CreateRegistrations < ActiveRecord::Migration[6.1]
  def change
    create_table :registrations do |t|
      t.integer :human_id
      t.integer :event_id
      t.string :status
      t.string :comment

      t.timestamps
    end
  end
end
