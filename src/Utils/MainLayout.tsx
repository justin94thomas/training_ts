import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router";

import Header from '../components/Header';

const Dashboard = lazy(() => import('../components/Dashboard'));
const Shopping = lazy(() => import('../components/ShoppingCart'));
const ToDo = lazy(() => import('../components/TodoList'));
const BlogPosts = lazy(() => import('../components/BlogPosts'));
const TestDome = lazy(() => import('../components/TestDome'));

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();
    const isDashboard = location.pathname === '/';

    return (<>
        {!isDashboard && <Header />}
        <div style={{paddingTop: !isDashboard ? '60px': '0px'}}>
            {children}
        </div>
    </>)
}
const MainLayout: React.FC = () => {
    return (<>
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <LayoutWrapper>
                    <Routes>
                        <Route path='/' element={<Dashboard />} />
                        <Route path='/shopping' element={<Shopping />} />
                        <Route path='/todo' element={<ToDo />} />
                        <Route path='/blog' element={<BlogPosts />} />
                        <Route path='/testdome' element={<TestDome />} />
                    </Routes>
                </LayoutWrapper>
            </BrowserRouter>
        </Suspense>
    </>)
}

export default MainLayout;