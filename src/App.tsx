import React from 'react';
import {QueryClient, QueryClientProvider} from "react-query";
import {Main} from "./pages";
import style from "./App.module.css";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className={style.App}>
                <Main/>
            </div>
        </QueryClientProvider>
    );
}

export default App;
