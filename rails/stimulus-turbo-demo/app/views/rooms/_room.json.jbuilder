json.extract! room, :id, :name, :references, :created_at, :updated_at
json.url room_url(room, format: :json)