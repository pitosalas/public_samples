json.extract! profile, :id, :name, :country, :state, :city, :created_at, :updated_at
json.url profile_url(profile, format: :json)
