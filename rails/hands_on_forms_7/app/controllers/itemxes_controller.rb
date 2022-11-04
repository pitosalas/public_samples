class ItemxesController < ApplicationController
  before_action :set_itemx, only: %i[ show edit update destroy ]

  # GET /itemxes or /itemxes.json
  def index
    @itemxes = Itemx.all
  end

  # GET /itemxes/1 or /itemxes/1.json
  def show
  end

  # GET /itemxes/new
  def new
    @itemx = Itemx.new
  end

  # GET /itemxes/1/edit
  def edit
  end

  # POST /itemxes or /itemxes.json
  def create
    @itemx = Itemx.new(itemx_params)

    respond_to do |format|
      if @itemx.save
        format.html { redirect_to itemx_url(@itemx), notice: "Itemx was successfully created." }
        format.json { render :show, status: :created, location: @itemx }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @itemx.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /itemxes/1 or /itemxes/1.json
  def update
    respond_to do |format|
      if @itemx.update(itemx_params)
        format.html { redirect_to itemx_url(@itemx), notice: "Itemx was successfully updated." }
        format.json { render :show, status: :ok, location: @itemx }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @itemx.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /itemxes/1 or /itemxes/1.json
  def destroy
    @itemx.destroy

    respond_to do |format|
      format.html { redirect_to itemxes_url, notice: "Itemx was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_itemx
      @itemx = Itemx.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def itemx_params
      params.require(:itemx).permit(:dropdown, :radiobuttons, :checkbox)
    end
end
