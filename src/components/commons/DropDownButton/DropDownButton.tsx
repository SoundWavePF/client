import React, { useState } from "react";
import { DropdownButton, Dropdown, SplitButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreator from "../../../redux/actions/action_player";
import * as actionCreatorUser from "../../../redux/actions/action_user";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import styles from "./DropDownButton.module.css";
import useAuth from '../../../utils/useAuth';

interface myProps {
  item: any;
}

const DropDownButton: React.FC<myProps> = (props: myProps) => {
  const playlists = useSelector((state: any) => state.library_artist.card);
  const { user, isAuthenticated } = useAuth();
  const email: string | undefined = user?.email;
  const dispatch = useDispatch();
  const { addToQueue, addToPlaylist } = bindActionCreators(
    actionCreator,
    dispatch
  );
  const { newPlaylist } = bindActionCreators(actionCreatorUser, dispatch);
  async function addPlaylist() {
    if (email !== undefined) {
      const { value: playlistName } = await Swal.fire({
        title: "New Playlist",
        input: "text",
        inputLabel:'Enter a playlist name',
        confirmButtonColor: '#ffee32',
      });
      if (playlistName) {
        Swal.fire({
          title:"Playlist created!",
          html: `<span>Song added to <b>${playlistName}</b></span>`,
          icon: 'success',
          confirmButtonColor: '#ffee32',
        }
          );
        newPlaylist(email, playlistName, props.item.id);
      }
    }
  }
  return (
    <div>
      <DropdownButton
        id="dropdown-basic-button"
        variant="warning"
        title="•••"
        bsPrefix={styles.dropdown}
      >
        <Dropdown.Item>
          <Link
            className={styles.link}
            to={`/artist/${props.item.artists[0].id}`}
          >
            Go to Artist
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className={styles.link} to={`/album/${props.item.album.id}`}>
            Go to Album
          </Link>
        </Dropdown.Item>
        <Dropdown.Item onClick={() => addToQueue(props.item)}>
          Add to queue
        </Dropdown.Item>
        {isAuthenticated && (
          <div>
            {["end"].map((direction) => (
              <SplitButton
                key={direction}
                id={`dropdown-button-drop-${direction}`}
                drop={"end"}
                variant="warning"
                title="♬ Playlist"
                bsPrefix={styles.dropdrop}
              >
                {playlists.length
                  ? playlists.map((p: any, i:number) => {
                      return (
                        <Dropdown.Item
                          key={i}
                          onClick={() => addToPlaylist(p.id, props.item.id)}
                        >
                          {p.name}
                        </Dropdown.Item>
                      );
                    })
                  : null}
                <Dropdown.Item onClick={() => addPlaylist()}>
                  New Playlist
                </Dropdown.Item>
              </SplitButton>
            ))}
          </div>
        )}
      </DropdownButton>
    </div>
  );
};

export default DropDownButton;
