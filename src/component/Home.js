import React,{useState} from 'react'
import "./Home.css"

function Home() {
    const [name, setName] = useState("")
    const [list, setList] = useState([])// adding name inside list with the help of handleSubmit function
    const [value, setValue] = useState('')// setValue = searchTerm with the help of onSearch function

    function handleSubmit(e){
        e.preventDefault()
        console.log(name)
        if(name) setList((ls)=>[...ls,name])
        console.log("list line no. 15--",list)
        setName("")
    }
    function handleReset(){
        setList([])
    }
    function onSearch(searchTerm){
        setValue(searchTerm)
        console.log("search line no. 24 ", searchTerm )
    }
  return (
    <div className='whole'>
        {/* <div className='input'> */}
            <input className='input' placeholder='Enter details' type='text' name='name' value={name}  onChange={(e)=>setName(e.target.value)}></input>
        {/* </div> */}
        <div className='button'>
            <span>
            <button className='btn1' onClick={handleSubmit}>+ Add Note</button>
            <button className='btn2' onClick={handleReset}>Reset</button>
            </span>
        </div>
        <input className='input' placeholder='search' type='text' value={value} onChange={(e)=>setValue(e.target.value)}/>

        <div className='dropdown'>
            {list.filter(item=>{
                console.log("value line  no. 49", value)
                const searchTerm = value.toLowerCase(); //make easy to compare
                console.log('searched term line number 40 -- ', searchTerm)
                const items = item.toLowerCase();
                console.log('items line number 42 -- ', items) // gh
                if(searchTerm==="@") return item
                return searchTerm && items.startsWith(searchTerm) && items!==searchTerm
            })
            .map((item,i)=>
                <div key={i} onClick={()=>onSearch(item)} className='dropdown-row'>{item}</div>
            )}
        </div>
    </div>
  )
}
export default Home