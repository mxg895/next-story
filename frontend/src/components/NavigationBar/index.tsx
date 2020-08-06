import React, {useEffect} from 'react';
import styled from 'styled-components';
import {
    AppBar,
    Menu,
    MenuItem,
    Tab,
    Tabs,
    Toolbar,
    InputBase,
    Button,
    IconButton,
    Hidden
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useHistory } from 'react-router-dom';

const NavContainer = styled(AppBar)`
    top: 0;
    left: 0;
    width: 100%;
`;

const Logo = styled.a`
    color: white;
    text-decoration: none;
`;

const Spacer = styled.div`
    flex: 1;
`;

const SearchArea = styled.div`
    display: flex;
`;

const SearchInputArea = styled(InputBase)`
    background-color: white;
    padding-left: 5px;
`;

const NavigationBar = () => {
    const [page, setPage] = React.useState<boolean | string>(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
    const [searchBarText, setSearchBarText] = React.useState<string>('');
    const history = useHistory();

    const handleSearchBarTextChange = (event: any) => {
        setSearchBarText(event.target.value);
    };
    const handleSearch = () => {
        if (searchBarText) {
            history.push(`/searchResult/param?singleQueryType=searchBar&query=${searchBarText}`);
        }
    };

    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
        setPage(newValue);
    };

    useEffect(() => {
        switch (page) {
            case 'explore':
                history.push('/explore');
                break;
            case 'tags':
                history.push('/allStoryTags');
                break;
            case 'logout':
                history.push('/login');
                break;
            case 'profile':
                history.push('/profile');
                break;
            default:
                break;
        }
    }, [history, page]);
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleDesktopMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const closeMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMenuClose = (event: React.MouseEvent<HTMLElement>, value: string) => {
        setAnchorEl(null);
        setPage(value);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'desktop-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={closeMenu}
        >
            <MenuItem onClick={(ev) => handleMenuClose(ev, 'logout')}>Logout</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'mobile-menu';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={(ev) => handleMenuClose(ev, 'tags')}>Tags</MenuItem>
            <MenuItem onClick={(ev) => handleMenuClose(ev, 'explore')}>Explore</MenuItem>
            <MenuItem onClick={(ev) => handleMenuClose(ev, 'profile')}>Profile</MenuItem>
            <MenuItem onClick={(ev) => handleMenuClose(ev, 'logout')}>Logout</MenuItem>
        </Menu>
    );

    return (
        <NavContainer>
            <Toolbar>
                <Logo href='/'>
                    Next Story
                </Logo>
                <Hidden
                    smDown
                >
                    <Tabs
                        variant='fullWidth'
                        value={ (page === 'tags' || page === 'explore') ? page : false }
                        aria-label='nav items tabs'
                        onChange={handleChange}
                    >
                        <Tab
                            component='a'
                            label='Tags'
                            value={'tags'}
                        />
                        <Tab
                            component='a'
                            label='Explore'
                            value={'explore'}
                        />
                    </Tabs>
                </Hidden>
                <Spacer/>
                <SearchArea>
                    <SearchInputArea
                        placeholder='Search…'
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={handleSearchBarTextChange}
                        onKeyPress={handleKeyPress}
                    />
                    <Button onClick={handleSearch}>
                        <SearchIcon/>
                    </Button>
                </SearchArea>
                <Spacer/>
                <Hidden
                    smDown
                >
                    <IconButton
                        edge='end'
                        aria-label='profile'
                        aria-haspopup='true'
                        color='inherit'
                        onClick={() => history.push('/profile')}
                    >
                        <AccountCircle />
                    </IconButton>
                    <IconButton
                        edge='end'
                        aria-label='logout'
                        aria-controls={menuId}
                        aria-haspopup='true'
                        onClick={handleDesktopMenuOpen}
                        color='inherit'
                    >
                        <MenuIcon />
                    </IconButton>
                </Hidden>
                <Hidden
                    mdUp
                >
                    <IconButton
                        aria-label='show more'
                        aria-controls={mobileMenuId}
                        aria-haspopup='true'
                        onClick={handleMobileMenuOpen}
                        color='inherit'
                    >
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </Toolbar>
            {renderMobileMenu}
            {renderMenu}
        </NavContainer>
    );
};

export default NavigationBar;
