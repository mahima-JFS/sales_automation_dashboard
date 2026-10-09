import React, { useEffect, useState } from "react";

import { Box, Typography, Container, Button, Stack } from "@mui/material";

import NorthEastIcon from "@mui/icons-material/NorthEast";

import WhatsAppImageOne from "../../assets/images/wp1.webp";
import WhatsAppImageTwo from "../../assets/images/wp2.webp";

import EmailImage from "../../assets/images/em1.webp";
import VoiceImage from "../../assets/images/vc1.webp";
import SequenceImage from "../../assets/images/vc2.webp";

import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";
import FAQHome from "./FAQHome";
import ContactForm from "./ContactForm";
import { Helmet } from "react-helmet-async";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: {
          xs: 220,
          md: 230,
        },
        px: {
          xs: 3,
          md: 4,
        },
        pt: {
          xs: 7,
          md: 7.5,
        },
        pb: 4,
        borderRadius: "18px",
        textAlign: "center",
        background: "linear-gradient(135deg, #F1F0FA 0%, #ECEBF5 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 18px 35px rgba(70, 84, 163, 0.12)",
        },
      }}
    >
      {/* Floating Icon */}
      <Box
        sx={{
          position: "absolute",
          top: -19,
          left: "50%",
          transform: "translateX(-50%)",
          width: 54,
          height: 54,
          borderRadius: "14px",
          backgroundColor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#4F46E5",
          boxShadow: "0 8px 20px rgba(0,0,0,0.10)",

          "& svg": {
            fontSize: 25,
            strokeWidth: 1.8,
          },
        }}
      >
        {icon}
      </Box>

      {/* Title */}
      <Typography
        sx={{
          color: "#E65F00",
          fontSize: {
            xs: "19px",
            md: "20px",
          },
          fontWeight: 700,
          lineHeight: 1.3,
          mb: 2,
        }}
      >
        {title}
      </Typography>

      {/* Description */}
      <Typography
        sx={{
          color: "#566070",
          fontSize: {
            xs: "15px",
            md: "15.5px",
          },
          lineHeight: 1.55,
          fontWeight: 400,
          letterSpacing: "0.1px",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

const ProblemItem = ({ text }) => {
  return (
    <Box
      sx={{
        height: 54,
        border: "1px solid #F0C2B0",
        borderRadius: "12px",
        px: 2.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Typography
        sx={{
          color: "#E65F00",
          fontSize: {
            xs: "16px",
            md: "18px",
          },
          fontWeight: 500,
        }}
      >
        {text}
      </Typography>

      <CloseIcon
        sx={{
          color: "#F04444",
          fontSize: 25,
        }}
      />
    </Box>
  );
};

const SolutionItem = ({ text }) => {
  return (
    <Box
      sx={{
        height: 54,
        border: "1px solid #CFD0F0",
        borderRadius: "12px",
        px: 2.5,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Typography
        sx={{
          color: "#4F46E5",
          fontSize: {
            xs: "16px",
            md: "18px",
          },
          fontWeight: 500,
        }}
      >
        {text}
      </Typography>

      <CheckIcon
        sx={{
          color: "#1DA65A",
          fontSize: 25,
        }}
      />
    </Box>
  );
};

const Features = () => {
  const featureData = [
    {
      id: "voice",
      title: "AI Voice Calling",
      description:
        "Automate voice conversations with AI-powered calling workflows that help your team engage prospects faster and scale outreach.",
      linkText: "Explore AI Voice Calling",
      images: [VoiceImage],
    },

    {
      id: "whatsapp",
      title: "WhatsApp Outreach",
      description:
        "Connect with prospects using automated and personalized WhatsApp campaigns, follow-ups, and conversations at scale.",
      linkText: "Explore WhatsApp Outreach",
      images: [
        WhatsAppImageOne,
        WhatsAppImageTwo,

        // Add more WhatsApp images here
        // WhatsAppImageThree,
        // WhatsAppImageFour,
      ],
    },

    {
      id: "email",
      title: "Email Automation",
      description:
        "Use email to run structured outreach campaigns, nurture prospects, and stay visible across longer sales cycles.",
      linkText: "Explore Email Automation",
      images: [
        EmailImage,

        // EmailImageTwo,
        // EmailImageThree,
      ],
    },

    {
      id: "sequence",
      title: "Auto-Sequences",
      description:
        "Build automated multi-step sequences across different channels and keep your sales outreach running automatically.",
      linkText: "Explore Auto-Sequences",
      images: [
        SequenceImage,

        // SequenceImageTwo,
      ],
    },
  ];

  const allSlides = featureData.flatMap((feature, featureIndex) =>
    feature.images.map((image, imageIndex) => ({
      image,
      featureIndex,
      imageIndex,
    })),
  );

  const [activeSlide, setActiveSlide] = useState(0);

  const currentSlide = allSlides[activeSlide];

  const activeFeature = currentSlide.featureIndex;

  const activeImage = currentSlide.imageIndex;

  const currentFeature = featureData[activeFeature];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((previousSlide) => {
        return (previousSlide + 1) % allSlides.length;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [allSlides.length]);

  return (
    <>
      {/* =====================================================
          SEO META TAGS
      ===================================================== */}
      <Helmet>
        <title>
          AI Voice Calling Features | AI Calling Software | TruDialer
        </title>
        <meta
          name="description"
          content="Explore TruDialer's AI voice calling features for automated calls, lead follow-ups, customer support, and smarter business conversations at scale today."
        />
        <link rel="canonical" href="https://trudialer.com/features" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="AI Voice Calling Features | AI Calling Software | TruDialer"
        />
        <meta
          property="og:description"
          content="Explore TruDialer's AI voice calling features for automated calls, lead follow-ups, customer support, and smarter business conversations at scale today."
        />
        <meta property="og:url" content="https://trudialer.com/features" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AI Voice Calling Features | AI Calling Software | TruDialer"
        />
        <meta
          name="twitter:description"
          content="Explore TruDialer's AI voice calling features for automated calls, lead follow-ups, customer support, and smarter business conversations at scale today."
        />
      </Helmet>
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      {/* <Box
        component="section"
        sx={{
          width: "100%",

          position: "relative",

          overflow: "hidden",

          display: "flex",

          justifyContent: "center",

          pt: {
            xs: 3,
            sm: 5,
            md: 7,
          },

          px: {
            xs: 2,
            sm: 3,
          },
          pb: {
            xs: 2,
            sm: 3,
            md: 3,
          },

          backgroundColor: "#FFFFFF",

          backgroundImage: `
            linear-gradient(
              rgba(110, 110, 110, 0.07) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(110, 110, 110, 0.07) 1px,
              transparent 1px
            )
          `,

          backgroundSize: "20px 20px",
        }}
      >
        <Box
          sx={{
            position: "absolute",

            top: "10%",

            left: "50%",

            transform: "translateX(-50%)",

            width: {
              xs: "100%",
              md: "900px",
            },

            height: {
              xs: "500px",
              md: "600px",
            },

            background:
              "radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.80) 45%, rgba(255,255,255,0) 75%)",

            pointerEvents: "none",

            zIndex: 0,
          }}
        /> */}

      <Box
        component="section"
        sx={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",

          pt: { xs: 3, sm: 5, md: 7 },
          px: { xs: 2, sm: 3 },
          pb: { xs: 2, sm: 3, md: 3 },

          backgroundColor: "#FDFDFF",

          // Layered mesh gradient — indigo, orange, and a hint of pink
          backgroundImage: `
              radial-gradient(at 15% 20%, rgba(79, 70, 229, 0.16) 0px, transparent 50%),
              radial-gradient(at 85% 10%, rgba(255, 104, 17, 0.14) 0px, transparent 50%),
              radial-gradient(at 50% 60%, rgba(236, 72, 153, 0.08) 0px, transparent 50%),
              radial-gradient(at 90% 80%, rgba(79, 70, 229, 0.10) 0px, transparent 50%)
            `,
        }}
      >
        {/* SQUARE GRID TEXTURE — replaces the noise overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
                linear-gradient(rgba(79, 70, 229, 0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(79, 70, 229, 0.06) 1px, transparent 1px)
              `,
            backgroundSize: "20px 20px",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Optional: fade the grid toward the edges so it doesn't look uniform/flat */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 30%, transparent 0%, transparent 40%, #FDFDFF 90%)",
            opacity: 0.5,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* HERO CONTENT */}

        <Box
          sx={{
            position: "relative",

            zIndex: 1,

            width: "100%",

            maxWidth: "1050px",

            mx: "auto",

            textAlign: "center",
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: "2.2rem",
                sm: "2rem",
                md: "2.5rem",
              },

              fontWeight: 700,

              lineHeight: 1.1,

              letterSpacing: "-0.02em",

              color: "#0F172A",
            }}
          >
            Everything You Need to Run Sales
            <br />
            <Box
              component="span"
              sx={{
                display: "inline-block",

                mt: {
                  xs: 1,
                  md: 1.5,
                },

                color: "#4F46E5",

                fontWeight: 700,
              }}
            >
              Outreach in One Platform
            </Box>
          </Typography>

          <Typography
            sx={{
              maxWidth: "760px",

              mx: "auto",

              mt: {
                xs: 3,
                md: 4,
              },

              fontSize: {
                xs: "16px",
                sm: "18px",
                md: "20px",
              },

              lineHeight: 1.55,

              color: "#526071",
            }}
          >
            JFS brings your outreach channels, workflows, and lead activity
            together in one system. Run email campaigns, WhatsApp outreach, AI
            voice calls, and multi-step sequences without depending on
            disconnected tools.
          </Typography>

          {/* BUTTONS */}

          <Box
            sx={{
              display: "flex",

              justifyContent: "center",

              mt: {
                xs: 4,
                md: 6,
              },
            }}
          >
            <Stack
              direction={{
                xs: "column",
                sm: "row",
              }}
              spacing={2}
              alignItems="center"
            >
              <Button
                endIcon={<NorthEastIcon />}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "228px",
                  },

                  maxWidth: "228px",

                  height: "50px",

                  minHeight: "50px",

                  minWidth: 0,

                  borderRadius: "10px",

                  textTransform: "none",

                  fontSize: {
                    xs: "17px",
                    md: "19px",
                  },

                  fontWeight: 600,

                  color: "#FFFFFF",

                  backgroundColor: "#FF5A00",

                  "&:hover": {
                    backgroundColor: "#E94F00",
                  },
                }}
              >
                Get Early Access
              </Button>

              <Button
                variant="outlined"
                endIcon={<NorthEastIcon />}
                sx={{
                  widwidth: {
                    xs: "100%",
                    sm: "228px",
                  },

                  maxWidth: "228px",

                  height: "50px",

                  minHeight: "50px",

                  minWidth: 0,

                  borderRadius: "10px",

                  textTransform: "none",

                  fontSize: {
                    xs: "17px",
                    md: "19px",
                  },

                  fontWeight: 500,

                  border: "1px solid #FF7A35",

                  color: "#C95318",

                  "&:hover": {
                    borderColor: "#FF5A00",

                    backgroundColor: "#FFF7F2",
                  },
                }}
              >
                See It in Action
              </Button>
            </Stack>
          </Box>

          {/* PRICING */}

          <Box
            sx={{
              display: "inline-flex",

              alignItems: "center",

              justifyContent: "center",

              mt: {
                xs: 3,
                md: 4,
              },

              px: 3,

              py: 1.3,

              borderRadius: "30px",

              background:
                "linear-gradient(90deg, rgba(255,235,222,0.85), rgba(249,241,234,0.85))",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "16px",
                  md: "18px",
                },

                color: "#202020",
              }}
            >
              Plan Starts at{" "}
              <Box
                component="span"
                sx={{
                  color: "#4841A9",

                  fontWeight: 700,
                }}
              >
                ₹ 2,499/month
              </Box>
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* =====================================================
          AUTOMATIC FEATURE SHOWCASE
      ===================================================== */}

      <Box
        component="section"
        sx={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",

          pt: { xs: 3, sm: 5, md: 7 },
          px: { xs: 2, sm: 3 },
          pb: { xs: 2, sm: 3, md: 3 },

          backgroundColor: "#FDFDFF",

          // Layered mesh gradient — indigo, orange, and a hint of pink
          backgroundImage: `
            radial-gradient(at 15% 20%, rgba(79, 70, 229, 0.16) 0px, transparent 50%),
            radial-gradient(at 85% 10%, rgba(255, 104, 17, 0.14) 0px, transparent 50%),
            radial-gradient(at 50% 60%, rgba(236, 72, 153, 0.08) 0px, transparent 50%),
            radial-gradient(at 90% 80%, rgba(79, 70, 229, 0.10) 0px, transparent 50%)
          `,
        }}
      >
        {/* Fine noise/texture overlay — keeps the mesh from looking too "smooth/plasticky" */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E\")",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <Box
          component="section"
          sx={{
            width: "100%",
          }}
        >
          <Container
            maxWidth="md"
            sx={{
              position: "relative",
              zIndex: 1,
              textAlign: "center",

              pb: 6,
            }}
          >
            {/* HEADING */}

            <Typography
              component="h1"
              sx={{
                fontSize: {
                  xs: "2.2rem",
                  sm: "2rem",
                  md: "2.5rem",
                },

                fontWeight: 600,
                lineHeight: 1.3,
                letterSpacing: "-0.02em",
                color: "#0F172A",
              }}
            >
              The{" "}
              <Box
                component="span"
                sx={{
                  color: "#4F46E5",
                }}
              >
                core features
                <br />
              </Box>{" "}
              behind{" "}
              <Box
                component="span"
                sx={{
                  color: "#4F46E5",
                }}
              >
                smarter sales{" "}
              </Box>{" "}
              outreach
            </Typography>

            {/* SUBTEXT */}

            <Typography
              sx={{
                maxWidth: 680,
                mx: "auto",
                mt: 3,

                fontSize: {
                  xs: 16,
                  sm: 18,
                },

                lineHeight: 1.7,
                color: "#64748B",
              }}
            >
              Built for Indian SMEs, D2C brands, exporters, and agencies that
              sell through WhatsApp, email, and AI calls.
            </Typography>
          </Container>
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "grid",

                gridTemplateColumns: {
                  xs: "1fr",
                  md: "320px 1fr",
                  lg: "360px 1fr",
                },

                gap: {
                  xs: 4,
                  md: 6,
                  lg: 8,
                },

                alignItems: "center",
              }}
            >
              {/* =========================================
                LEFT SIDE
            ========================================= */}

              <Box>
                {featureData.map((feature, index) => {
                  const isActive = activeFeature === index;

                  return (
                    <Box
                      key={feature.id}
                      sx={{
                        py: {
                          xs: 2,
                          md: 2.5,
                        },

                        borderBottom: "1px solid #D7DEE8",

                        transition: "all 0.4s ease",
                      }}
                    >
                      {/* TITLE */}

                      <Typography
                        sx={{
                          fontSize: {
                            xs: "22px",
                            md: "28px",
                          },

                          fontWeight: 700,

                          color: isActive ? "#D65A14" : "#26374C",

                          transition: "color 0.4s ease",
                        }}
                      >
                        {feature.title}
                      </Typography>

                      {/* ONLY ACTIVE FEATURE CONTENT */}

                      {isActive && (
                        <Box
                          sx={{
                            mt: 2,

                            animation: "contentFade 0.5s ease",

                            "@keyframes contentFade": {
                              from: {
                                opacity: 0,
                                transform: "translateY(10px)",
                              },

                              to: {
                                opacity: 1,
                                transform: "translateY(0)",
                              },
                            },
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "15px",
                                md: "17px",
                              },

                              lineHeight: 1.55,

                              color: "#5A687A",
                            }}
                          >
                            {feature.description}
                          </Typography>

                          <Typography
                            sx={{
                              mt: 2,

                              fontSize: {
                                xs: "15px",
                                md: "16px",
                              },

                              fontWeight: 600,

                              color: "#D65A14",

                              display: "inline-flex",

                              alignItems: "center",

                              gap: 0.7,
                            }}
                          >
                            {feature.linkText}

                            <NorthEastIcon
                              sx={{
                                fontSize: 18,
                              }}
                            />
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  );
                })}
              </Box>

              {/* =========================================
                RIGHT SIDE IMAGE
            ========================================= */}

              <Box
                sx={{
                  width: "100%",

                  position: "relative",

                  borderRadius: {
                    xs: "18px",
                    md: "22px",
                  },

                  overflow: "hidden",

                  background:
                    "linear-gradient(180deg, #050608 0%, #180602 35%, #FF8A1E 100%)",

                  px: {
                    xs: 1.5,
                    sm: 3,
                    md: 4,
                  },

                  pt: {
                    xs: 6,
                    md: 7,
                  },

                  pb: {
                    xs: 3,
                    md: 4,
                  },

                  minHeight: {
                    xs: "300px",
                    sm: "430px",
                    md: "540px",
                  },

                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",
                }}
              >
                {/* CURRENT FEATURE TITLE */}

                <Typography
                  sx={{
                    position: "absolute",

                    top: {
                      xs: 18,
                      md: 22,
                    },

                    left: "50%",

                    transform: "translateX(-50%)",

                    width: "90%",

                    textAlign: "center",

                    fontSize: {
                      xs: "18px",
                      md: "22px",
                    },

                    fontWeight: 600,

                    color: "#F1D3AB",

                    zIndex: 2,
                  }}
                >
                  {currentFeature.title}
                </Typography>

                {/* AUTOMATIC IMAGE */}

                <Box
                  component="img"
                  key={`slide-${activeSlide}`}
                  src={currentSlide.image}
                  alt={currentFeature.title}
                  sx={{
                    width: "100%",

                    maxHeight: {
                      xs: "260px",
                      sm: "380px",
                      md: "450px",
                    },

                    objectFit: "contain",

                    mt: {
                      xs: 5,
                      md: 6,
                    },

                    borderRadius: {
                      xs: "10px",
                      md: "14px",
                    },

                    position: "relative",

                    zIndex: 1,

                    animation: "featureImageFade 0.6s ease",

                    "@keyframes featureImageFade": {
                      from: {
                        opacity: 0,
                        transform: "translateX(25px)",
                      },

                      to: {
                        opacity: 1,
                        transform: "translateX(0)",
                      },
                    },
                  }}
                />
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Add Cards */}

      <Box
        component="section"
        sx={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",

          pt: { xs: 3, sm: 5, md: 7 },
          px: { xs: 2, sm: 3 },
          pb: { xs: 2, sm: 3, md: 3 },

          backgroundColor: "#FDFDFF",

          // Layered mesh gradient — indigo, orange, and a hint of pink
          backgroundImage: `
            radial-gradient(at 15% 20%, rgba(79, 70, 229, 0.16) 0px, transparent 50%),
            radial-gradient(at 85% 10%, rgba(255, 104, 17, 0.14) 0px, transparent 50%),
            radial-gradient(at 50% 60%, rgba(236, 72, 153, 0.08) 0px, transparent 50%),
            radial-gradient(at 90% 80%, rgba(79, 70, 229, 0.10) 0px, transparent 50%)
          `,
        }}
      >
        {/* Fine noise/texture overlay — keeps the mesh from looking too "smooth/plasticky" */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E\")",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        <Box
          component="section"
          // sx={{
          //   py: { xs: 3, sm: 5, md: 7 },
          //   px: { xs: 2, sm: 4 },
          //   background: "linear-gradient(180deg, #FFFFFF 0%, #FAFAFC 100%)",
          // }}
        >
          <Container maxWidth="lg">
            {/* Heading */}
            <Typography
              sx={{
                textAlign: "center",
                fontSize: {
                  xs: "30px",
                  sm: "38px",
                  md: "34px",
                },
                fontWeight: 600,
                lineHeight: 1.2,
                color: "#1D1D1F",
                mb: { xs: 7, md: 8 },
              }}
            >
              The{" "}
              <Box
                component="span"
                sx={{
                  color: "#4F46E5",
                  fontWeight: 600,
                }}
              >
                supporting features
              </Box>{" "}
              that
              <br />
              make the system work
            </Typography>

            {/* Cards */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "repeat(2, 1fr)",
                  md: "repeat(3, 1fr)",
                },
                gap: {
                  xs: 6,
                  sm: 5,
                  md: 3.5,
                },
              }}
            >
              {/* Card 1 */}
              <FeatureCard
                icon={<GroupsOutlinedIcon />}
                title={
                  <>
                    Centralized Lead
                    <br />
                    Management
                  </>
                }
                description={
                  <>
                    Keep every lead, campaign activity,
                    <br />
                    message, call, and outcome in one
                    <br />
                    clean timeline.
                  </>
                }
              />

              {/* Card 2 */}
              <FeatureCard
                icon={<SmartToyOutlinedIcon />}
                title="Human-Like AI Voice Agents"
                description={
                  <>
                    Run natural outbound calls that qualify
                    <br />
                    leads and capture outcomes at scale.
                  </>
                }
              />

              {/* Card 3 */}
              <FeatureCard
                icon={<ContactPageOutlinedIcon />}
                title="Contacts and Import"
                description={
                  <>
                    Upload contacts, organize lead lists,
                    <br />
                    and prepare campaigns faster.
                  </>
                }
              />

              {/* Card 4 */}
              <FeatureCard
                icon={<BarChartOutlinedIcon />}
                title={
                  <>
                    Analytics and Performance
                    <br />
                    Visibility
                  </>
                }
                description={
                  <>
                    See campaign performance, lead
                    <br />
                    activity, and channel outcomes in one
                    <br />
                    place.
                  </>
                }
              />

              {/* Card 5 */}
              <FeatureCard
                icon={<AccountTreeOutlinedIcon />}
                title="API and Operational Control"
                description={
                  <>
                    Connect JFS with your existing
                    <br />
                    workflow and manage operations with
                    <br />
                    more control.
                  </>
                }
              />

              {/* Card 6 */}
              <FeatureCard
                icon={<HandshakeOutlinedIcon />}
                title="Smart Handoff"
                description={
                  <>
                    Move interested leads to your sales
                    <br />
                    team with the context they need.
                  </>
                }
              />
            </Box>
          </Container>
        </Box>
      </Box>

      {/* Problem Solution Cards */}
      <Box
        component="section"
        sx={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",

          pt: { xs: 3, sm: 5, md: 7 },
          px: { xs: 2, sm: 3 },
          pb: { xs: 2, sm: 3, md: 3 },

          backgroundColor: "#FDFDFF",

          // Layered mesh gradient — indigo, orange, and a hint of pink
          backgroundImage: `
            radial-gradient(at 15% 20%, rgba(79, 70, 229, 0.16) 0px, transparent 50%),
            radial-gradient(at 85% 10%, rgba(255, 104, 17, 0.14) 0px, transparent 50%),
            radial-gradient(at 50% 60%, rgba(236, 72, 153, 0.08) 0px, transparent 50%),
            radial-gradient(at 90% 80%, rgba(79, 70, 229, 0.10) 0px, transparent 50%)
          `,
        }}
      >
        {/* Fine noise/texture overlay — keeps the mesh from looking too "smooth/plasticky" */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E\")",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <Box
          component="section"
          // sx={{
          //   py: { xs: 2, sm: 5, md: 7 },
          //   px: { xs: 2, sm: 3 },
          //   background: "#F9F9FA",
          // }}
        >
          <Container maxWidth="lg">
            {/* Main Heading */}
            <Box
              sx={{
                textAlign: "center",
                mb: { xs: 2, md: 5 },
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "30px",
                    sm: "36px",
                    md: "34px",
                  },
                  lineHeight: 1.2,
                  fontWeight: 700,
                  color: "#1B1B1B",
                }}
              >
                The problem{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#4F46E5",
                  }}
                >
                  JFS
                </Box>
                {/* <br /> */}
                <Box
                  component="span"
                  sx={{
                    color: "#4F46E5",
                  }}
                ></Box>{" "}
                is built to{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#4F46E5",
                  }}
                >
                  solve
                </Box>
              </Typography>

              {/* Purple Badge */}
              <Box
                sx={{
                  position: "relative",
                  display: "inline-flex",
                  mt: 5,
                  px: 3,
                  height: 45,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(90deg, #4F46E5 0%, #5143B8 100%)",
                  color: "#FFFFFF",
                  fontSize: "16px",
                  fontWeight: 600,
                  boxShadow: "0 8px 20px rgba(67, 55, 168, 0.2)",

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-11px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 0,
                    height: 0,
                    borderLeft: "10px solid transparent",
                    borderRight: "10px solid transparent",
                    borderTop: "11px solid #4F46E5",
                  },
                }}
              >
                Unified Outreach 90% Faster
              </Box>
            </Box>

            {/* Comparison Section */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: "1fr 1px 1fr",
                },
                columnGap: {
                  xs: 0,
                  md: 9,
                },
                rowGap: {
                  xs: 7,
                  md: 0,
                },
                alignItems: "center",
              }}
            >
              {/* LEFT SIDE */}
              <Box>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#E65F00",
                    fontWeight: 700,
                    fontSize: {
                      xs: "25px",
                      md: "29px",
                    },
                    mb: 5,
                  }}
                >
                  Other Platforms Create Chaos
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2.5,
                  }}
                >
                  <ProblemItem text="Follow-ups getting missed" />
                  <ProblemItem text="Emails in separate tools" />
                  <ProblemItem text="Calls tracked manually" />
                  <ProblemItem text="No clear lead history" />
                </Box>
              </Box>

              {/* CENTER DIVIDER */}
              <Box
                sx={{
                  display: {
                    xs: "none",
                    md: "block",
                  },
                  width: "1px",
                  height: "345px",
                  backgroundColor: "#E1E1E1",
                }}
              />

              {/* RIGHT SIDE */}
              <Box>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#4F46E5",
                    fontWeight: 700,
                    fontSize: {
                      xs: "25px",
                      md: "29px",
                    },
                    mb: 5,
                  }}
                >
                  How JFS Fixes It
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2.5,
                  }}
                >
                  <SolutionItem text="Smart Follow-up Sequences" />
                  <SolutionItem text="Email + WhatsApp + AI Calls" />
                  <SolutionItem text="Unified Lead Journey" />
                  <SolutionItem text="Team Handoff Visibility" />
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>

      <FAQHome />
      <ContactForm />
    </>
  );
};

export default Features;
