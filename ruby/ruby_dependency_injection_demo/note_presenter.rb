require_relative 'test_storage'
require_relative 'csv_storage'
class NotePresenter

  def initialize(what_to_use)
    @note_storage = what_to_use
  end

  def pending_notes
    notes = @note_storage.all
    notes.select { |n| n.pending? }
  end
end

puts NotePresenter.new(CSVStorage).pending_notes

# CSVStorage
# TestStorage
