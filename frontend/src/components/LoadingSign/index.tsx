import React from 'react';
import Spinner from '../../assets/fourSpinner.png';
import styled from 'styled-components';

const Overlay = styled.div`
    background-color: rgba(255, 255, 255, 0.90);
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
`;

const TimedOutText = styled.div`
    color: red;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

const SpinningIcon = styled.img`
    width: 100px;
    animation: rotation 2s infinite linear;
    
    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(359deg);
        }
    }
`;

class LoadingSpinner extends React.Component<{}, {timedOut: boolean}> {
    private timeout: number;
    constructor(props: any) {
        super(props);
        this.state = { timedOut: false };
        this.timeout = 0;
    }

    componentDidMount() {
        if (!this.state.timedOut) {
            this.timeout = setTimeout(function(this: any){
                this.setState({ timedOut: true });
            }.bind(this),5000);
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    render() {
        return (
            <Overlay>
                {this.state.timedOut ?
                    <TimedOutText>
                        <p>Timeout - Request is taking too long to complete :(</p>
                        <p>Please refresh the page and try again</p>
                    </TimedOutText>
                    :
                    <SpinningIcon alt={''} src={Spinner} />}
            </Overlay>
        );
    }
}

export default LoadingSpinner;
