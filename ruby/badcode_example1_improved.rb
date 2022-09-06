# simple calculator and also it counts to 10
# Names of editors: XXX YYY

class LessBad
  def prompt_for_user_input
    puts("I'm a calculator")
    puts("Enter a number")
    left_hand_side = gets.chomp.to_i
    puts("Enter an operator")
    operator = gets.chomp
    puts("Enter a number")
    right_hand_side = gets.chomp.to_i
    [left_hand_side, operator, right_hand_side]
  end

  def compute lhs, operator, rhs
    if "+-*/^".include? operator
      puts lhs, operator, rhs
      print("Your result is ")
      result = operator.to_sym.to_proc.call(lhs, rhs)
      puts result
    else
      puts "bad opeator"
    end
  end

  def count_to_10?
    puts("Want to count to 10? (y or n)")
    gets.chomp
    count_to_ten
  end

  def count_to_ten
    10.times do |x|
      puts x
      sleep 0.1
    end
    puts("Bye.")
  end
end

less_bad = LessBad.new
operator, lhs, rhs = less_bad.prompt_for_user_input
less_bad.compute(operator, lhs, rhs)
less_bad.count_to_10?
