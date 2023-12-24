import React, { useState} from 'react';
import {Button, Card, Input, Tooltip} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import {fetchDebtsSri, fetchNumberApi} from "../Services/ConsumeApis.tsx";

interface userSri{
    contribuyente:{
        identificacion:string;
        clase:string;
        nombreComercial:string;
    }
}
const DebtsCard: React.FC = ()=>{
    const [idTexto, setIdTexto] = useState('0105565444');
    const [resultado, setResultado] = useState<userSri | null>(null);
    const [sumDig, setSumDig]=useState(0);
    const [numFact, setNumFact]=useState('')
    const getIdData = (id:string) => {
        let num=0;
        fetchDebtsSri(id).then((value:userSri) => {
            setResultado(value);
            num=calculateSumDig(value.contribuyente.identificacion);
            setIdTexto('');
        }).then(()=>{
            fetchNumberApi(num).then((value) => {
                setNumFact(value);
            });
        }).catch(()=>{
            setResultado(null);
        });


    };
    const calculateSumDig=(id:string)=>{
        let totalSum=0;
        id.split('').forEach((value)=>{
            totalSum+=parseInt(value)
        })
        setSumDig(totalSum);
        return totalSum;
    }
    const handleInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setIdTexto(event.target.value);
    };


    return (
    <div>
        <div style={{ display: 'flex', alignItems: 'center' , padding: '10px'}}>
            <Input type="text"
                   placeholder="Ingrese su identificacion"
                   value={idTexto}
                   onChange={handleInputChange}/>
            <Tooltip title="search">
                <Button type="primary" shape="circle" icon={<SearchOutlined />} onClick={() => getIdData(idTexto)}/>
            </Tooltip>
        </div>
        {resultado &&
        <Card title={resultado?.contribuyente.nombreComercial} bordered={false} style={{ width: 'auto' }}>
            <h2 style={{margin:'0px'}}>{resultado?.contribuyente.clase}</h2>
            <div>
                {resultado?.contribuyente.identificacion.split('').map((value, index) => (
                    <img key={index} src={`../../public/Numbers/${value}.png`} alt={value} style={{width:'15px'}}/>
                ))}
            </div>
            <h4>La suma de tus digitos da:{sumDig}</h4>
            <p>Un dato interesate de este numero es:</p>
            <p>{numFact}</p>
        </Card>
        }
    </div>


)};

export default DebtsCard;
