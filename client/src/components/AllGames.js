import React, {useState, useEffect} from "react";
import axios from "axios";

const AllGames=(props)=>{

    const [gameList, setGameList]=useState([])

    useEffect(()=>{
        axios.get("https://localhost:8000/api/games/")
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setGameList(res.data)
            })
            .catch((err)=>{console.log(err)
            }, [])
        }
        
        return (
            <div>
                <header>
                    <h1 style={{fontSize:"50px", borderBottom:"5px double lightgray", marginLeft:"450px", marginRight:"450px"}}>GameOn</h1>
                </header>
                {
                    gameList.map((game, index)=>(
                        <div key={index}>
                            <p>{game.name}</p>
                            <img src={game.image} alt="Game picture!" style={{width: "150px", height:"150px"}}/>
                        </div>
                    ))
                }
            </div>
        );
    }
export default AllGames;