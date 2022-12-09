import React, {useEffect, useState} from 'react';
import './AdminsPage.css';
import axiosApi from "../../axiosApi";
import {Page} from "../../types";
import {useNavigate} from "react-router-dom";
import Spinner from "../UI/Spinner/Spinner";

interface Props {
    pagesName: string[]
}

const AdminsPage: React.FC<Props> = ({pagesName}) => {
    const [selectPage, setSelectPage] = useState('home');
    const [page, setPage] = useState<Page>({title: '', content: ''});
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const options = pagesName.map(pageName => (
        <option key = {pageName}>{pageName.toUpperCase()}</option>
    ));

    const getSelectPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
        let selectsPage = e.target.value.toLowerCase();
        setSelectPage(selectsPage);
    };
    const editPage = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> {
        const {name, value} = e.target;
        setPage(prev => ({
            ...prev,
            [name]: value
        }));
    };
    useEffect(()=> {
        const fetchData = async ()=> {
            try {
                setLoading(true);
                const response = await axiosApi(`/pages/${selectPage}.json`);
                setPage(response.data);
            }finally {
                setLoading(false);
            }
        };
        fetchData().catch(e=> console.error(e.message));

    },[selectPage]);

    const submitForm = async (e: React.FormEvent)=> {
        e.preventDefault();
        try{
            await axiosApi.put(`pages/${selectPage}.json`, page)
        }finally {
            navigate(`/pages/${selectPage}`)
        }
    };
    return (
        <>
            <form onSubmit={submitForm}>
                {loading ? <Spinner/> : null}
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect2">Select pages</label><br/>
                    <select  className="form" id="exampleFormControlSelect2" onChange={getSelectPage} >
                        {options}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Pages name</label>
                    <input type="text" className="form-control col-6"
                           name="title"
                           id="exampleInputEmail1" aria-describedby="emailHelp"
                           value={page.title ? page.title : ''}
                           onChange={editPage}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Content</label>
                    <textarea className="form-control col-6 "
                              name="content"
                              id="exampleInputPassword1"
                              onChange={editPage}
                              value={page.content ? page.content : ''}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </>

    );
};

export default AdminsPage;