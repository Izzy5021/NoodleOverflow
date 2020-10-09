class Api::QuestionsController < ApplicationController
  
def create
#  debugger
    @question = Question.new(question_params)
    if @question.save 
      render :show
      # render json: { message: "Question saved"}
    end
end

  def index
      questions = Question.all

      @questions = questions.includes(:author, :answers)

      render :index
  end

  def show
      @question = Question.includes(:author, :answers, :comments, :likes).find(params[:id])

      render :show
  end


  private

  def question_params
    params.require(:question).permit(:body,:title,:author_id)
  end

end