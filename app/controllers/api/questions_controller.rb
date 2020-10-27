class Api::QuestionsController < ApplicationController
  
def create
    @question = Question.new(question_params)
    if @question.save 
      render :show
      # render json: { message: "Question saved"}
    else 
      render json: ["Question body or title can't be blank"]
    end
end

  def index
      # console.log("im in the index controller")
      questions = Question.all

      # @questions = questions.includes(:author, :answers)

      render json: questions
  end

  def show
      @question = Question.find(params[:id])
       @answers = @question.answers
      if @question 
        render json: {question: @question, answers: @answers}
      else  
        render json: ["Question not found"]
      end 
  end


  private

  def question_params
    params.require(:question).permit(:body,:title,:author_id)
  end

end