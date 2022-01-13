import * as React from "react"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { Link } from "react-router-dom"
import { createTheme } from "@mui/material"
import { ThemeProvider } from "@emotion/react"
import StorefrontTwoToneIcon from "@mui/icons-material/StorefrontTwoTone"
import LoginIcon from "@mui/icons-material/Login"
import StoreContext from "../uiltes/StoreContext"
import FaceTwoToneIcon from '@mui/icons-material/FaceTwoTone';
import ShoppingCartCheckoutTwoToneIcon from '@mui/icons-material/ShoppingCartCheckoutTwoTone';
const drawerWidth = 240

export default function PermanentDrawerLeft() {
  const { logout } = React.useContext(StoreContext)
  return (
    <ThemeProvider
      theme={createTheme({
        components: {
          MuiListItemButton: {
            defaultProps: {
              disableTouchRipple: true,
            },
          },
        },
        palette: {
          mode: "dark",
          primary: { main: "rgb(102, 157, 246)" },
          background: { paper: "rgb(5, 30, 52)" },
        },
      })}
    >
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          <ListItem>
            <ListItemIcon>
              <StorefrontTwoToneIcon />
            </ListItemIcon>
            <ListItemText primary="seller  dashboard" />
          </ListItem>
        </List>
        <List>
          <Link to="/profile">
            <ListItem button>
              <ListItemIcon>
                <FaceTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="profile" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          </List>

          <List>
          <Link to="/product">
            <ListItem button>
              <ListItemIcon>
                <ProductionQuantityLimitsIcon />
              </ListItemIcon>
              <ListItemText primary="my product" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          </List>

          <List>
          <Link to="/order">
            <ListItem button>
              <ListItemIcon>
                <ShoppingCartCheckoutTwoToneIcon />
              </ListItemIcon>
              <ListItemText primary="order" sx={{ color: "white", textDecoration: "none" }} />
            </ListItem>
          </Link>
          </List>

        <List style={{ marginTop: "auto" }}>
          {localStorage.tokenAdmin ? (
            <Link to="/login">
              <ListItem button>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="logout" sx={{ color: "white", textDecoration: "none" }} onClick={logout} />
              </ListItem>
            </Link>
          ) : (
            <Link to="/login">
              <ListItem button>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary="login" sx={{ color: "white", textDecoration: "none" }} />
              </ListItem>
            </Link>
          )}
        </List>
      </Drawer>
    </ThemeProvider>
  )
}
