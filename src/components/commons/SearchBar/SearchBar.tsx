import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreator from "../../../redux/actions/action_player";
// import {searchAll} from "../../../redux/actions/action_player";
import style from "./SearchBar.module.css";
import searchIcon from "../../../assets/search_icon.png";
import userIcon from "../../../assets/user_icon.png";
import bellIcon from "../../../assets/bell.png";
import MenuUser from "./MenuUser";
import { useAuth0 } from "@auth0/auth0-react";

const SearchBar = () => {
  const [input, setInput] = useState("")
  const loadingState = useSelector((state: any) => state.loading)

  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading, loginWithRedirect } = useAuth0()
  const { searchAll, setQuery, loading } = bindActionCreators(actionCreator, dispatch);
  useEffect(() => {
    if (input && !loadingState) searchAll(input);
    if (input) loading(true)
    setQuery(input);
  }, [input]);
  function handleChange(e: any): void {
    setInput(e.target.value);
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    setInput("");
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
