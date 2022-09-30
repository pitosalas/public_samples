require 'uri'
require 'net/http'
require 'openssl'
require 'json'

class Language
  def detect the_text
    url = URI("https://google-translate1.p.rapidapi.com/language/translate/v2/detect")
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    request = Net::HTTP::Post.new(url)
    request["content-type"] = 'application/x-www-form-urlencoded'
    request["Accept-Encoding"] = 'application/gzip'
    request["X-RapidAPI-Key"] = 'cb2fdfce7fmsh4a228d63b783c79p130fe2jsnaed1b670bbd5'
    request["X-RapidAPI-Host"] = 'google-translate1.p.rapidapi.com'
    request.body = "q=g#{the_text}"
    response = http.request(request)
    @result = JSON.parse(response.read_body)
  end

  def language
    @result["data"]["detections"][0][0]["language"]
  end
end
