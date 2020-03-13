json.extract! course, :id, :number, :name, :desc, :prof, :created_at, :updated_at
json.url course_url(course, format: :json)
