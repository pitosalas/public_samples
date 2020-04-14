COUNT = 3
CPU_WORK = 39
THREADS = 50

def starline
  puts "*** #{$PROGRAM_NAME}(#{Process.pid}) *********************************************"
end

def setup label
  starline
  puts "*** Running #{label} *** (COUNT=#{COUNT}. CPU_WORK=#{CPU_WORK}) -> User System Total (Elapsed)"
end

def teardown
  puts
  starline
  puts "\n" * 2
end
