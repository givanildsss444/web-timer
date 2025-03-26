import { useEffect, useState } from 'react'
import './ModelsTimes.css'

export default function Timer() {

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [running, setRunning] = useState(true)
    

    let timer

     useEffect(() => {

        if(!running){
            
            timer = setInterval(() => {

                setSeconds(seconds + 1)

                if(seconds === 59){

                    setMinutes(minutes + 1)
                    setSeconds(0)

                }

            }, 1000 )
        }

        return() => clearInterval(timer)

     })

    function run() {
     
        if(running == false){
            setRunning(true)
        }
        if(running == true){
            setRunning(false)
        }

        
    }

    function restart() {

        setMinutes(0)
        setSeconds(0)
        setRunning(true)

    }

    return(

        <div className='container'>

            <h1>Timer that will help me</h1>

            <div id='timer'>

                {minutes < 10 ? `0${minutes}` : minutes }:{seconds < 10 ? `0${seconds}` : seconds}

            </div>


            <div id='buttons'>

                <button onClick={run}>{running ? 'Continuar' : 'Pause'}</button>
                <button onClick={restart}>Reniciar</button>

            </div>

        </div>

    )


}