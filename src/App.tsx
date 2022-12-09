import React, {useCallback, useEffect, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Pages from "./containers/Pages/Pages";
import Admin from "./containers/Admin/Admin";
import axiosApi from "./axiosApi";
import {ApiPagesList} from "./types";

function App() {
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
    <div className="App">
        <Routes>
          <Route path='/' element={<Pages loading ={loading} pages={pages} pageName={pageName}/>}/>
          <Route path='/pages' element={<Pages pages={pages}
                                               pageName={pageName}
                                               loading ={loading}
          />}/>
          <Route path='/pages/:id' element={<Pages loading ={loading} pages={pages} pageName={pageName}/>}/>
          <Route path='/admins' element={(<Admin loading ={loading} pageName={pageName}/>)} />
        </Routes>
    </div>
  );
}

export default App;
