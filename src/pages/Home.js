import React,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout'

const Home = () => {
  const [input,setInput]=useState('')
  const handleInput=(e)=>{
    setInput(e.target.value)
  }
  const handleSearch=()=>{
   
    fetch(`https://api.tvmaze.com/search/shows?q=${input}`)
    .then(response => response.json())
    .then(data => console.log(data));
  }
  const onkeydown=(event)=>{
    if(event.keyCode===13){
      handleSearch();
    }
  }
  return (
    <MainPageLayout>
      <input type="text" value={input} onKeyDown={onkeydown} onChange={handleInput}/>
      <button type='button'  onClick={handleSearch}>search</button>
    </MainPageLayout>
  )
}

export default Home