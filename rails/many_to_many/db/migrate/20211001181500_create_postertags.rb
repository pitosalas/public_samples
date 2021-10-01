class CreatePostertags < ActiveRecord::Migration[6.1]
  def change
    create_table :postertags do |t|
      t.references :tag
      t.references :poster

      t.timestamps
    end
  end
end
