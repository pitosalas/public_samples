# simple calculator and also it counts to 10
# Names of editors: XXX YYY

class BadCode
  def method1
    firstthing = "I'm a calculator"
    string22 = "im never used"
    s2 = "im also never used"
    s3 = method3

    puts(firstthing)
    puts("Enter a number")
    first = gets.chomp.to_i
    puts("Enter an operator")
    second = gets.chomp
    puts("Enter a number")
    third = gets.chomp.to_i
    print("Your result is ")
    if second == "+"
      fourth = first + third
      puts(fourth)
    end
    if second == "-"

      fifth = first - third
      puts(fifth)
    end
    if second == "/"
      sixth = first / third
      puts(sixth)
    end
    if second == "*"
      seventh = first**third
      puts(seventh)
    end
    if second == "^"

      eighth = third ^ first
      puts(eighth)
    end
    puts("Want to count to 10? (y or n)")
    word = gets.chomp
    if word == "y"
      method2
    end
    if word == "n"
      string = "too bad"
      puts(string)
      method2
    else
      method2
    end
  end

  def method2
    puts("1")
    sleep(1)
    puts("2")
    sleep(1)
    puts("3")

    sleep(1)
    puts("4")
    sleep(1)
    puts("5")
    sleep(1)
    puts("6")

    sleep(1)
    puts("7")
    sleep(1)
    puts("8")

    sleep(1)
    puts("9")
    sleep(1)

    puts("10")
    sleep(1)
    puts("Bye.")
  end

  def method3
    string1 = "i never get used so you wont see me anyway"
  end

  def method5(_a, _v)
    i = 1..100
    puts i * 3
  end
end

badcode = BadCode.new
badcode.method1
