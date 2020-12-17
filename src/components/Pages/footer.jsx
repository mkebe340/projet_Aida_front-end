import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Avatar, IconButton } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import '../style/footer.css'

class Footer extends React.Component {
    render(){
        return(
            <div>
                
                <div className=" footer  ">
                    <div className="container">
                        <div className="row justify-content-around">
                            <div>
                                <h5>InspireNews</h5>
                            <p><Link to="/APropos"> A propos</Link></p> 
                             <p>   <Link to="QuiSommesNous">qui somme Nous?</Link></p>
                              <p> <Link to="/Contact">contact</Link></p> 
                            </div>
                            <div>
                                <h5>Réseaux sociaux</h5>
                                <IconButton> <InstagramIcon style={{ color: "rgb(205, 248, 86)" }}/></IconButton>
                                <IconButton><TwitterIcon style={{ color: "rgb(205, 248, 86)" }}/></IconButton>
                                <IconButton> <FacebookIcon style={{ color: "rgb(205, 248, 86)" }}/></IconButton>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
export default Footer;