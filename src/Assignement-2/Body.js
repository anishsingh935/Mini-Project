import React from 'react';
import MenuCard from "./menuCard";
import RightBar from './RightBar';
import Stats from "./stats";
import "./assig.css"
import Typography from '@mui/material/Typography';

function index() {
    return (
        <div className='bodycontainer'>
            <h2>🖐 Welcome back, Harshita! </h2>
            <Typography style={{ marginTop: "10px", marginLeft: "5px" }}>How are we Edvolving today?</Typography>

            <div className='onebyone'>
                <div className='leftbar'>
                    <MenuCard title={"Your upcoming experiences"} />

                    <div></div>

                    <div className='notTobeDisplay'>
                        <MenuCard title={"Your upcoming classes of courses"} />
                    </div>
                </div>

                <div className='rightbar'>
                    <div className='notTobeDisplay'>
                        <Stats />
                    </div>

                    <div style={{ height: "15px" }} ></div>

                    <RightBar />
                </div>
            </div>
        </div>
    )
}

export default index