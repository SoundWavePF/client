import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreator from "../../../redux/actions/action_player";
import * as actionUser from "../../../redux/actions/action_user";
import style from "./SearchBar.module.css";
import searchIcon from "../../../assets/search_icon.png";
import userIcon from "../../../assets/user_icon.png";
import bellIcon from "../../../assets/bell.png";
import swAnim from "../../../assets/loadinganimation.gif";
import MenuUser from "./MenuUser";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton: React.FunctionComponent = ()=>{
  const { loginWithRedirect } = useAuth0()
  return (
  <button className={style.buttonLogin} onClick={() => loginWithRedirect()}> Login
    <div className={style.icon}>
      <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0h24v24H0z" fill="none">
        </path>
        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor">
        </path>
        </svg>
    </div>
  </button>
  )
}

const ToggleModeButton:React.FunctionComponent = ()=>{
  const [dark, setDark] = useState<boolean>(false)
  useEffect( ()=>{
    if( document.querySelector('#appSW')?.classList[0] === 'light-mode') {
      setDark(false)
    } else setDark(true)
  }, [dark])

  const toggleMode = () => {
      document.querySelector('#appSW')?.classList.toggle('dark-mode')
      document.querySelector('#appSW')?.classList.toggle('light-mode')
      setDark(!dark)
  }

  return (
    <div className={style.toggleWrapper} onClick={toggleMode} >
      <div className={dark? style.toggleActive: style.toggle} ></div>
    </div>
  )
}

const SearchBar = () => {
  const [input, setInput] = useState('')
  const loadingState = useSelector((state: any) => state.loading)
  const searchString = useSelector((state: any) => state.query)
  const {user_info}=useSelector((state:any)=>state)

  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0()
  const { searchAll, setQuery, loading } = bindActionCreators(actionCreator, dispatch);
  const {  getUserInfo} = bindActionCreators(actionUser, dispatch)

  useEffect(() => {
    if (!input) setQuery('');
    let timer = setTimeout(() => {
      if (input.length > 2 && !loadingState) {
        searchAll(input);
        loading(true);
        setQuery(input);
      }
    }
    , 1000)
    return (() => clearTimeout(timer))
  }, [input]);
  useEffect(() => {
    setInput(searchString);
  }, [searchString]);
  function handleChange(e: any): void {
    setInput(e.target.value);
    console.log(e)
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    searchAll(input);
    // setInput("");
  }

  return (
    <nav className={`${style.navbar}`}>
      <form onSubmit={handleSubmit} className={style.form}>
        <div className={style.search}>
          {/* <img src={searchIcon} width="20px" /> */}
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" ><g><path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z" ></path></g></svg>
          <input
            className={style.inputSearch}
            type="text"
            placeholder="Search"
            value={input}
            onChange={handleChange}
          />
        </div>
      </form>
      <div className={style.icons}>
        <ToggleModeButton/>
        {isLoading ? <img src={swAnim} alt={'Loading...'} width={30} height={30}/>:isAuthenticated ? (<MenuUser username={"username"} />) :
          (<LoginButton/>)
        }
      </div>
    </nav>
  );
};

export default SearchBar;
