import React from 'react';
import FileViewer from 'react-file-viewer';
import path from '../../public/移动系统概述.docx';

const  DescribeTechnology = () => {
  return (
    <div style={{height:'85vh'}}>
      <FileViewer
        fileType='docx'
        filePath={path} 
        errorComponent={console.log("出现错误")} 
        unsupportedComponent={console.log("不支持")} 
      />
    </div>
  )
}

export default  DescribeTechnology;