
import React from 'react';
import "./assig.css";
import { Box } from '@mui/material';
import Typography from "@mui/material/Typography";


function RightBar() {
    return (
        <div className='statsBody'>
            <Box className='mainBox' style={{ padding: "20px" }} >
                <Typography style={{ fontWeight: "600", fontSize: "20px" }}> Your Stats</Typography>
                <div className='boxdiv'>

                    <Box style={{ background: "#D6E6F1", height: "130px", borderRadius: "10px", padding: "4px", paddingBottom: "15px" }}>
                        <Typography style={{ fontWeight: "600", fontSize: "25px", margin: "25px" }}>12</Typography>
                        <Typography style={{ width: "80%", marginLeft: "10px", }}>Experiences this week</Typography>
                    </Box>

                    <Box style={{ background: "#D6E6F1", height: "130px", borderRadius: "10px", padding: "4px", paddingBottom: "15px" }}>
                        <Typography style={{ fontWeight: "600", fontSize: "25px", margin: "25px" }}>24</Typography>
                        <Typography style={{ width: "80%", marginLeft: "10px", }}>Experiences Overall</Typography>
                    </Box>

                    <Box style={{ background: "#D6E6F1", height: "130px", borderRadius: "10px", padding: "4px", paddingBottom: "15px" }}>
                        <Typography style={{ fontWeight: "600", fontSize: "25px", margin: "25px" }}>12</Typography>
                        <Typography style={{ width: "80%", marginLeft: "10px", }}>Courses this week</Typography>
                    </Box>

                </div>
            </Box>
        </div>
    )
}

export default RightBar