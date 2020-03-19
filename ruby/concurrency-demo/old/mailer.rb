class Mailer
  def self.deliver(&block)
    mail = MailBuilder.new(&block).mail
    mail.send_mail
  end

  class Mail
    attr_accessor :from, :to, :subject, :body

    def send_mail
      fib(30)
#      puts "#{from} => #{to} Re: #{subject} #{body}"
#      print "."
    end

    def fib(n)
      n < 2 ? n : fib(n - 1) + fib(n - 2)
    end
  end

  class MailBuilder
    attr_reader :mail

    def initialize(&block)
      @mail = Mail.new
      instance_eval(&block)
    end

    %w(from to subject body).each do |m|
      define_method(m) do |val|
        @mail.send("#{m}=", val)
      end
    end
  end
end
