// import React from "react";

// import {
//   Box,
//   Container,
//   Typography,
//   Stack,
//   IconButton,
//   Divider,
//   Link,
// } from "@mui/material";

// import {
//   Facebook,
//   Instagram,
//   LinkedIn,
//   Twitter,
//   YouTube,
//   WhatsApp,
//   ForumOutlined,
//   ArrowUpward,
// } from "@mui/icons-material";

// import { Link as RouterLink } from "react-router-dom";

// const Footer = ({ onChatOpen }) => {
//   // Scroll page to top
//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   // Open WhatsApp
//   const openWhatsApp = () => {
//     window.open("/whatsapp", "_blank");

//     if (!number) {
//       console.error("VITE_WHATSAPP_NUMBER is not configured.");
//       return;
//     }

//     window.open(`https://wa.me/${number}`, "_blank", "noopener,noreferrer");
//   };

//   // ...rest of your Footer component

//   return (
//     <Box
//       component="footer"
//       sx={{
//         position: "relative",
//         bgcolor: "#0f172a",
//         color: "#ffffff",
//         mt: 8,
//       }}
//     >
//       {/* =========================
//           MAIN FOOTER
//       ========================== */}
//       <Container
//         maxWidth="xl"
//         sx={{
//           py: {
//             xs: 6,
//             md: 8,
//           },
//         }}
//       >
//         <Box
//           sx={{
//             display: "grid",
//             gridTemplateColumns: {
//               xs: "1fr",
//               sm: "1fr 1fr",
//               md: "2fr 1fr 1fr 1fr",
//             },
//             gap: {
//               xs: 5,
//               md: 6,
//             },
//           }}
//         >
//           {/* =========================
//               COMPANY
//           ========================== */}
//           <Box>
//             <Box
//               component={RouterLink}
//               to="/"
//               sx={{
//                 display: "inline-flex",
//                 alignItems: "center",
//                 textDecoration: "none",
//                 mb: 2,
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontSize: {
//                     xs: "24px",
//                     md: "28px",
//                   },
//                   fontWeight: 800,
//                   color: "#ffffff",
//                 }}
//               >
//                 TruDialer
//               </Typography>
//             </Box>

//             <Typography
//               sx={{
//                 color: "#cbd5e1",
//                 fontSize: "14px",
//                 lineHeight: 1.8,
//                 maxWidth: "380px",
//                 mb: 3,
//               }}
//             >
//               Automate your sales process with powerful AI-driven solutions
//               designed to engage leads, qualify prospects, and grow your
//               business.
//             </Typography>

//             {/* SOCIAL ICONS */}
//             <Stack direction="row" spacing={1}>
//               <IconButton
//                 component="a"
//                 href="#"
//                 aria-label="Facebook"
//                 sx={{
//                   color: "#cbd5e1",
//                   "&:hover": {
//                     color: "#ffffff",
//                     bgcolor: "rgba(255,255,255,0.08)",
//                   },
//                 }}
//               >
//                 <Facebook />
//               </IconButton>

//               <IconButton
//                 component="a"
//                 href="#"
//                 aria-label="Instagram"
//                 sx={{
//                   color: "#cbd5e1",
//                   "&:hover": {
//                     color: "#ffffff",
//                     bgcolor: "rgba(255,255,255,0.08)",
//                   },
//                 }}
//               >
//                 <Instagram />
//               </IconButton>

//               <IconButton
//                 component="a"
//                 href="#"
//                 aria-label="LinkedIn"
//                 sx={{
//                   color: "#cbd5e1",
//                   "&:hover": {
//                     color: "#ffffff",
//                     bgcolor: "rgba(255,255,255,0.08)",
//                   },
//                 }}
//               >
//                 <LinkedIn />
//               </IconButton>

//               <IconButton
//                 component="a"
//                 href="#"
//                 aria-label="Twitter"
//                 sx={{
//                   color: "#cbd5e1",
//                   "&:hover": {
//                     color: "#ffffff",
//                     bgcolor: "rgba(255,255,255,0.08)",
//                   },
//                 }}
//               >
//                 <Twitter />
//               </IconButton>

//               <IconButton
//                 component="a"
//                 href="#"
//                 aria-label="YouTube"
//                 sx={{
//                   color: "#cbd5e1",
//                   "&:hover": {
//                     color: "#ffffff",
//                     bgcolor: "rgba(255,255,255,0.08)",
//                   },
//                 }}
//               >
//                 <YouTube />
//               </IconButton>
//             </Stack>
//           </Box>

//           {/* =========================
//               COMPANY LINKS
//           ========================== */}
//           <Box>
//             <Typography
//               sx={{
//                 fontSize: "16px",
//                 fontWeight: 700,
//                 mb: 2.5,
//                 color: "#ffffff",
//               }}
//             >
//               Company
//             </Typography>

//             <Stack spacing={1.5}>
//               <Link
//                 component={RouterLink}
//                 to="/"
//                 underline="none"
//                 sx={{
//                   color: "#cbd5e1",
//                   fontSize: "14px",
//                   "&:hover": {
//                     color: "#ffffff",
//                   },
//                 }}
//               >
//                 Home
//               </Link>

//               <Link
//                 component={RouterLink}
//                 to="/about"
//                 underline="none"
//                 sx={{
//                   color: "#cbd5e1",
//                   fontSize: "14px",
//                   "&:hover": {
//                     color: "#ffffff",
//                   },
//                 }}
//               >
//                 About Us
//               </Link>

//               <Link
//                 component={RouterLink}
//                 to="/contact-us"
//                 underline="none"
//                 sx={{
//                   color: "#cbd5e1",
//                   fontSize: "14px",
//                   "&:hover": {
//                     color: "#ffffff",
//                   },
//                 }}
//               >
//                 Contact Us
//               </Link>

//               <Link
//                 component={RouterLink}
//                 to="/blogs"
//                 underline="none"
//                 sx={{
//                   color: "#cbd5e1",
//                   fontSize: "14px",
//                   "&:hover": {
//                     color: "#ffffff",
//                   },
//                 }}
//               >
//                 Blog
//               </Link>
//             </Stack>
//           </Box>

//           {/* =========================
//               PRODUCTS
//           ========================== */}
//           <Box>
//             <Typography
//               sx={{
//                 fontSize: "16px",
//                 fontWeight: 700,
//                 mb: 2.5,
//                 color: "#ffffff",
//               }}
//             >
//               Solutions
//             </Typography>

//             <Stack spacing={1.5}>
//               <Link
//                 component={RouterLink}
//                 to="/sales-automation"
//                 underline="none"
//                 sx={{
//                   color: "#cbd5e1",
//                   fontSize: "14px",
//                   "&:hover": {
//                     color: "#ffffff",
//                   },
//                 }}
//               >
//                 Sales Automation
//               </Link>

//               <Link
//                 component={RouterLink}
//                 to="/lead-generation"
//                 underline="none"
//                 sx={{
//                   color: "#cbd5e1",
//                   fontSize: "14px",
//                   "&:hover": {
//                     color: "#ffffff",
//                   },
//                 }}
//               >
//                 Lead Generation
//               </Link>

//               <Link
//                 component={RouterLink}
//                 to="/whatsapp-automation"
//                 underline="none"
//                 sx={{
//                   color: "#cbd5e1",
//                   fontSize: "14px",
//                   "&:hover": {
//                     color: "#ffffff",
//                   },
//                 }}
//               >
//                 WhatsApp Automation
//               </Link>

//               <Link
//                 component={RouterLink}
//                 to="/ai-voice-agent"
//                 underline="none"
//                 sx={{
//                   color: "#cbd5e1",
//                   fontSize: "14px",
//                   "&:hover": {
//                     color: "#ffffff",
//                   },
//                 }}
//               >
//                 AI Voice Agent
//               </Link>
//             </Stack>
//           </Box>

//           {/* =========================
//               RESOURCES
//           ========================== */}
//           <Box>
//             <Typography
//               sx={{
//                 fontSize: "16px",
//                 fontWeight: 700,
//                 mb: 2.5,
//                 color: "#ffffff",
//               }}
//             >
//               Resources
//             </Typography>

//             <Stack spacing={1.5}>
//               <Link
//                 component={RouterLink}
//                 to="/pricing"
//                 underline="none"
//                 sx={{
//                   color: "#cbd5e1",
//                   fontSize: "14px",
//                   "&:hover": {
//                     color: "#ffffff",
//                   },
//                 }}
//               >
//                 Pricing
//               </Link>

//               <Link
//                 component={RouterLink}
//                 to="/faq"
//                 underline="none"
//                 sx={{
//                   color: "#cbd5e1",
//                   fontSize: "14px",
//                   "&:hover": {
//                     color: "#ffffff",
//                   },
//                 }}
//               >
//                 FAQ
//               </Link>

//               <Link
//                 component={RouterLink}
//                 to="/privacy-policy"
//                 underline="none"
//                 sx={{
//                   color: "#cbd5e1",
//                   fontSize: "14px",
//                   "&:hover": {
//                     color: "#ffffff",
//                   },
//                 }}
//               >
//                 Privacy Policy
//               </Link>

//               <Link
//                 component={RouterLink}
//                 to="/terms"
//                 underline="none"
//                 sx={{
//                   color: "#cbd5e1",
//                   fontSize: "14px",
//                   "&:hover": {
//                     color: "#ffffff",
//                   },
//                 }}
//               >
//                 Terms & Conditions
//               </Link>
//             </Stack>
//           </Box>
//         </Box>

//         {/* =========================
//             DIVIDER
//         ========================== */}
//         <Divider
//           sx={{
//             my: 5,
//             borderColor: "rgba(255,255,255,0.10)",
//           }}
//         />

//         {/* =========================
//             BOTTOM FOOTER
//         ========================== */}
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             flexDirection: {
//               xs: "column",
//               sm: "row",
//             },
//             gap: 2,
//           }}
//         >
//           <Typography
//             sx={{
//               color: "#94a3b8",
//               fontSize: "13px",
//               textAlign: {
//                 xs: "center",
//                 sm: "left",
//               },
//             }}
//           >
//             © {new Date().getFullYear()} All rights reserved.
//           </Typography>

//           <Typography
//             sx={{
//               color: "#94a3b8",
//               fontSize: "13px",
//               textAlign: "center",
//             }}
//           >
//             AI-powered sales automation
//           </Typography>
//         </Box>
//       </Container>

//       {/* =================================================
//           WHATSAPP FLOATING BUTTON
//       ================================================= */}
//       <Box
//         // component="a"
//         // href="https://wa.me/8788524747"
//         // target="_blank"
//         // rel="noopener noreferrer"
//         // aria-label="WhatsApp"

//         role="button"
//         tabIndex={0}
//         aria-label="WhatsApp"
//         onClick={openWhatsApp}
//         onKeyDown={(event) => {
//           if (event.key === "Enter" || event.key === " ") {
//             event.preventDefault();
//             openWhatsApp();
//           }
//         }}
//         sx={{
//           position: "fixed",

//           right: {
//             xs: "12px",
//             sm: "18px",
//             md: "22px",
//           },

//           bottom: {
//             xs: "12px",
//             sm: "18px",
//             md: "20px",
//           },

//           width: {
//             xs: "50px",
//             sm: "58px",
//             md: "62px",
//           },

//           height: {
//             xs: "50px",
//             sm: "58px",
//             md: "62px",
//           },

//           borderRadius: {
//             xs: "13px",
//             md: "16px",
//           },

//           background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",

//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",

//           color: "#FFFFFF",

//           textDecoration: "none",

//           zIndex: 9999,

//           boxShadow: "0 10px 28px rgba(37, 211, 102, 0.28)",

//           transition: "all 0.25s ease",

//           "&:hover": {
//             transform: "translateY(-4px) scale(1.06)",
//             boxShadow: "0 14px 34px rgba(37, 211, 102, 0.35)",
//           },
//         }}
//       >
//         <WhatsApp
//           sx={{
//             fontSize: {
//               xs: "27px",
//               sm: "30px",
//               md: "35px",
//             },
//           }}
//         />
//       </Box>

//       {/* =================================================
//           AI CHAT FLOATING BUTTON
//       ================================================= */}
//       {/* <Box
//         role="button"
//         tabIndex={0}
//         aria-label="Open chat"

//         onClick={() => {
//           if (onChatOpen) {
//             onChatOpen();
//           }
//         }}

//         onKeyDown={(event) => {
//           if (
//             event.key === 'Enter' ||
//             event.key === ' '
//           ) {
//             event.preventDefault();

//             if (onChatOpen) {
//               onChatOpen();
//             }
//           }
//         }}

//         sx={{
//           position: 'fixed',

//           right: {
//             xs: '12px',
//             sm: '18px',
//             md: '22px',
//           },

//           bottom: {
//             xs: '12px',
//             sm: '18px',
//             md: '20px',
//           },

//           width: {
//             xs: '50px',
//             sm: '58px',
//             md: '62px',
//           },

//           height: {
//             xs: '50px',
//             sm: '58px',
//             md: '62px',
//           },

//           borderRadius: {
//             xs: '13px',
//             md: '16px',
//           },

//           background:
//             'linear-gradient(135deg, #10B981 0%, #059669 100%)',

//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',

//           color: '#FFFFFF',

//           zIndex: 9999,

//           cursor: 'pointer',

//           boxShadow:
//             '0 10px 28px rgba(16, 185, 129, 0.28)',

//           transition: 'all 0.25s ease',

//           '&:hover': {
//             transform: 'translateY(-4px) scale(1.06)',
//             boxShadow:
//               '0 14px 34px rgba(16, 185, 129, 0.35)',
//           },

//           '&:focus-visible': {
//             outline: '3px solid rgba(16, 185, 129, 0.35)',
//             outlineOffset: '3px',
//           },
//         }}
//       >

//         <ForumOutlined
//           sx={{
//             fontSize: {
//               xs: '27px',
//               sm: '30px',
//               md: '35px',
//             },
//           }}
//         />

//       </Box> */}

//       {/* =================================================
//           SCROLL TO TOP BUTTON
//       ================================================= */}
//       {/* <Box
//         role="button"
//         tabIndex={0}
//         aria-label="Scroll to top"

//         onClick={scrollToTop}

//         onKeyDown={(event) => {
//           if (
//             event.key === 'Enter' ||
//             event.key === ' '
//           ) {
//             event.preventDefault();
//             scrollToTop();
//           }
//         }}

//         sx={{
//           position: 'fixed',

//           right: {
//             xs: '12px',
//             sm: '18px',
//             md: '22px',
//           },

//           bottom: {
//             xs: '65px',
//             sm: '72px',
//             md: '20px',
//           },

//           width: {
//             xs: '42px',
//             sm: '46px',
//             md: '48px',
//           },

//           height: {
//             xs: '42px',
//             sm: '46px',
//             md: '48px',
//           },

//           borderRadius: '50%',

//           backgroundColor: '#ffffff',

//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',

//           color: '#10B981',

//           zIndex: 9998,

//           cursor: 'pointer',

//           boxShadow:
//             '0 8px 22px rgba(0, 0, 0, 0.15)',

//           transition: 'all 0.25s ease',

//           '&:hover': {
//             transform: 'translateY(-3px)',
//             boxShadow:
//               '0 12px 28px rgba(0, 0, 0, 0.20)',
//           },
//         }}
//       >

//         <ArrowUpward
//           sx={{
//             fontSize: {
//               xs: '20px',
//               md: '23px',
//             },
//           }}
//         />

//       </Box> */}
//     </Box>
//   );
// };

// export default Footer;

import React from "react";

import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";

import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
  WhatsApp,
  ForumOutlined,
  ArrowUpward,
} from "@mui/icons-material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import { Link as RouterLink } from "react-router-dom";

import LogoBlue from "../assets/images/Trudialer-orangeblue.png";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //   // Open WhatsApp
  const openWhatsApp = () => {
    window.open("/whatsapp", "_blank");

    if (!number) {
      console.error("VITE_WHATSAPP_NUMBER is not configured.");
      return;
    }

    window.open(`https://wa.me/${number}`, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      {/* =========================================================
          FOOTER
      ========================================================= */}
      <Box
        component="footer"
        sx={{
          position: "relative",
          overflow: "hidden",

          background:
            "linear-gradient(135deg, #ffffff 0%, #fafbff 45%, #fffaf5 100%)",

          borderTop: "1px solid #E8ECF3",

          pt: {
            xs: 6,
            sm: 7,
            md: 9,
          },

          pb: {
            xs: 3,
            md: 4,
          },
        }}
      >
        {/* =====================================================
            DECORATIVE BACKGROUND
        ===================================================== */}
        <Box
          sx={{
            position: "absolute",
            width: {
              xs: 220,
              md: 380,
            },

            height: {
              xs: 220,
              md: 380,
            },

            borderRadius: "50%",

            background:
              "radial-gradient(circle, rgba(79,70,229,0.08) 0%, rgba(79,70,229,0) 70%)",

            top: -180,
            left: -120,

            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            position: "absolute",

            width: {
              xs: 240,
              md: 420,
            },

            height: {
              xs: 240,
              md: 420,
            },

            borderRadius: "50%",

            background:
              "radial-gradient(circle, rgba(249,115,22,0.08) 0%, rgba(249,115,22,0) 70%)",

            right: -150,
            bottom: -180,

            pointerEvents: "none",
          }}
        />

        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 1,

            px: {
              xs: 2,
              sm: 4,
              md: 6,
              lg: 8,
            },
          }}
        >
          {/* =====================================================
              MAIN FOOTER CONTENT
          ===================================================== */}
          <Grid
            container
            columnSpacing={{
              xs: 2,
              sm: 4,
              md: 5,
              lg: 7,
            }}
            rowSpacing={{
              xs: 5,
              sm: 5,
              md: 4,
            }}
          >
            {/* =================================================
                BRAND
            ================================================= */}
            <Grid
              size={{
                xs: 12,
                sm: 12,
                md: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",

                  alignItems: {
                    xs: "center",
                    md: "flex-start",
                  },

                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                }}
              >
                {/* LOGO */}
                <Box
                  component={RouterLink}
                  to="/"
                  sx={{
                    width: {
                      xs: 125,
                      sm: 140,
                      md: 155,
                    },

                    height: {
                      xs: 78,
                      sm: 86,
                      md: 92,
                    },

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    textDecoration: "none",

                    backgroundColor: "#FFFFFF",

                    borderRadius: "18px",

                    border: "1px solid rgba(79, 70, 229, 0.10)",

                    boxShadow:
                      "0 10px 30px rgba(15, 23, 42, 0.07), 0 2px 8px rgba(79, 70, 229, 0.05)",

                    overflow: "hidden",

                    transition: "all 0.3s ease",

                    "&:hover": {
                      transform: "translateY(-4px)",

                      boxShadow:
                        "0 16px 38px rgba(15, 23, 42, 0.12), 0 4px 12px rgba(79, 70, 229, 0.08)",
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={LogoBlue}
                    alt="TruDialer"
                    sx={{
                      width: "94%",
                      height: "94%",

                      objectFit: "contain",

                      display: "block",
                    }}
                  />
                </Box>

                {/* BRAND TITLE */}
                <Typography
                  sx={{
                    mt: 2.2,

                    color: "#0F172A",

                    fontSize: {
                      xs: "19px",
                      sm: "20px",
                      md: "21px",
                    },

                    fontWeight: 750,

                    letterSpacing: "-0.3px",

                    lineHeight: 1.3,
                  }}
                >
                  Smarter Sales. Better Conversations.
                </Typography>

                {/* BRAND DESCRIPTION */}
                <Typography
                  sx={{
                    mt: 1.2,

                    maxWidth: {
                      xs: 360,
                      md: 380,
                    },

                    color: "#64748B",

                    fontSize: {
                      xs: "13px",
                      sm: "14px",
                      md: "14px",
                    },

                    lineHeight: 1.75,

                    fontWeight: 400,
                  }}
                >
                  TruDialer brings WhatsApp, email, and AI-powered voice
                  outreach together in one powerful platform. Automate your
                  sales communication, manage leads effortlessly, and help your
                  team turn more conversations into customers.
                </Typography>

                {/* SOCIAL ICONS */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mt: 2.5,
                  }}
                >
                  <SocialButton
                    icon={<FacebookIcon />}
                    href="#"
                    label="Facebook"
                  />

                  <SocialButton
                    icon={<InstagramIcon />}
                    href="#"
                    label="Instagram"
                  />

                  <SocialButton
                    icon={<AlternateEmailIcon />}
                    href="mailto:contact@jfstechnologies.com"
                    label="Email"
                  />
                </Box>
              </Box>
            </Grid>

            {/* =================================================
                RESOURCES
            ================================================= */}
            <Grid
              size={{
                xs: 6,
                sm: 4,
                md: 2,
              }}
            >
              <FooterColumn title="Resources">
                <FooterLink to="/features">Features</FooterLink>

                <FooterLink to="/comparisons">Comparisons</FooterLink>

                <FooterLink to="/pricing">Pricing</FooterLink>

                <FooterLink to="/blog">Blog</FooterLink>

                <FooterLink to="/contact">Contact Us</FooterLink>
              </FooterColumn>
            </Grid>

            {/* =================================================
                LEGAL
            ================================================= */}
            <Grid
              size={{
                xs: 6,
                sm: 4,
                md: 2,
              }}
            >
              <FooterColumn title="Legal">
                <FooterLink to="/terms">Terms & Conditions</FooterLink>

                <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
              </FooterColumn>
            </Grid>

            {/* =================================================
                CONTACT
            ================================================= */}
            <Grid
              size={{
                xs: 12,
                sm: 4,
                md: 4,
              }}
            >
              <FooterColumn title="Get in touch">
                {/* EMAIL */}
                <Box>
                  <Typography
                    sx={{
                      color: "#94A3B8",
                      fontSize: "12px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.6px",
                      mb: 0.5,
                    }}
                  >
                    Email
                  </Typography>

                  <Link
                    href="mailto:contact@jfstechnologies.com"
                    underline="none"
                    sx={{
                      display: "block",
                      color: "#334155",
                      fontSize: {
                        xs: "13px",
                        md: "14px",
                      },
                      fontWeight: 400,
                      lineHeight: 1.5,
                      transition: "all 0.2s ease",

                      "&:hover": {
                        color: "#F97316",
                      },
                    }}
                  >
                    contact@jfstechnologies.com
                  </Link>
                </Box>

                {/* PHONE */}
                <Box>
                  <Typography
                    sx={{
                      color: "#94A3B8",
                      fontSize: "12px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.6px",
                      mb: 0.5,
                    }}
                  >
                    Phone
                  </Typography>

                  <Link
                    href="tel:+919876543210"
                    underline="none"
                    sx={{
                      display: "block",
                      color: "#334155",
                      fontSize: {
                        xs: "13px",
                        md: "14px",
                      },
                      fontWeight: 400,
                      lineHeight: 1.5,
                      transition: "all 0.2s ease",

                      "&:hover": {
                        color: "#F97316",
                      },
                    }}
                  >
                    +91 98765 43210
                  </Link>
                </Box>

                {/* OFFICE */}
                <Box>
                  <Typography
                    sx={{
                      color: "#94A3B8",
                      fontSize: "12px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.6px",
                      mb: 0.5,
                    }}
                  >
                    Office
                  </Typography>

                  <Typography
                    sx={{
                      color: "#475569",
                      fontSize: {
                        xs: "13px",
                        md: "14px",
                      },
                      lineHeight: 1.7,
                      maxWidth: 330,
                    }}
                  >
                    Office No: 423,
                    <br />
                    Sterling Center,
                    <br />
                    MG Road, Camp,
                    <br />
                    Pune, Maharashtra 411001
                  </Typography>
                </Box>

                {/* SOCIAL ICONS */}
                {/* <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    mt: 0.5,
                  }}
                >
                  <SocialButton icon={<FacebookIcon />} href="#" />

                  <SocialButton icon={<InstagramIcon />} href="#" />

                  <SocialButton
                    icon={<AlternateEmailIcon />}
                    href="mailto:contact@jfstechnologies.com"
                  />
                </Box> */}
              </FooterColumn>
            </Grid>
          </Grid>

          {/* =====================================================
              DIVIDER
          ===================================================== */}
          <Divider
            sx={{
              mt: {
                xs: 5,
                md: 7,
              },

              borderColor: "#E5EAF1",
            }}
          />

          {/* =====================================================
              BOTTOM FOOTER
          ===================================================== */}
          <Box
            sx={{
              pt: {
                xs: 2.5,
                md: 3,
              },

              display: "flex",

              alignItems: "center",

              justifyContent: "space-between",

              flexDirection: {
                xs: "column",
                sm: "row",
              },

              gap: 2,

              textAlign: {
                xs: "center",
                sm: "left",
              },
            }}
          >
            <Typography
              sx={{
                color: "#94A3B8",

                fontSize: {
                  xs: "12px",
                  sm: "13px",
                },

                lineHeight: 1.5,
              }}
            >
              © {new Date().getFullYear()} TruDialer. All rights reserved.
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  color: "#94A3B8",

                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                  },
                }}
              >
                Built for modern sales teams
              </Typography>

              <Box
                sx={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  backgroundColor: "#F97316",
                }}
              />

              <Typography
                sx={{
                  color: "#4F46E5",

                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                  },

                  fontWeight: 600,
                }}
              >
                TruDialer
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* =========================================================
          WHATSAPP BUTTON
      ========================================================= */}
      <Box
        // component="a"
        // href="https://wa.me/8788524747"
        // target="_blank"
        // rel="noopener noreferrer"
        // aria-label="WhatsApp"

        role="button"
        tabIndex={0}
        aria-label="WhatsApp"
        onClick={openWhatsApp}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openWhatsApp();
          }
        }}
        sx={{
          position: "fixed",

          right: {
            xs: "12px",
            sm: "18px",
            md: "22px",
          },

          bottom: {
            xs: "12px",
            sm: "18px",
            md: "20px",
          },

          width: {
            xs: "50px",
            sm: "58px",
            md: "62px",
          },

          height: {
            xs: "50px",
            sm: "58px",
            md: "62px",
          },

          borderRadius: {
            xs: "13px",
            md: "16px",
          },

          background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          color: "#FFFFFF",

          textDecoration: "none",

          zIndex: 9999,

          boxShadow: "0 10px 28px rgba(37, 211, 102, 0.28)",

          transition: "all 0.25s ease",

          "&:hover": {
            transform: "translateY(-4px) scale(1.06)",
            boxShadow: "0 14px 34px rgba(37, 211, 102, 0.35)",
          },
        }}
      >
        <WhatsApp
          sx={{
            fontSize: {
              xs: "27px",
              sm: "30px",
              md: "35px",
            },
          }}
        />
      </Box>
      {/* =========================================================
          CHAT BUTTON
      ========================================================= */}
      {/* <Box
        role="button"
        tabIndex={0}
        aria-label="Open chat"
        sx={{
          position: "fixed",

          right: {
            xs: "12px",
            sm: "18px",
            md: "22px",
          },

          bottom: {
            xs: "12px",
            sm: "18px",
            md: "20px",
          },

          width: {
            xs: "50px",
            sm: "58px",
            md: "62px",
          },

          height: {
            xs: "50px",
            sm: "58px",
            md: "62px",
          },

          borderRadius: {
            xs: "13px",
            md: "16px",
          },

          background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",

          display: "flex",

          alignItems: "center",

          justifyContent: "center",

          color: "#FFFFFF",

          zIndex: 9999,

          cursor: "pointer",

          boxShadow: "0 10px 28px rgba(16, 185, 129, 0.28)",

          transition: "all 0.25s ease",

          "&:hover": {
            transform: "translateY(-4px) scale(1.06)",

            boxShadow: "0 14px 34px rgba(16, 185, 129, 0.35)",
          },
        }}
      >
        <ForumOutlinedIcon
          sx={{
            fontSize: {
              xs: "27px",
              sm: "30px",
              md: "35px",
            },
          }}
        />
      </Box> */}
    </>
  );
};

/* =========================================================
   FOOTER COLUMN
========================================================= */

const FooterColumn = ({ title, children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        minWidth: 0,
      }}
    >
      <Typography
        sx={{
          position: "relative",

          display: "inline-block",

          color: "#0F172A",

          fontSize: {
            xs: "16px",
            sm: "17px",
            md: "17px",
          },

          fontWeight: 700,

          mb: {
            xs: 2,
            md: 2.3,
          },

          "&::after": {
            content: '""',

            position: "absolute",

            left: 0,

            bottom: -7,

            width: 28,

            height: 3,

            borderRadius: "10px",

            background: "linear-gradient(90deg, #F97316, #4F46E5)",
          },
        }}
      >
        {title}
      </Typography>

      <Box
        sx={{
          display: "flex",

          flexDirection: "column",

          gap: {
            xs: 1.4,
            md: 1.6,
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

/* =========================================================
   FOOTER LINK
========================================================= */

const linkStyle = {
  width: "fit-content",

  maxWidth: "100%",

  color: "#64748B",

  fontSize: {
    xs: "13px",
    sm: "13px",
    md: "14px",
  },

  fontWeight: 450,

  lineHeight: 1.5,

  transition: "all 0.2s ease",

  "&:hover": {
    color: "#F97316",

    transform: "translateX(4px)",
  },
};

const FooterLink = ({ children, to }) => {
  return (
    <Link component={RouterLink} to={to} underline="none" sx={linkStyle}>
      {children}
    </Link>
  );
};

/* =========================================================
   CONTACT ITEM
========================================================= */

const ContactItem = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",

        p: {
          xs: 1.4,
          md: 1.6,
        },

        borderRadius: "12px",

        border: "1px solid #EEF2F7",

        backgroundColor: "rgba(255,255,255,0.75)",

        transition: "all 0.25s ease",

        "&:hover": {
          borderColor: "#E2E8F0",

          backgroundColor: "#FFFFFF",

          boxShadow: "0 8px 22px rgba(15, 23, 42, 0.05)",

          transform: "translateY(-2px)",
        },
      }}
    >
      {children}
    </Box>
  );
};

/* =========================================================
   CONTACT LINK
========================================================= */

const contactLinkStyle = {
  color: "#334155",

  fontSize: {
    xs: "13px",
    md: "14px",
  },

  fontWeight: 500,

  wordBreak: "break-word",

  transition: "all 0.2s ease",

  "&:hover": {
    color: "#F97316",
  },
};

/* =========================================================
   SOCIAL BUTTON
========================================================= */

/* =========================================================
   SOCIAL BUTTON
========================================================= */

const SocialButton = ({ icon, href, label }) => {
  const iconColors = {
    Facebook: "#1877F2",
    Instagram: "#E4405F",
    Email: "#EA4335",
  };

  return (
    <IconButton
      component="a"
      href={href}
      aria-label={label}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      sx={{
        width: 38,
        height: 38,

        p: 0,

        color: iconColors[label] || "#64748B",

        backgroundColor: "transparent",

        borderRadius: "50%",

        transition: "all 0.25s ease",

        "&:hover": {
          backgroundColor: "transparent",
          color: iconColors[label] || "#64748B",
          transform: "translateY(-3px) scale(1.08)",
        },

        "& svg": {
          fontSize: 24,
        },
      }}
    >
      {icon}
    </IconButton>
  );
};

export default Footer;
