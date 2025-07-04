import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router';

import Header from '../components/Header';

const Dashboard = lazy(() => import('../components/Dashboard'));
const Shopping = lazy(() => import('../components/ShoppingCart'));
const ToDo = lazy(() => import('../components/TodoList'));
const BlogPosts = lazy(() => import('../components/BlogPosts'));
const TestDome = lazy(() => import('../components/TestDome'));
const Login = lazy(() => import('../components/Login'));
const Register = lazy(() => import('../components/Register'));
const ApacheCharts = lazy(() => import('../components/Apache_ECharts'));

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();
    const isDashboard = location.pathname === '/dashboard';

    return (
        <>
            {!isDashboard && <Header />}
            <div style={{ paddingTop: !isDashboard ? '60px' : '0px' }}>
                {children}
            </div>
        </>
    );
};

const AppRoutes: React.FC = () => {
    const location = useLocation();
    const isLogin = location.pathname === '/';

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<Register />} />
                {!isLogin && (
                    <Route
                        path='/*'
                        element={
                            <LayoutWrapper>
                                <Routes>
                                    <Route path='dashboard' element={<Dashboard />} />
                                    <Route path='shopping' element={<Shopping />} />
                                    <Route path='todo' element={<ToDo />} />
                                    <Route path='blog' element={<BlogPosts />} />
                                    <Route path='testdome' element={<TestDome />} />
                                    <Route path='apache-charts' element={<ApacheCharts />} />
                                </Routes>
                            </LayoutWrapper>
                        }
                    />
                )}
            </Routes>
        </Suspense>
    );
};

const MainLayout: React.FC = () => (
    <BrowserRouter>
        <AppRoutes />
    </BrowserRouter>
);

export default MainLayout;
