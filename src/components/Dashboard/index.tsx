import React from 'react';
import { useNavigate } from "react-router";
import './styles.css';
import { icons } from '../../Utils/assets';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  type MenuItem = {
    id: number;
    name: string;
    path: string;
    icon?: string;
  };

  const menu: MenuItem[] = [
    { id: 1, name: 'Shopping Cart', path: '/shopping', icon: 'Shopping' },
    { id: 2, name: 'Todo List', path: '/todo', icon: 'Todo' },
    { id: 3, name: 'Blog Post', path: '/blog', icon: 'Blog' },
    { id: 4, name: 'TestDome', path: '/testdome', icon: 'Blog' },
  ];

  const getIcon = (iconName?: string, size: number = 24) => {
    if (!iconName) return null;
    const IconComponent = icons[iconName] as React.ComponentType<{ size?: number }>;
    return React.createElement(IconComponent, { size });
  };

  const handleRoute = (path: string) => {
    navigate(path);
  };

  return (
    <div className='dashboard-div'>
      <h3>Welcome to React + Typescript Training</h3>
      <div className='dashboard-content'>
        {menu.map(item => (
          <div className='menu-lists' key={item.id} onClick={() => handleRoute(item.path)}>
            {getIcon(item.icon)}
            <p className='menu-title'>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
