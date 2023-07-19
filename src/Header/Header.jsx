import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

export default function Header() {
  return (
    <div>
      <ul className="navbar bg-dark nav" data-bs-theme="dark">
        <li><Link to='/'>Главная</Link></li>
        <li><Link to='/AllGames'>Список всех игр</Link></li>
        <li><Link to='/Shooters'>Шутеры</Link></li>
        <li><Link to='/MMORPG'>MMORPG</Link></li>
        <li><Link to='/Strategy'>Стратегии</Link></li>
      </ul>
    </div>
  )
}
