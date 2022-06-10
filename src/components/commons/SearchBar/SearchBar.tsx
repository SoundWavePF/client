import {useState} from 'react';
import { Outlet } from 'react-router-dom';

import style from './SearchBar.module.css';
import searchIcon from '../../../assets/search_icon.png'
import userIcon from '../../../assets/user_icon.png'
import bellIcon  from '../../../assets/bell.png'

import MenuUser from './MenuUser'

const SearchBar = ()=>{
    const [input, setInput] = useState<string>('');

    function handleChange({target}: {target: any}): void {
        setInput(()=>{
            console.log(target.value);
            return target.value;
        }) 
    }
    function handleSubmit(event: any): void {
        event.preventDefault();
        alert(input);
    }

    return (
        <nav className={`${style.navbar}`}>
            <form className={style.form}>
                <div className={style.search}>
                    <img src={searchIcon} width='20px'/>
                    <input 
                        className={style.inputSearch} 
                        type="search" 
                        placeholder="Search" 
                        aria-label="Search"
                        value={input}
                        onChange={handleChange}
                    />
                </div>
            </form>
            <div className={style.icons}>
                <MenuUser username={'username'} />
            </div>
        </nav>
    )
}

export default SearchBar;
