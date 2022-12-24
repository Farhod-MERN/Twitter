import "./SearchPanel.css"
import React from "react"

class SearchPanel extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            term: ""
        }

    this.onUpdateSearch = this.onUpdateSearch.bind(this)
    }
    
    onUpdateSearch(e){
        const value = e.target.value
        this.setState({term :value})
        // const term = e.target.value
        // this.setState({term :term})
        // this.setState({term}) // ES9 da bizda agar statedagi va o'zimiz yaratgan o'zgaruvchi bir hil bo'lsa shunday yozish mumkun
        
        this.props.onUpdateSearch(value)
    }

    render(){
        return(
            // <div>
            //     <input 
            //         type="text"
            //         className= "search form-control search-input"
            //         placeholder = "Search by post"
            //          />
            // </div>
            <div className="input-group input-group-sm mb-3">
                <input 
                type="search" 
                className="form-control search-input"
                placeholder = "Search by posts"
                onChange={this.onUpdateSearch}
                />
            </div>
        )
    }
}
export default SearchPanel