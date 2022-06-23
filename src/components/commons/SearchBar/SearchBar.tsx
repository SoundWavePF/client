import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreator from "../../../redux/actions/action_player";
import * as actionUser from "../../../redux/actions/action_user";
import style from "./SearchBar.module.css";
import searchIcon from "../../../assets/search_icon.png";
import userIcon from "../../../assets/user_icon.png";
import bellIcon from "../../../assets/bell.png";
import MenuUser from "./MenuUser";
import { useAuth0 } from "@auth0/auth0-react";

const SearchBar = () => {
  const [input, setInput] = useState("")
  const loadingState = useSelector((state: any) => state.loading)
  const searchString = useSelector((state: any) => state.query)
  const {user_info}=useSelector((state:any)=>state)

  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0()
  const { searchAll, setQuery, loading } = bindActionCreators(actionCreator, dispatch);
  const {  getUserInfo} = bindActionCreators(actionUser, dispatch)

  useEffect(() => {
    getUserInfo(user?.email)
    setQuery(input);
    if (input && !loadingState) {
      searchAll(input);
      loading(true)
    }
  }, [input]);
  useEffect(() => {
    setQuery('')
    return () => { setQuery('') };
  }, []);
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
        {isAuthenticated ? (<MenuUser username={"username"} />) :
          (<button onClick={() => loginWithRedirect()}
            className="btn btn-outline-warning" >Log In</button>)
        }
      </div>
    </nav>
  );
};

export default SearchBar;
