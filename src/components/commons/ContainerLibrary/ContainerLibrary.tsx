import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import CardItem from "../CardContainer/CardItem";
import ItemList from "../CardsComponents/ItemList/ItemList";
import Styled from "../ContainerLibrary/ContainerLibrary.module.css";
import * as actionUser from "../../../redux/actions/action_user";

import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";

export const ContainerLibrary = () => {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  const { updateUser, getUserInfo } = bindActionCreators(actionUser, dispatch);

  const state = useSelector((state): any => state);
  const { user_info } = useSelector((state): any => state);
  const location = useLocation();

  useEffect(() => {
    getUserInfo(user?.email);
  }, []);

  if (isAuthenticated) {
    switch (location.pathname) {
      case "/favorites":
        return (
          <div className={Styled.ContainerLibrary}>
            <div className={Styled.User}>
              <img
                src={
                  isAuthenticated
                    ? user_info?.image_avatar
                    : "https://cdn.discordapp.com/attachments/974053763335716884/985759356895260713/token_1_3.png"
                }
                alt=""
              />
              {state.library_artist.list.username ? (
                <h1>{state.library_artist.list.username}</h1>
              ) : null}
            </div>

            <div className={Styled.ToolBar}>
              <div>
                {" "}
                <NavLink to={"/favorites"}>
                  {" "}
                  <h4 className={Styled.actived}>Favorite songs</h4>
                </NavLink>{" "}
              </div>
              <div>
                {" "}
                <NavLink to={"/playlists"}>
                  {" "}
                  <h4 className={Styled.desatived}>Playlists</h4>
                </NavLink>{" "}
              </div>
            </div>

            <div className={Styled.Column}>
              <h4>Name</h4>
              <h4>Duration</h4>
            </div>

            {state.library_artist.list.liked_songs &&
              state.library_artist.list.liked_songs.map(
                (s: any, index: number) => (
                  <div key={index} className={Styled.ContainerFavorite}>
                    {" "}
                    <ItemList item={s}></ItemList>{" "}
                  </div>
                )
              )}
          </div>
        );

      case "/playlists":
        return (
          <div className={Styled.ContainerLibrary}>
            <div className={Styled.User}>
              <img
                src={
                  isAuthenticated
                    ? user_info?.image_avatar
                    : "https://cdn.discordapp.com/attachments/974053763335716884/985759356895260713/token_1_3.png"
                }
                alt=""
              />

              {state.library_artist.list.username ? (
                <h1>{state.library_artist.list.username}</h1>
              ) : null}
            </div>

            <div className={Styled.ToolBar}>
              <div>
                {" "}
                <NavLink to={"/favorites"}>
                  {" "}
                  <h4 className={Styled.desatived}>Favorite songs</h4>
                </NavLink>{" "}
              </div>
              <div>
                {" "}
                <NavLink to={"/playlists"}>
                  {" "}
                  <h4 className={Styled.actived}>Playlists</h4>
                </NavLink>{" "}
              </div>
            </div>

            <div className={Styled.ContainerPlaylist}>
              {state.library_artist.card
                ? state.library_artist.card.map((e: any) => (
                    <CardItem item={e}></CardItem>
                  ))
                : null}
            </div>
          </div>
        );

      default:
        return <div></div>;
    }
  } else {
    if (location.pathname === "/favorites") {
      return (
        <div className={Styled.Registerto}>
          <p>register to add to favorites</p>
        </div>
      );
    } else {
      return (
        <div className={Styled.Registerto}>
          <p>register to add playlists</p>
        </div>
      );
    }
  }
};
