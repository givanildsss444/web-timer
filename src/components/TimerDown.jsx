import { use, useEffect, useRef, useState } from 'react'
import './ModelsTimes.css'

export default function TimerDown() {
    
    const [minutes, setMinutes] = useState(15)
    const [seconds, setSeconds] = useState(0)
    const [running, setRunning] = useState(true)
    const [define, setDefine] = useState(false)
    
    const defineMin = useRef()
    const defineSec = useRef()

    console.log(defineMin)
    console.log(defineSec)


    let timer

    useEffect(() => {
        
        if(!running){

            timer = setInterval(() => {

                setSeconds(seconds - 1)

                if(seconds == 0 ){
                    setMinutes(minutes - 1)
                    setSeconds(59)

                }

            }, 1000)

            return() => clearInterval(timer)

        }
    
    })



    function run() {

        if(define == false){

            if(running == true){
                setRunning(false)
            }
            if(running == false){
                setRunning(true)
            }
        }
    }



    function modeDefine() {

        if(running == true){

            if(define == true){
                setDefine(false)
            }
            if(define == false){
                setDefine(true)
            }

            edit()            

        }

    }

    function renice() {

        setMinutes(15)
        setSeconds(0)

    }

    function edit() {

        setMinutes(defineMin.current.value < 10 ? `0${defineMin.current.value}` : defineMin.current.value)
        setSeconds(defineSec.current.value < 10 ? `0${defineSec.current.value}` : defineSec.current.value)

    }


    return(

        <div className='container'>

            <h1>Timer that will over</h1>

            <div id='timer'>

                {define ? (
                    <div>

                        <input type="number" ref={defineMin} placeholder={minutes < 10 ? `0${minutes}` : minutes}/>:
                        <input type="number" ref={defineSec} placeholder={seconds < 10 ? `0${seconds}` : seconds}/>

                    </div>): 

                <span>{minutes < 10 ? `0${minutes}` : minutes}
                :{seconds < 10 ? `0${seconds}` : seconds}</span>}

            </div>


            <div id='buttons'>

                <button onClick={run}>{running ? 'Iniciar' : 'Parar'}</button>
                <button onClick={renice}>Reniciar</button>
                <button onClick={modeDefine}>{!define ? 'Definir' : 'Confirmar'}</button>
                
              

            </div>

        </div>

    )


}