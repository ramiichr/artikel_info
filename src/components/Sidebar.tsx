import React from "react";
import {
  Box,
  Drawer,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import {
  Search as SearchIcon,
  LocalShipping as DeliveryIcon,
  LocationOff as NoLocationIcon,
  Flag as FlagIcon,
  Inbox as BoxIcon,
  ViewList as PalletIcon,
  Home as HomeIcon,
} from "@mui/icons-material";

interface SidebarProps {
  drawerWidth: number;
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
  selectedSection: string;
  setSelectedSection: (section: string) => void;
  isLoggedIn: boolean;
  isMobile: boolean;
}

const menuItems = [
  { id: "dashboard", label: "Dashboard", icon: HomeIcon },
  { id: "search", label: "Artikelsuche", icon: SearchIcon },
  { id: "deliveries", label: "Offene Lieferungen", icon: DeliveryIcon },
  { id: "no-location", label: "Artikel ohne Fach", icon: NoLocationIcon },
  { id: "flag-filter", label: "Flag Filter", icon: FlagIcon },
  { id: "box-content", label: "Box Inhalt", icon: BoxIcon },
  { id: "pallet-list", label: "Paletten Liste", icon: PalletIcon },
];

const Sidebar: React.FC<SidebarProps> = ({
  drawerWidth,
  mobileOpen,
  handleDrawerToggle,
  selectedSection,
  setSelectedSection,
  isLoggedIn,
  isMobile,
}) => {
  const drawer = (
    <div>
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Box
            component="img"
            sx={{
              height: 32,
              width: 32,
              mr: 2,
              backgroundColor: "#1976d2",
              borderRadius: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          />
          <Typography variant="h6" noWrap component="div" color="primary">
            Artikel Info
          </Typography>
        </Box>
      </Toolbar>
      <Divider />
      <List>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isDisabled = !isLoggedIn && item.id !== "dashboard";

          return (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                selected={selectedSection === item.id}
                onClick={() => {
                  if (!isDisabled) {
                    setSelectedSection(item.id);
                    if (isMobile) {
                      handleDrawerToggle();
                    }
                  }
                }}
                disabled={isDisabled}
                sx={{
                  borderLeft: "3px solid transparent",
                  "&.Mui-selected": {
                    backgroundColor: "#e3f2fd",
                    borderLeft: "3px solid #1976d2",
                    "& .MuiListItemIcon-root": {
                      color: "#1976d2",
                    },
                    "& .MuiListItemText-primary": {
                      color: "#000000",
                      fontWeight: 600,
                    },
                  },
                  "&:hover": {
                    backgroundColor: "#e3f2fd",
                    borderLeft: "3px solid #1976d2",
                  },
                }}
              >
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText
                  primary={item.label}
                  slotProps={{
                    primary: {
                      fontSize: "14px",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#fafafa",
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            backgroundColor: "#fafafa",
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
