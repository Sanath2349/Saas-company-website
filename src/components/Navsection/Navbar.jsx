import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router";
import logoo from "/logoo.png";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleAboutus = () => {
    navigate("/aboutus");
    handleCloseNavMenu();
  };
  const handleServices = () => {
    navigate("/services");
    handleCloseNavMenu();
  };
  const handleHomepage = () => {
    navigate("/");
    handleCloseNavMenu();
  };
  const handleContactus = () => {
    navigate("/contactus");
    handleCloseNavMenu();
  };

  const handleCareers = () => {
    navigate("/careers");
    handleCloseNavMenu();
  };

  const handlegallery = () => {
    navigate("/gallery");
    handleCloseNavMenu();
  };

  return (
    <AppBar position="sticky" sx={{ bgcolor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            onClick={handleHomepage}
          >
            PRIACC INN
          </Typography> */}
          <Box sx={{ width: 200, display: { xs: "none", md: "flex" } }}>
            <img src={logoo} alt="" style={{ width: "100%" }} />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))} */}
              <MenuItem onClick={handleHomepage}>
                <Typography sx={{ textAlign: "center" }}>Home</Typography>
              </MenuItem>
              <MenuItem onClick={handleAboutus}>
                <Typography sx={{ textAlign: "center" }}>About us</Typography>
              </MenuItem>
              <MenuItem onClick={handleServices}>
                <Typography sx={{ textAlign: "center" }}>Services</Typography>
              </MenuItem>
              <MenuItem onClick={handleCareers}>
                <Typography sx={{ textAlign: "center" }}>Careers</Typography>
              </MenuItem>
              <MenuItem onClick={handlegallery}>
                <Typography sx={{ textAlign: "center" }}>Gallery</Typography>
              </MenuItem>
              <MenuItem onClick={handleContactus}>
                <Typography sx={{ textAlign: "center" }}>Contact</Typography>
              </MenuItem>
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            onClick={handleHomepage}
          >
            PRIACC INN
          </Typography> */}
          <Box sx={{ width: 200, display: { xs: "flex", md: "none" } }}>
            <img src={logoo} alt="" style={{ width: "100%" }} />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                alignItems: "center",
                justifyContent: "center",
              },
            }}
          >
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                "&:hover": {
                  scale: 1.2,
                },
              }}
              onClick={handleHomepage}
            >
              Home
            </Button>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                "&:hover": {
                  scale: 1.2,
                },
              }}
              onClick={handleAboutus}
            >
              About Us
            </Button>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                "&:hover": {
                  scale: 1.2,
                },
              }}
              onClick={handleServices}
            >
              Services
            </Button>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                "&:hover": {
                  scale: 1.2,
                },
              }}
              onClick={handleCareers}
            >
              Careers
            </Button>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                "&:hover": {
                  scale: 1.2,
                },
              }}
              onClick={handlegallery}
            >
              Gallery
            </Button>
            <Button
              sx={{
                my: 2,
                color: "white",
                display: "block",
                "&:hover": {
                  scale: 1.2,
                },
              }}
              onClick={handleContactus}
            >
              Contact
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip> */}
            {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
