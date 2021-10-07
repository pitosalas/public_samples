require "test_helper"

class MoviesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @movie = movies(:one)
  end

  test "should get index" do
    get movies_url
    assert_response :success
  end

  test "should get new" do
    get new_movie_url
    assert_response :success
  end

  test "should create movie" do
    assert_difference('Movie.count') do
      post movies_url, params: { movie: { cast: @movie.cast, director: @movie.director, generes: @movie.generes, imdb_ib: @movie.imdb_ib, poster: @movie.poster, runtime: @movie.runtime, short_summary: @movie.short_summary, summary: @movie.summary, title: @movie.title, writer: @movie.writer, year: @movie.year, youtube: @movie.youtube } }
    end

    assert_redirected_to movie_url(Movie.last)
  end

  test "should show movie" do
    get movie_url(@movie)
    assert_response :success
  end

  test "should get edit" do
    get edit_movie_url(@movie)
    assert_response :success
  end

  test "should update movie" do
    patch movie_url(@movie), params: { movie: { cast: @movie.cast, director: @movie.director, generes: @movie.generes, imdb_ib: @movie.imdb_ib, poster: @movie.poster, runtime: @movie.runtime, short_summary: @movie.short_summary, summary: @movie.summary, title: @movie.title, writer: @movie.writer, year: @movie.year, youtube: @movie.youtube } }
    assert_redirected_to movie_url(@movie)
  end

  test "should destroy movie" do
    assert_difference('Movie.count', -1) do
      delete movie_url(@movie)
    end

    assert_redirected_to movies_url
  end
end
