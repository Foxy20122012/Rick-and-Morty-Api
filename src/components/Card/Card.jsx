'use client'
import React, {useState, useEffect} from 'react';
import Character from '../Personaje/Character';

const NavPerson =()=>{
  return(
    <header>
      <p>Page</p>
      <div>
        <button></button>
        <button></button>
      </div>
    </header>
  )
}

const Card =()=>{

  let api = `https://rickandmortyapi.com/api/character/?page=1`

  
  const [character,setCharacters] = useState([])


  
  useEffect (()=>{
    async function fetchData (){
      const response = await fetch(api);
      const data = await response.json();
      setCharacters(data.results);
  }
    fetchData()
  },[]);
 
    return(
      
        <div className='bg-cyan-700 border  ' style={{backgroundImage: `url(https://i.pinimg.com/736x/82/81/0e/82810e099f9b1d7d6b43c96d19dfa4ef.jpg)`}}>
  <div className=" m-10 px-3" >
  <h1 className="text-center  text-white text-4xl m-24"></h1>

  <div className='grid grid-cols-4 '>
  {
        character.map(character=>{
          return(
            <Character key={character.id} character={character}/>
          )
        })
   }
</div>
</div>
</div>
      
    
    )
}

export default Card