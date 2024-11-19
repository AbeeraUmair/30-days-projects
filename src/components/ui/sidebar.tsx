"use client";

import {
  ContainerOutlined,
  DesktopOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {  Menu } from 'antd';
import Link from 'next/link';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
{ key: '1', icon: <PieChartOutlined />,  label:  < Link href = "/count-down-timer" >Count Down Timer </Link >},
{ key: '2', icon: <DesktopOutlined />,   label:<Link href="/birthday-wish-app">    Bitrhday Wish App </Link> },
{ key: '3', icon: <ContainerOutlined />, label: <Link href="/weather-app">          Weather App </Link> },
{ key: '4', icon: <ContainerOutlined />,  label:<Link href="/number-guessing-game"> Number Guessing Game</Link> },
{ key: '5', icon: <ContainerOutlined />, label: <Link href="/simple-calculator">    Simple Calculator</Link> },
  

];

const SideBar: React.FC = () => {
  return (
    <div style={{ width: 256 }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          items={items}
          style={{ width: "15rem", height: "30rem", zIndex: "50" }}
        />
    </div>
  );
};

export default SideBar;