class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :edit, :update, :destroy]

  def search
    @categories = Category.all.sort_by(&:title).map { |s| [s.title, s.id] }
  end

  def do_search
    match_parm = params.fetch(:match_no_match)
    all_any_parm = params.fetch(:all_any)
    title_parm = params.fetch(:title)
    cat_id_parm = params.fetch(:category_id)
    @items = Item.do_item_search(
      searchtitle: title_parm,
      catid: cat_id_parm.to_i,
      all_any: all_any_parm,
      match_no: match_parm)

    respond_to do |format|
      format.js
    end
  end

  # GET /items
  # GET /items.json
  def index
    @items = Item.all
  end

  # GET /items/1
  # GET /items/1.json
  def show
    @category = Category.find(@item.category_id)
    @comments = @item.comments
  end

  # GET /items/new
  def new
    new_action_context
  end

  # GET /items/1/edit
  def edit
    @category = @item.category
    @categories = Category.all.sort_by(&:title).map { |s| [s.title, s.id] }
  end

  # POST /items
  # POST /items.json
  def create
    @item = Item.new(item_params)
    respond_to do |format|
      if @item.save
        format.html { redirect_to @item, notice: 'Item was successfully created.' }
        format.json { render :show, status: :created, location: @item }
      else
        new_action_context
        byebug
        format.html { render :new }
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /items/1
  # PATCH/PUT /items/1.json
  def update
    respond_to do |format|
      if @item.update(item_params)
        format.html { redirect_to @item, notice: 'Item was successfully updated.' }
        format.json { render :show, status: :ok, location: @item }
      else
        format.html { render :edit, notice: @item.errors }
        format.json { render json: @item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /items/1
  # DELETE /items/1.json
  def destroy
    @item.destroy
    respond_to do |format|
      format.html { redirect_to items_url, notice: 'Item was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_item
    @item = Item.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def item_params
    params.require(:item).permit(:title, :description, :owner, :category_id, :category)
  end

  def new_action_context
    @item = Item.new
    @category = Category.find(1) # Set detault
    @item.category = @category
    @categories = Category.all.sort_by(&:title).map { |s| [s.title, s.id] }
  end
end
