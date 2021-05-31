import React,{useState} from 'react';
import { Pagination } from 'antd';

const PaginationFilm = () => {

    const [current, setCurrent] = useState(3);

    const onChange = page => {
    console.log(page);
    setCurrent(page);
  };

  
  return (
    <Pagination style={{fontSize:"larger",margin: "10px",display: "flex",justifyContent: "center"}}
        current={current} 
        onChange={onChange} 
        total={50} 
    />
    
    )
};

export default PaginationFilm;
