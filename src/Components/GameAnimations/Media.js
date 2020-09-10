import React, { Component } from 'react';
import Sky from 'react-sky';

// you can pass imported images to Sky
// import myImage from "./media/myImage.png"

class Media extends Component {
  render() {
    return (
      <div>
        
        <Sky
          images={{
            /* FORMAT AS FOLLOWS */
            0: "https://img.icons8.com/carbon-copy/100/000000/retro-tv.png",
            1: "https://img.icons8.com/carbon-copy/100/000000/youtube.png",
            2: "https://img.icons8.com/pastel-glyph/64/000000/old-time-camera--v2.png"
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

export default Media;