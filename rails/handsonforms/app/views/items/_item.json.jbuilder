json.extract! item, :id, :title, :description, :owner, :category_id, :created_at, :updated_at
json.url item_url(item, format: :json)
