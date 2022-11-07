module ItemsHelper
  def category_title(item)
    cat = item.category_id
    @memo = {} if @memo.nil?
    unless @memo.has_key?(cat)
      cat_name = Category.find(cat)
      @memo[cat] = cat_name.title
    end
    @memo[cat]
  end
end
