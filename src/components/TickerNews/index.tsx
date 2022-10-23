import React from 'react';
import Ticker, {NewsTicker} from 'nice-react-ticker';
import style from './index.module.css'
import {useQuery} from "react-query";
import {NewsService} from "../../services/news.service";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import Stack from "@mui/material/Stack";
import {formatDate} from "../../utils/utils";
type propsType ={
    status:boolean,
}

export const TickerNews = (props:propsType) => {
    const {isLoading, data: response, error} = useQuery('news list', () => NewsService.getAll(),
        {
            onError:(error:any)=>{
                alert(error.message)
            }});



    let listNews = response?.data.articles.map((el) => el.title);
    if (!listNews) {listNews=[]}

    return (
        <div className={style.tecker}>
            {props.status?
                <>
                    {isLoading ?
                        <Stack sx={{color: 'grey.500', width: '100%', display: 'flex', justifyContent: 'center'}}
                               spacing={2}
                               direction="row">
                            <CircularProgress color="inherit"/>
                        </Stack>
                        : <Ticker visibleItems={100} isNewsTicker={true} slideSpeed={1000}>
                            <NewsTicker
                                id={1}
                                title={listNews.join(" | ")}
                                url="https://newsapi.org/"
                                meta={formatDate()}/>
                        </Ticker>
                    }
                </>
                :<></>}

        </div>
    );
};