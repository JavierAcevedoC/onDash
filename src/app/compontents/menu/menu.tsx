import React, { Component, ReactNode } from 'react';
import './menu.scss';

import { ICON } from '../../../shared/types/icon-enum';
import { IMenuItem } from '../../../shared/interfaces/menu-item';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Velocimeter from '../velocimeter/velocimeter';

class Menu extends Component<any, {items: Array<IMenuItem> }> {
    constructor(props: any) {
        super(props);

        this.state = {
            items: this.createArrayMenu()
        };

    }

    public render(): ReactNode {
        const menuItems = this.state.items.map( (item, ind) => this.createMenu(item, ind));

        return (
            <div>
                <Router>
                    <div className="WrapContent">
                        <div className="Menu">{ menuItems }</div>
                        <div className="Content">
                            <Switch>
                              <Route path="/">
                                { this.home() }
                              </Route>
                              <Route path="/brightness">
                                { this.brightness() }
                              </Route>
                              <Route path="/bluetooth">
                                { this.bluetooth() }
                              </Route>
                              <Route path="/configuration">
                                { this.configuration() }
                              </Route>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }

    public home(): ReactNode {
        const testVelocity = 120;
        return <Velocimeter velocity={ testVelocity } rpm="6" radius="195" stroke="35" progress={ testVelocity }></Velocimeter>;
    }

    public brightness(): ReactNode {
      return <h2>BRIGHTNESS</h2>;
    }

    public configuration(): ReactNode {
      return <h2>CONFIGURATION</h2>;
    }

    public bluetooth(): ReactNode {
      return <h2>BLUETOOTH</h2>;
    }

    private createMenu(item: IMenuItem, ind: number): ReactNode {
        const route = '/'+ item.name;
        return (
            <button key={ind} className="Item">
                <NavLink to={ route } activeClassName="Selected">
                    <span className="Icon medium" >
                        { item.icon }
                    </span>
                </NavLink>
            </button>
        );
    }

    private createArrayMenu(): Array<IMenuItem> {
        const items: Array<IMenuItem> = [
            {
                name: '',
                icon: ICON.moto,
            },
            {
                name: 'brightness',
                icon: ICON.bright,
            },
            {
                name: 'bluetooth',
                icon: ICON.bt_settings,
            },
            {
                name: 'configuration',
                icon: ICON.settings,
            },

        ];
        return items;
    }
}

export default Menu;
