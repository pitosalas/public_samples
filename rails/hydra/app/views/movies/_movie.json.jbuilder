json.extract! movie, :id, :title, :year, :summary, :short_summary, :generes, :imdb_ib, :runtime, :youtube, :poster, :director, :writer, :cast, :created_at, :updated_at
json.url movie_url(movie, format: :json)
