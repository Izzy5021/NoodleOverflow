import React from 'react';

class ShowPage extends React.Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            targetAnswer: null, 
            targetQuestion: null,
            currentUser: props.currentUser.id, 
            votes: null, 
            kmn: true,
            id: null,
            voteAnalytics: '',
            answerBody: ''
        }  
       
        console.log("window.location:", window.location);
       
        this.downVote = this.downVote.bind(this);
        this.upVote = this.upVote.bind(this);
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
        console.log("answer:", answer)
        this.props.createAnswer(answer)
            .then(() =>{
                this.props.showQuestion(this.props.match.params.id).then(() => {this.setState({ answerBody: '', targetAnswer: this.props.questions.currentQuestion.answers})})
            })
    }

    upVote(id){
        const vote = Object.assign({}, {answer_id: id}, {user_id: this.props.currentUser.id}, {value: 1})
        console.log("vote from upvote", vote )
        this.props.createVote(vote)
            .then(()=> {
                 this.props.fetchVotes().then(() => {this.setState({votes: this.props.votes.arr.votes})})
            // .then(() => this.setState({votes: this.props.votes.arr.votes}))
            });
    }

    downVote(answerId){
        const voteAnalytics = {}
         if (this.state.votes){
            for (let i = 0; i < this.state.votes.length; i++){
                      if( voteAnalytics[this.state.votes[i].answer_id] === undefined){
                              voteAnalytics[this.state.votes[i].answer_id] = [this.state.votes[i]] 
                      }else {
                          voteAnalytics[this.state.votes[i].answer_id].push(this.state.votes[i])
                      }
              }
              console.log("vote Analytics inside constructor", voteAnalytics)
        }
      
        for (let j = 0; j < voteAnalytics[answerId].length; j++){
            console.log("author id in downvote func", voteAnalytics[answerId][j].user_id)
            if (voteAnalytics[answerId][j].user_id === this.state.currentUser){
                this.props.eraseVote(voteAnalytics[answerId][j].id)
                    .then(()=> {
                        this.props.fetchVotes().then(() => {this.setState({votes: this.props.votes.arr.votes})})
                    });
            }
        }
        
    }

    askQuestion(e) {
        e.preventDefault();
        this.props.history.push('/newQuestion');
    }

    edit(e){
        e.preventDefault();
        this.props.history.push('/answerPage');
    }
    
    componentDidMount() { 
        this.props.fetchVotes()
            .then(() => this.setState({votes: this.props.votes.arr.votes}))
            .then(() => this.props.showQuestion(this.props.match.params.id))
            .then(() =>this.setState({targetAnswer: this.props.questions.currentQuestion.answers, targetQuestion: this.props.questions.currentQuestion.question }))
        
       
    }
    
  

    render() {
      
        const voteCounts = {}
       
        
        let {targetAnswer, targetQuestion} = this.state;
        
        
        if(targetAnswer){

            for (let i = 0; i < this.state.votes.length; i++){
                    if( voteCounts[this.state.votes[i].answer_id] === undefined){
                            voteCounts[this.state.votes[i].answer_id] = [this.state.votes[i]] 
                    }else {
                        voteCounts[this.state.votes[i].answer_id].push(this.state.votes[i])
                    }
            }
             
                    
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
                            <br/>
                            {targetQuestion.created_at}
                        </div> 
                        </div>
                        
                   <h2 className="question-h2">{targetAnswer.length} Answers</h2>  
                    {   targetAnswer.map((answer, i) => {
                            return (
                                <div className="questions-show" key={i} >
                                    <div className="float-child-left-favicon">
                                    <button onClick={() => this.upVote(answer.id)} className="fav-btn"><i className="fas fa-caret-up"></i></button>
                                    <br/>
                                    {voteCounts[answer.id] === undefined ? 0 : voteCounts[answer.id].length}
                                    <br/>
                                    <button onClick={() => this.downVote(answer.id)} className="fav-btn"><i className="fas fa-caret-down"></i></button>
                                    </div>
                                    <div className="float-child-favicon">
                                        <br/>
                                        {answer.body}
                                        <br/>
                                        <br/>
                                        {this.state.currentUser === answer.author_id ?  <button disabled={this.state.currentUser !== answer.author_id} className="update-button" onClick={this.edit}>Edit Your Answer</button> : <br/>}
                                        <br/>
                                    </div>
                                    <div className="float-child-right-favicon">
                                          answered by {answer.username},&nbsp;  
                                          <br/>
                                            {answer.created_at}
                                    </div> 
                                </div>
                                
                                
                                
                            )
                         })
                   }  
                <div className="answer-form" >
                    <h2 className="question-h2-b">Your Answer</h2>
                    <form>
                        <br/>
                        {/* <label className="update-answer-label">Your Answer */}
                        <br/>
                        <textarea className="update-answer-text"
                                placeholder="enter here"
                                value={this.state.answerBody}
                                onChange={this.handleInput('answerBody')}
                            />
                        {/* </label> */}
                        <br/>
                        <button className="update-answer-button" onClick={this.handleSubmit}>Post Your Answer</button>
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