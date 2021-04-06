class ShoesController < ApplicationController
  before_action :set_shoe, only: [:show, :edit, :update, :destroy]

  # GET /shoes
  # GET /shoes.json
  def index
    @shoes = Shoe.all
  end

  # GET /shoes/1
  # GET /shoes/1.json
  def show
  end

  # GET /shoes/new
  def new
    @shoe = Shoe.new
  end

  # GET /shoes/1/edit
  def edit
  end

  # POST /shoes
  # POST /shoes.json
  def create
    @shoe = Shoe.new(shoe_params)

    respond_to do |format|
      if @shoe.save
        format.html { redirect_to @shoe, notice: 'Shoe was successfully created.' }
        format.json { render action: 'show', status: :created, location: @shoe }
      else
        format.html { render action: 'new' }
        format.json { render json: @shoe.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /shoes/1
  # PATCH/PUT /shoes/1.json
  def update
    respond_to do |format|
      if @shoe.update(shoe_params)
        format.html { redirect_to @shoe, notice: 'Shoe was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @shoe.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /shoes/1
  # DELETE /shoes/1.json
  def destroy
    @shoe.destroy
    respond_to do |format|
      format.html { redirect_to shoes_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_shoe
      @shoe = Shoe.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def shoe_params
      params.require(:shoe).permit(:name, :price)
    end
end
