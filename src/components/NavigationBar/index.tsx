import React from 'react';
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
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';

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

const DesktopNavigationItems = styled.div`
    display: none;
    @media (min-width: 992px) {
        display: flex;
    }
`;

const SearchArea = styled.div`
    display: flex;
`;

const DesktopMenu = styled.div`
    display: none;
    @media (min-width: 992px) {
        display: flex;
    }
`;

const MobileMenu = styled.div`
    display: none;
    @media (max-width: 991px) {
        display: flex;
    }
`;

const DesktopNavigationTabs = styled(Tabs)`
`;

const SearchInputArea = styled(InputBase)`
    background-color: white;
`;

const SearchButton = styled(Button)`
`;

const NavigationBar = () => {
    const [value, setValue] = React.useState(0);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleDesktopMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
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
        onClose={handleMenuClose}
        >
        <MenuItem onClick={handleMenuClose}>Login</MenuItem>
        <MenuItem onClick={handleMenuClose}>Signup</MenuItem>
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
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
        <MenuItem onClick={handleMenuClose}>Movies</MenuItem>
        <MenuItem onClick={handleMenuClose}>Books</MenuItem>
        <MenuItem onClick={handleMenuClose}>Login</MenuItem>
        <MenuItem onClick={handleMenuClose}>Signup</MenuItem>
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        </Menu>
    );

    return (
        <NavContainer>
            <Toolbar>
                <Logo href='/'>
                    Next Story
                </Logo>
                <DesktopNavigationItems>
                    <DesktopNavigationTabs 
                        variant='fullWidth'
                        value={value}
                        aria-label='nav items tabs'
                        onChange={handleChange}
                    >
                        <Tab 
                            component='a' 
                            label='Movies'
                        />
                        <Tab 
                            component='a' 
                            label='Books'
                        />
                    </DesktopNavigationTabs>
                </DesktopNavigationItems>
                <Spacer/>
                <SearchArea>
                    <SearchInputArea
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    <SearchButton>
                        <SearchIcon/>
                    </SearchButton>
                </SearchArea>
                <Spacer/>
                <DesktopMenu>
                    <IconButton
                        edge="end"
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleDesktopMenuOpen}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </DesktopMenu>
                <MobileMenu>
                    <IconButton
                        aria-label="show more"
                        aria-controls={mobileMenuId}
                        aria-haspopup="true"
                        onClick={handleMobileMenuOpen}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                </MobileMenu>
            </Toolbar>
            {renderMobileMenu}
            {renderMenu}
        </NavContainer>
    );
};

export default NavigationBar;