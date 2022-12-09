import React, {useCallback, useEffect, useState} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import {ApiPagesList} from "../../types";
import axiosApi from "../../axiosApi";
import OnePage from "./OnePage/OnePage";

const Pages = () => {
    const [pages, setPages] = useState<ApiPagesList[]>([]);
    const [pageName, setPageName] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchPages  = useCallback(async () => {
        try {
            setLoading(true);
            const pagesResponse = await axiosApi.get<ApiPagesList[]>('pages.json');
            const pages = pagesResponse.data;
            if(!pages){
                setPages([]);
                return;
            }
            Object.keys(pagesResponse.data).map(pName => {
                setPageName(prevState => [...prevState, pName]);
                setPages(pagesResponse.data);
            })
        }finally {
            setLoading(false);
        }
    },[]);

    useEffect(() => {
        fetchPages().catch(console.error);
    }, []);

    return (
        <div >
            <Navbar pageName={pageName}/>
            <section className='container'>
                <OnePage pageList={pages}/>
            </section>
        </div>
    );
};

export default Pages;