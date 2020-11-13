import React from 'react';

class ShowPage extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            targetAnswer: null, 
            targetQuestion: null,
            kmn: true,
            id: null,
            answerBody: ''
        }  
       
        console.log("window.location:", window.location);
        // if (props.questions.currentQuestion) {
        //     let {currentQuestion} = props.questions
        //     this.setState({currentQuestion: currentQuestion});
        // } 
       
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        console.log("CONSTRUCTOR this.state:",this.state);
        console.log("constructror this.props", this.props);
    }


    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

     handleSubmit() {
        const answer = Object.assign({}, {body: this.state.answerBody}, {author_id: this.props.currentUser.id}, {question_id: Number(this.props.match.params.id)});//, { author_id: this.props.author_id.id });
        this.props.createAnswer(answer)
            .then(() =>{
                this.props.showQuestion(this.props.match.params.id).then(() => {this.setState({ answerBody: '', targetAnswer: this.props.questions.currentQuestion.answers})})
            })
         
         
        // this.props.showQuestion(this.props.match.params.id)
        // this.setState({targetAnswer: this.props.questions.currentQuestion.answers});
       
        // this.props.history.push(`/showQuestion/${Number(this.props.match.params.id)}`);
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
        this.props.showQuestion(this.props.match.params.id)
            .then(() =>this.setState({targetAnswer: this.props.questions.currentQuestion.answers, targetQuestion: this.props.questions.currentQuestion.question }))
    }
    
  

    render() {
        // debugger
        let {targetAnswer, targetQuestion} = this.state;
        
        // console.log("currentQuestion,", currentQuestion)
        // console.log("this.props.entities", this.props.entities)
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
                    <h2 className="home-h2">Question</h2>
                 
                        <div className="questions-show"  >
                            <br/>
                            <br/>
                                
                            {targetQuestion.title} 
                                <br/>
                                <br/>
                            {targetQuestion.body}
​
                            <br/>
                            <br/>      
                        </div>
                   <h2 className="home-h2">{targetAnswer.length} Answers</h2>  
                   {/* <hr className="answers-show"/> */}
                    {   targetAnswer.map((answer, i) => {
                            return (
                                <div className="answers-show" key={i} >
                                    <br/>
                                    {answer.body}
                                    <br/>
                                    <br/>
                                </div>
                            )
                         })
                   }  
                   {/* <hr className="answers-show"/> */}
                <div className="answer-form" >
                    <form>
                        <br/>
                        <label>Your Answer
                        <textarea
                                placeholder="enter here"
                                value={this.state.answerBody}
                                onChange={this.handleInput('answerBody')}
                            />
                        </label>
                        <button onClick={this.handleSubmit}>Post Your Answer</button>
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