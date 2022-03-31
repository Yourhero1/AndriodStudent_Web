import React from 'react';
import FileViewer from 'react-file-viewer';
import path from '../../public/手机系统概述.docx';
import { Empty } from '@douyinfe/semi-ui';

const DescribeFeature = () => {
    return (
        <div style={{ height: '85vh' }}>
            <FileViewer
                fileType='docx'
                filePath={path}
                errorComponent={console.log("出现错误")}
                unsupportedComponent={<Empty />}
            />
        </div>
    )
}

export default DescribeFeature;