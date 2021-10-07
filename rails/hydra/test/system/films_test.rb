require "application_system_test_case"

class FilmsTest < ApplicationSystemTestCase
  setup do
    @film = films(:one)
  end

  test "visiting the index" do
    visit films_url
    assert_selector "h1", text: "Films"
  end

  test "creating a Film" do
    visit films_url
    click_on "New Film"

    fill_in "Actors", with: @film.actors
    fill_in "Avg vote", with: @film.avg_vote
    fill_in "Budget", with: @film.budget
    fill_in "Country", with: @film.country
    fill_in "Date published", with: @film.date_published
    fill_in "Description", with: @film.description
    fill_in "Director", with: @film.director
    fill_in "Duration", with: @film.duration
    fill_in "Genre", with: @film.genre
    fill_in "Imdb title", with: @film.imdb_title_id
    fill_in "Language", with: @film.language
    fill_in "Metascore", with: @film.metascore
    fill_in "Original title", with: @film.original_title
    fill_in "Production company", with: @film.production_company
    fill_in "Reviews from critics", with: @film.reviews_from_critics
    fill_in "Reviews from users", with: @film.reviews_from_users
    fill_in "Title", with: @film.title
    fill_in "Usa gross income", with: @film.usa_gross_income
    fill_in "Votes", with: @film.votes
    fill_in "Worlwide gross income", with: @film.worlwide_gross_income
    fill_in "Writer", with: @film.writer
    fill_in "Year", with: @film.year
    click_on "Create Film"

    assert_text "Film was successfully created"
    click_on "Back"
  end

  test "updating a Film" do
    visit films_url
    click_on "Edit", match: :first

    fill_in "Actors", with: @film.actors
    fill_in "Avg vote", with: @film.avg_vote
    fill_in "Budget", with: @film.budget
    fill_in "Country", with: @film.country
    fill_in "Date published", with: @film.date_published
    fill_in "Description", with: @film.description
    fill_in "Director", with: @film.director
    fill_in "Duration", with: @film.duration
    fill_in "Genre", with: @film.genre
    fill_in "Imdb title", with: @film.imdb_title_id
    fill_in "Language", with: @film.language
    fill_in "Metascore", with: @film.metascore
    fill_in "Original title", with: @film.original_title
    fill_in "Production company", with: @film.production_company
    fill_in "Reviews from critics", with: @film.reviews_from_critics
    fill_in "Reviews from users", with: @film.reviews_from_users
    fill_in "Title", with: @film.title
    fill_in "Usa gross income", with: @film.usa_gross_income
    fill_in "Votes", with: @film.votes
    fill_in "Worlwide gross income", with: @film.worlwide_gross_income
    fill_in "Writer", with: @film.writer
    fill_in "Year", with: @film.year
    click_on "Update Film"

    assert_text "Film was successfully updated"
    click_on "Back"
  end

  test "destroying a Film" do
    visit films_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Film was successfully destroyed"
  end
end
