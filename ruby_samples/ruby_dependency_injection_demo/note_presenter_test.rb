require 'minitest/autorun'
require_relative 'note_presenter_2'

class MockNote
  def pending?
    true
  end
end

class MockStorage
  def initialize(fake_file)
    if fake_file.class != String
      raise "Bad call to Mockstorage"
    end
  end

  def all
    [MockNote.new, MockNote.new, MockNote.new]
  end
end

describe "Check note presenter" do
  it "is true" do
    note_presenter = NotePresenter.new(MockStorage.new("fake file"))
    note_presenter.pending_notes.must_be_instance_of Array
    note_presenter.pending_notes.length.must_equal 3
  end
end
