import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

function TemporaryDrawer(props) {
  const [toggle, setToggle] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    console.log(event.target.innerText);
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setToggle(open);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "20vw" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {props.data.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={"/"+text.toLowerCase()}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon
              sx={{
                color: "#e0f7fa",
                fontSize: "2.5rem",
              }}
            />
          </Button>
          <Drawer
            anchor={anchor}
            open={toggle}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

export default TemporaryDrawer;
