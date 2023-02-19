//React Imports
import React from 'react';

//MUI Imports
import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Toolbar,
	Typography,
} from '@mui/material';
import { Lock, Menu } from '@mui/icons-material';

//Local Imports
import photoURL from '../images/fikret.jpg';
import UserIcons from './user/UserIcons';
import { useValue } from '../context/ContextProvider';

const user = { name: 'test', photoURL };

const NavBar = () => {
	const {
		state: { currentUser },
		dispatch,
	} = useValue();

	return (
		<AppBar>
			<Container maxWidth="lg">
				<Toolbar disableGutters>
					<Box sx={{ mr: 1 }}>
						<IconButton size="large" color="inherit">
							<Menu />
						</IconButton>
					</Box>
					<Typography
						variant="h6"
						component="h1"
						noWrap
						sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						You Are Welcome
					</Typography>
					<Typography
						variant="h6"
						component="h1"
						noWrap
						sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						YRW
					</Typography>
					{!currentUser ? (
						<Button
							color="inherit"
							startIcon={<Lock />}
							onClick={() => dispatch({ type: 'UPDATE_USER', payload: user })}>
							Login
						</Button>
					) : (
						<UserIcons />
					)}
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default NavBar;
