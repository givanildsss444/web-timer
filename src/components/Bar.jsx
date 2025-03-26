import { Link } from 'react-router-dom';
import './Bar.css'

export default function Bar() {

    return(

        <div className='bar-container'>

            <Link to='/'>
                Timer
            </Link>

            <Link to='/timerdown'>
               Timer Down
            </Link>

        </div>

    );

}