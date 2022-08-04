import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Box from '@mui/material/Box';

import "./home.css";

const Home = () => {
    const navigate = useNavigate();
    const assig1 = () => {
        navigate("/assig1");
    }
    const assig2 = () => {
        navigate("/assig2");
    }

    return (
        <>
            <div className="main">
                <h1 >Edvolve Interview - Coding Round</h1>
                <div className="BoxParent">
                    <Box className="mainBox">
                        <p style={{ marginBottom: "10px" }}>Using Github Api, show all the issues of <span><a href="https://github.com/PHP-FFMpeg/PHP-FFMpeg" target="_blank">Github</a> </span>
                            repository in a table and filter the results with the word passed in a textbox.</p>
                        <Button variant="contained" onClick={assig1} className="mainButton1">First Assignments</Button>
                    </Box>
                    <Box className="mainBox">
                        <p style={{ marginBottom: "10px" }}>Replicate the design in React, the design is a dashboard UI made on Figma. Presented are a web version and a mobile UI.
                            Both need to be designed, with 70% for web and 30% for mobile UI.
                        </p>
                        <Button variant="contained" className="mainButton2" onClick={assig2} >Second Assignments</Button>
                    </Box>

                </div>
            </div>
        </>
    );
};

export default Home;