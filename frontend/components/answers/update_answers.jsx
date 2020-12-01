import React from 'react';


class UpdateAnswer extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
            question_id : '',
            author_id: Number(props.author_id),
            answerBody: '',
            answerId: '',
            id: null
        };
        this.askQuestion = this.askQuestion.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
       
    }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.match.params.id !== this.props.match.params.id){
            let id = Number(this.props.match.params.id);
            this.setState({id: id});
            console.log("im in the comp did update id is", id)
        }
        if(prevProps.questions.currentQuestion !== this.props.questions.currentQuestion){
            let {currentQuestion} = this.props.questions;
            this.setState({currentQuestion: currentQuestion});
        }
    }
    
  
        componentDidMount() { this.props.fetchAnswer(this.props.match.params.id), this.props.fetchQuestions()}
    
      askQuestion(e) {
        e.preventDefault();
        this.props.history.push('/newQuestion');
    }

    
    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
            console.log("from handle input,", this.state.answerBody)
        };
    }

     handleSubmit(id) {
        const answer = Object.assign({}, {body: this.state.answerBody}, {author_id: this.props.currentUser.id}, {username: this.props.currentUser.username}, {question_id: this.props.answers.answer.question_id});
        console.log("answer and id", answer, id)
        this.props.updateAnswer(id, answer)
            .then(() => {
                this.props.history.push('/answerPage')
            })

    }

    render() {
        let answers = this.props.answers.answer ? this.props.answers.answer : [];
        let questions = this.props.questions.arr ? this.props.questions.arr : [];

        if(questions.length !== 0 && answers.length !== 0){
            let myAnswers = []
            let myQuestions = []
            for ( let i = 0; i < questions.length; i++){
               let sub = {}
                if (this.props.answers.answer.question_id === questions[i].id){
                    myQuestions.push(questions[i]) 
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
                    <h2 className="update-h2">Update Answer</h2>
                    <button className="askQuestion" onClick={this.askQuestion}>Ask Question</button>
                      
                                <div className="questions-show" >
                                    <br/>
                                    <br/>
                                    <h3>Question</h3>
                                    <h4>{myQuestions[0].title}</h4>
                                    <h4>{myQuestions[0].body}</h4>
                                    <br/>
                                    <h3>{user}'s Answer</h3>
                                    <h3>{this.props.answers.answer.body}</h3>
                                    <br/>
                                    <label className="update-answer-label">Update Answer
                                     <br/>
                                        <textarea
                                                className="update-answer-text"
                                                placeholder="enter here"
                                                value={this.state.answerBody}
                                                onChange={this.handleInput('answerBody')}
                                            />
                                    </label>
                                    <br/>
                                    <button className="update-answer-button" onClick={() => this.handleSubmit(this.props.answers.answer.id)}>Update Answer</button>
                                    <br/>
                                
                                </div>
                </div>
            );
        }else{
            return(
                <div>
                    <div className="sidenav">
                        <a href="#about">About</a>
                        <a href="https://www.linkedin.com/in/israel-gonzalez-372b2aba/">LinkedIn</a>
                        <a href="https://angel.co/u/israel-gonzalez-5">Angelist</a>
                        <a href="#/newQuestion">My Answers</a>
                        <a href="#/newQuestion">New Question</a>
                    </div>
                    <h2 className="home-h2">Top Questions</h2>
                    <button className="askQuestion" onClick={this.askQuestion}>Ask Question</button>
                    <div>Questions Loading ......</div>
                </div>
                
            )
        }
    }
};

export default UpdateAnswer;