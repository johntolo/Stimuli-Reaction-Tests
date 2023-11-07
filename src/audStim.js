import sound from './sounds/start-13691.mp3';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Auditory() {

    const [started, setStarted] = useState(false)
    const [reactTime, setReactTime] = useState("0")
    const [button, setButton] = useState(false)
    
    const noise = new Audio(sound)
  
    function playHandler() {
      setStarted(true);
      setButton(true);
      setTimeout(()=>{play()},Math.random() * (3500 - 2000) + 2000)
    }
  
    async function play() {
        noise.play()
        var startTime = Date.now()
        console.log("Start Time: " + startTime);
        await waitingKeypress();
        var endTime = Date.now()
        console.log("End Time: " + endTime);
        var reactionTime = (endTime - startTime)/1000;
        console.log("Reaction Time: " + reactionTime)
        setReactTime(reactionTime)
        setButton(false)
    }
  
    function waitingKeypress() {
      return new Promise((resolve) => {
        document.addEventListener('keydown', onKeyHandler);
        function onKeyHandler(e) {
          if (e.keyCode === 32) {
            document.removeEventListener('keydown', onKeyHandler);
            resolve();
          }
        }
      });
    }
  
    return (
        <div>
            <div className='header'><b>Auditory Stimuli Reaction Test</b></div>
            <p className='para'>Press Start to begin and press SPACE when you hear the sound</p>
            <button className='button' disabled={button} onClick={playHandler}>Start</button>
            {started && <p className='reaction'>Reaction Time: {reactTime} seconds</p>}
            <Link to = "/"><p style={{color:'royalblue'}}>Back</p></Link>
        </div>
    );
}
  
export default Auditory;