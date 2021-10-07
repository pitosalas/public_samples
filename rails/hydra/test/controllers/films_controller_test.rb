require "test_helper"

class FilmsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @film = films(:one)
  end

  test "should get index" do
    get films_url
    assert_response :success
  end

  test "should get new" do
    get new_film_url
    assert_response :success
  end

  test "should create film" do
    assert_difference('Film.count') do
      post films_url, params: { film: { actors: @film.actors, avg_vote: @film.avg_vote, budget: @film.budget, country: @film.country, date_published: @film.date_published, description: @film.description, director: @film.director, duration: @film.duration, genre: @film.genre, imdb_title_id: @film.imdb_title_id, language: @film.language, metascore: @film.metascore, original_title: @film.original_title, production_company: @film.production_company, reviews_from_critics: @film.reviews_from_critics, reviews_from_users: @film.reviews_from_users, title: @film.title, usa_gross_income: @film.usa_gross_income, votes: @film.votes, worlwide_gross_income: @film.worlwide_gross_income, writer: @film.writer, year: @film.year } }
    end

    assert_redirected_to film_url(Film.last)
  end

  test "should show film" do
    get film_url(@film)
    assert_response :success
  end

  test "should get edit" do
    get edit_film_url(@film)
    assert_response :success
  end

  test "should update film" do
    patch film_url(@film), params: { film: { actors: @film.actors, avg_vote: @film.avg_vote, budget: @film.budget, country: @film.country, date_published: @film.date_published, description: @film.description, director: @film.director, duration: @film.duration, genre: @film.genre, imdb_title_id: @film.imdb_title_id, language: @film.language, metascore: @film.metascore, original_title: @film.original_title, production_company: @film.production_company, reviews_from_critics: @film.reviews_from_critics, reviews_from_users: @film.reviews_from_users, title: @film.title, usa_gross_income: @film.usa_gross_income, votes: @film.votes, worlwide_gross_income: @film.worlwide_gross_income, writer: @film.writer, year: @film.year } }
    assert_redirected_to film_url(@film)
  end

  test "should destroy film" do
    assert_difference('Film.count', -1) do
      delete film_url(@film)
    end

    assert_redirected_to films_url
  end
end
