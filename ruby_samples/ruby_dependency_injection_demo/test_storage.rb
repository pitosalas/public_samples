class TestStorage
  def initialize filename
  end

  def all
    [Note.new('test', 'Should Show', 'true'), Note.new('test2', 'SHould note show', 'false')]
  end
end
