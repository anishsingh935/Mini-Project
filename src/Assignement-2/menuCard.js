import React from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button, CardActionArea, CardActions } from "@mui/material";

import RemindIcon from "../Assets/remindIcon.png";
import LiveIcon from "../Assets/liveIcon.png";
import Img1 from "../Assets/temple.png";
import Img2 from "../Assets/grass.png";
import Img3 from "../Assets/photo.png";


const MenuCard = (props) => {
    const handlroute = () => {
    }
    return (
        <div style={{ width: "100%", background: "#ffff", marginTop: "20px", paddingTop: "20px", paddingBottom: "20px", borderRadius: "10px" }}>
            <Container sx={{ marginBottom: "20px" }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    display="flex"
                >
                    <Grid item>
                        <Typography style={{ fontWeight: "700", fontSize: "20px", }}>{props.title} </Typography>
                    </Grid>
                    <Grid item className="buttontransition">
                        <Button variant="Text" onClick={handlroute} style={{ textTransform: "none", fontSize: "15px", fontWeight: "600" }}>see all</Button>
                    </Grid>
                </Grid>
            </Container>
            <Container>
                <Grid container spacing={2} sx={{ marginBottom: "20px" }}>
                    <Grid item xs={12} sm={6} md={12} lg={4} xl={4} className="changetransition">
                        <Card variant="outlined" style={{ paddingBottom: "15px", boxShadow: "1px 1px 1px 1px #ccc" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image={Img1}
                                    alt="Grain-img"
                                />
                                <CardContent style={{ paddingLeft: "15px" }}>
                                    <Typography style={{ fontWeight: "600", fontSize: "20px", marginBottom: "10px" }}>
                                        <img alt="Live" src={LiveIcon} style={{ width: "20px", height: "6x", marginRight: "1px" }} />
                                        Live Now
                                    </Typography>
                                    <Typography> Learn about history of Hampi and the architecture </Typography>
                                    <Typography> By Ltihas Chronicles </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{ paddingLeft: "15px" }} >
                                <Button
                                    size="small"
                                    color="success"
                                    variant="contained"
                                    sx={{ width: "40%" }}
                                    style={{ textTransform: "none" }}

                                >
                                    Join now
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={12} lg={4} xl={4} className="changetransition">
                        <Card variant="outlined" style={{ paddingBottom: "15px", boxShadow: "1px 1px 1px 1px #ccc" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image={Img2}
                                    alt="Grain-img"
                                />
                                <CardContent style={{ paddingLeft: "15px" }}>
                                    <Typography style={{ fontWeight: "600", fontSize: "20px", marginBottom: "10px" }}>
                                        26 February 2021, 9am
                                    </Typography>
                                    <Typography> How does Organic Farming work, and why it's earth friendly </Typography>
                                    <Typography> By Lavika Sundar </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{ paddingLeft: "15px" }} >
                                <Button
                                    size="small"
                                    color="text"
                                    variant="contained"
                                    sx={{ width: "50%" }}
                                    style={{ textTransform: "none" }}

                                >
                                    <img alt="data" src={RemindIcon} style={{ width: "15px", height: "15px", marginRight: "3px" }} />
                                    Remind Me
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={12} lg={4} xl={4} className="changetransition">
                        <Card variant="outlined" style={{ paddingBottom: "15px", boxShadow: "1px 1px 1px 1px #ccc" }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image={Img3}
                                    alt="Grain-img"
                                />
                                <CardContent style={{ paddingLeft: "15px" }}>
                                    <Typography style={{ fontWeight: "600", fontSize: "20px", marginBottom: "10px" }}>
                                        26 February 2021, 9am
                                    </Typography>
                                    <Typography> Photography 101: Let's learn all about portrait photography </Typography>
                                    <Typography> By Drake Jacob</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions style={{ paddingLeft: "15px" }} >
                                <Button
                                    size="small"
                                    color="text"
                                    variant="contained"
                                    sx={{ width: "50%" }}
                                    style={{ textTransform: "none" }}
                                >
                                    <img alt="data" src={RemindIcon} style={{ width: "15px", height: "15px", marginRight: "3px" }} />
                                    Remind Me
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default MenuCard;
