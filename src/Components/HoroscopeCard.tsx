import {Col, Row} from "antd";
//import {fetchTodayHoroscope} from "../Services/ConsumeApis.tsx";
interface apiData{
    name:string;
    text:string;
}

const HoroscopeCard:React.FC<apiData> = ({name,text}:apiData) => (
    <div style={{
        width:'300px',
        height: '300px',
        background: 'black',
        borderRadius: '15px',
        padding: '10px'
    }}>
        <Row>
            <Col span={12}>
                <div>
                    <img src={`../../public/${name}.png`} alt="AS" style={{
                        width: '100% ',
                        height: 'auto',
                        borderRadius: '10px'
                    }}/>
                </div>

            </Col>
            <Col span={12} style={{margin: '100'}}>
                <div style={{margin: '10px'}}>
                    <p style={{textAlign: 'left', textSizeAdjust: '100px'}}>{text}</p>
                </div>

            </Col>
        </Row>
    </div>
)

export default HoroscopeCard;