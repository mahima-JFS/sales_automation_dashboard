import React, { useState } from "react";

import {
  AppBar,
  Toolbar,
  Container,
  Stack,
  Box,
  Link,
  Button,
  IconButton,
  Drawer,
  Divider,
} from "@mui/material";

import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import LogoBlue from "../../assets/images/Trudialer-orangeblue.png";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "Comparisons", path: "/comparisons" },
  { label: "Pricing", path: "/pricing" },
  { label: "Blog", path: "/blog" },
  { label: "Contact us", path: "/contact" },
];

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogin = () => {
    setMobileOpen(false);
    navigate("/login");
  };

  /* =========================================================
     LOGO
  ========================================================= */

  const Logo = (
    <Stack
      component={RouterLink}
      to="/"
      direction="row"
      alignItems="center"
      onClick={() => setMobileOpen(false)}
      sx={{
        textDecoration: "none",
        cursor: "pointer",
        flexShrink: 0,
        width: "fit-content",
      }}
    >
      <Box
        sx={{
          width: {
            xs: 140,
            sm: 170,
            md: 200,
          },

          height: {
            xs: 54,
            sm: 60,
            md: 72,
          },

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          flexShrink: 0,

          overflow: "hidden",

          p: {
            xs: 0.3,
            md: 0.5,
          },
        }}
      >
        <Box
          component="img"
          src={LogoBlue}
          alt="TruDialer"
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            display: "block",
          }}
        />
      </Box>
    </Stack>
  );

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        top: 0,

        zIndex: (theme) => theme.zIndex.appBar,

        bgcolor: "#FFFFFF",

        color: "#0F172A",

        borderBottom: "1px solid #E9EDF3",

        boxShadow: "0 4px 20px rgba(15, 23, 42, 0.04)",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: {
            xs: 2,
            sm: 3,
            md: 4,
            lg: 5,
          },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            position: "relative",

            minHeight: {
              xs: "72px",
              sm: "78px",
              md: "90px",
            },

            width: "100%",

            display: "flex",
            alignItems: "center",

            justifyContent: "space-between",
          }}
        >
          {/* =====================================================
              LOGO - LEFT
              DESKTOP UNCHANGED
          ===================================================== */}

          <Box
            sx={{
              display: "flex",
              alignItems: "center",

              zIndex: 2,
            }}
          >
            {Logo}
          </Box>

          {/* =====================================================
              DESKTOP NAVIGATION - EXACT CENTER
              DESKTOP UNCHANGED
          ===================================================== */}

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={{
              md: 3.5,
              lg: 4.5,
            }}
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },

              position: "absolute",

              left: "50%",
              top: "50%",

              transform: "translate(-50%, -50%)",

              whiteSpace: "nowrap",

              zIndex: 1,
            }}
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                location.pathname === link.path ||
                (link.path !== "/" && location.pathname.startsWith(link.path));

              return (
                <Link
                  key={link.label}
                  component={RouterLink}
                  to={link.path}
                  underline="none"
                  sx={{
                    position: "relative",

                    display: "inline-flex",
                    alignItems: "center",

                    height: 48,

                    fontSize: {
                      md: 17,
                      lg: 18,
                    },

                    fontWeight: isActive ? 650 : 500,

                    letterSpacing: "0.1px",

                    color: isActive ? "#F97316" : "#334155",

                    cursor: "pointer",

                    transition: "color 0.25s ease, transform 0.25s ease",

                    "&::after": {
                      content: '""',

                      position: "absolute",

                      left: 0,
                      right: 0,

                      bottom: 3,

                      height: 2.5,

                      borderRadius: "10px",

                      backgroundColor: "#F97316",

                      transform: isActive ? "scaleX(1)" : "scaleX(0)",

                      transformOrigin: "center",

                      transition: "transform 0.25s ease",
                    },

                    "&:hover": {
                      color: "#F97316",

                      transform: "translateY(-1px)",
                    },

                    "&:hover::after": {
                      transform: "scaleX(1)",
                    },
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </Stack>

          {/* =====================================================
              DESKTOP SIGN IN - RIGHT
              DESKTOP UNCHANGED
          ===================================================== */}

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },

              alignItems: "center",

              ml: "auto",

              zIndex: 2,
            }}
          >
            <Button
              variant="outlined"
              onClick={handleLogin}
              sx={{
                minWidth: {
                  md: 108,
                  lg: 120,
                },

                height: {
                  md: 46,
                  lg: 50,
                },

                px: {
                  md: 2.5,
                  lg: 3,
                },

                borderRadius: "14px",

                textTransform: "none",

                fontSize: {
                  md: 16,
                  lg: 17,
                },

                fontWeight: 700,

                border: "1.5px solid #FDBA8C",

                color: "#F97316",

                backgroundColor: "#FFFFFF",

                transition: "all 0.25s ease",

                "&:hover": {
                  borderColor: "#F97316",

                  color: "#EA580C",

                  bgcolor: "#FFF7ED",

                  transform: "translateY(-2px)",

                  boxShadow: "0 8px 20px rgba(249, 115, 22, 0.12)",
                },
              }}
            >
              Sign in
            </Button>
          </Box>

          {/* =====================================================
              MOBILE MENU BUTTON
          ===================================================== */}

          <IconButton
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            sx={{
              display: {
                xs: "inline-flex",
                md: "none",
              },

              width: {
                xs: 48,
                sm: 50,
              },

              height: {
                xs: 48,
                sm: 50,
              },

              flexShrink: 0,

              borderRadius: "12px",

              color: "#0F172A",

              border: "1px solid #E2E8F0",

              backgroundColor: "#FFFFFF",

              "&:hover": {
                bgcolor: "#FFF7ED",

                borderColor: "#FDBA8C",

                color: "#F97316",
              },
            }}
          >
            <MenuIcon
              sx={{
                fontSize: {
                  xs: 29,
                  sm: 30,
                },
              }}
            />
          </IconButton>
        </Toolbar>
      </Container>

      {/* =========================================================
          MOBILE DRAWER
      ========================================================= */}

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: {
              xs: "88vw",
              sm: 380,
            },

            maxWidth: "380px",

            bgcolor: "#FFFFFF",

            boxShadow: "-15px 0 45px rgba(15, 23, 42, 0.16)",

            overflowX: "hidden",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",

            flexDirection: "column",

            width: "100%",

            height: "100%",

            bgcolor: "#FFFFFF",
          }}
        >
          {/* =====================================================
              MOBILE DRAWER HEADER
              LOGO LEFT + CLOSE EXACT RIGHT
          ===================================================== */}

          <Box
            sx={{
              width: "100%",

              minHeight: {
                xs: 82,
                sm: 88,
              },

              px: {
                xs: 2,
                sm: 2.5,
              },

              display: "flex",

              alignItems: "center",

              justifyContent: "space-between",

              boxSizing: "border-box",
            }}
          >
            {/* MOBILE LOGO */}

            <Box
              sx={{
                display: "flex",

                alignItems: "center",

                flexShrink: 0,

                "& > a > div": {
                  width: {
                    xs: 105,
                    sm: 115,
                  },

                  height: {
                    xs: 62,
                    sm: 68,
                  },

                  p: 0,
                },
              }}
            >
              {Logo}
            </Box>

            {/* CLOSE BUTTON - EXACT RIGHT */}

            <IconButton
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
              sx={{
                width: {
                  xs: 46,
                  sm: 48,
                },

                height: {
                  xs: 46,
                  sm: 48,
                },

                minWidth: {
                  xs: 46,
                  sm: 48,
                },

                flexShrink: 0,

                borderRadius: "12px",

                color: "#0F172A",

                border: "1px solid #E2E8F0",

                backgroundColor: "#FFFFFF",

                ml: 2,

                "&:hover": {
                  color: "#F97316",

                  bgcolor: "#FFF7ED",

                  borderColor: "#FDBA8C",
                },
              }}
            >
              <CloseIcon
                sx={{
                  fontSize: {
                    xs: 27,
                    sm: 28,
                  },
                }}
              />
            </IconButton>
          </Box>

          <Divider
            sx={{
              borderColor: "#EEF2F7",
            }}
          />

          {/* =====================================================
              MOBILE NAVIGATION
          ===================================================== */}

          <Stack
            sx={{
              px: {
                xs: 2,
                sm: 2.5,
              },

              py: {
                xs: 2,
                sm: 2.5,
              },

              width: "100%",

              boxSizing: "border-box",
            }}
            spacing={0.8}
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                location.pathname === link.path ||
                (link.path !== "/" && location.pathname.startsWith(link.path));

              return (
                <Link
                  key={link.label}
                  component={RouterLink}
                  to={link.path}
                  underline="none"
                  onClick={() => setMobileOpen(false)}
                  sx={{
                    display: "flex",

                    alignItems: "center",

                    width: "100%",

                    minHeight: {
                      xs: 56,
                      sm: 58,
                    },

                    px: {
                      xs: 1.6,
                      sm: 1.8,
                    },

                    boxSizing: "border-box",

                    borderRadius: "13px",

                    fontSize: {
                      xs: 18,
                      sm: 19,
                    },

                    fontWeight: isActive ? 650 : 500,

                    color: isActive ? "#F97316" : "#334155",

                    backgroundColor: isActive ? "#FFF7ED" : "transparent",

                    transition: "all 0.2s ease",

                    "&:hover": {
                      color: "#F97316",

                      bgcolor: "#FFF7ED",

                      transform: "translateX(3px)",
                    },
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </Stack>

          {/* =====================================================
              MOBILE SIGN IN
          ===================================================== */}

          <Box
            sx={{
              mt: "auto",

              width: "100%",

              px: {
                xs: 2,
                sm: 2.5,
              },

              py: {
                xs: 2.5,
                sm: 3,
              },

              boxSizing: "border-box",
            }}
          >
            <Button
              fullWidth
              variant="contained"
              onClick={handleLogin}
              sx={{
                height: {
                  xs: 54,
                  sm: 56,
                },

                borderRadius: "13px",

                textTransform: "none",

                fontSize: {
                  xs: 17,
                  sm: 18,
                },

                fontWeight: 700,

                bgcolor: "#F97316",

                color: "#FFFFFF",

                boxShadow: "0 10px 25px rgba(249, 115, 22, 0.22)",

                "&:hover": {
                  bgcolor: "#EA580C",

                  boxShadow: "0 12px 28px rgba(249, 115, 22, 0.28)",
                },
              }}
            >
              Sign in
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
