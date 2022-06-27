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
          <img src={searchIcon} width="20px" />
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

        {isLoading ? <img src={swAnim} alt={'Loading...'} width={30} height={30}/>:isAuthenticated ? (<MenuUser username={"username"} />) :
          (<LoginButton/>)
        }
      </div>
    </nav>
  );
};

export default SearchBar;
