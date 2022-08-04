import React, { useState } from "react";
import axios from "axios";
import "./assig1.css";
import { userColumns } from "./Coloumn";
import NavBar from "../Assignement-2/Navbar";
import { useTableSearch } from "./userTable";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const fetchUsers = async () => {
    const { data } = await axios.get(
        "https://api.github.com/repos/PHP-FFMpeg/PHP-FFMpeg/issues"
    );
    return { data };
};

export default function App() {
    const [searchVal, setSearchVal] = useState(null);
    const { filteredData } = useTableSearch({
        searchVal,
        retrieve: fetchUsers
    });

    return (
        <>
            <NavBar />
            <div className="inputContainer">
                <input
                    onChange={e => setSearchVal(e.target.value)}
                    placeholder="Search"
                    enterButton
                    className="inputBar"
                />
            </div>
            <br /> <br />

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                    <TableHead style={{ backgroundColor: "rgb(232, 134, 134)" }} >
                        <TableRow >
                            <TableCell style={{ fontWeight: "700", fontSize: "20px" }} >{userColumns[0].title}</TableCell>
                            <TableCell style={{ fontWeight: "700", fontSize: "20px" }} align="right">{userColumns[1].title}</TableCell>
                            <TableCell style={{ fontWeight: "700", fontSize: "20px" }} align="right">{userColumns[2].title}</TableCell>
                            <TableCell style={{ fontWeight: "700", fontSize: "20px" }} align="right">{userColumns[3].title}</TableCell>
                            <TableCell style={{ fontWeight: "700", fontSize: "20px" }} align="right">{userColumns[4].title}</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredData.map((row) => (
                            <TableRow
                                key={row.title}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell align="right">{row.number}</TableCell>
                                <TableCell align="right">{row.state}</TableCell>
                                <TableCell align="right">{row.created_at}</TableCell>
                                <TableCell align="right">{row.updated_at}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
