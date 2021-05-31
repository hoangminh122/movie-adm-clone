import React from 'react';
import { PageHeader } from 'antd';
import { ReactVideo } from "reactjs-media";


const VideoShow = () => {
    // const { result } = useSelector(state => state.intro);
  
    const routes = [
    {
        path: 'index',
        breadcrumbName: 'First-level Menu',
    },
    {
        path: 'first',
        breadcrumbName: 'Second-level Menu',
    },
    {
        path: 'second',
        breadcrumbName: 'Third-level Menu',
    },
    ];
    return (
    <>
    <div>
        <PageHeader
            className="site-page-header"
            breadcrumb={{ routes }}
        />
        <ReactVideo
            src="https://video.bongda24h.vn/medias/MP4/2021/5/26/futsal-viet-nam.mp4"
            poster="https://www.example.com/poster.png"
            primaryColor="red"
            // other props
        />
    </div>
        </>
    );
};

export default VideoShow;