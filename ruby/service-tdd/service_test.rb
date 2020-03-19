require 'minitest/autorun'
require 'faraday'
require 'json'

# https://lostisland.github.io/faraday/usage/
# https://ruby-doc.org/stdlib-2.6.3/libdoc/json/rdoc/JSON.html
# http://registrar-prod-rhel6.unet.brandeis.edu/export/readme.html

class CapybaraTestCase < Minitest::Test
  describe "test registrar export endpoint" do
    it "returns success" do
      resp = Faraday.get("http://registrar-prod-rhel6.unet.brandeis.edu/export/export.json")
      assert resp.status == 200
    end
    it "returns json which looks right" do
      resp = Faraday.get("http://registrar-prod-rhel6.unet.brandeis.edu/export/export.json")
      begin
        body_json = JSON.parse('\"body\":' + resp.body, max_nesting: 2)
      rescue JSON::ParserError
        flunk "Error: Invalid JSON returned"
      end
    end

    it "returns json include type:instructor" do
      resp = Faraday.get("http://registrar-prod-rhel6.unet.brandeis.edu/export/export.json")
      begin
        body_json = JSON.parse('\"body\":' + resp.body, max_nesting: 2)
        assert body_json.include? {"type": "instructor"}
      rescue JSON::ParserError
        flunk "Error: Invalid JSON returned"
      end
    end
  end
end

