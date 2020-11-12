class Api::VotesController < ApplicationController
  
def create
    # @question = Question.new(question_params)
    @vote = Vote.new(vote_params)
    if @vote.save 
    #   render :show
      render json: ["lets go upvote champ"]
      # render json: { message: "Question saved"}
    else 
      render json: ["Vote was unsuccessful"]
    end
end

  def index
      # console.log("im in the index controller")
      votes = Vote.all

      # @questions = questions.includes(:author, :answers)

      render json: votes
  end

  def show
   
    #   @question = Question.find(params[:id])
    #    @answers = @question.answers
    #    p @answers
    #   if @question 
    #     render json: {question: @question, answers: @answers}
    #   else  
    #     render json: ["Question not found"]
    #   end 
  end


  private

  def vote_params
    params.require(:vote).permit(:user_id,:answer_id,:value)
  end

end