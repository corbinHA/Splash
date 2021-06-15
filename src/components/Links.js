import React from 'react'
import { useHistory } from 'react-router-dom'
import './Links.css'

function Links() {
    
    const history = useHistory();

    const routeChange = () =>{ 
        let path = 'https://grovergaming.com/about-us/'; 
        history.push(path);
    }

    return (
        <div className="links-wrapper">
            <div className="links-holder" >
                <button className="orange-square" onClick={routeChange}>
                </button>
                <div className="blue-square">Comic sans</div>
                <div className="yellow-square">
                    <div className="text">
                        Arial
                    </div>
                </div>
                <div className="purple-square "></div>
            </div>
        </div>
    )
}

export default Links
