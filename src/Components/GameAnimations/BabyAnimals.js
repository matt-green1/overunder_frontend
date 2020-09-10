import React, { Component } from 'react';
import Sky from 'react-sky';

// you can pass imported images to Sky
// import myImage from "./media/myImage.png"

class BabyAnimals extends Component {
  render() {
    return (
      <div>
        
        <Sky
          images={{
            /* FORMAT AS FOLLOWS */
            0: "https://img.icons8.com/wired/64/000000/alpaca.png",
            1: "https://img.icons8.com/ios/50/000000/sheep.png",
            2: "https://img.icons8.com/ios/50/000000/whale.png"
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

export default BabyAnimals;