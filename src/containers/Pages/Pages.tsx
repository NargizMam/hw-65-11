import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import OnePage from "./OnePage/OnePage";
import {ApiPagesList} from "../../types";
import Spinner from "../../components/UI/Spinner/Spinner";

interface Props {
    pages: ApiPagesList[];
    pageName: string[];
    loading: boolean;
}

const Pages:React.FC<Props> = ({pages, pageName, loading}) => {
    return (
        <div >
            {loading ? <Spinner/> : null}
            <Navbar pageName={pageName}/>
            <section className='container'>
                <OnePage pageList={pages}/>
            </section>
        </div>
    );
};

export default Pages;