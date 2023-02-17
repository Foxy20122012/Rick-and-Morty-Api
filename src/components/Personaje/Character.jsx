

const Character =({character})=>{
    return (
        <div className="border m-5 border-y-4 border-x-4 rounded-t rounded bg-white"  style={{backgroundImage: `url(https://i.pinimg.com/originals/de/7e/15/de7e155b2c67618a96faee6172f5261e.jpg)`}}>
          <h2 className='text-center text-white m-5 text-2xl'>{character.name}</h2>
          <div className="border rounded-r">
          <h4 className="text-white text-center text-base  ">{character.status}</h4>
          </div>
          <img src={character.image} alt={character.image} className="justify-items-center border-white border-y-8 border-t-8 " />
          <p className="text-white text-center">{character.origin.name}</p>
          </div>
    );
}

export default Character;