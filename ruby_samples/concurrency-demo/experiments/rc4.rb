class Item
  class << self; attr_accessor :price end
  @price = 0
end

threads = (1..10).map do |i|
  Thread.new(i) do |i|
    puts "Thread #{i} #{Item.price}"
    sleep(2)
    item_price = Item.price # Reading value
    sleep(rand(0..2))
    item_price += 10        # Updating value
    sleep(rand(0..2))
    Item.price = item_price # Writing value
    puts Item.price
  end
end

threads.each(&:join)

puts "Item.price = #{Item.price}"
