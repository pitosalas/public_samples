class CreateRegistrations < ActiveRecord::Migration[6.0]
  def change
    create_table :registrations do |t|
      t.integer :person_id
      t.integer :event_id

      t.timestamps
    end
  end
end
