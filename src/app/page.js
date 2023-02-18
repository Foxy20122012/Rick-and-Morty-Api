'use client'
import { setLazyProp } from 'next/dist/server/api-utils';
import React, {useState, useEffect} from 'react';
import Character from '../components/Personaje/Character';
import { useHasMounted } from '@/src/hooks/useHasMounted';
const NavPerson =(props)=>{

  return(
    <header className=''>
      <h2 className='text-white text-center '>Page:{props.page+1}</h2>
      <div className='text-center'>
        <button className='text-white m-10 bg-black border border-y-8 rounded '
        onClick={()=> props.setPage(props.page -1)}
        >Anterior</button>
        <button className='text-white m-10 bg-black border border-y-8 rounded'
        onClick={()=> props.setPage(props.page+1)}
        >Siguiente</button>
      </div>
    </header>
  )
}

const Card =()=>{

  const[page,setPage]= useState(5)

  

  const [character,setCharacters] = useState([])
  let api = `https://rickandmortyapi.com/api/character/?page=${page}`
  
  useEffect (()=>{
    async function fetchData (){
      const response = await fetch(api);
      const data = await response.json();
      setCharacters(data.results);
  }
    fetchData()
  },[page]);

  const hasMounted = useHasMounted();

  if(!hasMounted) {
    return null;
  }
   
    return(
      <div className='bg-black border border-t-4 border-r-4'>
        <h1 className='text-white text-4xl text-center'>Rick and Morty</h1>
       
     
        <div className='bg-cyan-700 border  ' style={{backgroundImage: `url(https://i.pinimg.com/736x/82/81/0e/82810e099f9b1d7d6b43c96d19dfa4ef.jpg)`}}>
        <div className=" m-10 px-3" >
          <NavPerson page={page} setPage={setPage}/>
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
      <NavPerson page={page} setPage={setPage}/>
      </div>
  
     </div>
    )
  }


export default Card