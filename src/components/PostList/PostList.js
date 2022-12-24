import PostListItem from "../PostListItem/PostListItem"
import "./PostList.css"
const PostList = ({posts, onDelete, onToggleImportant, onToggleLike})=>{
    //posts bizda array . uni ichida esa objex=ctlar bor
    // posts map bilan sikl qilganimda uni ichidagi har bir objectni obj qilib ushlab oldim
   
   const elements = posts.map(item =>{
       //biz item objectligini bilamiz, ga uni ikkita qiymat qabul qilishini hqm bilamiz, shunga uni spread operatori orqali bera olamiz
       // itemni spread operatori yordamida butunligicha , ichida qancha hususiyadi bo'lsa hammasi bilam yubordik
       // item dagi id bizga POstListItemda kerak emas , shunga uni u yerga props orqali yuborish shart emas 
      //ItemProps ga id dan boshqa xususiyatlarni olib oldik
       
      const {id ,...itemProps} = item
      
       return (
        <li key={id} className="list-group-item">
            <PostListItem {...itemProps} onDelete = {()=>{onDelete(id)}} onToggleImportant = {()=>{onToggleImportant(id)}} onToggleLike ={()=>{onToggleLike(id)}}/>
        </li>
    )
   } )
    return(
        <ul className = "app-list list-group">
            {elements}

            {/* {posts.map(obj => <PostListItem label={obj.label} important={obj.important}/>)} */}
            
            {/* <PostListItem label={posts[0].label} important={posts[0].important}/> */}
        </ul>
    )
}
export default PostList