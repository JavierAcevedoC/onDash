import './velocimeter.scss';
import React, { Component, ReactNode } from 'react';

class Velocimeter extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            velocity: props.velocity,
            gear: props.gear
        }
    }

    public render(): ReactNode {
        const { radius, stroke, progress } = this.props;
        const normalizedRadius = radius - stroke * 2;
        const circumference = normalizedRadius * 2 * Math.PI;

        const strokeDashoffset = circumference - progress / 400 * circumference;

        return (
            <div className="ComponentWrap">
                <div className="CircleWrap">
                    <svg height={radius * 2}  width={radius * 2}>
                        <circle
                            stroke="white"
                            fill="transparent"
                            strokeWidth={ stroke }
                            strokeDasharray={ circumference + ' ' + circumference }
                            style={ { strokeDashoffset } }
                            r={ normalizedRadius }
                            cx={ radius }
                            cy={ radius }
                        />
                    </svg>
                </div>
                <div className="VelocimeterWrap">
                    <div className="Velocimeter">
                        <h1 className="velocity">{ this.state.velocity  }</h1>
                        <h3 className="km">Km/h</h3>
                    </div>
                </div>
                <div className="GearWrap">
                    <div className="PreviousGear">{ this.getGear(-1) }</div>
                    <div className="CurrentGear">{ this.getGear() }</div>
                    <div className="NextGear">{ this.getGear(1) }</div>
                </div>
            </div>
        );
    };
    
    private getGear(position = 0): string | number {
        const curr = this.state.gear;
        const res = Number(curr) + position;
        return Boolean(res >= 7) ? '' : res <= 0 ? 'N' : res;
    }
}

export default Velocimeter;
