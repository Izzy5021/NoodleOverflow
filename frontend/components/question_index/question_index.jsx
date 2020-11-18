import React from 'react';

class ShowPage extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            targetAnswer: null, 
            targetQuestion: null,
            currentUser: props.currentUser.id, 
            // answers: null, 
            kmn: true,
            id: null,
            answerBody: ''
        }  
       
        console.log("window.location:", window.location);
        // if (props.questions.currentQuestion) {
        //     let {currentQuestion} = props.questions
        //     this.setState({currentQuestion: currentQuestion});
        // } 
       this.askQuestion = this.askQuestion.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.edit = this.edit.bind(this);
        console.log("CONSTRUCTOR this.state:",this.state);
        console.log("constructror this.props", this.props);
    }


    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

     handleSubmit() {
        const answer = Object.assign({}, {username: this.props.currentUser.username}, {body: this.state.answerBody}, {author_id: this.props.currentUser.id}, {question_id: Number(this.props.match.params.id)});//, { author_id: this.props.author_id.id });
        this.props.createAnswer(answer)
            .then(() =>{
                this.props.showQuestion(this.props.match.params.id).then(() => {this.setState({ answerBody: '', targetAnswer: this.props.questions.currentQuestion.answers})})
            })
    }

    askQuestion(e) {
        e.preventDefault();
        this.props.history.push('/newQuestion');
    }

    edit(e){
        e.preventDefault();
        this.props.history.push('/answerPage');
    }
    // componentWillUnmount() { this.props.clearSessionErrors() }

    // componentDidUpdate(prevProps, prevState) {
    //     //  this.props.showQuestion(this.props.match.params.id)        

    //     if (prevProps.match.params.id !== this.props.match.params.id){
    //         let id = Number(this.props.match.params.id);
    //         this.setState({id: id});
    //     }
    //     // console.log("state.id from update", this.state.id);
    //     if(prevProps.questions.currentQuestion !== this.props.questions.currentQuestion){
    //         // console.log("component did update")
    //         let {currentQuestion} = this.props.questions;
    //         this.setState({currentQuestion: currentQuestion});
    //     }

   
    // }
    componentDidMount() { 
        this.props.fetchVotes(); 
        this.props.showQuestion(this.props.match.params.id)
            .then(() =>this.setState({targetAnswer: this.props.questions.currentQuestion.answers, targetQuestion: this.props.questions.currentQuestion.question }))
            
    }
    
  

    render() {
        // debugger
        // const answers = this.props.entities.questions.currentQuestion.answers
        // const answersVotes = []
        // for( let i = 0; i < answers.length; i++){
        //     answersVotes.push(this.props.fetchAnswer(answers[i].id))
        // }
        
        let {targetAnswer, targetQuestion} = this.state;
        
        // console.log("currentQuestion,", currentQuestion)
        console.log("this.props in render", this.state)
        if(targetAnswer){
            return (
                <div>
                    <div className="sidenav">
                        <a href="#/homePage">Home</a>
                        <a href="https://www.linkedin.com/in/israel-gonzalez-372b2aba/">LinkedIn</a>
                        <a href="https://angel.co/u/israel-gonzalez-5">Angelist</a>
                        <a href="#/answerPage">My Answers</a>
                        <a href="#/newQuestion">New Question</a>
                    </div>
                    <h2 className="question-h2">Question</h2>
                    <button className="askQuestion" onClick={this.askQuestion}>Ask Question</button>

                        <div className="questions-show"  >
                        <div className="float-child">
                            {targetQuestion.title} 
                                <br/>
                                <br/>
                            {targetQuestion.body}
                            <br/>
                            <br/>      
                        </div>   
                        <div className="float-child-r">
                                          asked by {targetQuestion.username},&nbsp;  
                                            {targetQuestion.created_at}
                        </div> 
                        </div>
                        
                   <h2 className="question-h2">{targetAnswer.length} Answers</h2>  
                   {/* <hr className="answers-show"/> */}
                    {   targetAnswer.map((answer, i) => {
                            return (
                                <div className="questions-show" key={i} >
                                    <div className="float-child">
                                        <br/>
                                        {answer.body}
                                        <br/>
                                        <br/>
                                        {this.state.currentUser === answer.author_id ?  <button disabled={this.state.currentUser !== answer.author_id} className="update-button" onClick={this.edit}>Edit Your Answer</button> : <br/>}
                                        {/* <button disabled={this.state.currentUser !== answer.author_id} className="update-button" onClick={this.edit}>Edit Your Answer</button> */}
                                        {/* <button className="update-button" onClick={this.edit}>Edit Your Answer</button> */}
                                        <br/>
                                        <br/>
                                    </div>
                                    <div className="float-child-r">
                                          answered by {answer.username},&nbsp;  
                                            {answer.created_at}
                                    </div> 
                                </div>
                            )
                         })
                   }  
                   {/* <hr className="answers-show"/> */}
                <div className="answer-form" >
                    <form>
                        <br/>
                        <label className="answer-label">Your Answer
                        <textarea className="text-area"
                                placeholder="enter here"
                                value={this.state.answerBody}
                                onChange={this.handleInput('answerBody')}
                            />
                        </label>
                        <button className="update-button" onClick={this.handleSubmit}>Post Your Answer</button>
                    </form>
                 </div>
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
                    <h2 className="home-h2">Question</h2>
                    <div className="loading" >Question Loading ......</div>
                </div>
                
            );
          }
    }
}

export default ShowPage;