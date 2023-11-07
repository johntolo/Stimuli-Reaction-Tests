import { useState } from 'react';
import { Link } from 'react-router-dom';

function Visual() {

    const [started, setStarted] = useState(false)
    const [button, setButton] = useState(false)
    const [reactTime, setReactTime] = useState("0")
    const [rectColor, setRectColor] = useState('red')

    function clickHandler() {
        setStarted(true);
        setButton(true);
        setRectColor('red');
        setTimeout(()=>{change()},Math.random() * (3500 - 2000) + 2000)
    }

    async function change() {
        setRectColor('green')
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
            <div className='header'><b>Visual Stimuli Reaction Test</b></div>
            <p className='para'>Press Start to begin and press SPACE when you see the box switch colors</p>
            <button className='button' disabled={button} onClick={clickHandler}>Start</button>
            <div className='rectangle' style={{backgroundColor: rectColor}}></div>
            {started && <p className='reaction'>Reaction Time: {reactTime} seconds</p>}
            <Link to = "/"><p style={{color:'royalblue'}}>Back</p></Link>
        </div>
    );
}

export default Visual;