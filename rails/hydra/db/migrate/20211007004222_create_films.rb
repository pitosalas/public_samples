class CreateFilms < ActiveRecord::Migration[6.1]
  def change
    create_table :films do |t|
      t.string :imdb_title_id
      t.string :title
      t.string :original_title
      t.string :year
      t.string :date_published
      t.string :genre
      t.string :duration
      t.string :country
      t.string :language
      t.string :director
      t.string :writer
      t.string :production_company
      t.string :actors
      t.string :description, default: "n/a"
      t.string :avg_vote
      t.string :votes
      t.string :budget
      t.string :usa_gross_income
      t.string :worlwide_gross_income
      t.string :metascore
      t.string :reviews_from_users, default: "n/a"
      t.string :reviews_from_critics, default: "n/a"

      t.timestamps
    end
  end
end
