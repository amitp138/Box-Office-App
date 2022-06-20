import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'
import {apiGet} from "../misc/config"
const Home = () => {
  const [input,setInput]=useState('')
  const [data,setData]=useState("")
  const handleInput=(e)=>{
    setInput(e.target.value)
  }
  const handleSearch=()=>{
   apiGet(`/search/shows?q=${input}`).then(result => {
      setData(result)
      console.log(result)});
   
  }
  const onkeydown=(event)=>{
    if(event.keyCode===13){
      handleSearch();
    }
  }
  const showResults=()=>{
    if(data && data.length===0){
      return <div>no results</div>
    }
    if(data && data.length>0){
 return <div>{data.map((item)=>{
 return <div key={item.show.id}>{item.show.name}</div>
 })}</div>
    }
    return null
  }
  return (
    <MainPageLayout>
      <input type="text" value={input} onKeyDown={onkeydown} onChange={handleInput}/>
      <button type='button'  onClick={handleSearch}>search</button>
      {showResults()}
    </MainPageLayout>
  )
}

export default Home