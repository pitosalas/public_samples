require 'celluloid/current'
require 'logger'

class MailWorker
  include Celluloid

  def run(loadtype, scale)
    Worker.new.run(loadtype, scale)
  end
end

class Cell
  def run(loadtype, scale, count)
    mailer_pool = MailWorker.pool(size: 10)

    count.times do
      mailer_pool.run(loadtype, scale)
    end
    self
  end

  def cleanup
  end
end
