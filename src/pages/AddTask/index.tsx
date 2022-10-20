import React, {useEffect, useState} from 'react';
import Paper from "@mui/material/Paper";
import style from "./index.module.css";
import {Typography} from "@mui/material";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useMutation} from "react-query";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import Stack from "@mui/material/Stack";
import {TasksService} from "../../services/tasks.service";
import {queryClient} from "../../App";

export const AddTask = () => {
        const [titleTask, setTitleTask] = useState<string>('');
        const [descriptionTask, setDescriptionTask] = useState<string>('');

        const changeTitleTask = (event: React.ChangeEvent<HTMLInputElement>) => {
            setTitleTask(event.target.value)
        };
        const changDescriptionTask = (event: React.ChangeEvent<HTMLInputElement>) => {
            setDescriptionTask(event.target.value)
        };
        const {isLoading: isPostingTutorial, mutate: postTutorial} = useMutation(() => TasksService.postTask({titleTask, descriptionTask}),
            {
                onSuccess: () => {
                    queryClient.invalidateQueries();
                    setTitleTask('');
                    setDescriptionTask('');
                }
            }
        );


        useEffect(() => {
        }, [isPostingTutorial])

        const addTask = () => {
            postTutorial();
        };

        return (
            <div>
                <Paper elevation={3}
                       sx={{
                           backgroundColor: '#222222',
                           borderRadius: 5,
                           width: 390,
                           height: 390,
                           display: 'flex',
                           flexDirection: 'column',
                           justifyContent: 'space-between'
                       }}>
                    <div className={style.form}>
                        <Typography
                            style={{fontFamily: "Actor", color: "#F4F4F4", fontSize: 36, fontWeight: 800,}}
                        >
                            Create task
                        </Typography>
                        <OutlinedInput placeholder="Title task"
                                       style={{backgroundColor: 'white'}}
                                       value={titleTask}
                                       onChange={changeTitleTask}
                        />
                        <OutlinedInput placeholder="Description task"
                                       style={{backgroundColor: 'white'}}
                                       value={descriptionTask}
                                       onChange={changDescriptionTask}
                        />
                        {isPostingTutorial ?
                            <Stack sx={{color: 'grey.500', width: '100%', display: 'flex', justifyContent: 'center'}}
                                   spacing={2}
                                   direction="row">
                                <CircularProgress color="inherit"/>
                            </Stack>
                            : <Button variant="outlined" onClick={addTask}>Create Task</Button>}

                    </div>

                </Paper>
            </div>
        );
    }
;
