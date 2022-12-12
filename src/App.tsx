import { useEffect } from "react";
import { Routes, Route } from "react-router";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/views/Landing/Landing";
import SignUp from "./components/views/SignUp/SignUp";
import Home from "./components/views/Home/Home";
import Login from "./components/views/Login/Login";
import AdminPanel from "./components/views/AdminPanel/AdminPanel";
import AlbumPlaylist from "./components/views/AlbumPlaylist/AlbumPlaylist";
import Library from "./components/views/Library/Library";
import Error404 from "./components/views/error404/error404";
import UserSettings from "./components/views/UserSettings/UserSettings";
import Genre from "./components/views/Genre/Genre";
import FileUpload from "./components/views/FileUpload/FileUpload";
import Player from "./components/commons/Player/Player";
import Top from "./components/views/Top/Top";
import About2 from "./components/views/about/About2";
import Artist from "./components/views/Artist/Artist";
import PanelArtist from "./components/views/PanelArtist/PanelArtist";
import * as actionCreator from "./redux/actions/action_user";
import * as actionCreator2 from "./redux/actions/action_admin";
import LoadingPage from "./components/commons/LoadingPage/LoadingPage";
import useAuth from "./utils/useAuth";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const email = user?.email;
  const dispatch = useDispatch();
  const { getUserInfo, getLibrary } = bindActionCreators(actionCreator, dispatch);
  const { userAdmin } = bindActionCreators(actionCreator2, dispatch);
  useEffect(() => {
    if(email){
      getUserInfo(email);
      userAdmin(email);
      getLibrary(email);
    }
  }, [email]);

  return (
    <div id={"appSW"} className="light-mode">
      <Routes>
        <Route path="/" element={<><Landing /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route path="/about" element={<><About2 /></>} />
        <Route
          path="/home"
          element={
            <>
              <Home />
              <Player />
            </>
          }
        />
        <Route
          path="/playlists"
          element={
            <>
              <Library />
              <Player />
            </>
          }
        />
        <Route
          path="/favorites"
          element={
            <>
              <Library />
              <Player />
            </>
          }
        />
        <Route
          path="/top"
          element={
            <>
              <Top />
              <Player />
            </>
          }
        />

        <Route
          path="/artist/:id"
          element={
            <>
              <Artist />
              <Player />
            </>
          }
        />
        <Route
          path="/album/:id"
          element={
            <>
              <AlbumPlaylist />
              <Player />
            </>
          }
        />
        <Route
          path="/playlist/:id"
          element={
            <>
              <AlbumPlaylist />
              <Player />
            </>
          }
        />
        <Route
          path="/genre/:id"
          element={
            <>
              <Genre />
              <Player />
            </>
          }
        />

        <Route path="/settings" element={isAuthenticated ? <><UserSettings/><Player/></>: <Error404 />} />
        <Route path="/panel_artist" element={isLoading?<LoadingPage/>:<><PanelArtist/><Player/></>} />
        <Route path="/admin" element={isLoading?<LoadingPage/>:<AdminPanel />} />
        <Route path="/file" element={<FileUpload />} />
        <Route path="/OAUTH/:token" element={<LoadingPage/>}/>

        <Route path="/*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
