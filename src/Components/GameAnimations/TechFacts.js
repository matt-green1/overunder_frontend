import React, { Component } from 'react';
import Sky from 'react-sky';

// you can pass imported images to Sky
// import myImage from "./media/myImage.png"

class TechFacts extends Component {
  render() {
    return (
      <div>
        
        <Sky
          images={{
            /* FORMAT AS FOLLOWS */
            0: "https://img.icons8.com/wired/64/000000/mouse-left-click.png",
            1: "https://img.icons8.com/ios-filled/50/000000/my-computer.png",
            2: "https://img.icons8.com/ios-filled/50/000000/walkie-talkie-radio.png"
          }}
          how={80} /* Pass the number of images Sky will render chosing randomly */
          time={40} /* time of animation */
          size={'64px'} /* size of the rendered images */
          background={'aquamarine'} /* color of background */
        />
      </div>
    );
  }
}

export default TechFacts;