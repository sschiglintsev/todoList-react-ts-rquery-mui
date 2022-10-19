import React from 'react';
import {Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import style from "./index.module.css"
import {Task} from "../index";
import Box from "@mui/material/Box";

export const ToDayTasks = () => {
    return (
        <div>
            <div className={style.checkBoxGroup}>
                <div className={style.checkBox}>
                    <Checkbox defaultChecked
                              style={{
                                  color: "#F4F4F4",
                              }}
                    />
                </div>
                <div className={style.labelCheckbox}>
                    <Typography
                        style={{fontFamily: "Actor", color: "#F4F4F4", fontSize: 20, fontWeight: 400,}}
                    >
                        Today Tasks:
                    </Typography>
                </div>
            </div>
                <Paper elevation={10} sx={{
                           backgroundColor: '#282828',
                           borderRadius: 5,
                           width: 350,
                           height: 204,
                           display: "flex",
                           flexDirection: "column",
                           alignContent: "space-between",
                           justifyContent: "space-around",
                       }}>
                    <Task/>
                    <Task/>
                    <Task/>
                </Paper>
        </div>
    );
};
