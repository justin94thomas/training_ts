import React from 'react';
import { useNavigate } from "react-router";
import './styles.css';

const Header: React.FC = () =>{
const navigate = useNavigate();
    return (<>
        <div className='header-main'>
            <h4>React + Typescript and Node Training</h4>
            <button onClick={() => navigate('/')}>Back to Dashboard</button>
        </div>
    </>)
}

export default Header;