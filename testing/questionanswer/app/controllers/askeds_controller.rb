class AskedsController < ApplicationController
  before_action :set_asked, only: %i[show edit update destroy]

  # GET /askeds or /askeds.json
  def index
    @unanswered = Asked.unanswered
    @answered = Asked.answered
  end

  # GET /askeds/1 or /askeds/1.json
  def show
  end

  # GET /askeds/new
  def new
    @asked = Asked.new
  end

  # GET /askeds/1/edit
  def edit
  end

  # POST /askeds or /askeds.json
  def create
    @asked = Asked.new(asked_params)

    respond_to do |format|
      if @asked.save
        format.html { redirect_to asked_url(@asked), notice: "Asked was successfully created." }
        format.json { render :show, status: :created, location: @asked }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @asked.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /askeds/1 or /askeds/1.json
  def update
    respond_to do |format|
      if @asked.update(asked_params)
        format.html { redirect_to asked_url(@asked), notice: "Asked was successfully updated." }
        format.json { render :show, status: :ok, location: @asked }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @asked.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /askeds/1 or /askeds/1.json
  def destroy
    @asked.destroy

    respond_to do |format|
      format.html { redirect_to askeds_url, notice: "Asked was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private

    # Use callbacks to share common setup or constraints between actions.
  def set_asked
    @asked = Asked.find(params[:id])
  end

    # Only allow a list of trusted parameters through.
  def asked_params
    params.require(:asked).permit(:question, :answer)
  end
end
