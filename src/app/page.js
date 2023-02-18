'use client'

import '../styles/globals.css';
import React, {useState, useEffect} from 'react';


import Card from "../components/Card/Card";
// let api = `https://rickandmortyapi.com/api/character/?page=1`
import { useHasMounted } from '../hooks/useHasMounted';

const Home =()=>{

    return(
      
     
      <div>
        <div className='bg-black border border-t-4 border-r-4'>
        <h1 className='text-white text-4xl text-center'>Rick and Morty</h1>
        <Card/>
      </div>
  
      </div>
     
    )
}

export default Home