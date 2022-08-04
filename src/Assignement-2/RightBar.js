
import React from 'react'

import { Box } from '@mui/material'
import Typography from "@mui/material/Typography";

import Img1 from "../Assets/person1.png";
import Img2 from "../Assets/person2.png";

function RightBar() {
    return (
        <div style={{ width: "100%" }}>

            <Box style={{ background: "#ffff", width: "100%", paddingLeft: "20px", paddingTop: "30px", paddingRight: "10px", paddingBottom: "30px", borderRadius: "10px" }}>

                <Typography style={{ fontWeight: "600", fontSize: "20px", marginBottom: "30px" }}> New mentors on Edvolve</Typography>

                <box style={{ display: "flex" }}>
                    <img  alt="data" src={Img1} style={{ width: "150px", height: "150px" }} />
                    <div style={{ width: "210px", marginLeft: "20px", padding: "5px" }}>
                        <Typography style={{ fontWeight: "600", fontSize: "20px" }}>Ahila Pillai</Typography>
                        <Typography style={{ fontWeight: "400", fontSize: "15px" }}>Fitness enthusiast, and founder of fitnessme.io! Can't wait to teach you kids.</Typography>
                        <Typography style={{ fontWeight: "600", fontSize: "16px", color: "green" }}>SEE PROFILE</Typography>
                    </div>
                </box>

                <div style={{ height: "10px" }}></div>

                <box style={{ display: "flex" }}>
                    <img  alt="data" src={Img2} style={{ width: "150px", height: "150px" }} />
                    <div style={{ width: "210px", marginLeft: "20px", padding: "5px" }}>
                        <Typography style={{ fontWeight: "600", fontSize: "20px" }}>Maria Dunham</Typography>
                        <Typography style={{ fontWeight: "400", fontSize: "15px" }}>Love all things science! A Neuroscience major and excited about Astronomy.</Typography>
                        <Typography style={{ fontWeight: "600", fontSize: "16px", color: "green" }}>SEE PROFILE</Typography>
                    </div>
                </box>

            </Box>

        </div>
    )
}

export default RightBar