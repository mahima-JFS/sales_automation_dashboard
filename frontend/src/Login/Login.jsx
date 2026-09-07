import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  IconButton,
  Divider,
} from "@mui/material";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

import { Link as RouterLink } from "react-router-dom";
import LogoBlue from "../assets/images/Trudialer-orangeblue.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",

        display: "flex",

        alignItems: "center",
        justifyContent: "center",

        backgroundColor: "#FFFFFF",

        fontFamily: "Arial, sans-serif",

        px: {
          xs: 2.5,
          sm: 4,
          md: 5,
        },

        py: {
          xs: 4,
          sm: 5,
          md: 6,
        },

        boxSizing: "border-box",

        overflowY: "auto",
      }}
    >
      {/* =====================================================
          LOGIN CONTAINER
      ===================================================== */}

      <Box
        sx={{
          width: "100%",

          maxWidth: {
            xs: "100%",
            sm: "465px",
            md: "465px",
          },

          mx: "auto",
        }}
      >
        {/* =====================================================
            LOGO
        ===================================================== */}

        <Box
          sx={{
            display: "flex",

            alignItems: "center",
            justifyContent: "center",

            mb: {
              xs: 3,
              sm: 4,
              md: 4,
            },
          }}
        >
          <Box
            sx={{
              width: {
                xs: 105,
                sm: 115,
                md: 115,
              },

              height: {
                xs: 82,
                sm: 88,
                md: 88,
              },

              display: "flex",

              alignItems: "center",
              justifyContent: "center",

              backgroundColor: "#FFFFFF",

              borderRadius: "14px",

              overflow: "hidden",

              p: {
                xs: 1.2,
                sm: 1.4,
                md: 1.4,
              },

              boxShadow: "0 2px 8px rgba(15, 23, 42, 0.08)",

              flexShrink: 0,

              boxSizing: "border-box",
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
        </Box>

        {/* =====================================================
            HEADING
        ===================================================== */}

        <Box
          sx={{
            textAlign: "center",

            mb: {
              xs: 4,
              sm: 5,
              md: 5,
            },
          }}
        >
          <Typography
            sx={{
              fontSize: {
                xs: "27px",
                sm: "31px",
                md: "31px",
              },

              fontWeight: 700,

              color: "#1E293B",

              lineHeight: 1.2,
            }}
          >
            Welcome back
          </Typography>

          <Typography
            sx={{
              mt: 1,

              fontSize: {
                xs: "16px",
                sm: "18px",
                md: "18px",
              },

              color: "#475569",
            }}
          >
            Sign in to your account
          </Typography>
        </Box>

        {/* =====================================================
            EMAIL
        ===================================================== */}

        <Typography
          sx={{
            mb: 1.2,

            fontSize: "16px",

            fontWeight: 500,

            color: "#334155",
          }}
        >
          Email Address
        </Typography>

        <TextField
          fullWidth
          placeholder="you@example.com"
          type="email"
          autoComplete="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailOutlinedIcon
                  sx={{
                    color: "#94A3B8",
                    fontSize: 26,
                  }}
                />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              height: "55px",

              borderRadius: "12px",

              backgroundColor: "#FFFFFF",

              "& fieldset": {
                borderColor: "#CBD5E1",
              },

              "&:hover fieldset": {
                borderColor: "#94A3B8",
              },

              "&.Mui-focused fieldset": {
                borderColor: "#FF5A00",
                borderWidth: "1px",
              },
            },

            "& input": {
              fontSize: {
                xs: "16px",
                sm: "18px",
                md: "18px",
              },

              color: "#334155",
            },

            "& input::placeholder": {
              color: "#94A3B8",
              opacity: 1,
            },
          }}
        />

        {/* =====================================================
            PASSWORD
        ===================================================== */}

        <Typography
          sx={{
            mt: 3.5,

            mb: 1.2,

            fontSize: "16px",

            fontWeight: 500,

            color: "#334155",
          }}
        >
          Password
        </Typography>

        <TextField
          fullWidth
          placeholder="Enter your password"
          type={showPassword ? "text" : "password"}
          autoComplete="current-password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlinedIcon
                  sx={{
                    color: "#94A3B8",
                    fontSize: 26,
                  }}
                />
              </InputAdornment>
            ),

            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword((previous) => !previous)}
                  edge="end"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <VisibilityOffOutlinedIcon
                      sx={{
                        color: "#94A3B8",
                      }}
                    />
                  ) : (
                    <VisibilityOutlinedIcon
                      sx={{
                        color: "#94A3B8",
                      }}
                    />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              height: "55px",

              borderRadius: "12px",

              backgroundColor: "#FFFFFF",

              "& fieldset": {
                borderColor: "#CBD5E1",
              },

              "&:hover fieldset": {
                borderColor: "#94A3B8",
              },

              "&.Mui-focused fieldset": {
                borderColor: "#FF5A00",
                borderWidth: "1px",
              },
            },

            "& input": {
              fontSize: {
                xs: "16px",
                sm: "18px",
                md: "18px",
              },

              color: "#334155",
            },

            "& input::placeholder": {
              color: "#94A3B8",
              opacity: 1,
            },
          }}
        />

        {/* =====================================================
            REMEMBER ME
        ===================================================== */}

        <FormControlLabel
          sx={{
            mt: 2,

            ml: -1,

            "& .MuiFormControlLabel-label": {
              fontSize: "16px",

              color: "#475569",
            },
          }}
          control={
            <Checkbox
              checked={rememberMe}
              onChange={(event) => setRememberMe(event.target.checked)}
              sx={{
                color: "#94A3B8",

                "&.Mui-checked": {
                  color: "#FF5A00",
                },
              }}
            />
          }
          label="Remember me"
        />

        {/* =====================================================
            SIGN IN
        ===================================================== */}

        <Button
          fullWidth
          type="button"
          sx={{
            mt: 2,

            height: "53px",

            borderRadius: "12px",

            textTransform: "none",

            fontSize: "18px",

            fontWeight: 600,

            color: "#FFFFFF",

            backgroundColor: "#FF5A00",

            boxShadow: "none",

            "&:hover": {
              backgroundColor: "#E94F00",

              boxShadow: "none",
            },
          }}
        >
          Sign In
        </Button>

        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <Divider
          sx={{
            my: 4,

            borderColor: "#E2E8F0",
          }}
        />

        {/* =====================================================
            CREATE ACCOUNT
        ===================================================== */}

        <Typography
          sx={{
            textAlign: "center",

            fontSize: {
              xs: "15px",
              sm: "16px",
              md: "16px",
            },

            color: "#475569",

            lineHeight: 1.5,
          }}
        >
          Don't have an account?{" "}
          <Box
            component={RouterLink}
            // to="/register"
            sx={{
              color: "#D95000",

              fontWeight: 600,

              textDecoration: "none",

              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Create one
          </Box>
        </Typography>

        {/* =====================================================
            TERMS
        ===================================================== */}

        <Typography
          sx={{
            mt: 4,

            textAlign: "center",

            fontSize: {
              xs: "12px",
              sm: "14px",
              md: "14px",
            },

            color: "#64748B",

            lineHeight: 1.6,

            px: {
              xs: 1,
              sm: 0,
              md: 0,
            },
          }}
        >
          By signing in, you agree to our Terms of Service and Privacy Policy
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
