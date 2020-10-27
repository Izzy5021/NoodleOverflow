import React from 'react';

class ShowPage extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: null, 
            id: null,
            answerBody: ''
        }  
       
        console.log("window.location:", window.location);
        if (props.questions.currentQuestion) {
            let {currentQuestion} = props.questions
            this.setState({currentQuestion: currentQuestion});
        } 
        // if (props.match.params.id){
        //     let id = Number(props.match.params.id);
        //     // ask Adrian 
        //     //let {id} = props.match.params
        //     this.setState({id: id});
        // }

        // this.openQuestion = this.openQuestion.bind(this);
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

     handleSubmit(e) {
        e.preventDefault();
        console.log("from handleSubmit this.props:", this.props)
        console.log("from handleSubmit this.state:", this.state)
        const answer = Object.assign({}, {body: this.state.answerBody}, {author_id: this.props.currentUser.id}, {question_id: Number(this.props.match.params.id)});//, { author_id: this.props.author_id.id });
        console.log("answer", answer)
        this.props.createAnswer(answer);
    }
    // componentWillUnmount() { this.props.clearSessionErrors() }

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.match.params.id !== this.props.match.params.id){
            let id = Number(this.props.match.params.id);
            this.setState({id: id});
        }
        console.log("state.id from update", this.state.id);
        if(prevProps.questions.currentQuestion !== this.props.questions.currentQuestion){
            console.log("component did update")
            let {currentQuestion} = this.props.questions;
            this.setState({currentQuestion: currentQuestion});
        }
    }
    componentDidMount() {  this.props.showQuestion(this.props.match.params.id)}
    
  

    render() {
        let {currentQuestion} = this.state;
        console.log("currentQuestion,", currentQuestion)
        // console.log("this.props.entities", this.props.entities)
        if(currentQuestion){
            // console.log("currentQuestion", this.props)
        
        
            return (
                <div>
                    <div className="sidenav">
                        <a href="#/homePage">Home</a>
                        <a href="https://www.linkedin.com/in/israel-gonzalez-372b2aba/">LinkedIn</a>
                        <a href="https://angel.co/u/israel-gonzalez-5">Angelist</a>
                        <a href="#/newQuestion">New Question</a>
                    </div>
                    <h2 className="home-h2">Question</h2>
                 
                        <div className="questions-show"  >
                            <br/>
                            <br/>
                                
                            {currentQuestion.question.title}
                                <br/>
                                <br/>
                            {currentQuestion.question.body}

                            <br/>
                            <br/>      
                        </div>
                   <h2 className="home-h2">{currentQuestion.answers.length} Answers</h2>  
                   {/* <hr className="answers-show"/> */}
                    {   currentQuestion.answers.map((answer, i) => {
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