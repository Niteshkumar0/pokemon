import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../components/po.css"
import Detail from './Detail';
export default function PokemonOne() {
    let [data,setData] = useState([]);
    let [pass,setPass] = useState([]);
    let [search,setSearch] = useState('')


    let FetchData = async (apiLink = "https://pokeapi.co/api/v2/pokemon") =>{ 
        try {
            let api = await axios.get(apiLink);
            PokemonFunction(api.data.results);
        } catch (error) {
            console.log(error)
        }
    }

    // "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
    //https://pokeapi.co/api/v2/pokemon

    let PokemonFunction = async (res) => {
        let pokemonList = [] ;

       await res.map(async(item) => {
            let result = await axios.get(item.url);          
            let  pokemon = {
                id:result.data.id,
                name:result.data.name,
                weight:result.data.weight,
                height:result.data.height,
                image:result.data.sprites.front_default,
                ability : result.data.abilities.length > 1 ? result.data.abilities[0].ability.name + " " + result.data.abilities[1].ability.name : result.data.abilities[0].ability.name,
                atribute: result.data.types.length > 1 ? result.data.types[0].type.name + " " + result.data.types[1].type.name :result.data.types[0].type.name  ,
            }
            pokemonList.push(pokemon)
            setData(pokemonList)
        })

    }
     
    useEffect(()=>{
        FetchData();
        alert('click to pokemon box to see pokemon details ')
    },[]);

    let passDetail = (props) => {
        setPass(props);
    }

    return (
        <>
        <input type='text' placeholder='search the pokemon' className='search' onChange={(e) => setSearch(e.target.value)}/>
        
        <div className='containerComponents'>
                {/* abc{data.length} */}
         
            <div className='detailComponent'>
            <Detail data={pass} 
            image={pass.image} 
            id={pass.id} name={pass.name}
             height={pass.height} weight={pass.weight} 
              ability={pass.ability}
              atribute={pass.atribute}/>
            </div>

            <div className='displayComponent'>

          {data.filter((list) =>
            list.name.toLowerCase().includes(search)).map((list) =>
            <div className="container" key={list.id} onClick={() => passDetail(list)}>
                <div className="index_image" >
                {/* <li className='index' >{list.id}</li> */}
                <li className='image'><img src={list.image} alt="" /></li>
            </div>
            </div>
            )}
            </div>


    </div>
        <div className='buttonContainer'>
        <button className='btn2' onClick={() => FetchData("https://pokeapi.co/api/v2/pokemon") }>pevious</button>
        <button className='btn2' onClick={() => FetchData("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20") }>Next</button>

        {/* {apiLinkExternal = "https://pokeapi.co/api/v2/pokemon" ? nextButton : previousButton } */}
        {/* {apiLinkExternal = "https://pokeapi.co/api/v2/pokemon" ? <button className='btn2' onClick={() => FetchData("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20") }>Next</button> : <button className='btn2' onClick={() => FetchData("https://pokeapi.co/api/v2/pokemon") }>pevious</button> + " " +<button className='btn2' onClick={() => FetchData("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20") }>Next</button>} */}
        {/* {apiLinkExternal ?  <button className='btn2'apiLinkExternal={false}  onClick={() => FetchData("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20") }>Next</button> :  <button className='btn2' apiLinkExternal={true} onClick={() => FetchData("https://pokeapi.co/api/v2/pokemon") }>pevious</button>}  */}
    </div>  
</>
    
    )
}
