class AnswersController < ApplicationController
  # GET /answers or /answers.json
  def index
    @question = Question.find(params[:question_id])
    @answers = @question.answers
  end

  # GET /answers/1 or /answers/1.json
  def show
    @answer = Answer.find(params[:id])
    @question = @answer.question
  end

  # GET /answers/new
  def new
    @question = Question.find(params[:question_id])
    @answer = @question.answers.new
  end

  # GET /answers/1/edit
  def edit
    @answer = Answer.find(params[:id])
    @question = @answer.question
  end

  # POST /answers or /answers.json
  def create
    @question = Question.find(params[:question_id])
    @answer = @question.answers.new(answer_params)

    respond_to do |format|
      if @answer.save
        format.html { redirect_to question_answer_url(@question, @answer), notice: "Answer was successfully created." }
        format.json { render :show, status: :created, location: @answer }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @answer.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /answers/1 or /answers/1.json
  def update
    @question = Question.find(params[:question_id])
    @answer = @question.answers.new(answer_params)
    respond_to do |format|
      if @answer.update(answer_params)
        format.html { redirect_to question_answer_url(@question, @answer), notice: "Answer was successfully updated." }
        format.json { render :show, status: :ok, location: @answer }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @answer.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /answers/1 or /answers/1.json
  def destroy
    puts "**************************"
    @question = Question.find(params[:question_id])
    @answer = Answer.find(params[:id])
    respond_to do |format|
      if !@answer.comments.empty?
        format.html { redirect_to questions_url(@question), notice: "First delete all the comments" }
      elsif @answer.destroy
        format.html { redirect_to questions_url(@question), notice: "Answer was successfully destroyed." }
      else
        format.html { redirect_to questions_url(@question), notice: "Answer could not be destroyed." }
      end
      format.json { head :no_content }
    end
  end

  private

    # Only allow a list of trusted parameters through.
  def answer_params
    params.require(:answer).permit(:body, :question_id)
  end
end
