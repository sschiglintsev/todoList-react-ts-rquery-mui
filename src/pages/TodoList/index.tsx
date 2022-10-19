import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Typography} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import style from './index.module.css'
import {ToDayTasks} from "../../components";

export const TodoList = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    width: 390,
                    height: 844,
                },
            }}
        >
            <Paper elevation={3}
                   sx={{
                       backgroundColor: '#222222',
                       borderRadius: 5,
                       width: 390,
                       height: 844,
                   }}>
                <div className={style.headContainer}>
                    <div className={style.title}>
                        <Typography
                            style={{fontFamily: "Actor", color: "#F4F4F4", fontSize: 36, fontWeight: 800,}}
                        >
                            To Do
                        </Typography>
                    </div>
                    <div className={style.settings}>
                        <SettingsIcon fontSize="large" sx={{
                            color: "#F4F4F4",
                            // width: 28.5,
                            // height: 30,
                        }}/>
                    </div>
                </div>
                <div className={style.tasksBox}>
                    <ToDayTasks/>
                </div>
            </Paper>
        </Box>
    );
};
