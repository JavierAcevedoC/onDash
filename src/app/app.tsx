import React, { Component, ReactNode } from 'react';
import { ipcRenderer } from 'electron';
import Menu from './compontents/menu/menu';

class App extends Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render(): ReactNode {
        return (
            <Menu></Menu>
        );
    };
}

export default App;
