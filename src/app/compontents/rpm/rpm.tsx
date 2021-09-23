import './rpm.scss';
import React, { Component, ReactNode } from 'react';

class Rpm extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            current: props.current,
        }
    }

    public render(): ReactNode {
        return(
            <div className="ComponentWrap">
                <div className="EqualizerWrap">
                    <div className="equaliser-container">
                        <ol className="equaliser-column">
                            <li className="colour-bar"></li>
                        </ol>
                        <ol className="equaliser-column">
                            <li className="colour-bar"></li>
                        </ol>
                        <ol className="equaliser-column">
                            <li className="colour-bar"></li>
                        </ol>
                        <ol className="equaliser-column">
                            <li className="colour-bar"></li>
                        </ol>
                        <ol className="equaliser-column">
                            <li className="colour-bar"></li>
                        </ol>
                        <ol className="equaliser-column">
                            <li className="colour-bar"></li>
                        </ol>
                        <ol className="equaliser-column">
                            <li className="colour-bar"></li>
                        </ol>
                        <ol className="equaliser-column">
                            <li className="colour-bar"></li>
                        </ol>
                        <ol className="equaliser-column">
                            <li className="colour-bar"></li>
                        </ol>
                        <ol className="equaliser-column">
                            <li className="colour-bar"></li>
                        </ol>
                    </div>
                </div>
                
                <div className="BaseBlue"></div>

                <div className="RPMWrap">
                    <div className="RPM">
                        <h1>{ this.state.current }</h1>
                        <p>RPM</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Rpm;

