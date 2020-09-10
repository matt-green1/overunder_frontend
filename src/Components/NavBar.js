import React from 'react'
// import { NavLink, withRouter } from 'react-router-dom'
import {Menu, Segment} from 'semantic-ui-react'

function NavBar(props) {
    return (
        
        <ul>
            {props.currentUser ? 
            
                <>
                    <Segment className='ui top fixed menu' inverted> 
                        <Menu inverted pointing secondary>
                            <Menu.Item name='Log Out' onClick={props.clearUser} />
                            <Menu.Item name='Profile' href={`/user/${props.currentUser.id}`} />
                            <Menu.Item name='All Games' href='/games' />
                            <Menu.Item name='Top Scores' href='/topscores' />
                        </Menu>
                        <Menu id='marginfix' className="right menu" inverted>
                            <Menu.Item ><i className="hand point up outline icon"></i>Over/Under&nbsp;<i className="hand point down outline icon"></i></Menu.Item>
                        </Menu>
                     </Segment>
                    
                </>
            :   
                    <>
                          
                            <Segment className='ui top fixed menu' inverted>

                                <Menu className="right menu" inverted>
                                    <Menu.Item><i className="hand point up outline icon"></i>Over/Under&nbsp;<i className="hand point down outline icon"></i></Menu.Item>

                                </Menu>
                            </Segment>
                           
                    </>
            }

        </ul>
    )

}

export default NavBar