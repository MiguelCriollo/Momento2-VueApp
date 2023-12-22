import React from "react";
import HoroscopeCard from "../Components/HoroscopeCard.tsx";
import signData from '../assets/api.json';

export const MainPage: React.FC = () =>{
    return(
        <div style={{display: 'grid',
            gridTemplateRows: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap:'10px 10px',
        }}>
            {
                signData.map((value)=>(
                    <HoroscopeCard name={value.name} text={value.text}/>
                ))
            }

        </div>
    )
}