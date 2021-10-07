require "application_system_test_case"

class MoviesTest < ApplicationSystemTestCase
  setup do
    @movie = movies(:one)
  end

  test "visiting the index" do
    visit movies_url
    assert_selector "h1", text: "Movies"
  end

  test "creating a Movie" do
    visit movies_url
    click_on "New Movie"

    fill_in "Cast", with: @movie.cast
    fill_in "Director", with: @movie.director
    fill_in "Generes", with: @movie.generes
    fill_in "Imdb ib", with: @movie.imdb_ib
    fill_in "Poster", with: @movie.poster
    fill_in "Runtime", with: @movie.runtime
    fill_in "Short summary", with: @movie.short_summary
    fill_in "Summary", with: @movie.summary
    fill_in "Title", with: @movie.title
    fill_in "Writer", with: @movie.writer
    fill_in "Year", with: @movie.year
    fill_in "Youtube", with: @movie.youtube
    click_on "Create Movie"

    assert_text "Movie was successfully created"
    click_on "Back"
  end

  test "updating a Movie" do
    visit movies_url
    click_on "Edit", match: :first

    fill_in "Cast", with: @movie.cast
    fill_in "Director", with: @movie.director
    fill_in "Generes", with: @movie.generes
    fill_in "Imdb ib", with: @movie.imdb_ib
    fill_in "Poster", with: @movie.poster
    fill_in "Runtime", with: @movie.runtime
    fill_in "Short summary", with: @movie.short_summary
    fill_in "Summary", with: @movie.summary
    fill_in "Title", with: @movie.title
    fill_in "Writer", with: @movie.writer
    fill_in "Year", with: @movie.year
    fill_in "Youtube", with: @movie.youtube
    click_on "Update Movie"

    assert_text "Movie was successfully updated"
    click_on "Back"
  end

  test "destroying a Movie" do
    visit movies_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Movie was successfully destroyed"
  end
end
