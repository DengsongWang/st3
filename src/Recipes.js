import {Link} from 'react-router-dom';
import { Container } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import recipes from './img/recipes.PNG';


// import {DateTimePicker} from 'react-date-picker';


const Recipes = () => {
    return (  
        <div className="Recipes">
            <Container style={{marginTop:'30px', height: '700px'}}>
                <img src={recipes} alt="" width="1000" height="500" />
                <Link to="/Appointment">
                            <p style={{ fontSize:'28px', color:'#BFA524', display:'flex', justifyContent:'flex-end'}}>
                                Go back to appointment
                            </p>
                        </Link>


                       
                

            </Container>
        </div>
    );
}
 
export default Recipes;