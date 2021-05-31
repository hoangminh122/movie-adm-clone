import React from 'react';
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';

const { SubMenu } = Menu;
const HeaderMenu = () => {
    const [current,setCurent] = useState('mail');
    const handleClick = e => {
    console.log('click ', e);
    setCurent(e.key);
    };
 

    return (
      <Menu style={{display: "flex",justifyContent: "center",alignItems:"center"}} onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="trang-chu" icon={<AppstoreOutlined />} style={{fontWeight:"bolder"}}>
          TRANG CHỦ
        </Menu.Item>
        <SubMenu key="the-loai" icon={<SettingOutlined />} title="THỂ LOẠI" style={{fontSize: "larger"}}  style={{fontWeight:"bolder"}}>
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Cổ trang - Thần thoại</Menu.Item>
            <Menu.Item key="setting:2">Khoa học - Viễn tưởng</Menu.Item>
            <Menu.Item key="setting:3">Phiêu lưu - Hành động</Menu.Item>
            <Menu.Item key="setting:4">Tâm lý -Tình Cảm</Menu.Item>
            <Menu.Item key="setting:5">Thuyết minh</Menu.Item>
            <Menu.Item key="setting:6">Hoạt Hình</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:11">Option 3</Menu.Item>
            <Menu.Item key="setting:21">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="phim-bo" icon={<AppstoreOutlined />}  style={{fontWeight:"bolder"}}>
          PHIM BỘ
        </Menu.Item>
        <Menu.Item key="phim-le"  icon={<AppstoreOutlined />}  style={{fontWeight:"bolder"}}>
          PHIM LẺ
        </Menu.Item>
        <Menu.Item key="phim-thuyet-minh" icon={<AppstoreOutlined />}  style={{fontWeight:"bolder"}}>
          PHIM THUYẾT MINH
        </Menu.Item>
        <SubMenu key="quoc-gia" icon={<SettingOutlined />} title="QUỐC GIA"  style={{fontWeight:"bolder"}}>
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:111">Việt Nam</Menu.Item>
            <Menu.Item key="setting:211">Trung Quốc</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:311"> Hàn Quốc</Menu.Item>
            <Menu.Item key="setting:411">Âu Mỹ</Menu.Item>
          </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 3">
            <Menu.Item key="setting:511"> Thái Lan</Menu.Item>
            <Menu.Item key="setting:611"> Ấn Độ</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    );
};


export default HeaderMenu;
