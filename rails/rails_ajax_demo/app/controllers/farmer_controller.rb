class FarmerController < ApplicationController
  def index
    @farmers = Farmer.all
  end

  def show
    @farmer = Farmer.find(params[:id])
    @cows = @farmer.cows
  end

  def edit
    @farmer = Farmer.all.sample
    @cows = @farmer.cows
  end

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

  private

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
