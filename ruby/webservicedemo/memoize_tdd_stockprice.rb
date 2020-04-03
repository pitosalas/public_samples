require 'typhoeus'
require 'minitest/autorun'
require 'byebug'
require 'awesome_print'
require 'json'

# This code sample illustrates using an API, memoizing results, and writing unit tests.

class SecurityBase
  QUANDL_URL = "https://www.quandl.com/api/v3/datasets/WIKI/%s/data.json?order=asc&exclude_column_names=true&limit=1&column_index=4&rows=1&order=desc".freeze

  def self.price(secname)
    json = memoize_json(secname)
    json["dataset_data"]["data"][0][1]
  end

  def self.memoize_json(secname)
    @json_cache = {} if @json_cache.nil?
    json = @json_cache[secname]
    if json.nil?
      result = Typhoeus.get(QUANDL_URL % secname)
      result_hash = JSON.parse(result.response_body)
      @json_cache[secname] = result_hash
    end
    @json_cache[secname]
  end
end

describe SecurityBase do
  it "Can return the price of google" do
    assert SecurityBase.price("GOOG") > 0
  end

  it "Returns different prices for different stocks" do
    assert (SecurityBase.price("GOOG") - SecurityBase.price("AAPL")) != 0
  end
end
