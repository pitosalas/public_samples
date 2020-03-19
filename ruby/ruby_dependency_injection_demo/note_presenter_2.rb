require_relative 'csv_storage'
require_relative 'test_storage'

class NotePresenter
  def initialize(storage)
    @note_storage = storage
  end

  def pending_notes
    notes = @note_storage.all
    notes.select { |n| n.pending? }
  end
end

puts NotePresenter.new(CSVStorage.new("notes.csv")).pending_notes