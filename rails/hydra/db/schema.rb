# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_07_004222) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "films", force: :cascade do |t|
    t.string "imdb_title_id"
    t.string "title"
    t.string "original_title"
    t.string "year"
    t.string "date_published"
    t.string "genre"
    t.string "duration"
    t.string "country"
    t.string "language"
    t.string "director"
    t.string "writer"
    t.string "production_company"
    t.string "actors"
    t.string "description", default: "n/a"
    t.string "avg_vote"
    t.string "votes"
    t.string "budget"
    t.string "usa_gross_income"
    t.string "worlwide_gross_income"
    t.string "metascore"
    t.string "reviews_from_users", default: "n/a"
    t.string "reviews_from_critics", default: "n/a"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "movies", force: :cascade do |t|
    t.string "title"
    t.integer "year"
    t.string "summary"
    t.string "short_summary"
    t.string "genres"
    t.string "imdb"
    t.integer "runtime"
    t.string "youtube"
    t.string "poster"
    t.string "director"
    t.string "writers"
    t.string "cast"
    t.string "rating"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
