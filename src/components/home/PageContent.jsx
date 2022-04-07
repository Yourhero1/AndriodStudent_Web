import React, { useMemo } from 'react';
import FileViewer from 'react-file-viewer';
import path from '../../public/Android开发环境.docx';
import { Empty } from '@douyinfe/semi-ui';

const PageContent = ({ navValue }) => {
    let path = require('../../public/移动系统概述.docx');
    console.log('navValue', navValue);
    if (navValue === 'describe_technology') {
        path = require('../../public/移动系统概述.docx')
    } else {
        path = require('../../public/Android开发环境.docx')
    }
    const File = React.useMemo((path) =>
        <div style={{ height: '85vh' }}>
            <FileViewer
                fileType='docx'
                filePath={path}
                errorComponent={console.log("出现错误")}
                unsupportedComponent={<Empty />}
            />
        </div>
        , [path])
    return (
        <File />
    )
}

export default PageContent;
