require 'csv'
require_relative 'note'

class CSVStorage
  def initialize(file)
    @csv = CSV.open(file, headers: true)
  end

  def all
    @csv.read.to_a.map { |row| Note.new(row[0], row[1], row[2])}
  end
end
