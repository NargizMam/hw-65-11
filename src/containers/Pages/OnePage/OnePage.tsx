import React, {useEffect, useState} from 'react';
import {ApiPagesList, Page} from "../../../types";
import {useLocation, useParams} from "react-router-dom";
import axiosApi from "../../../axiosApi";
import Spinner from "../../../components/UI/Spinner/Spinner";

interface Props {
    pageList: ApiPagesList[];
}

const OnePage: React.FC<Props> = ({pageList}) => {
    const [page, setPage] = useState<Page | null>();
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    useEffect(()=> {
        const fetchData = async ()=> {
            try {
                setLoading(true);
                const response = await axiosApi(`${location.pathname}.json`);
                const pages = response.data;
                setPage(pages);

            }finally {
                setLoading(false);
            }
        };

        fetchData().catch(e => console.error(e));
    }, [location.pathname]);
    let pageContent = page && (
        <div className='container bg-success'>
            <h2>{page.title}</h2>
            <p>{page.content}</p>
        </div>
    );
    if(location.pathname ! == '/'){
       pageContent = (
           <div className='bg-primary'>
               <h2>Home Page</h2>
               <article>Home page content.<br/>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br/>
                       Culpa cumque ducimus iusto laudantium minus quia voluptatum.<br/>
                       A asperiores assumenda aut enim hic incidunt iusto laboriosam
                       <br/>laudantium nisi quae sit, voluptate.</p>
               </article>
           </div>
       )
    }


    return (
        <>
            {loading ? <Spinner/> : null}
            {pageContent}
        </>
    );
};

export default OnePage;