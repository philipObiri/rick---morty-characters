import {useState, useEffect} from 'react';
import Character from "./Character";
//https://rickandmortyapi.com/documentation/#rest
//https://rickandmortyapi.com/api


function List(){
    const [isLoading, setIsLoading] = useState(true);
    const [characters, setCharacters] = useState([]);
    

    useEffect(function(){
        async function fetchData(){
            const data = await fetch('https://rickandmortyapi.com/api/character');
            const {results} = await data.json();

            setCharacters(results);
            setIsLoading(false);
        }
        fetchData()
    },[characters.length]);


    return (
       <div>
        <h2 className='text-center my-2'>Characters</h2>
       <div className='row'>
       {
        isLoading ? (
            <div>Loading ......</div>
        ) :
        (
            characters.map((character)=>(
                <Character
                key = {character.id}
                name = {character.name}
                origin = {character.origin}
                image = {character.image}
                />
            ))
        )
       }
       </div>
       </div>
    )
}

export default List;