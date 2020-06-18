import React, {ReactNode} from 'react';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
    margin-top: 85px;
`;

interface MarginContainerProps {
    maxWidth: 'lg'
        | 'md'
        | 'sm'
        | 'xl'
        | 'xs'
        | false;
    children: ReactNode;
}

const MarginContainer: React.FC<MarginContainerProps> = (props: MarginContainerProps) => {
    return (
        <StyledContainer maxWidth={props.maxWidth}>{props.children}</StyledContainer>
    );
};

export default MarginContainer;
