# sequential.rb - from https://engineering.universe.com/introduction-to-concurrency-models-with-ruby-part-i-550d0dbb970
range = 0...10_000_000
number = 8_888_888
puts range.to_a.index(number)
