import React/* , {ReactNode}  */from 'react';
import Container, { ContainerProps } from '@material-ui/core/Container';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    margin-top: 85px;
    margin-bottom: 85px;
`;

interface MarginContainerProps extends ContainerProps {
    maxWidth: 'lg'
        | 'md'
        | 'sm'
        | 'xl'
        | 'xs'
        | false;
    // children: React.ReactNode;
}

const MarginContainer: React.FC<MarginContainerProps> = (props: MarginContainerProps) => {
    return (
        <StyledContainer maxWidth={props.maxWidth}>{props.children}</StyledContainer>
    );
};

export default MarginContainer;
