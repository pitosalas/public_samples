json.extract! category, :id, :title, :description, :created_at, :updated_at
json.url category_url(category, format: :json)
json.array [1,2,3]
