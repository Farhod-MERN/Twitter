import "./PostListItem.css";
import React from "react";

export default class PostListItem extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //       important : false,
  //       like : false,
  //   };
  //   this.onImportant = this.onImportant.bind(this)
  //   this.onLike = this.onLike.bind(this)
  // } bizga bu kerak emas , biz endi to'gridan to'gri appdagi datani o'zgartiramiz
        // state dagi malumotlarni o'zgartira olamiz, App.js dagi bazaga bizni qo'l hozircha bormaydi
        // shunga biz Importantni propsdan emas statedan oldik
   

  // onImportant(){
  //   // this.setState(({important}) => ({important :!important}))
  //   // this.setState(() => ({important :!this.state.important}))
  //   this.setState({important :!this.state.important})
  // }
  // onLike(){
  //   this.setState(({like}) =>({like: !like}))
  // }
      // state dagi importantni biz destruptizatsiya yordamida olamiz
      //onImportant bizga state dani importantni qarama qarshisiga o'zgartirib beradi
  render() {

    const {label , onDelete, important, like, onToggleImportant, onToggleLike} = this.props

    let classNames = "app-list-item d-flex p-2 bd-highlight justify-content-between"

    if(important){
        classNames += " important"
       }
    if(like){
        classNames += " like"
       }

    return (
      <div className={classNames}>
        <span className="app-list-item-label" onClick={onToggleLike}>{label}</span>

        <div className="d-flex justify-content-center align-item-center ">
          <button 
          type="button" 
          className="btn-star btn-sm"
          onClick={onToggleImportant}
          >
            <i className="fa fa-star"></i>
          </button>
          <button 
          type="button" 
          className="btn-trash btn-sm"
          onClick={onDelete}
          >
            <i className="fa fa-trash"></i>
          </button>
          <i onClick={onToggleLike} className="fa fa-heart cursor"></i>
        </div>
      </div>
    );
  }
}

// const PostListItem = ({label, important})=>{
    // let classNames = "app-list-item d-flex p-2 bd-highlight justify-content-between"
// //biz stylelarimkzni o'zgaruvchiga bog'lab oldik
// // " important" buni boshiga bitta probel qo'ydim, sababi stringlarni yopishtirib qo'shib qo'ymasligi uchun
//    if(important){
//     classNames += " important"
//    }

//     return(
// <div className={classNames}>
//     <span className ="app-list-item-label">{label}</span>

//     <div className="d-flex justify-content-center align-item-center ">
//         <button type ="button" className="btn-star btn-sm">
//             <i className="fa fa-star"></i>
//         </button>
//         <button type ="button" className="btn-trash btn-sm">
//             <i className="fa fa-trash"></i>
//         </button>
//         <i className ="fa fa-heart"></i>
//     </div>
// </div>
//     )
// }
// export default PostListItem
