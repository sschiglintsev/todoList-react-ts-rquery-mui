import React, {useState} from 'react';
import {Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import style from "./index.module.css"
import {Task} from "../index";
import {useQuery} from "react-query";
import {TasksService} from "../../services/tasks.service";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

export const ToDayTasks = () => {
    const {isLoading, data: response, error, isFetching} = useQuery('tasks list',
        () => TasksService.getAll(),
        );
    const listTasks = response?.data.map(el => <Task key={el.title} id={el.id} title={el.title}
                                                     description={el.description} status={el.status}
                                                     color={el.color}/>);
    const [status, setStatus] = useState<boolean>(true);

    const changeStatus = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.checked);
    };
    return (
        <div>
            <div className={style.checkBoxGroup}>
                <div className={style.checkBox}>
                    <Checkbox
                        checked={status}
                        onChange={changeStatus}
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
                marginLeft:'20px',
                width: 350,
                minHeight:70,
                display: "flex",
                flexDirection: "column",
                alignContent: "space-between",
                justifyContent: "space-around",
            }}>
                {isLoading ?
                    <Stack sx={{color: 'grey.500', width: 350, display: 'flex', justifyContent: 'center'}} spacing={2}
                           direction="row">
                        <CircularProgress color="inherit"/>
                    </Stack>
                    : <>
                        {listTasks?.length?listTasks:<div className={style.labelnoTaskToday}>Time to add your first task</div>}
                    </>}
            </Paper>
        </div>
    )
        ;
};

