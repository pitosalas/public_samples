json.array!(@shoes) do |shoe|
  json.extract! shoe, :id, :name, :price
  json.url shoe_url(shoe, format: :json)
end
