import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialprofile';

class SocialProfile extends Component {
    render(){
        const { link, image} = this.props.socialprofile;
        return(
            <div style={{ display: 'inline-block', width: 80, margin: 1 }}>
                <img src={image} alt='social_profile' style={{ width: 40, height: 40, margin: 10}}/>
            </div>
            );
    }
}

class SocialProfiles extends Component {
    render() {
        return(
            <div>
                <h2>Connect with me!</h2>
                <div>
                  {
                    SOCIAL_PROFILES.map(SOCIALPROFILE => {
                        return(
                        <SocialProfile key={SOCIALPROFILE.id} socialprofile={SOCIALPROFILE} />
                    )})
                }
                </div>
            </div>
            );
    }
}
//export the component
export default SocialProfiles;