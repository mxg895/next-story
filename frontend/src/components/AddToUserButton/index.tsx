import styled from 'styled-components';
import React, {useEffect, useState} from 'react';

const StyledButton = styled.button<{ isAddedToUser: boolean }>`
    background-color: ${({ theme, isAddedToUser }) => isAddedToUser ? theme.palette.grey[300] : theme.palette.primary.light};
    border: none;
    outline: none;
    font-size: 16px;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
    margin: 5px;
    color: ${({ isAddedToUser }) => isAddedToUser ? 'black' : 'white'};
`;

interface AddToUserButtonProps {
    addLabel: string;
    removeLabel: string;
    isAdded: boolean;
    toBackendOnClick: any;
}

const AddToUserButton: React.FC<AddToUserButtonProps> = (props: AddToUserButtonProps) => {
    const { addLabel, removeLabel,isAdded, toBackendOnClick } = props;
    const [isAddedToUser, setIsAddedToUser] = useState<boolean>(false);

    useEffect(() => {
        setIsAddedToUser(isAdded);
    }, [isAdded]);

    const toggleAddedToUser = () => {
        if (isAddedToUser) {
            setIsAddedToUser(false);
        } else {
            setIsAddedToUser(true);
        }
        toBackendOnClick();
    };

    return (
        <StyledButton
            isAddedToUser={isAddedToUser}
            onClick={() => toggleAddedToUser()}
        >
            {isAddedToUser ? removeLabel : addLabel}
        </StyledButton>
    );
};

export default AddToUserButton;
