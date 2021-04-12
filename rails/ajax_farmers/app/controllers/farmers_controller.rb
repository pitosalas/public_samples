class FarmersController < ApplicationController
  before_action :set_farmer, only: [:show, :edit, :update, :destroy]

  # GET /farmers
  # GET /farmers.json
  def index
    @farmers = Farmer.all
  end

  # GET /farmers/1
  # GET /farmers/1.json
  def show
    @cows = @farmer.cows
  end

  # GET /farmers/new
  def new
    @farmer = Farmer.new
    @cows = @farmer.cows
  end

  # GET /farmers/1/edit
  def edit
    @cows = @farmer.cows
  end

  # POST /farmers
  # POST /farmers.json
  def create
    @farmer = Farmer.new(farmer_params)

    respond_to do |format|
      if @farmer.save
        format.html { redirect_to @farmer, notice: 'Farmer was successfully created.' }
        format.json { render :show, status: :created, location: @farmer }
      else
        format.html { render :new }
        format.json { render json: @farmer.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /farmers/1
  # PATCH/PUT /farmers/1.json
  def update
    @farmer = Farmer.find(params[:id])
    case which_button
    when :update
      puts "updating farmer"
      @farmer.update(params.require(:farmer).permit(:name))
      respond_to do |format|
        format.html { redirect_to @farmer, notice: 'Farmer was successfully updated.' }
        format.json { render :show, status: :ok, location: @farmer }
        format.js { }
      end
    when :new_cow
      respond_to do |format|
        format.js { }
      end
    when :add_cow
      puts "**** add cow in farmer controller"
      @farmer.cows.create(name: params[:name])
      respond_to do |format|
        format.html { redirect_to @farmer, notice: 'Cow was successfully created.' }
      end
    end
  end

  # DELETE /farmers/1
  # DELETE /farmers/1.json
  def destroy
    @farmer.destroy
    respond_to do |format|
      format.html { redirect_to farmers_url, notice: 'Farmer was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_farmer
      @farmer = Farmer.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def farmer_params
      params.require(:farmer).permit(:name)
    end

    def which_button
    if params[:commit] == "update farmer"
      :update
    elsif params[:commit] == "new cow"
      :new_cow
    elsif params[:commit] == "add cow"
      :add_cow
    end
  end  
end
