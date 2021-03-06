import React from 'react';


class AnswerPage extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
            question_id : '',
            author_id: Number(props.author_id),
            username: props.username,
            selectedAnswerId: null,
            answerBody: false,
            answerId: ''
        };
        this.askQuestion = this.askQuestion.bind(this);
        this.eliminateAnswer = this.eliminateAnswer.bind(this);
        this.targetAnswer = this.targetAnswer.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.openAnswer = this.openAnswer.bind(this);
    }


        componentDidMount() { this.props.fetchAnswers(), this.props.fetchQuestions()}
    
      askQuestion(e) {
        e.preventDefault();
        this.props.history.push('/newQuestion');
    }

    eliminateAnswer(id){
        console.log("id from eliminate answer", id)
    
        this.props.eraseAnswer(id)
            .then(() =>{
                this.props.fetchAnswers().then(() => {this.setState({ answerBody: true})})
            })
    }

    
    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
            console.log("from handle input,", this.state.answerBody)
        };
    }

    targetAnswer(id){
      this.setState({answerId: id},  () => {
   console.log("this.state.answerId is", id, this.state);
      });
    }

     openAnswer(id) {
     
        this.props.history.push(`/updateAnswer/${id}`);
    }

     
   

    render() {
        let answers = this.props.answers.arr ? this.props.answers.arr : [];
        let questions = this.props.questions.arr ? this.props.questions.arr : [];

        if( answers.length !==0 && questions.length !== 0 ){
            let myAnswers = []
            let myQuestions = []
            for ( let i = 0; i < answers.length; i++){
               let sub = {}
                if (answers[i].author_id === this.props.currentUser.id){
                    myAnswers.push(answers[i])
                    for( let j = 0; j < questions.length; j++){
                        if ( answers[i].question_id === questions[j].id){
                        myQuestions.push(questions[j]) 
                        }
                    }
                    
                }
            }
           
            const user = this.props.currentUser.username
            return (
                <div>
                    <div className="sidenav">
                        <a href="#/homePage">Home</a>
                        <a href="https://www.linkedin.com/in/israel-gonzalez-372b2aba/">LinkedIn</a>
                        <a href="https://angel.co/u/israel-gonzalez-5">Angelist</a>
                        <a href="#/answerPage">My Answers</a>
                        <a href="#/newQuestion">New Question</a>
                    </div>
                    <h2 className="answers-h2">My Answers</h2>
                    <button className="askQuestion" onClick={this.askQuestion}>Ask Question</button>
                    {
                        myAnswers.map((answer, i) => {
                            return (
                                <div className="questions-show" key={i} >
                                    <br/>
                                    <br/>
                                    <h3>Question</h3>
                                    <h4>{myQuestions[i].title}</h4>
                                    <h4>{myQuestions[i].body}</h4>
                                    <br/>
                                    <h3>{user}'s Answer</h3>
                                    <h3>{answer.body}</h3>
                                     <button className="update-button"  value={this.state.body}
                                            onClick={() => this.openAnswer(answer.id)}> Edit Answer
                                        </button>    
                                    <br/>
                                    <br/>
                                    <button className="erase-button" onClick={() => this.eliminateAnswer(answer.id)}>Erase</button>       
                                    <br/>
                                </div>
                            )
                        })
                    }
                </div>
            );
        }else{
            return(
                <div>
                    <div className="sidenav">
                        <a href="#/homePage">Home</a>
                        <a href="https://www.linkedin.com/in/israel-gonzalez-372b2aba/">LinkedIn</a>
                        <a href="https://angel.co/u/israel-gonzalez-5">Angelist</a>
                        <a href="#/answerPage">My Answers</a>
                        <a href="#/newQuestion">New Question</a>
                    </div>
                    <h2 className="home-h2">Top Questions</h2>
                    <button className="askQuestion" onClick={this.askQuestion}>Ask Question</button>
                    <div className="loading">You have not answered any questions yet</div>
                </div>
                
            )
        }
    }
};

export default AnswerPage;