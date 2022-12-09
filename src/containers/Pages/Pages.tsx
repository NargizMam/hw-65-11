import React, {useCallback, useEffect, useState} from 'react';
import Navbar from "../../components/Navbar/Navbar";
import { ApiPagesList} from "../../types";
import axiosApi from "../../axiosApi";

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
            })
        }finally {
            setLoading(false);
        }
    },[]);

    useEffect(() => {
        fetchPages().catch(console.error);
    }, []);

    return (
        <div className='container'>
            <Navbar pageName={pageName}/>
            <h4>Page title</h4>
            <p>conTent</p>
        </div>
    );
};

export default Pages;