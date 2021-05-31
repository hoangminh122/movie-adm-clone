import React from 'react';
import {
    LikeIcon
  } from 'components/Detail/DetailIntro/DetailIntro.style';

import {Button} from 'antd'
import { Card, Typography } from 'antd';

const { Title } = Typography;


const InforFilm = () =>{
    return (
        <Card >
        <Card type="inner" title={<Title level={2} style={{fontSize: "larger",fontWeight: "bolder"}}>Ten Phim -Tap 1</Title> } >
            <p style={{marginBottom: "10px"}}> Ten tieng anh</p>
            <Button type="primary">
                Like <LikeIcon style={{background:"",marginLeft:1}}/>
            </Button>
        </Card>
        
    </Card>
    )
};

export default InforFilm;