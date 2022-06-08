import {useState} from 'react';
import { Outlet } from 'react-router-dom';

import style from './SearchBar.module.css';
import searchIcon from '../../../assets/search_icon.png'
import userIcon from '../../../assets/user_icon.png'

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
                <input className="" value='buscar' onClick={handleSubmit} type="submit" />
            </form>
            <div>
                <img src={userIcon} width='30px'/>
            </div>
        </nav>
    )
}

export default SearchBar;
