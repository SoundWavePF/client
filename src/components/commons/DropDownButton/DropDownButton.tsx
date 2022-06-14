import React from 'react'
import { DropdownButton, Dropdown, SplitButton } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreator from '../../../redux/actions/action_player';
import * as actionCreatorUser from '../../../redux/actions/action_user';
import Swal from 'sweetalert2';

interface myProps {
  item: any
}

const DropDownButton: React.FC<myProps> = (props: myProps) => {
  const playlists = useSelector((state: any) => state.library_artist.card)
  const userId = useSelector((state: any) => state.library_artist.list.id)
  const dispatch = useDispatch();
  const { addToQueue, addToPlaylist } = bindActionCreators(actionCreator, dispatch);
  const { newPlaylist } = bindActionCreators(actionCreatorUser, dispatch)
  async function addPlaylist(){
    const { value: playlistName } = await Swal.fire({
      title: 'New Playlist',
      input: 'text'
    })
    if(playlistName){
      Swal.fire('Playlist created!');
      newPlaylist(userId, playlistName);
    }
  }
  return (
    <div>
        <DropdownButton id="dropdown-basic-button" variant="warning" title="">
                <Dropdown.Item href={props.item.Artists ? `/artist/${props.item.Artists[0].id}` : undefined}>Go to Artist</Dropdown.Item>
                <Dropdown.Item href={`/album/albumid`}>Go to Album</Dropdown.Item>
                <Dropdown.Item onClick={() => addToQueue(props.item)}>Add to queue</Dropdown.Item>
                {
                    <div>
                    {['end'].map((direction) => (
                      <SplitButton
                        key={direction}
                        id={`dropdown-button-drop-${direction}`}
                        drop={'end'}
                        variant="warning"
                        title='➕ Playlist'
                      >
                        {playlists.length ? playlists.map((p: any) => {return <Dropdown.Item onClick={() => addToPlaylist(p.id, props.item.id)}>{p.name}</Dropdown.Item>}) : null}
                        <Dropdown.Item onClick={addPlaylist}>New Playlist</Dropdown.Item>
                      </SplitButton>
                    ))}
                  </div>
                }
            </DropdownButton>
    </div>
  )
}

export default DropDownButton