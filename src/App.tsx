import React from 'react';
import {Route, Routes} from "react-router-dom";
import Pages from "./containers/Pages/Pages";
import EditPage from "./containers/EditPage/EditPage";
import NewPage from "./containers/NewPage/NewPage";
import PageForm from "./components/PageForm/PageForm";

function App() {
  return (
    <div className="App">
        <PageForm/>
        <Routes>
          <Route path='/' element={<Pages/>}/>
          <Route path='/pages' element={<Pages/>}/>
          <Route path='/pages/:id' element={<Pages/>}/>
          <Route path='/pages/edit/:id' element={<EditPage/>}/>
          <Route path='/create-page' element={<NewPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
