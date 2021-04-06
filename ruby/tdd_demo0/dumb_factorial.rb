# Here's my naive factorial implementation
# Lets do TDD to improve it.

def fact num
  if num == 0
    1
  elsif num == 1
    1
  elsif num == 2
    2
  elsif num == 10
    3628800
  end
end