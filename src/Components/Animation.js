import React, { Component } from 'react';
import Sky from 'react-sky';

// you can pass imported images to Sky
// import myImage from "./media/myImage.png"

class Animation extends Component {
  render() {
    return (
      <div>
        
        <Sky
          images={{
            /* FORMAT AS FOLLOWS */
            0: "https://img.icons8.com/pastel-glyph/64/000000/circled-up.png",  /* You can pass as many images as you want */
            1: "https://img.icons8.com/ios-filled/50/000000/question-mark.png",
            2: "https://img.icons8.com/dotty/80/000000/brainstorm-skill.png",
            3: "https://img.icons8.com/ios-filled/50/000000/brain.png"
          }}
          how={90} /* Pass the number of images Sky will render chosing randomly */
          time={40} /* time of animation */
          size={'50px'} /* size of the rendered images */
          background={'aquamarine'} /* color of background */
        />
      </div>
    );
  }
}

export default Animation;