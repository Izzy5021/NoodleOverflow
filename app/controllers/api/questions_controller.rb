class Api::QuestionsController < ApplicationController
  
def create
#  debugger
    @question = Question.new(question_params)
    if @question.save 
      render :show
      # render json: { message: "Question saved"}
    else 
      render json: ["Question body or title can't be blank"]
    end
end

  def index
      questions = Question.all

      @questions = questions.includes(:author, :answers)

      render json: questions
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