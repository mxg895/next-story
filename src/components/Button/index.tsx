import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{fontSize?: string}>`
    margin-right: 10px;
    background: none;
    border: none;
    color: ${({ theme }) => theme.palette.grey[500]};
    cursor: pointer;
    font-size: ${(props) => props.fontSize || '16px'};

    &:hover {
        color: ${({ theme }) => theme.palette.primary.main};
    }
`;

interface ButtonProps {
    onClick: () => void;
    label?: string;
    children?: string;
    fontSize?: string;
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const {onClick, label, children} = props;
    return (
        <StyledButton onClick={onClick}>
            {label || children}
        </StyledButton>
    );
};

export default Button;
