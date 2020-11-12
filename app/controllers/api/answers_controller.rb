class Api::AnswersController < ApplicationController
  
def create
    @answer = Answer.new(answer_params)
    if @answer.save 
    #   render :show
      render json: {answer: @answer}
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
       @votes = @answer.votes 
      # console.log("question from show", @question)
      if @answer 
        render json: {answer: @answer, votes: @votes}
      else  
        render json: ["Answers not found"]
      end 
  end

  def update 
    # debugger
    @answer = Answer.find(params[:id])
    if @answer.update_attributes(answer_params)
        # p params[:id]
        # p params[:answer][:body]
        # p params[:question_id]
        # p params[:author_id]
        render @answer 
    else  
        render json: ["Answer was not updated"]
    end
  end 

  def destroy 
    p "im in the destroy controller" 
    @answer = Answer.find(params[:id])
    if @answer.destroy
      render json: { message: "Answer deleted"}
    else 
      render json: ["Answer deletion unsuccessful"]
    end
  end 

  private

  def answer_params
    params.require(:answer).permit(:body,:question_id,:author_id)
  end

end