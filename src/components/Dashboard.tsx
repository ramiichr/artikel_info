import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  Button,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Menu as MenuIcon,
  AccountCircle,
  ExitToApp as LogoutIcon,
} from "@mui/icons-material";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const drawerWidth = 280;

interface User {
  name: string;
  email: string;
  isLoggedIn: boolean;
}

const Dashboard: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState("dashboard");
  const [user, setUser] = useState<User>({
    name: "Max Musterfrau",
    email: "max.musterfrau@company.com",
    isLoggedIn: true,
  });
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    setUser({
      name: "Max Musterfrau",
      email: "max.musterfrau@company.com",
      isLoggedIn: true,
    });
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setUser({
      name: "",
      email: "",
      isLoggedIn: false,
    });
    setSelectedSection("dashboard");
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          backgroundColor: "#fff",
          color: "#333",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Artikel Info
          </Typography>
          <Typography variant="caption" sx={{ mr: 2, color: "#666" }}>
            Version 06.05 vom 17.12.2024
          </Typography>
          {user.isLoggedIn ? (
            <>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleProfileClick}
                color="inherit"
              >
                <Avatar sx={{ width: 32, height: 32, bgcolor: "#1976d2" }}>
                  {user.name.charAt(0)}
                </Avatar>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleProfileClose}
              >
                <MenuItem disabled>
                  <Typography variant="subtitle2">{user.name}</Typography>
                </MenuItem>
                <MenuItem disabled>
                  <Typography variant="caption">{user.email}</Typography>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <LogoutIcon fontSize="small" />
                  </ListItemIcon>
                  Abmelden
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Button
              color="primary"
              variant="contained"
              onClick={handleLogin}
              startIcon={<AccountCircle />}
            >
              Anmelden
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Sidebar
        drawerWidth={drawerWidth}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
        isLoggedIn={user.isLoggedIn}
        isMobile={isMobile}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          mt: "64px",
          backgroundColor: "#f5f5f5",
          minHeight: "calc(100vh - 64px)",
        }}
      >
        <MainContent
          selectedSection={selectedSection}
          isLoggedIn={user.isLoggedIn}
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
