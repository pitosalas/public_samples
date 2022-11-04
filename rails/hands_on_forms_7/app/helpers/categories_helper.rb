module CategoriesHelper
  def category_select_collection
    Category.order(:title).map {|cat| [cat.title, cat.id]}
  end
end
