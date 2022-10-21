import React from 'react';
import Paper from "@mui/material/Paper";
import style from "./index.module.css";
import {Typography} from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type PropsType = {
    title:string
}

export const FutureTasks = (props:PropsType) => {
    return (
        <div>
            <Paper elevation={10} sx={{
                marginTop: '32px',
                marginLeft: '20px',
                backgroundColor: '#282828',
                borderRadius: 5,
                width: 350,
                height: 79,
                display: "flex",
                flexDirection: "column",
                alignContent: "space-between",
                justifyContent: "space-around",
            }}>
                <div className={style.taskContainer}>
                    <div className={style.groupLT}>
                        <div className={style.line} style={{background: `#A9A9A9`}}/>
                        <div className={style.containerTD}>
                            <Typography
                                style={{
                                    fontFamily: "Source Sans Pro",
                                    color: "#F4F4F4",
                                    fontSize: 20,
                                    fontWeight: 400,
                                }}
                            >
                                {props.title}
                            </Typography>
                        </div>
                    </div>
                    <div className={style.checkbox}>
                        <CheckCircleIcon sx={{
                            color: "#F4F4F4",
                            width: 21,
                            height: 21,
                        }}/>
                    </div>
                </div>
            </Paper>

        </div>
    );
};
