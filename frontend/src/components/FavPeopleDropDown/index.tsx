import React from 'react';
import {Button, Menu, MenuItem} from '@material-ui/core';
import DetailsIcon from '@material-ui/icons/Details';

interface FavPeopleDropDownProps {
    people: Array<string>;
}

const FavPeopleDropDown = (props: FavPeopleDropDownProps) => {
    const { people } = props;
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Button
                onClick={handleClick}
                endIcon={<DetailsIcon/>}
                style={{ fontSize: '12px' }}
            >
                Add to favorites
            </Button>
            <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {people.map((p, index) => {
                    return <MenuItem key={index} onClick={handleClose}>{p}</MenuItem>;
                })}
            </Menu>
        </>
    );
};

export default FavPeopleDropDown;
