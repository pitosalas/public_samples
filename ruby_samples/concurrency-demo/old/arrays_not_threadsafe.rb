# Demonstrate thar appending to an array in Ruby is not thread safe
# Because of GIL, it gives the correct answer with Ruby 2.5.0
# Without GIL, it gives the wrong answer with JRUBY!

array = []

100.times.map do
  Thread.new do
    1000.times do
      array << nil
    end
  end
end.each(&:join)

puts array.size
