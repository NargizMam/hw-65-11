import React from 'react';
import {NavLink} from "react-router-dom";
import PageForm from "../../components/PageForm/PageForm";
import Spinner from "../../components/UI/Spinner/Spinner";

interface Props {
    pageName: string[];
    loading: boolean;
}

const Admin: React.FC<Props> = ({pageName, loading}) => {

    return (
        <div className='container'>
            {loading ? <Spinner/> : null}
            <p>Выберите действие</p>
            <NavLink className='navbar-toggler'
                     style={{textTransform: 'uppercase', marginLeft:20}}
                     to={`/new-page`}
            >New page</NavLink>
            <NavLink className='navbar-toggler'
                     style={{textTransform: 'uppercase', marginLeft:20}}
                     to={`/edit-page/:id`}
            >Edit page</NavLink>
            <PageForm pagesName={pageName}/>
        </div>
    );
};

export default Admin;