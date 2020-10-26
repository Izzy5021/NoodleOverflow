class Api::AnswersController < ApplicationController
  
def create
    @answer = Answer.new(answer_params)
    if @answer.save 
    #   render :show
      render json: { message: "Answer saved"}
    else 
      render json: ["Answer body can't be blank"]
    end
end

  def index
      # console.log("im in the index controller")
      @answers = Answer.all

      # @questions = questions.includes(:author, :answers)

      render json: @answers
  end

  def show
    # console.log("im in the show controller")
      # @question = Question.includes(:author_id, :body, :title).find(params[:id])
      @answer = Answer.find(params[:id])
      # console.log("question from show", @question)
      if @answer 
        render @answer
      else  
        render json: ["Answers not found"]
      end 
  end

  def update 
    console.log("answers controller update")
  end 

  def destroy 
    console.log("answers contrioller destroy")
  end 

  private

  def answer_params
    params.require(:answer).permit(:body,:question_id,:author_id)
  end

end