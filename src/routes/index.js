import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ErrorLayout from '../layouts/ErrorLayout';

import Error404 from '../pages/errors/Error404';
import Error500 from '../pages/errors/Error500';
import MainLayout from "../layouts/MainLayout";

const MyRoutes = () => {
    return (
        <Routes>
            <Route element={<ErrorLayout />}>
                <Route path="errors/404" element={<Error404 />} />
                <Route path="errors/500" element={<Error500 />} />
            </Route>
            {/* //--- MainLayout Starts  */}
            <Route element={<MainLayout />}>

            </Route>
            {/* //--- MainLayout end  */}

            {/* <Navigate to="/errors/404" /> */}
            <Route path="*" element={<Navigate to="/errors/404" replace />} />
        </Routes>
    );
};

export default MyRoutes;
