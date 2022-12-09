import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const PageForm = () => {
    const [page, setPage] = useState('');
    return (
        <form>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    id="name" name="name" type="text"
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <ReactQuill
                    id="content"
                    theme="snow"
                    className="form-control"
                />
            </div>
        </form>
    );
};

export default PageForm;