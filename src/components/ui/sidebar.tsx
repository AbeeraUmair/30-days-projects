"use client";

import React, { useState } from 'react';
import {
  ContainerOutlined,
  DesktopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '1', icon: <PieChartOutlined />, label: 'Count Down Timer' },
  { key: '2', icon: <DesktopOutlined />, label: 'Bitrhday Wish App' },
  { key: '3', icon: <ContainerOutlined />, label: 'Weather App' },
  { key: '4', icon:<ContainerOutlined /> , label: 'Number Guessing Game' },
  { key: '5', icon:<ContainerOutlined /> , label: 'Simple Calculator' },
  

];

const SideBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ width: 256 }}>
     
      {collapsed ? "" :
 <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
        style={{width:"15rem" ,height:"30rem",zIndex:"50"}}
      />

      }
     
    </div>
  );
};

export default SideBar;