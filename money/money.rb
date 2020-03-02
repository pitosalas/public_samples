class Money
  attr_reader :amount, :currency

  # this means that 1 unit of curr1 has the same value as rate * 1 units of curr2
  def self.add_exchange_rate(curr1, curr2, rate)
    @exchange_rate_table = {} if @exchange_rate_table.nil?
    @exchange_rate_table[[curr1, curr2]] = rate
    @exchange_rate_table[[curr2, curr1]] = 1.0 / rate
    
  end

  def self.convert(amt, curr1, curr2)
    raise "Invalid exchange #{curr1}, #{curr2}" if @exchange_rate_table[[curr1, curr2]].nil?
    @exchange_rate_table[[curr1, curr2]] * amt
  end

  def initialize(amount, curr)
    @amount = amount
    @currency = curr
  end

  def +(other)
    if @currency == other.currency
      return Money.new(@amount + other.amount, @currency)
    end
    my_amount_in_new_currency = Money.convert(@amount, @currency, other.currency)
    Money.new(my_amount_in_new_currency + other.amount, other.currency)
  end

  def *(other)
    raise Exception, "Non-number multiply" unless other.class == Integer || other.class == Float
    Money.new(@amount * other, @currency)
  end

  def convert_to(new_currency)
    new_amount = Money.convert(@amount, @currency, new_currency)
    Money.new(new_amount, new_currency)
  end
end
