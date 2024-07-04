import React, { FC, ReactNode } from 'react';
import { SpinnerContainer } from './Spinner.styles';


interface Props {
    className?: string;
    color?: string;
    width?: number;
    margin?: number;
    active?: boolean;
    children?: ReactNode;
    overlay?: boolean;
}

const Spinner: FC<Props> = ({
    className = '',
    color = '#00f2a0',
    width = 4.54,
    margin = 2.27,
    active,
    children,
    overlay = true
}: Props) => {

    const isOverlay = overlay ? 'container-spinner' : 'overlay'

    return (
        <SpinnerContainer className={`${isOverlay}`}>
            {children}
            {active && (
                <div className='item-spinner'>
                    <div className={`spinner ${className}`}>
                        <div
                            style={{ backgroundColor: color, width: width, margin: margin }}
                            className="rect1"
                        ></div>
                        <div
                            style={{ backgroundColor: color, width: width, margin: margin }}
                            className="rect2"
                        ></div>
                        <div
                            style={{ backgroundColor: color, width: width, margin: margin }}
                            className="rect3"
                        ></div>
                        <div
                            style={{ backgroundColor: color, width: width, margin: margin }}
                            className="rect4"
                        ></div>
                        <div
                            style={{ backgroundColor: color, width: width, margin: margin }}
                            className="rect5"
                        ></div>
                        <div
                            style={{ backgroundColor: color, width: width, margin: margin }}
                            className="rect6"
                        ></div>
                    </div>
                </div>
            )}
        </SpinnerContainer>
    );
};

export default Spinner;
