import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Icon from '@mui/material/Icon';

function TwoToneIcons() {
    return <Icon baseClassName="material-icons-two-tone">+</Icon>;
  }

export default function SelectedListItem() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <div>

    <div className="heading-container">
                <h1>Welcome</h1>
            </div>

    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="Create New Goal" />
          <ListItemIcon>
          </ListItemIcon>
        </ListItemButton>
      </List>
    </Box>

    </div>
  );
}


//export default Welcome;