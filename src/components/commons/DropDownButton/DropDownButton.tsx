import React from 'react'
import { DropdownButton, Dropdown, SplitButton } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreator from '../../../redux/actions/action_player';

interface myProps {
  item: any
}

const DropDownButton: React.FC<myProps> = (props: myProps) => {
  console.log(props);
  const dispatch = useDispatch();
  const { addToQueue } = bindActionCreators(actionCreator, dispatch);
  return (
    <div>
        <DropdownButton id="dropdown-basic-button" variant="warning" title="">
                <Dropdown.Item href="#/action-1">Artist</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Album</Dropdown.Item>
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
                        <Dropdown.Item eventKey="1">Favorites</Dropdown.Item>
                        <Dropdown.Item eventKey="2">To dance</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Car music</Dropdown.Item>
                        <Dropdown.Item eventKey="4">To study</Dropdown.Item>
                      </SplitButton>
                    ))}
                  </div>
                }
            </DropdownButton>
    </div>
  )
}

export default DropDownButton