class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :year
      t.string :summary
      t.string :short_summary
      t.string :genres
      t.string :imdb
      t.integer :runtime
      t.string :youtube
      t.string :poster
      t.string :director
      t.string :writers
      t.string :cast
      t.string :rating

      t.timestamps
    end
  end
end
