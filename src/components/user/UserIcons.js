//REACT IMPORTS
import { useState } from 'react';

//MUI IMPORTS
import { Box, IconButton, Badge, Avatar, Tooltip } from '@mui/material';
import { Mail } from '@mui/icons-material';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';

//LOCAL IMPORTS
import { useValue } from '../../context/ContextProvider';
import UserMenu from '../UserMenu';

const UserIcons = () => {
	const {
		state: { currentUser },
	} = useValue();

	const [anchorUserMenu, setAnchorUserMenu] = useState(null);
	return (
		<Box>
			<IconButton size="large" color="inherit">
				<Badge color="error" badgeContent={5}>
					<Mail />
				</Badge>
			</IconButton>
			<IconButton size="large" color="inherit">
				<Badge color="error" badgeContent={5}>
					<CircleNotificationsIcon />
				</Badge>
			</IconButton>
			<Tooltip title="Open User Settings">
				<IconButton onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
					<Avatar src={currentUser?.photoURL} alt={currentUser?.name}>
						{currentUser?.name?.charAt().toUpperCase()}
					</Avatar>
				</IconButton>
			</Tooltip>
			<UserMenu {...{ anchorUserMenu, setAnchorUserMenu }} />
		</Box>
	);
};

export default UserIcons;
