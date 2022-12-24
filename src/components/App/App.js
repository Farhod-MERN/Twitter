import AppHeader from "../AppHeader"
import SearchPanel from "../SearchPanel"
import PostStatusFilter from "../PostStatusFilter"
import PostAddForm from "../PostAddForm"
import PostList from "../PostList"
import "./App.css"
import React from "react"

export default class App extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            data: [
                { label: "Hi there. I'm learning reactJS now", important: false, like: false, id: 1},
                { label: "This is the first of my Works 😁", important: false, like: false, id: 2},
                { label: "😁 👉 ❤️" , important: false, like: false, id: 3},
            ]
            , 
            term: "",
            filter: "all",

        }
        this.deleteItem = this.deleteItem.bind(this) 
        this.addItem = this.addItem.bind(this)
        this.onToggleImportant = this.onToggleImportant.bind(this)
        this.onToggleLike = this.onToggleLike.bind(this)
        this.searchPost = this.searchPost.bind(this)
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
        this.onFilterSelect = this.onFilterSelect.bind(this)

        this.maxId = 5    
        //bu postAdd uchun kerak, har safar add bosilganda , maxId ga 1 ni qo'shib qo'yadi
    }

    searchPost(items, term){
        if(term.length === 0)
        {
            return items
            // agarda hech narsa qidirilmasa o'zimizni datadagi malumotlarni chiqara ver
        }
        return items.filter(item => {
            return item.label.indexOf(term) > -1 // filterga qanday dir shart berishimiz kerak. o'zi massiv 0 dan boshlanadi , shunga -1 dan kattalari desak , hech narsa o'zgarmaydi
            // agar search ni ichida nimadur yozilsa , datagi objectlarni tekshiradi va ichida termdagi yozilgan narsasi borlarni chiqaradi
        })
    }

    onToggleLike(id){
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id)
//index - biz bosgan elem(objectning) idsiga teng bo'ladi

            const oldItem = data[index] 

            const newItem = {...oldItem,  like: !oldItem.like}

            const newArr = [...data.slice(0, index), newItem , ...data.slice(index + 1)]
// biz tallagan elemni datadan o'chirib yangi newItemni boshqatdan yozadi dataga , shunda bizga huddi nimadur o'zgargandan bo'ladi
            return{
                data: newArr
            }
        })
    }

    onToggleImportant(id){
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id)

            const oldItem = data[index] 

            const newItem = {...oldItem,  important: !oldItem.important}

            const newArr = [...data.slice(0, index), newItem , ...data.slice(index + 1)]
            return{
                data: newArr
            }
        })
    }

    deleteItem(id){
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id);
            //elem bizga massivdagi har bir objectlarni qaytarib beradi
            //elemni id si biz bosgan ni id siga teng bo'lsa
            console.log(index);
            // bu index tepadagi datanan qaysi biri bosilsa o'shani id siga teng bo'ladi ular 0,1,2,3,4 ko'rinishida bo'ladi
            
            //biz datani to'gridan to'gri o'zgartira olmaymiz, shunga uni yangi massivga tenglab olishimiz kerak 
            const before = data.slice(0, index)  // bu orqali biz, 0 dan biz bosgandagi elementni idisigacha kesamiz  
            const after = data.slice(index + 1) // bunda biz bosgan element idisiga 1 qo'shdik, shunda u biz bosgan element qesilmay qolib ketadi 
           
            const newArr = [...before, ...after]  // bunda spread operatori yordamida ikki bo'lak massivlarni bitta qilib oldik
            // const newArr = [...data.slice(0, index), ...data.slice(index + 1)]  
            //bu ikkinchi sintaksis , yuqoridagilarni o'zgaruvchiga olmayham , o'zini yozib yuborsa bo'ladi

            return{
                data: newArr
            } // endi kesilgan massivni dataga tenglab qo'yamiz, kesilgan massivda biz bosgan element bo'lmaydi
        })

    }

    addItem(value){
      const newItem = {
        label: value,
        important: false,
        like: false,
        id: this.maxId++,
      }

      this.setState(({data}) => {
        const newArr = [...data, newItem]
        return{
            data: newArr
        }
      })

    }
    onUpdateSearch(term){
       this.setState({term: term}) 
    }
    filterPost(items, filter){
      if(filter === "like"){
        return items.filter(item => item.like)
      } 
      else{
        return items
      } 
    }
    
    onFilterSelect(filter){
        this.setState({filter: filter})

    }

    render(){

        const {term, filter , data} = this.state
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter)
        // biz filterPost 1- parametniga datani berishimiz kerak edi, lekin bizga serachPost ham bizga har qanday holda datani qaytaradi 
        const liked = data.filter(item => item.like).length
        const allPosts = data.length
        
        console.log(data);

        return(
            <div className="app">
                <AppHeader liked = {liked} allPosts={allPosts}/>
            <div className="search-panel d-flex">
                <SearchPanel onUpdateSearch = {this.onUpdateSearch}/>
                <PostStatusFilter filter = {filter} onFilterSelect = {this.onFilterSelect}/>
            </div>
            <div className="posts">
                <PostList posts={visiblePosts} onDelete = {this.deleteItem} onToggleLike = {this.onToggleLike} onToggleImportant = {this.onToggleImportant}/>
            </div>
            <div className="Post__add">
                <PostAddForm onAdd = {this.addItem}/>
            </div>
        </div>   
        )
    }
}



// const App = ()=>{

//     const data = [
//         { label: "I'm crazy enough to succeed 🤑🤬 ", important: true, id: "ab"},
//         { label: "Yeap , you are totally right 🤣😂", important: false, id: "av"},
//         { label: "Are you loughing om me 🤔😒" , important: false, id: "ad"},
//         { label: "Ok , no matter 😒", important: false, id: "af"},
//     ]


//     return(
//         <div className="app">
//             <AppHeader />
//             <div className="search-panel d-flex">
//             <SearchPanel />
//             <PostStatusFilter />
//             </div>
//             <PostList posts={data} onDelete = {(id)=>{console.log(id);}}/>
//             <PostAddForm />
//         </div>
//     )
// }
// export default App