import _ from 'lodash';
import {handleDuration} from '../actions/actions'

export const reportData = (username) => {
    let startTime = performance.now();
    let nowDate = new Date();
    // 卸载页面时存储埋点数据到本地缓存，但未上报
    let handleloadData = ({event_type}) => {
        const endeTime = performance.now();
        console.log('endeTime',endeTime);
        console.log(event_type)
        let stayTime = _.floor((endeTime-startTime)/60000,2);
        const storageReportData = {
            username:username,
            event_type: event_type,
            stayTime,
            date:`${nowDate.getFullYear()}/${nowDate.getMonth()+1}/${nowDate.getDate()}`,
        }
        if(stayTime<1){
            console.log('默认不上报!');
        }
        
       console.log('storageReportData',storageReportData);
        let _handleDuration = _.debounce(handleDuration,600);
        _handleDuration(storageReportData)
    }

    // 监听退出主页的行为 并上传停留时长

      window.addEventListener('replacestate',()=>{
        handleloadData({event_type: 'replacestate'})
      })

      window.addEventListener("beforeunload", ()=>{
        handleloadData({event_type: 'beforeunload'})
    });
}

