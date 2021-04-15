class Item < ApplicationRecord
  belongs_to :category
  has_many :comments
  validates_associated :comments
  validates :title, :description, :owner, presence: true
  
  # all_any: "all" | "any"
  # cat: 0 | cat_id
  # title: nil | search title field

  def self.do_item_search(searchtitle: nil, catid: nil, all_any: nil, match_no: nil)
    whereclause = []
    args = []
    and_or_or = all_any == 'all' ? 'and' : 'or'
    unless catid.nil? || catid == 0
      whereclause << 'category_id = ?' << and_or_or
      args << catid
    end
    unless searchtitle.nil?
      whereclause << 'title like ?' << and_or_or
      args << "%#{searchtitle}%"
    end
    if whereclause == []
      Item.all
    else
      Item.where([whereclause[0..-2].join(' ')] + args)
    end
  end
end
