require 'typhoeus'
require 'xmlsimple'
require 'pry-byebug'
require 'awesome_print'
require 'json'
require 'csv'

# Referece for the Quandli API: https://www.quandl.com/docs/api#basic-data-request
# Example illustrates getting data out of an api, as json, and working with it

result = Typhoeus.get("https://www.quandl.com/api/v3/datasets/WIKI/AMZN/data.json?order=asc&exclude_column_names=true&start_date=2012-01-01&end_date=2017-01-01&column_index=4&collapse=annual&transformation=rdiff")

puts "\n**** RAW JSON"
ap result.response_body

puts "\n*** Converted to a hash"
stock_price = JSON.parse(result.response_body)
ap stock_price

puts "\n*** Converted to a CSV (for Matlab, Excel etc.)"
stock_price_array = stock_price["dataset_data"]["data"]
csv_string = CSV.generate do |csv|
  csv << ["date", "price"]
  stock_price_array.each do |key, value|
    csv << [key, value]
  end
end
puts csv_string
