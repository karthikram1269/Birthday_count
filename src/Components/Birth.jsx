import { useState } from 'react';
import bday from './db.js';

export default function App() {
    const [data, setData] = useState(bday);

    return (
        <div style={{
            textAlign: "center",
            height:"550px",
            margin:"50px 400px",
            boxShadow:"20px 10px 10px 10px black",
            width:"600px"
        }}>
            <h1 style={{paddingTop:"15px"}}>{data.length} BIRTHDAYS TODAY </h1>
            <div style={{marginBottom:"10px"}}>
            {
                data.map(x => (
                    <div key={x.id} style={{backgroundColor:"whitesmoke",fontSize:"30px",display:"flex",justifyContent:"space-around",width:"500px",marginLeft:"50px"}}>
                        <img src={x.image} alt={x.id} style={{ height: "60px", width: "90px" ,borderRadius:"20px",marginLeft:"20px"}} />
                        <span style={{fontSize:"20px",marginTop:"20px"}}>{x.name}, {x.age}years old</span>
                    </div>
                ))
            }
            </div>
            <button style={{padding:"10px",margin:"30px"}} onClick={() => setData([])}>Clear All</button>
        </div>
    );
}
