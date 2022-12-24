import "./PostaddForm.css" 
import React from "react"

export default class PostAddForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: ""
        }

        this.onValueChange = this.onValueChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.testRef = React.createRef()
    }
    componentDidMount(){
        this.testRef.current.focus()
    }

    onValueChange(e){
        this.setState({
            text: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault()

        if(this.state.text !== ""){
        this.props.onAdd(this.state.text)
        this.setState({
            text: ""
        })

        }
        else{
            alert(" OOPS! 😤 Before you send,  you need to write some texts")
        }
    }

    render(){

        return(
            <div className="d-flex p-2 bd-highlight post-add">
               <form onSubmit={this.onSubmit} className = "bottom-panel input-group mb-3">
                <input 
                className="form-control new-post-label add__post"
                type="text"
                placeholder = "What are you thinking about now ?"
                onChange={this.onValueChange}
                value = {this.state.text}
                ref = {this.testRef}
                 />
                 <button 
                    type="submit"
                    className="btn btn-outline-secondary"
                    >Add Post</button>
                </form> 
            </div>
        )

    }
}
