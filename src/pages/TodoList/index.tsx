import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Typography} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import style from './index.module.css'
import {FutureTasks, ToDayTasks} from "../../components";
import Switch from "@mui/material/Switch";
import Modal from "@mui/material/Modal";
import {formatDateShort} from "../../utils/utils";

type propsType = {
    status: boolean,
    changeStatus: () => void,
}

const styl = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    bgcolor: '#282828',
    color: 'white',
    boxShadow: 24,
    borderRadius: 10,
    p: 4,

};

export const TodoList = (props: propsType) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const listFutureTasks = formatDateShort().map(el=> <FutureTasks key={el} title={el}/>)
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
                       display: 'flex',
                       flexDirection: 'column',
                       justifyContent: 'space-between'
                   }}>
                <div>
                    <div className={style.headContainer}>
                        <div className={style.title}>
                            <Typography
                                style={{fontFamily: "Actor", color: "#F4F4F4", fontSize: 36, fontWeight: 800,}}
                            >
                                To Do
                            </Typography>
                        </div>
                        <div className={style.settings}>
                            <SettingsIcon onClick={handleOpen} fontSize="large" sx={{
                                color: "#F4F4F4",
                            }}/>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={styl}>
                                    <Typography id="modal-modal-title" variant="h6" component="h2">
                                        Settings news
                                    </Typography>
                                    <Switch defaultChecked color="secondary" checked={props.status}
                                            onChange={props.changeStatus}/>
                                </Box>
                            </Modal>
                        </div>
                    </div>
                    <div className={style.tasksBox}>
                        <ToDayTasks/>
                        {listFutureTasks}
                    </div>
                </div>
            </Paper>
        </Box>
    );
};
