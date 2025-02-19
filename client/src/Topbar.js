import {Component} from "react";
import Button from '@mui/material/Button';
import {Box, Grid, Typography} from "@material-ui/core";

class Topbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBoard: "No board selected",
            username: "s195471"
        }
    }

    render() {
        //hardcoded list of
        const list = [
            "DevOps",
            "Innovation Pilot",
            "CDIO",
            "Algoritmer og datastrukturer",
        ];
        const color = [
            "#463147",
            "#314147",
            "#31473a",
            "#404731",
            "#473b31",
            "#473131",
        ]
        //create grid items (buttons)
        const buttons = [];
        for (let i = 0; i < list.length; i++) {
            buttons.push(
                <Button style={{background: color[i]}}variant={'contained'} onClick={() => {this.setState({currentBoard : list[i]})}}>
                    {list[i]}
                </Button>
                )
        }
        return (
            <div className="Topbar" >
                {/*<Grid container
                      direction={"row"}
                      justifyContent={"flex-start"}
                      alignItems={"center"}
                      spacing={0}>
                    <Grid container xs={10}
                          direction={"row"}
                          justifyContent={"flex-start"}
                          alignItems={"center"}
                          spacing={0}>
                        {buttons}

                    </Grid>
                    <Grid container xs={2}
                        direction={"row"}
                        justifyContent={"flex-end"}
                        alignItems={"center"}>
                        <Grid item>
                            <Button>user</Button>
                        </Grid>

                    </Grid>
                </Grid>*/}
                <div style={{background: "#2b2f38", padding: 3,  width: '100%' }}>
                    <Box sx={{ display: 'flex', flexDirection : 'row'}}>
                        <Box sx={{ display: 'flex', //make flexbox (stuff works...)
                            p: 0, //padding = 1
                            flexGrow: 1, //grow box to fill space
                            flexDirection : 'row',
                            justifyContent : 'flex-start'// gravity left
                            }}>
                            {buttons}
                        </Box>
                        <Box style={{ background: "#7a3131", borderRadius: 20}} sx={{  p: 1 }}>
                            <Button style={{ color: 'white'}}>{this.state.username}</Button>
                            <Typography  style={{ fontSize: 'small', color: 'white'}}>Log Out</Typography>
                        </Box>
                    </Box>
                </div>
                {/*<h1 style={{color: 'white'}}>{this.state.currentBoard}</h1>*/}
            </div>
        )
    }


}
export default Topbar;