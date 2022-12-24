import "./AppHeader.css"
const AppHeader = ({allPosts, liked})=>{
    return(
        <div className="app-header d-flex p-2 bd-highlight justify-content-between">
            <h1>💠Farhod</h1>
            <h2>{allPosts} posts, {liked} like</h2>
        </div>
    )
}
export default AppHeader