import React from 'react';

import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  Divider,
  Link,
} from '@mui/material';

import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  YouTube,
  WhatsApp,
  ForumOutlined,
  ArrowUpward,
} from '@mui/icons-material';

import { Link as RouterLink } from 'react-router-dom';


const Footer = ({ onChatOpen }) => {

  // Scroll page to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Open WhatsApp
 const openWhatsApp = () => {
  window.open('/whatsapp', '_blank');

  if (!number) {
    console.error('VITE_WHATSAPP_NUMBER is not configured.');
    return;
  }

  window.open(
    `https://wa.me/${number}`,
    '_blank',
    'noopener,noreferrer'
  );
};

  // ...rest of your Footer component



  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bgcolor: '#0f172a',
        color: '#ffffff',
        mt: 8,
      }}
    >

      {/* =========================
          MAIN FOOTER
      ========================== */}
      <Container
        maxWidth="xl"
        sx={{
          py: {
            xs: 6,
            md: 8,
          },
        }}
      >

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              md: '2fr 1fr 1fr 1fr',
            },
            gap: {
              xs: 5,
              md: 6,
            },
          }}
        >

          {/* =========================
              COMPANY
          ========================== */}
          <Box>

           <Box
  component={RouterLink}
  to="/"
  sx={{
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    mb: 2,
  }}
>
  <Typography
    sx={{
      fontSize: {
        xs: '24px',
        md: '28px',
      },
      fontWeight: 800,
      color: '#ffffff',
    }}
  >
    TruDialer
  </Typography>
</Box>


            <Typography
              sx={{
                color: '#cbd5e1',
                fontSize: '14px',
                lineHeight: 1.8,
                maxWidth: '380px',
                mb: 3,
              }}
            >
              Automate your sales process with powerful AI-driven
              solutions designed to engage leads, qualify prospects,
              and grow your business.
            </Typography>


            {/* SOCIAL ICONS */}
            <Stack
              direction="row"
              spacing={1}
            >

              <IconButton
                component="a"
                href="#"
                aria-label="Facebook"
                sx={{
                  color: '#cbd5e1',
                  '&:hover': {
                    color: '#ffffff',
                    bgcolor: 'rgba(255,255,255,0.08)',
                  },
                }}
              >
                <Facebook />
              </IconButton>


              <IconButton
                component="a"
                href="#"
                aria-label="Instagram"
                sx={{
                  color: '#cbd5e1',
                  '&:hover': {
                    color: '#ffffff',
                    bgcolor: 'rgba(255,255,255,0.08)',
                  },
                }}
              >
                <Instagram />
              </IconButton>


              <IconButton
                component="a"
                href="#"
                aria-label="LinkedIn"
                sx={{
                  color: '#cbd5e1',
                  '&:hover': {
                    color: '#ffffff',
                    bgcolor: 'rgba(255,255,255,0.08)',
                  },
                }}
              >
                <LinkedIn />
              </IconButton>


              <IconButton
                component="a"
                href="#"
                aria-label="Twitter"
                sx={{
                  color: '#cbd5e1',
                  '&:hover': {
                    color: '#ffffff',
                    bgcolor: 'rgba(255,255,255,0.08)',
                  },
                }}
              >
                <Twitter />
              </IconButton>


              <IconButton
                component="a"
                href="#"
                aria-label="YouTube"
                sx={{
                  color: '#cbd5e1',
                  '&:hover': {
                    color: '#ffffff',
                    bgcolor: 'rgba(255,255,255,0.08)',
                  },
                }}
              >
                <YouTube />
              </IconButton>

            </Stack>

          </Box>


          {/* =========================
              COMPANY LINKS
          ========================== */}
          <Box>

            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 700,
                mb: 2.5,
                color: '#ffffff',
              }}
            >
              Company
            </Typography>


            <Stack spacing={1.5}>

              <Link
                component={RouterLink}
                to="/"
                underline="none"
                sx={{
                  color: '#cbd5e1',
                  fontSize: '14px',
                  '&:hover': {
                    color: '#ffffff',
                  },
                }}
              >
                Home
              </Link>


              <Link
                component={RouterLink}
                to="/about"
                underline="none"
                sx={{
                  color: '#cbd5e1',
                  fontSize: '14px',
                  '&:hover': {
                    color: '#ffffff',
                  },
                }}
              >
                About Us
              </Link>


              <Link
                component={RouterLink}
                to="/contact-us"
                underline="none"
                sx={{
                  color: '#cbd5e1',
                  fontSize: '14px',
                  '&:hover': {
                    color: '#ffffff',
                  },
                }}
              >
                Contact Us
              </Link>


              <Link
                component={RouterLink}
                to="/blogs"
                underline="none"
                sx={{
                  color: '#cbd5e1',
                  fontSize: '14px',
                  '&:hover': {
                    color: '#ffffff',
                  },
                }}
              >
                Blog
              </Link>

            </Stack>

          </Box>


          {/* =========================
              PRODUCTS
          ========================== */}
          <Box>

            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 700,
                mb: 2.5,
                color: '#ffffff',
              }}
            >
              Solutions
            </Typography>


            <Stack spacing={1.5}>

              <Link
                component={RouterLink}
                to="/sales-automation"
                underline="none"
                sx={{
                  color: '#cbd5e1',
                  fontSize: '14px',
                  '&:hover': {
                    color: '#ffffff',
                  },
                }}
              >
                Sales Automation
              </Link>


              <Link
                component={RouterLink}
                to="/lead-generation"
                underline="none"
                sx={{
                  color: '#cbd5e1',
                  fontSize: '14px',
                  '&:hover': {
                    color: '#ffffff',
                  },
                }}
              >
                Lead Generation
              </Link>


              <Link
                component={RouterLink}
                to="/whatsapp-automation"
                underline="none"
                sx={{
                  color: '#cbd5e1',
                  fontSize: '14px',
                  '&:hover': {
                    color: '#ffffff',
                  },
                }}
              >
                WhatsApp Automation
              </Link>


              <Link
                component={RouterLink}
                to="/ai-voice-agent"
                underline="none"
                sx={{
                  color: '#cbd5e1',
                  fontSize: '14px',
                  '&:hover': {
                    color: '#ffffff',
                  },
                }}
              >
                AI Voice Agent
              </Link>

            </Stack>

          </Box>


          {/* =========================
              RESOURCES
          ========================== */}
          <Box>

            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 700,
                mb: 2.5,
                color: '#ffffff',
              }}
            >
              Resources
            </Typography>


            <Stack spacing={1.5}>

              <Link
                component={RouterLink}
                to="/pricing"
                underline="none"
                sx={{
                  color: '#cbd5e1',
                  fontSize: '14px',
                  '&:hover': {
                    color: '#ffffff',
                  },
                }}
              >
                Pricing
              </Link>


              <Link
                component={RouterLink}
                to="/faq"
                underline="none"
                sx={{
                  color: '#cbd5e1',
                  fontSize: '14px',
                  '&:hover': {
                    color: '#ffffff',
                  },
                }}
              >
                FAQ
              </Link>


              <Link
                component={RouterLink}
                to="/privacy-policy"
                underline="none"
                sx={{
                  color: '#cbd5e1',
                  fontSize: '14px',
                  '&:hover': {
                    color: '#ffffff',
                  },
                }}
              >
                Privacy Policy
              </Link>


              <Link
                component={RouterLink}
                to="/terms"
                underline="none"
                sx={{
                  color: '#cbd5e1',
                  fontSize: '14px',
                  '&:hover': {
                    color: '#ffffff',
                  },
                }}
              >
                Terms & Conditions
              </Link>

            </Stack>

          </Box>

        </Box>


        {/* =========================
            DIVIDER
        ========================== */}
        <Divider
          sx={{
            my: 5,
            borderColor: 'rgba(255,255,255,0.10)',
          }}
        />


        {/* =========================
            BOTTOM FOOTER
        ========================== */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            gap: 2,
          }}
        >

          <Typography
            sx={{
              color: '#94a3b8',
              fontSize: '13px',
              textAlign: {
                xs: 'center',
                sm: 'left',
              },
            }}
          >
            © {new Date().getFullYear()} All rights reserved.
          </Typography>


          <Typography
            sx={{
              color: '#94a3b8',
              fontSize: '13px',
              textAlign: 'center',
            }}
          >
            AI-powered sales automation
          </Typography>

        </Box>

      </Container>


      {/* =================================================
          WHATSAPP FLOATING BUTTON
      ================================================= */}
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
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openWhatsApp();
    }
  }}
        sx={{
          position: 'fixed',

          right: {
            xs: '12px',
            sm: '18px',
            md: '22px',
          },

          bottom: {
            xs: '12px',
            sm: '18px',
            md: '20px',
          },

          width: {
            xs: '50px',
            sm: '58px',
            md: '62px',
          },

          height: {
            xs: '50px',
            sm: '58px',
            md: '62px',
          },

          borderRadius: {
            xs: '13px',
            md: '16px',
          },

          background:
            'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          color: '#FFFFFF',

          textDecoration: 'none',

          zIndex: 9999,

          boxShadow:
            '0 10px 28px rgba(37, 211, 102, 0.28)',

          transition: 'all 0.25s ease',

          '&:hover': {
            transform: 'translateY(-4px) scale(1.06)',
            boxShadow:
              '0 14px 34px rgba(37, 211, 102, 0.35)',
          },
        }}
      >

        <WhatsApp
          sx={{
            fontSize: {
              xs: '27px',
              sm: '30px',
              md: '35px',
            },
          }}
        />

      </Box>


      {/* =================================================
          AI CHAT FLOATING BUTTON
      ================================================= */}
      {/* <Box
        role="button"
        tabIndex={0}
        aria-label="Open chat"

        onClick={() => {
          if (onChatOpen) {
            onChatOpen();
          }
        }}

        onKeyDown={(event) => {
          if (
            event.key === 'Enter' ||
            event.key === ' '
          ) {
            event.preventDefault();

            if (onChatOpen) {
              onChatOpen();
            }
          }
        }}

        sx={{
          position: 'fixed',

          right: {
            xs: '12px',
            sm: '18px',
            md: '22px',
          },

          bottom: {
            xs: '12px',
            sm: '18px',
            md: '20px',
          },

          width: {
            xs: '50px',
            sm: '58px',
            md: '62px',
          },

          height: {
            xs: '50px',
            sm: '58px',
            md: '62px',
          },

          borderRadius: {
            xs: '13px',
            md: '16px',
          },

          background:
            'linear-gradient(135deg, #10B981 0%, #059669 100%)',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          color: '#FFFFFF',

          zIndex: 9999,

          cursor: 'pointer',

          boxShadow:
            '0 10px 28px rgba(16, 185, 129, 0.28)',

          transition: 'all 0.25s ease',

          '&:hover': {
            transform: 'translateY(-4px) scale(1.06)',
            boxShadow:
              '0 14px 34px rgba(16, 185, 129, 0.35)',
          },

          '&:focus-visible': {
            outline: '3px solid rgba(16, 185, 129, 0.35)',
            outlineOffset: '3px',
          },
        }}
      >

        <ForumOutlined
          sx={{
            fontSize: {
              xs: '27px',
              sm: '30px',
              md: '35px',
            },
          }}
        />

      </Box> */}


      {/* =================================================
          SCROLL TO TOP BUTTON
      ================================================= */}
      {/* <Box
        role="button"
        tabIndex={0}
        aria-label="Scroll to top"

        onClick={scrollToTop}

        onKeyDown={(event) => {
          if (
            event.key === 'Enter' ||
            event.key === ' '
          ) {
            event.preventDefault();
            scrollToTop();
          }
        }}

        sx={{
          position: 'fixed',

          right: {
            xs: '12px',
            sm: '18px',
            md: '22px',
          },

          bottom: {
            xs: '65px',
            sm: '72px',
            md: '20px',
          },

          width: {
            xs: '42px',
            sm: '46px',
            md: '48px',
          },

          height: {
            xs: '42px',
            sm: '46px',
            md: '48px',
          },

          borderRadius: '50%',

          backgroundColor: '#ffffff',

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          color: '#10B981',

          zIndex: 9998,

          cursor: 'pointer',

          boxShadow:
            '0 8px 22px rgba(0, 0, 0, 0.15)',

          transition: 'all 0.25s ease',

          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow:
              '0 12px 28px rgba(0, 0, 0, 0.20)',
          },
        }}
      >

        <ArrowUpward
          sx={{
            fontSize: {
              xs: '20px',
              md: '23px',
            },
          }}
        />

      </Box> */}

    </Box>
  );
};


export default Footer;