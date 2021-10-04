class CreateStatuses < ActiveRecord::Migration[5.2]
  def change
    create_table :statuses do |t|
      t.string :name
      t.boolean :active, default: false

      t.timestamps
    end
  end
end
