require 'pusher'

Pusher.app_id = '69892'
Pusher.key = '5e157d0652d97d9fa6d4'
Pusher.secret = '791f84738e2d63437947'

class CommentsController < ApplicationController
  def index
    @item = Item.find(params[:item_id])
    @comments = @item.comments
  end

  def show
    @item = Item.find(params[:item_id])
    @comment = Comment.find(params[:id])
  end

  # GET /comments/new
  def new
    @item = Item.find(params[:item_id])
    @comment = @item.comments.new
  end

  # GET /comments/1/edit
  def edit
    @item = Item.find(params[:item_id])
    @comment = Comment.find(params[:id])
  end

  # POST /comments
  # POST /comments.json
  def create
    @item = Item.find(params[:item_id])
    @comment = @item.comments.new(comment_params)

    respond_to do |format|
      if @comment.save
        push_count(@item.id, @item.comments.count)
        format.html { redirect_to @item, notice: 'Comment was successfully created.' }
        format.json { render :show, status: :created, location: @comment }
      else
        format.html { render :new }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /comments/1
  # PATCH/PUT /comments/1.json
  def update
    @item = Item.find(params[:item_id])
    @comment = @item.comments.new(comment_params)
    respond_to do |format|
      push_count(@item.id, @item.comments.count)
      if @comment.update(comment_params)
        format.html { redirect_to [@item, @comment], notice: 'Comment was successfully updated.' }
        format.json { render :show, status: :ok, location: @comment }
      else
        format.html { render :edit }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /comments/1
  # DELETE /comments/1.json
  def destroy
    @item = Item.find(params[:item_id])
    @comment = Comment.find(params[:id])
    @comment.destroy
    respond_to do |format|
      format.html { redirect_to [@item, @comment], notice: 'Comment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Never trust parameters from the scary internet, only allow the white list through.
  def comment_params
    params.require(:comment).permit(:from, :message, :item_id)
  end

  def push_count(item_id, count)
    Pusher.trigger('formdemo_channel',
                   'comment_event', item_id: item_id, count: count)
  end
end
