COUNT = 100
CPU_WORK = 5
THREADS = 5

def starline
  puts "*** running #{File.basename($PROGRAM_NAME)}#(#{Process.pid}) ****"
end

def setup label
  puts "\n*** Running \"#{label}\" *** (COUNT=#{COUNT}. CPU_WORK=#{CPU_WORK}) -> User System Total (Elapsed)"
end

def teardown
  puts "\n" * 2
end
