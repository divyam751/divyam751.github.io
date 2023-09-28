import React, { useState } from "react";
import Typewriter from "typewriter-effect";

function TypewriterComponent() {
  const [typewriterState, setTypewriterState] = useState(false);

  return (
    <div
      className='button-container'
      onMouseEnter={() => setTypewriterState(true)}
      onMouseLeave={() => setTypewriterState(false)}
    >
      <div className='book'>
        <p className='book-text'>
          {typewriterState ? (
            <Typewriter
              options={{
                loop: false,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("mi.divyam@gmail.com")
                  .pause(2000)
                  .start();
              }}
            />
          ) : (
            ""
          )}
        </p>
        <div className='cover'>
          <p className='cover-text'>Send an email</p>
        </div>
      </div>
    </div>
  );
}

export default TypewriterComponent;
