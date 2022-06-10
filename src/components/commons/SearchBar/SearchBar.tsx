import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreator from '../../../redux/actions'

import style from './SearchBar.module.css';
import searchIcon from '../../../assets/search_icon.png'
import userIcon from '../../../assets/user_icon.png'
import bellIcon  from '../../../assets/bell.png'

const SearchBar = ()=>{
    const [input, setInput] = useState<string>('');
    const dispatch = useDispatch();
    const {searchAll} = bindActionCreators(actionCreator,dispatch)
    function handleChange({target}: {target: any}): void {
        searchAll(target.value)
        setInput(()=>{return target.value;}) 
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
                <img className={style.userImg} src={userIcon} height='30px' width='30px'/>
            </div>
        </nav>
    )
}

export default SearchBar;
