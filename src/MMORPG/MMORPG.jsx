import React, { useEffect, useState } from 'react'

export default function MMORPG() {
    useEffect(()=>{
        const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3522ba91eemshd794a7d210471b1p111ba9jsn882a8696538f',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }};
fetch(url, options)
.then(response => response.json())
      .then(response => setGames(response))
      .catch(err => console.error(err));
    })
      const [games, setGames] = useState([]);

  return (
    <div>
        <h4>MMORPG:</h4>
        {games.map((el)=>{return <p>{el.title}</p>})}
    </div>
  )
}
