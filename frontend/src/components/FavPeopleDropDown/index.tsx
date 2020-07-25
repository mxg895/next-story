import React, {useEffect, useState} from 'react';
import {Button, Menu, MenuItem} from '@material-ui/core';
import DetailsIcon from '@material-ui/icons/Details';
import CheckIcon from '@material-ui/icons/Check';
import axios from 'axios';

interface FavPeopleDropDownProps {
    allPeople: Array<string>;
    favoritePeople: Array<string>;
    favKey: string;
    userId: string;
}

const FavPeopleDropDown = (props: FavPeopleDropDownProps) => {
    const { allPeople, favoritePeople, favKey, userId } = props;
    const [favPeople, setFavPeople] = useState<Array<string>>([]);
    const [anchorEl, setAnchorEl] = React.useState(null);

    useEffect(() => {
        setFavPeople(favoritePeople);
    }, [favoritePeople]);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (person: string, isFav: boolean) => {
        setAnchorEl(null);
        if (isFav) {
            const filteredFavs = favPeople.filter((p) => p !== person);
            setFavPeople(filteredFavs);
        } else {
            setFavPeople([...favPeople, person]);
        }
        const act = isFav ? 'REMOVE' : 'ADD';
        axios.put(`/users/${favKey}/${person}/${userId}`, {
            action: act
        }).then((response: any) => {
            console.log(response);
        })
            .catch((error: any) => {
                console.log('Error getting reviews', error);
            });
    };
    const handleMenuClose = () => {
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
                onClose={handleMenuClose}
            >
                {allPeople.map((p, index) => {
                    const isFav = favPeople.includes(p);
                    return (
                        <MenuItem key={index} onClick={() => handleClose(p, isFav)}>
                            {p}
                            {isFav && <CheckIcon fontSize={'small'}/>}
                        </MenuItem>);
                })}
            </Menu>
        </>
    );
};

export default FavPeopleDropDown;
