import React, {useEffect, useState} from 'react';
import {Button, Menu, MenuItem} from '@material-ui/core';
import DetailsIcon from '@material-ui/icons/Details';
import CheckIcon from '@material-ui/icons/Check';
import axios from 'axios';

interface FavoritesDropDownProps {
    allOptions: Array<string>;
    favoriteOptions: Array<string>;
    favKey: string;
    userId: string;
}

// NOTE: console logs are commented out but kept in code to aid future development & debugging
const FavoritesDropDown = (props: FavoritesDropDownProps) => {
    const { allOptions, favoriteOptions, favKey, userId } = props;
    const [favs, setFavs] = useState<Array<string>>([]);
    const [anchorEl, setAnchorEl] = React.useState(null);

    useEffect(() => {
        setFavs(favoriteOptions);
    }, [favoriteOptions]);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (subject: string, isFav: boolean) => {
        setAnchorEl(null);
        if (isFav) {
            const filteredFavs = favs.filter((f) => f !== subject);
            setFavs(filteredFavs);
        } else {
            setFavs([...favs, subject]);
        }
        const act = isFav ? 'REMOVE' : 'ADD';
        const encodedSubject = encodeURIComponent(subject);
        axios.put(`/users/${favKey}/${encodedSubject}/${userId}`, {
            action: act
        }).then((response: any) => {
            // console.log(response);
        }).catch((error: any) => {
            // console.log('Error adding or removing favorite from dropdown', error);
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
                {allOptions.map((o, index) => {
                    const isFav = favs.includes(o);
                    return (
                        <MenuItem key={index} onClick={() => handleClose(o, isFav)} style={{whiteSpace: 'normal'}}>
                            {o}
                            {isFav && <CheckIcon fontSize={'small'}/>}
                        </MenuItem>);
                })}
            </Menu>
        </>
    );
};

export default FavoritesDropDown;
