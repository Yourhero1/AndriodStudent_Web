import React from 'react';
import { List, Avatar } from '@douyinfe/semi-ui';
import { InfiniteLoader, AutoSizer } from 'react-virtualized';
import VList from 'react-virtualized/dist/commonjs/List';

class VirtualizedScroll extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props)
        // console.log(props.dataList);
        // debugger;
        const dataList = props.dataList;
        // const dataList = [];
        // for (let i = 0; i < 50; i++) {
        //     dataList.push({
        //         color: 'blue',
        //         title: `学生编号 ${i}`,
        //     });
        // }
        this.data = dataList;

        this.fetchData = (startIndex, stopIndex) => {
            return new Promise((res, rej) => {
                setTimeout(() => {
                    let dataSource = this.data.slice(startIndex, stopIndex + 1);
                    res(dataSource);
                }, 1000);
            }).then(dataSource => {
                let newData = [...this.state.dataSource, ...dataSource];
                const { loadedRowsMap, loadingRowCount } = this.state;
                const increment = stopIndex - startIndex + 1;
                for (let i = startIndex; i <= stopIndex; i++) {
                    loadedRowsMap[i] = this.statusLoaded;
                }
                this.setState({
                    dataSource: newData,
                    loadedRowsMap,
                    loadingRowCount: loadingRowCount - increment,
                });
            });
        };

        this.state = {
            dataSource: [],
            loadedRowsMap: {},
            loadingRowCount: 0,
        };

        this.statusLoading = 0;
        this.statusLoaded = 1;
        this.loadLimit = this.data.length;
        this.renderItem = this.renderItem.bind(this);
        this.fetchData = this.fetchData.bind(this);
        this.handleInfiniteOnLoad = this.handleInfiniteOnLoad.bind(this);
        this.isRowLoaded = this.isRowLoaded.bind(this);
    }

    handleInfiniteOnLoad({ startIndex, stopIndex }) {
        let { dataSource, loadedRowsMap, loadingRowCount } = this.state;
        const increment = stopIndex - startIndex + 1;
        if (stopIndex >= this.loadLimit || loadingRowCount > 0) {
            return;
        }
        for (let i = startIndex; i <= stopIndex; i++) {
            loadedRowsMap[i] = this.statusLoading;
        }
        this.setState({
            loadingRowCount: loadingRowCount + increment,
        });
        return this.fetchData(startIndex, stopIndex);
    }

    isRowLoaded({ index }) {
        const { loadedRowsMap } = this.state;
        return !!loadedRowsMap[index];
    }

    renderItem({ index, key, style }) {
        const { dataSource, loadedRowsMap } = this.state;
        const item = dataSource[index];

        if (!item) {
            return;
        }
        const content = (
            <List.Item
                key={key}
                style={style}
                header={<Avatar color="blue">学生</Avatar>}
                main={
                    <div>
                        <span style={{ color: 'var(--semi-color-text-0)', fontWeight: 500 }}>{item.username}</span>
                        <p style={{ color: 'var(--semi-color-text-2)', margin: '4px 0' }}>
                           {item.description}
                        </p>
                    </div>
                }
            />
            
        );
        return content;
    }

    render() {
        const { dataSource } = this.state;
        const height = 600;
        return (
            <List style={{ border: '1px solid var(--semi-color-border)' }}>
                <InfiniteLoader
                    isRowLoaded={this.isRowLoaded}
                    loadMoreRows={this.handleInfiniteOnLoad}
                    rowCount={this.loadLimit}
                >
                    {({ onRowsRendered, registerChild }) => (
                        <AutoSizer disableHeight>
                            {({ width }) => (
                                <VList
                                    ref={registerChild}
                                    height={height}
                                    onRowsRendered={onRowsRendered}
                                    rowCount={this.loadLimit}
                                    rowHeight={118}
                                    rowRenderer={this.renderItem}
                                    width={width}
                                />
                            )}
                        </AutoSizer>
                    )}
                </InfiniteLoader>
            </List>
        );
    }
}
export default VirtualizedScroll;
