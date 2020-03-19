require "redis"
require "JSON"
require "curb"

redis = Redis.new(url: "redis://h:p70fd5b40d8871`23fa8532f9c670f5b353f53368257aaa99cdd6828b8b03882f4@ec2-3-209-60-144.compute-1.amazonaws.com:24729")

# Redis values are text. To store a hash, convert it to json first
redis.set("pito", {fn: "Pito", ln: "Salas"}.to_json)
jp = JSON.parse(redis.get("pito"))
pp jp

# Create a very large value and retrieve it
result = Curl.get("www.brandeis.edu")
redis.set("brandeis.html", result.body)
bhtml = redis.get "brandeis.html"
pp bhtml.size

# Sets
redis.zadd("sortedSet", 1, "one")
redis.zadd("sortedSet", 1, "ace")
redis.zadd("sortedSet", 1, "zoo")
pp redis.zrange("sortedSet", 0, -1)

