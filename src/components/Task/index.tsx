import React, {useState} from 'react';
import style from './index.module.css'
import styled from "@mui/material/styles/styled";
import SwitchUnstyled, {switchUnstyledClasses} from '@mui/base/SwitchUnstyled';
import {Typography} from "@mui/material";

const blue = {
    500: '#10C200',
};

const grey = {
    400: '#366EFF',
    500: '#366EFF',
    600: '#366EFF',
};

const Root = styled('span')(
    ({theme}) => `
  font-size: 0;
  position: relative;
  display: inline-block;
  width: 50px;
  height: 29px;
  margin: 10px;
  cursor: pointer;

  &.${switchUnstyledClasses.disabled} {
    opacity: 0.4;
    cursor: not-allowed;
  }

  & .${switchUnstyledClasses.track} {
    background: ${theme.palette.mode === 'dark' ? grey[600] : grey[400]};
    border-radius: 16px;
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
  }

  & .${switchUnstyledClasses.thumb} {
    display: block;
    width: 22px;
    height: 22px;
    top: 4px;
    left: 4px;
    border-radius: 16px;
    background-color: #fff;
    position: relative;
    
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  }

  &.${switchUnstyledClasses.focusVisible} .${switchUnstyledClasses.thumb} {
    background-color: ${grey[500]};
    box-shadow: 0 0 1px 8px rgba(0, 0, 0, 0.25);
  }

  &.${switchUnstyledClasses.checked} {
    .${switchUnstyledClasses.thumb} {
      left: 20px;
      top: 4px;
      background-color: #fff;
    }

    .${switchUnstyledClasses.track} {
      background: ${blue[500]};
    }
  }

  & .${switchUnstyledClasses.input} {
    cursor: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: 1;
    margin: 0;
  }
  `,
);

type PropsType = {
    id: number,
    title: string,
    description: string,
    status: boolean,
    color:string,
}

export const Task = (props:PropsType) => {
    const [status, setStatus] = useState<boolean>(props.status);

    const changeStatus =()=> {
        setStatus(!status)
    }

    return (
        <div className={style.taskContainer}>
            <div className={style.groupLT}>
                <div className={style.line} style={{background: `${props.color}`}}/>
                <div className={style.containerTD}>
                    <Typography
                        style={{
                            fontFamily: "Actor",
                            color: "#F4F4F4",
                            fontSize: 20,
                            fontWeight: 400,
                        }}
                    >
                        {props.title}
                    </Typography>
                    <Typography
                        style={{
                            fontFamily: "Actor",
                            color: "#FFFFFF",
                            opacity: 0.6,
                            fontSize: 10,
                            fontWeight: 400,
                        }}
                    >
                        {props.description}
                    </Typography>
                </div>
            </div>
            <div className={style.checkbox}>
                <SwitchUnstyled component={Root} checked={status} onChange={changeStatus}/>
            </div>
        </div>
    );
};