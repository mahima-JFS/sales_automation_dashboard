import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  Chip,
  Container,
  Grid,
  Link as MuiLink,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import {
  ArrowOutward,
  AutoAwesome,
  Paid,
  Search,
  TrackChanges,
  WhatsApp,
} from "@mui/icons-material";
import FAQHome from "./FAQHome";

/* =========================================================
   COLORS
========================================================= */

const COLORS = {
  navy: "#07182d",
  black: "#050505",
  blue: "#526b91",
  lightBlue: "#59729a",
  purple: "#5138df",
  orange: "#f65a0a",
  orangeDark: "#d94800",
  peach: "#fff1e8",
  peachLight: "#fff8f3",
  peachBorder: "#ffbe91",
  green: "#00a63c",
  red: "#ef1c1c",
  border: "#dfe4e9",
  background: "#fafbfc",
};

/* =========================================================
   DATA
========================================================= */

const comparisonData = {
  "rapid-sales-vs-wati": {
    company1: "JFS",
    company2: "Wati",

    rapidWins: [
      "Outbound AI voice calls to any mobile number (English, Hindi, Hinglish + regional)",
      "Email sequences from your own domain",
      "Cross-channel sequences with smart fall-back",
      "Two-way WhatsApp inbox with AI chatbot",
      "Flat plans with published WhatsApp rates",
      "COD verification and abandoned-cart recovery",
    ],

    watiWins: [
      "Instagram DM + Facebook Messenger automation",
      "Deeper support tooling and routing",
      "Larger template and chatbot marketplace",
      "WhatsApp Business Calling",
      "Free trial and lower entry pricing",
    ],

    rows: [
      {
        capability: "Built for",
        rapid: "Outbound sales & lead qualification",
        wati: "Inbound marketing & customer support",
      },
      {
        capability: "Channels included",
        rapid: "Email + WhatsApp API + outbound AI voice calls",
        wati: "WhatsApp API + Instagram + Facebook Messenger",
      },
      {
        capability: "Outbound AI calling (phone network)",
        rapid: (
          <>
            <Box component="span" sx={{ color: COLORS.green, fontWeight: 700 }}>
              ✓ Yes
            </Box>{" "}
            — on every plan from ₹3,000/mo
          </>
        ),
        wati: (
          <>
            <Box component="span" sx={{ color: COLORS.red, fontWeight: 700 }}>
              ✕ No
            </Box>{" "}
            — WhatsApp in-app calling
          </>
        ),
      },
      {
        capability: "Email campaigns",
        rapid: (
          <>
            <Box component="span" sx={{ color: COLORS.green, fontWeight: 700 }}>
              ✓ Yes
            </Box>{" "}
            — from your own domain
          </>
        ),
        wati: (
          <Box component="span" sx={{ color: COLORS.red, fontWeight: 700 }}>
            ✕ No
          </Box>
        ),
      },
      {
        capability: "WhatsApp broadcasts & templates",
        rapid: (
          <>
            <Box component="span" sx={{ color: COLORS.green, fontWeight: 700 }}>
              ✓ Yes
            </Box>{" "}
            — official Meta API, with AI-generated template creation
          </>
        ),
        wati: (
          <>
            <Box component="span" sx={{ color: COLORS.green, fontWeight: 700 }}>
              ✓ Yes
            </Box>{" "}
            — official Meta API
          </>
        ),
      },
      {
        capability: "Two-way WhatsApp inbox + chatbot",
        rapid: (
          <>
            <Box component="span" sx={{ color: COLORS.green, fontWeight: 700 }}>
              ✓ Yes
            </Box>{" "}
            — inbound chats with AI chatbot automation
          </>
        ),
        wati: (
          <>
            <Box component="span" sx={{ color: COLORS.green, fontWeight: 700 }}>
              ✓ Yes
            </Box>{" "}
            — omnichannel inbox with chatbot
          </>
        ),
      },
    ],
  },
};

/* =========================================================
   SMALL REUSABLE COMPONENTS
========================================================= */

const SectionLabel = ({ icon, children }) => {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 1,
        px: 3,
        py: 1.1,
        borderRadius: "40px",
        border: `1px solid ${COLORS.peachBorder}`,
        bgcolor: COLORS.peachLight,
        color: COLORS.orange,
        fontWeight: 700,
        letterSpacing: "2px",
        fontSize: { xs: 12, md: 14 },
        textTransform: "uppercase",
      }}
    >
      {icon}
      {children}
    </Box>
  );
};

const Highlight = ({ children }) => (
  <Box
    component="span"
    sx={{
      color: COLORS.purple,
      fontWeight: 600,
    }}
  >
    {children}
  </Box>
);

/* =========================================================
   COMPARISON BOX
========================================================= */

const ComparisonBox = ({ type, children }) => {
  const rapid = type === "rapid";

  return (
    <Box
      sx={{
        p: { xs: 2.5, md: 3 },
        borderRadius: "22px",
        border: rapid
          ? `1px solid ${COLORS.peachBorder}`
          : `1px solid ${COLORS.border}`,
        bgcolor: rapid ? COLORS.peach : "#fff",
      }}
    >
      <Typography
        component="span"
        sx={{
          color: rapid ? COLORS.orange : "#050505",
          fontWeight: 800,
          fontSize: { xs: 18, md: 20 },
          mr: 1,
        }}
      >
        {rapid ? "JFS:" : "Wati:"}
      </Typography>

      <Typography
        component="span"
        sx={{
          color: "#111",
          fontSize: { xs: 17, md: 16 },
          lineHeight: 1.7,
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

/* =========================================================
   PLATFORM CARD
========================================================= */

const PlatformCard = ({
  rapid = false,
  title,
  subtitle,
  children,
  bullets = [],
}) => {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        p: { xs: 3, md: 4 },
        borderRadius: "28px",
        border: rapid
          ? `1px solid ${COLORS.peachBorder}`
          : `1px solid ${COLORS.border}`,
        bgcolor: rapid ? COLORS.peach : "#fff",
      }}
    >
      <Typography
        sx={{
          color: COLORS.blue,
          fontSize: { xs: 12, md: 15 },
          fontWeight: 600,
          letterSpacing: "2px",
          textTransform: "uppercase",
          mb: 2,
        }}
      >
        {subtitle}
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: 15, md: 18 },
          fontWeight: 800,
          color: COLORS.black,
          mb: 2,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: "#49617f",
          fontSize: { xs: 16, md: 18 },
          lineHeight: 1.65,
        }}
      >
        {children}
      </Typography>

      {bullets.length > 0 && (
        <Box
          component="ul"
          sx={{
            mt: 2,
            pl: 3,
            mb: 0,
          }}
        >
          {bullets.map((item, index) => (
            <Box
              component="li"
              key={index}
              sx={{
                mb: 1.5,
                color: "#264b76",
                fontSize: { xs: 15, md: 17 },
                lineHeight: 1.5,
              }}
            >
              {item}
            </Box>
          ))}
        </Box>
      )}
    </Card>
  );
};

/* =========================================================
   PRICING PLAN
========================================================= */

const PricingPlan = ({ title, price, annual, description }) => {
  return (
    <Box
      sx={{
        py: 3.5,
        borderBottom: `1px solid #e8e8e8`,
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        spacing={2}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: 10, md: 15 },
              fontWeight: 700,
              color: COLORS.black,
              mb: 1,
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              color: COLORS.lightBlue,
              fontSize: { xs: 15, md: 15 },
              lineHeight: 1.6,
            }}
          >
            {description}
          </Typography>
        </Box>

        <Box
          sx={{
            textAlign: {
              xs: "left",
              sm: "right",
            },
            minWidth: { sm: 170 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 10, md: 15 },
              fontWeight: 800,
              color: COLORS.black,
              whiteSpace: "nowrap",
            }}
          >
            {price}
          </Typography>

          {annual && (
            <Typography
              sx={{
                mt: 0.5,
                color: COLORS.lightBlue,
                fontSize: 14,
              }}
            >
              {annual}
            </Typography>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

/* =========================================================
   RATE CARD
========================================================= */

const RateCard = ({ title, badge, price, description, free = false }) => {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        p: { xs: 2.5, md: 3 },
        borderRadius: "22px",
        border: `1px solid ${COLORS.border}`,
        bgcolor: "#fff",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={1}
      >
        <Typography
          sx={{
            fontSize: { xs: 15, md: 18 },
            fontWeight: 700,
            color: COLORS.orange,
          }}
        >
          {title}
        </Typography>

        <Chip
          label={badge}
          size="small"
          sx={{
            bgcolor: "#f7f7f7",
            color: COLORS.blue,
            fontSize: 12,
          }}
        />
      </Stack>

      <Typography
        sx={{
          mt: 3,
          mb: 2,
          fontSize: { xs: 30, md: 25 },
          fontWeight: 700,
          color: free ? "#0aa84f" : COLORS.purple,
        }}
      >
        {price}
      </Typography>

      <Typography
        sx={{
          color: COLORS.lightBlue,
          fontSize: { xs: 15, md: 14 },
          lineHeight: 1.6,
        }}
      >
        {description}
      </Typography>
    </Card>
  );
};

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ComparisonsDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const data = comparisonData[slug] || comparisonData["rapid-sales-vs-wati"];

  return (
    <>
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

        <Container maxWidth="xl">
          <Typography
            component="h1"
            sx={{
              // mt: 4,
              textAlign: "center",
              color: "#000",
              fontWeight: 500,
              fontSize: {
                xs: "2.2rem",
                sm: "2rem",
                md: "2.5rem",
              },

              fontWeight: 700,

              lineHeight: 1.3,

              letterSpacing: "-0.02em",
            }}
          >
            JFS vs{" "}
            <Box
              component="span"
              sx={{
                color: COLORS.purple,
                fontWeight: 700,
              }}
            >
              Aisensy
            </Box>
            : Broadcasts
            <br />
            Alone, or a Full Outbound Engine
          </Typography>

          {/* Description */}

          <Typography
            sx={{
              maxWidth: "1180px",
              mx: "auto",
              mt: { xs: 3, md: 5 },
              textAlign: "center",
              color: COLORS.lightBlue,
              fontSize: {
                xs: 17,
                md: 20,
              },
              lineHeight: 1.8,
            }}
          >
            AiSensy made WhatsApp broadcasting cheap. JFS makes WhatsApp one of
            three channels — alongside Email and AI voice calls — in a single
            sales sequence. Here's the honest comparison with current pricing.
          </Typography>

          {/* Verification */}

          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{
              mt: 4,
              mb: 5,
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              columnGap: 4,
              rowGap: 2,
            }}
          >
            {[
              "Last updated: September 3, 2026",
              "Pricing verified on both official pricing pages",
              "Written for Indian SMEs, D2C brands & agencies",
            ].map((text, index) => (
              <Grid item key={index}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={0.5}
                >
                  <Typography
                    component="span"
                    sx={{
                      color: COLORS.green,
                      fontSize: {
                        xs: 18,
                        md: 19,
                      },
                      lineHeight: 1,
                    }}
                  >
                    ✓
                  </Typography>

                  <Typography
                    component="span"
                    sx={{
                      color: "#385779",
                      fontSize: {
                        xs: "10px",
                        sm: "12px",
                        md: "15px",
                      },
                      fontWeight: 400,
                      whiteSpace: "nowrap",
                      textAlign: "center",
                    }}
                  >
                    {text}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>

          {/* Buttons */}

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              pb: 9,
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              onClick={() => navigate("/book-a-demo")}
              sx={{
                width: {
                  xs: "100%",
                  sm: "228px",
                },

                maxWidth: "228px",

                height: "50px",

                minHeight: "50px",

                minWidth: 0,
                py: 1.8,
                px: 4,
                borderRadius: "15px",
                bgcolor: COLORS.orange,
                fontSize: 15,
                fontWeight: 600,
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  bgcolor: COLORS.orangeDark,
                  boxShadow: "none",
                },
              }}
            >
              Book a Demo ↗
            </Button>

            <Button
              variant="outlined"
              onClick={() => navigate("/Pricing")}
              sx={{
                width: {
                  xs: "100%",
                  sm: "228px",
                },

                maxWidth: "228px",

                height: "50px",

                minHeight: "50px",

                minWidth: 0,
                py: 1.8,
                px: 4,
                borderRadius: "12px",
                borderColor: COLORS.orange,
                color: COLORS.orange,
                fontSize: 15,
                fontWeight: 500,
                textTransform: "none",
                "&:hover": {
                  borderColor: COLORS.orange,
                  bgcolor: COLORS.peach,
                },
              }}
            >
              See JFS Pricing ↗
            </Button>
          </Box>
        </Container>
      </Box>
      {/*  */}
      <Box
        component="section"
        sx={{
          width: "100%",
          position: "relative",
          overflowX: "hidden",
          display: "flex",
          justifyContent: "center",
          boxSizing: "border-box",

          pt: { xs: 4, sm: 6, md: 8 },
          px: { xs: 1.5, sm: 2, md: 3 },
          pb: { xs: 4, sm: 5, md: 6 },

          backgroundColor: "#FDFDFF",

          backgroundImage: `
      radial-gradient(
        at 15% 20%,
        rgba(79, 70, 229, 0.16) 0px,
        transparent 50%
      ),
      radial-gradient(
        at 85% 10%,
        rgba(255, 104, 17, 0.14) 0px,
        transparent 50%
      ),
      radial-gradient(
        at 50% 60%,
        rgba(236, 72, 153, 0.08) 0px,
        transparent 50%
      ),
      radial-gradient(
        at 90% 80%,
        rgba(79, 70, 229, 0.10) 0px,
        transparent 50%
      )
    `,
        }}
      >
        {/* Noise / Texture Overlay */}
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

        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            px: { xs: 0, sm: 1, md: 2 },
          }}
        >
          <Card
            elevation={0}
            sx={{
              width: "100%",
              maxWidth: "1100px",
              mx: "auto",

              p: {
                xs: 2,
                sm: 3,
                md: 4,
              },

              boxSizing: "border-box",

              border: "1px solid #e1e5ea",
              borderRadius: {
                xs: "14px",
                sm: "16px",
                md: "18px",
              },

              boxShadow: "0 10px 30px rgba(20,40,70,0.05)",

              backgroundColor: "rgba(255,255,255,0.96)",
            }}
          >
            {/* ===============================
          SHORT ANSWER HEADER
      ================================ */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                mb: {
                  xs: 2,
                  sm: 2.5,
                  md: 3,
                },
              }}
            >
              <Typography
                component="span"
                sx={{
                  color: "#f45b18",
                  fontSize: {
                    xs: 12,
                    sm: 15,
                    md: 18,
                  },
                  fontWeight: 700,
                  letterSpacing: {
                    xs: "2px",
                    sm: "2.5px",
                    md: "3px",
                  },
                  lineHeight: 1.3,
                }}
              >
                THE SHORT ANSWER
              </Typography>
            </Box>

            {/* ===============================
          DESCRIPTION
      ================================ */}
            <Typography
              sx={{
                width: "100%",
                fontSize: {
                  xs: 15,
                  sm: 17,
                  md: 20,
                },
                lineHeight: {
                  xs: 1.6,
                  sm: 1.65,
                  md: 1.7,
                },
                color: "#111827",
                textAlign: "left",
                wordBreak: "normal",
                overflowWrap: "break-word",
              }}
            >
              <Box component="strong">
                Choose Wati if your support runs across Instagram and Facebook
                Messenger as well as WhatsApp
              </Box>{" "}
              — it is a mature, support-first omnichannel inbox with 16,000+
              customers.
              <br />
              <Box component="strong">Choose JFS if sales is the goal:</Box> it
              sequences Email, WhatsApp, and outbound AI voice calls together —
              and now covers inbound too.
            </Typography>

            {/* ===============================
          TWO BOXES
      ================================ */}
            <Box
              sx={{
                mt: {
                  xs: 2.5,
                  sm: 3,
                  md: 3.5,
                },

                display: "grid",

                gridTemplateColumns: {
                  xs: "1fr",
                  md: "repeat(2, minmax(0, 1fr))",
                },

                gap: {
                  xs: 2,
                  sm: 2.5,
                  md: 3,
                },

                width: "100%",
                minWidth: 0,
              }}
            >
              {/* ===============================
            JFS - LEFT
        ================================ */}
              <Card
                elevation={0}
                sx={{
                  width: "100%",
                  minWidth: 0,
                  boxSizing: "border-box",

                  p: {
                    xs: 2,
                    sm: 2.5,
                    md: 3,
                  },

                  bgcolor: COLORS.peach,
                  border: `1px solid ${COLORS.peachBorder}`,
                  borderRadius: {
                    xs: "14px",
                    md: "16px",
                  },

                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    fontSize: {
                      xs: 18,
                      sm: 20,
                      md: 22,
                    },
                    mb: {
                      xs: 1.5,
                      md: 2,
                    },
                    color: COLORS.black,
                    lineHeight: 1.25,
                  }}
                >
                  JFS wins on
                </Typography>

                <Box
                  component="ul"
                  sx={{
                    m: 0,
                    pl: {
                      xs: 2.2,
                      sm: 2.5,
                    },

                    "& li:last-child": {
                      mb: 0,
                    },
                  }}
                >
                  {data.rapidWins.map((item, index) => (
                    <Box
                      component="li"
                      key={index}
                      sx={{
                        mb: {
                          xs: 1.25,
                          md: 1.5,
                        },

                        color: "#264b76",

                        fontSize: {
                          xs: 14,
                          sm: 15,
                          md: 16,
                        },

                        lineHeight: {
                          xs: 1.5,
                          md: 1.55,
                        },

                        overflowWrap: "break-word",

                        "&::marker": {
                          color: COLORS.orange,
                        },
                      }}
                    >
                      {item}
                    </Box>
                  ))}
                </Box>
              </Card>

              {/* ===============================
            WATI - RIGHT
        ================================ */}
              <Card
                elevation={0}
                sx={{
                  width: "100%",
                  minWidth: 0,
                  boxSizing: "border-box",

                  p: {
                    xs: 2,
                    sm: 2.5,
                    md: 3,
                  },

                  bgcolor: "#ffffff",
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: {
                    xs: "14px",
                    md: "16px",
                  },

                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  component="h3"
                  sx={{
                    fontWeight: 700,
                    fontSize: {
                      xs: 18,
                      sm: 20,
                      md: 22,
                    },
                    mb: {
                      xs: 1.5,
                      md: 2,
                    },
                    color: COLORS.black,
                    lineHeight: 1.25,
                  }}
                >
                  Wati wins on
                </Typography>

                <Box
                  component="ul"
                  sx={{
                    m: 0,
                    pl: {
                      xs: 2.2,
                      sm: 2.5,
                    },

                    "& li:last-child": {
                      mb: 0,
                    },
                  }}
                >
                  {data.watiWins.map((item, index) => (
                    <Box
                      component="li"
                      key={index}
                      sx={{
                        mb: {
                          xs: 1.25,
                          md: 1.5,
                        },

                        color: "#264b76",

                        fontSize: {
                          xs: 14,
                          sm: 15,
                          md: 16,
                        },

                        lineHeight: {
                          xs: 1.5,
                          md: 1.55,
                        },

                        overflowWrap: "break-word",

                        "&::marker": {
                          color: COLORS.blue,
                        },
                      }}
                    >
                      {item}
                    </Box>
                  ))}
                </Box>
              </Card>
            </Box>
          </Card>
        </Container>
      </Box>

      {/*  */}
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
        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <SectionLabel icon={<Search fontSize="small" />}>
              Head-to-Head
            </SectionLabel>
          </Box>

          {/* Heading */}
          <Typography
            component="h2"
            sx={{
              mt: 2,
              textAlign: "center",
              fontSize: {
                xs: "24px",
                sm: "30px",
                md: "36px",
              },
              lineHeight: 1.2,
              fontWeight: 500,
              color: "#050505",
            }}
          >
            JFS vs Wati <Highlight>at a Glance</Highlight>
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              mt: 2,
              mb: 2,
              textAlign: "center",
              fontSize: {
                xs: "16px",
                sm: "18px",
                md: "20px",
              },
              lineHeight: 1.5,
              color: "#60779a",
            }}
          >
            Verified from both pricing pages and product documentation, June
            2026.
          </Typography>

          {/* Comparison Table */}
          <TableContainer
            component={Paper}
            elevation={0}
            sx={{
              width: "100%",
              maxWidth: "1100px",
              mx: "auto",

              border: `1px solid ${COLORS.border}`,
              borderRadius: { xs: "12px", sm: "18px" },

              // Important for mobile horizontal scrolling
              overflowX: "auto",
              overflowY: "hidden",

              // Smooth scrolling on mobile
              WebkitOverflowScrolling: "touch",

              // Keep scrollbar inside the table area
              "&::-webkit-scrollbar": {
                height: { xs: "6px", sm: "8px" },
              },

              "&::-webkit-scrollbar-track": {
                background: "#f1f1f1",
                borderRadius: "10px",
              },

              "&::-webkit-scrollbar-thumb": {
                background: "#b8b8b8",
                borderRadius: "10px",
              },

              "&::-webkit-scrollbar-thumb:hover": {
                background: "#999",
              },

              // Firefox
              scrollbarWidth: "thin",
              scrollbarColor: "#b8b8b8 #f1f1f1",
            }}
          >
            <Table
              sx={{
                // Desktop can use the full available width.
                // Mobile gets enough width to allow horizontal scrolling.
                minWidth: { xs: "850px", sm: "900px" },

                tableLayout: "fixed",
              }}
            >
              {/* Table Header */}
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      width: "20%",
                      minWidth: { xs: "170px", sm: "180px" },
                      fontWeight: 700,
                      fontSize: { xs: "16px", sm: "19px", md: "21px" },
                      color: COLORS.navy,
                      py: { xs: 2, sm: 2.5, md: 3 },
                      px: { xs: 2, sm: 2.5, md: 3 },
                      whiteSpace: "nowrap",
                    }}
                  >
                    Capability
                  </TableCell>

                  <TableCell
                    sx={{
                      width: "40%",
                      minWidth: { xs: "340px", sm: "360px" },
                      fontWeight: 700,
                      fontSize: { xs: "16px", sm: "19px", md: "21px" },
                      color: COLORS.orange,
                      bgcolor: COLORS.peachLight,
                      py: { xs: 2, sm: 2.5, md: 3 },
                      px: { xs: 2, sm: 2.5, md: 3 },
                      whiteSpace: "nowrap",
                    }}
                  >
                    JFS
                  </TableCell>

                  <TableCell
                    sx={{
                      width: "40%",
                      minWidth: { xs: "340px", sm: "360px" },
                      fontWeight: 700,
                      fontSize: { xs: "16px", sm: "19px", md: "21px" },
                      color: COLORS.navy,
                      py: { xs: 2, sm: 2.5, md: 3 },
                      px: { xs: 2, sm: 2.5, md: 3 },
                      whiteSpace: "nowrap",
                    }}
                  >
                    Wati
                  </TableCell>
                </TableRow>
              </TableHead>

              {/* Table Body */}
              <TableBody>
                {data.rows.map((row, index) => (
                  <TableRow key={index}>
                    {/* Capability */}
                    <TableCell
                      sx={{
                        width: "20%",
                        color: "#17385e",
                        fontSize: { xs: "15px", sm: "17px", md: "19px" },
                        lineHeight: 1.45,
                        py: { xs: 2, sm: 2.5, md: 3 },
                        px: { xs: 2, sm: 2.5, md: 3 },
                        verticalAlign: "middle",
                        wordBreak: "normal",
                      }}
                    >
                      {row.capability}
                    </TableCell>

                    {/* JFS */}
                    <TableCell
                      sx={{
                        width: "40%",
                        bgcolor: COLORS.peachLight,
                        color: "#294d77",
                        fontSize: { xs: "14px", sm: "16px", md: "18px" },
                        lineHeight: 1.5,
                        py: { xs: 2, sm: 2.5, md: 3 },
                        px: { xs: 2, sm: 2.5, md: 3 },
                        verticalAlign: "middle",
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                      }}
                    >
                      {row.rapid}
                    </TableCell>

                    {/* Wati */}
                    <TableCell
                      sx={{
                        width: "40%",
                        color: "#294d77",
                        fontSize: { xs: "14px", sm: "16px", md: "18px" },
                        lineHeight: 1.5,
                        py: { xs: 2, sm: 2.5, md: 3 },
                        px: { xs: 2, sm: 2.5, md: 3 },
                        verticalAlign: "middle",
                        whiteSpace: "normal",
                        wordBreak: "break-word",
                      }}
                    >
                      {row.wati}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
      {/*  */}

      <Box
        component="section"
        sx={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",

          pt: { xs: 4, sm: 6, md: 8 },
          px: { xs: 1.5, sm: 3, md: 3 },
          pb: { xs: 5, sm: 7, md: 10 },

          backgroundColor: "#FDFDFF",

          backgroundImage: `
      radial-gradient(at 15% 20%, rgba(79, 70, 229, 0.16) 0px, transparent 50%),
      radial-gradient(at 85% 10%, rgba(255, 104, 17, 0.14) 0px, transparent 50%),
      radial-gradient(at 50% 60%, rgba(236, 72, 153, 0.08) 0px, transparent 50%),
      radial-gradient(at 90% 80%, rgba(79, 70, 229, 0.10) 0px, transparent 50%)
    `,
        }}
      >
        {/* Fine noise / texture overlay */}
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

        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            px: { xs: 1, sm: 2, md: 3 },
          }}
        >
          {/* SECTION HEADER */}
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              // IMPORTANT:
              // Do not use a large negative margin here.
              mt: 0,
            }}
          >
            <SectionLabel icon={<AutoAwesome fontSize="small" />}>
              The Two Platforms
            </SectionLabel>

            <Typography
              component="h2"
              sx={{
                mt: { xs: 2, sm: 2, md: 2 },

                width: "100%",
                textAlign: "center",

                fontSize: {
                  xs: "25px",
                  sm: "28px",
                  md: "34px",
                },

                lineHeight: 1.25,
                fontWeight: 600,
                color: COLORS.black,

                // Prevent heading from being clipped
                overflow: "visible",
              }}
            >
              A Broadcast Tool vs an Outreach Stack
            </Typography>

            <Typography
              sx={{
                mt: { xs: 2, sm: 2.5, md: 3 },

                width: "100%",
                maxWidth: "850px",
                mx: "auto",

                textAlign: "center",

                fontSize: {
                  xs: "15px",
                  sm: "18px",
                  md: "20px",
                },

                lineHeight: 1.6,
                color: COLORS.lightBlue,
              }}
            >
              AiSensy and JFS overlap on exactly one channel. What happens
              around that channel is where they part ways.
            </Typography>
          </Box>

          {/* PLATFORM CARDS */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "1100px",
              mx: "auto",

              mt: { xs: 4, sm: 5, md: 7 },

              display: "grid",

              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, minmax(0, 1fr))",
              },

              gap: {
                xs: 3,
                md: 4,
              },

              alignItems: "stretch",
            }}
          >
            {/* WATI */}
            <Box
              sx={{
                width: "100%",
                minWidth: 0,
              }}
            >
              <PlatformCard
                subtitle="WhatsApp Inbox & Marketing Platform"
                title="What Wati does well"
                bullets={[
                  "Omnichannel inbox: WhatsApp, Instagram DMs, FB Messenger, web widget",
                  "No-code chatbot builder plus Astra AI agents",
                ]}
              >
                Wati turned the WhatsApp Business API into a collaborative team
                inbox, and it remains strong at exactly that. If a Facebook ad
                drives people to WhatsApp, Wati gives your agents shared chats,
                tags, routing, no-code chatbots and broadcast campaigns to
                handle the incoming conversations.
              </PlatformCard>
            </Box>

            {/* JFS */}
            <Box
              sx={{
                width: "100%",
                minWidth: 0,
              }}
            >
              <PlatformCard
                rapid
                subtitle="Tri-Channel Outbound Sales Engine"
                title="What JFS does well"
                bullets={[
                  "AI voice agents that dial mobile numbers and converse in English, Hindi, Hinglish and regional languages",
                  "Email sequences sent from your own authenticated domain",
                ]}
              >
                JFS starts where a lead list starts: a CSV. Upload it, pick a
                sequence, and the platform works each prospect across Email,
                WhatsApp and AI voice calls until someone replies — then stops
                automatically and hands the conversation to a human with the
                full history attached.
              </PlatformCard>
            </Box>
          </Box>
        </Container>
      </Box>

      {/*  */}
      <Box
        component="section"
        sx={{
          width: "100%",
          position: "relative",
          overflowX: "hidden",
          display: "flex",
          justifyContent: "center",

          pt: { xs: 5, sm: 7, md: 9 },
          px: { xs: 1.5, sm: 2, md: 3 },
          pb: { xs: 6, sm: 8, md: 10 },

          backgroundColor: "#FDFDFF",

          backgroundImage: `
      radial-gradient(
        at 15% 20%,
        rgba(79, 70, 229, 0.16) 0px,
        transparent 50%
      ),
      radial-gradient(
        at 85% 10%,
        rgba(255, 104, 17, 0.14) 0px,
        transparent 50%
      ),
      radial-gradient(
        at 50% 60%,
        rgba(236, 72, 153, 0.08) 0px,
        transparent 50%
      ),
      radial-gradient(
        at 90% 80%,
        rgba(79, 70, 229, 0.10) 0px,
        transparent 50%
      )
    `,
        }}
      >
        {/* Fine noise / texture overlay */}
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

        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            px: { xs: 1, sm: 2, md: 3 },
          }}
        >
          {/* SECTION HEADER */}
          <Stack
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",

              mt: 0,
            }}
          >
            <SectionLabel icon={<AutoAwesome fontSize="small" />}>
              Key Differences
            </SectionLabel>

            <Typography
              component="h2"
              sx={{
                mt: { xs: 2, sm: 2.5, md: 3 },

                width: "100%",
                maxWidth: "900px",
                mx: "auto",

                textAlign: "center",

                color: COLORS.black,

                fontSize: {
                  xs: "25px",
                  sm: "30px",
                  md: "34px",
                },

                lineHeight: {
                  xs: 1.3,
                  sm: 1.25,
                  md: 1.2,
                },

                fontWeight: 600,

                overflow: "visible",
              }}
            >
              The Four Differences That <Highlight>Actually Matter</Highlight>
            </Typography>

            <Typography
              sx={{
                mt: { xs: 2, sm: 2.5, md: 3 },

                width: "100%",
                maxWidth: "750px",
                mx: "auto",

                textAlign: "center",

                color: COLORS.lightBlue,

                fontSize: {
                  xs: "15px",
                  sm: "17px",
                  md: "18px",
                },

                lineHeight: {
                  xs: 1.55,
                  sm: 1.6,
                  md: 1.6,
                },
              }}
            >
              Where the two products genuinely diverge — and what it costs you
              either way.
            </Typography>
          </Stack>

          {/* MAIN CONTENT */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "1050px",
              mx: "auto",

              mt: {
                xs: 4,
                sm: 5,
                md: 7,
              },
            }}
          >
            {/* DIFFERENCE 1 */}
            <Typography
              component="h3"
              sx={{
                fontSize: {
                  xs: "18px",
                  sm: "21px",
                  md: "22px",
                },

                fontWeight: 700,

                mb: {
                  xs: 2,
                  sm: 2.5,
                },

                color: COLORS.navy,

                lineHeight: 1.35,

                width: "100%",
              }}
            >
              1. When a prospect ignores WhatsApp, what happens next?
            </Typography>

            <Box
              sx={{
                width: "100%",
                display: "grid",

                gridTemplateColumns: {
                  xs: "1fr",
                  md: "repeat(2, minmax(0, 1fr))",
                },

                gap: {
                  xs: 2.5,
                  sm: 3,
                  md: 3,
                },

                alignItems: "stretch",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  minWidth: 0,
                  display: "flex",
                }}
              >
                <ComparisonBox type="wati">
                  The journey ends in WhatsApp. You can re-broadcast or
                  retarget, but a prospect who does not open the chat never
                  hears from you on another channel.
                </ComparisonBox>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  minWidth: 0,
                  display: "flex",
                }}
              >
                <ComparisonBox type="rapid">
                  Sequences escalate across channels. A WhatsApp message unread
                  for a set window can trigger an email, then an AI voice call —
                  and any reply on any channel halts the entire sequence
                  instantly.
                </ComparisonBox>
              </Box>
            </Box>

            {/* DIFFERENCE 2 */}
            <Typography
              component="h3"
              sx={{
                mt: {
                  xs: 5,
                  sm: 6,
                  md: 6,
                },

                fontSize: {
                  xs: "18px",
                  sm: "21px",
                  md: "22px",
                },

                fontWeight: 700,

                mb: {
                  xs: 2,
                  sm: 2.5,
                },

                color: COLORS.navy,

                lineHeight: 1.35,

                width: "100%",
              }}
            >
              2. Chatbots vs AI that can hold a phone conversation
            </Typography>

            <Box
              sx={{
                width: "100%",
                display: "grid",

                gridTemplateColumns: {
                  xs: "1fr",
                  md: "repeat(2, minmax(0, 1fr))",
                },

                gap: {
                  xs: 2.5,
                  sm: 3,
                  md: 3,
                },

                alignItems: "stretch",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  minWidth: 0,
                  display: "flex",
                }}
              >
                <ComparisonBox type="wati">
                  Flow-builder chatbots and Astra AI agents answer questions in
                  chat. Useful for "track my order" — but text bots rarely
                  create sales intent, and AI co-pilot credits are metered.
                </ComparisonBox>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  minWidth: 0,
                  display: "flex",
                }}
              >
                <ComparisonBox type="rapid">
                  JFS has both layers — an AI chatbot handles inbound WhatsApp
                  queries, and AI voice agents make real outbound calls:
                  greeting in Hinglish, handling objections, pausing when
                  interrupted, qualifying budget and intent, and writing the
                  transcript to the lead timeline.
                </ComparisonBox>
              </Box>
            </Box>

            {/* DIFFERENCE 3 */}
            <Typography
              component="h3"
              sx={{
                mt: {
                  xs: 5,
                  sm: 6,
                  md: 6,
                },

                fontSize: {
                  xs: "18px",
                  sm: "21px",
                  md: "22px",
                },

                fontWeight: 700,

                mb: {
                  xs: 2,
                  sm: 2.5,
                },

                color: COLORS.navy,

                lineHeight: 1.35,

                width: "100%",
              }}
            >
              3. How the bill grows as your team grows
            </Typography>

            <Box
              sx={{
                width: "100%",
                display: "grid",

                gridTemplateColumns: {
                  xs: "1fr",
                  md: "repeat(2, minmax(0, 1fr))",
                },

                gap: {
                  xs: 2.5,
                  sm: 3,
                  md: 3,
                },

                alignItems: "stretch",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  minWidth: 0,
                  display: "flex",
                }}
              >
                <ComparisonBox type="wati">
                  Subscription + per-user fees after included seats + rate-card
                  message charges + add-ons for automation triggers and AI
                  credits.
                </ComparisonBox>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  minWidth: 0,
                  display: "flex",
                }}
              >
                <ComparisonBox type="rapid">
                  One predictable platform subscription with flat pricing and no
                  per-user fees. Add your sales team without watching the
                  software bill climb with every new seat.
                </ComparisonBox>
              </Box>
            </Box>

            {/* DIFFERENCE 4 */}
            <Typography
              component="h3"
              sx={{
                mt: {
                  xs: 5,
                  sm: 6,
                  md: 6,
                },

                fontSize: {
                  xs: "18px",
                  sm: "21px",
                  md: "22px",
                },

                fontWeight: 700,

                mb: {
                  xs: 2,
                  sm: 2.5,
                },

                color: COLORS.navy,

                lineHeight: 1.35,

                width: "100%",
              }}
            >
              4. COD verification: a button tap vs a verbal yes
            </Typography>

            <Box
              sx={{
                width: "100%",
                display: "grid",

                gridTemplateColumns: {
                  xs: "1fr",
                  md: "repeat(2, minmax(0, 1fr))",
                },

                gap: {
                  xs: 2.5,
                  sm: 3,
                  md: 3,
                },

                alignItems: "stretch",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  minWidth: 0,
                  display: "flex",
                }}
              >
                <ComparisonBox type="wati">
                  Sends a WhatsApp confirmation template after a
                  Cash-on-Delivery order. Many buyers ignore it, and some tap
                  "Confirm" with no intention of accepting delivery.
                </ComparisonBox>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  minWidth: 0,
                  display: "flex",
                }}
              >
                <ComparisonBox type="rapid">
                  Calls the buyer within moments of the order — "Namaste, aapne
                  ₹2,000 ka order place kiya hai, kya hum ise dispatch kar
                  dein?" A verbal confirmation in the buyer's own language is a
                  far stronger intent signal.
                </ComparisonBox>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          width: "100%",
          position: "relative",
          overflowX: "hidden",
          display: "flex",
          justifyContent: "center",

          pt: { xs: 5, sm: 7, md: 9 },
          px: { xs: 1.5, sm: 2, md: 3 },
          pb: { xs: 6, sm: 8, md: 10 },

          backgroundColor: "#FDFDFF",

          backgroundImage: `
      radial-gradient(
        at 15% 20%,
        rgba(79, 70, 229, 0.16) 0px,
        transparent 50%
      ),
      radial-gradient(
        at 85% 10%,
        rgba(255, 104, 17, 0.14) 0px,
        transparent 50%
      ),
      radial-gradient(
        at 50% 60%,
        rgba(236, 72, 153, 0.08) 0px,
        transparent 50%
      ),
      radial-gradient(
        at 90% 80%,
        rgba(79, 70, 229, 0.10) 0px,
        transparent 50%
      )
    `,
        }}
      >
        {/* Fine noise / texture overlay */}
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
          id="pricing"
          sx={{
            width: "100%",
            position: "relative",
            zIndex: 1,
            py: {
              xs: 0,
              sm: 1,
              md: 2,
            },
          }}
        >
          <Container
            maxWidth="xl"
            sx={{
              width: "100%",
              px: {
                xs: 1,
                sm: 2,
                md: 3,
              },
            }}
          >
            {/* ================= HEADER ================= */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              {/* PRICING LABEL */}
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

                  // IMPORTANT:
                  // Do not use negative margin here.
                  mt: 0,
                }}
              >
                <SectionLabel icon={<Paid sx={{ fontSize: 15 }} />}>
                  Pricing
                </SectionLabel>
              </Box>

              {/* HEADING */}
              <Typography
                component="h2"
                sx={{
                  mt: {
                    xs: 2,
                    sm: 2.5,
                    md: 3,
                  },

                  width: "100%",
                  maxWidth: "900px",
                  mx: "auto",

                  textAlign: "center",

                  fontSize: {
                    xs: "25px",
                    sm: "30px",
                    md: "34px",
                  },

                  lineHeight: {
                    xs: 1.3,
                    sm: 1.25,
                    md: 1.2,
                  },

                  fontWeight: 600,
                  color: COLORS.black,

                  overflow: "visible",
                }}
              >
                JFS vs Wati <Highlight>Pricing</Highlight>
              </Typography>

              {/* DESCRIPTION */}
              <Typography
                sx={{
                  mt: {
                    xs: 2,
                    sm: 2.5,
                    md: 3,
                  },

                  width: "100%",
                  maxWidth: "780px",
                  mx: "auto",

                  textAlign: "center",

                  color: COLORS.lightBlue,

                  fontSize: {
                    xs: "15px",
                    sm: "17px",
                    md: "19px",
                  },

                  lineHeight: {
                    xs: 1.55,
                    sm: 1.6,
                    md: 1.6,
                  },
                }}
              >
                Indian pricing from both official pricing pages. Both platforms
                bill WhatsApp conversation charges separately.
              </Typography>
            </Box>

            {/* ================= PRICING BOXES ================= */}
            <Box
              sx={{
                width: "100%",
                maxWidth: "1100px",
                mx: "auto",

                mt: {
                  xs: 4,
                  sm: 5,
                  md: 7,
                },

                display: "grid",

                gridTemplateColumns: {
                  xs: "1fr",
                  md: "repeat(2, minmax(0, 1fr))",
                },

                gap: {
                  xs: 3,
                  sm: 3.5,
                  md: 4,
                },

                alignItems: "stretch",
              }}
            >
              {/* ================= JFS - LEFT ================= */}
              <Card
                elevation={0}
                sx={{
                  width: "100%",
                  minWidth: 0,

                  p: {
                    xs: 2.5,
                    sm: 3,
                    md: 3.5,
                  },

                  borderRadius: {
                    xs: "16px",
                    sm: "18px",
                    md: "20px",
                  },

                  border: `1px solid ${COLORS.orange}`,

                  boxSizing: "border-box",

                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* JFS HEADER */}
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",

                    flexDirection: {
                      xs: "column",
                      sm: "row",
                    },

                    justifyContent: "space-between",

                    alignItems: {
                      xs: "flex-start",
                      sm: "center",
                    },

                    gap: {
                      xs: 1.5,
                      sm: 2,
                    },

                    mb: {
                      xs: 2,
                      sm: 2.5,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "20px",
                        sm: "21px",
                        md: "22px",
                      },

                      lineHeight: 1.3,

                      fontWeight: 700,
                      color: COLORS.purple,
                    }}
                  >
                    JFS plans
                  </Typography>

                  <Chip
                    label="FLAT PRICING • NO PER-USER FEES"
                    sx={{
                      maxWidth: "100%",

                      color: COLORS.orange,
                      bgcolor: COLORS.peachLight,

                      fontWeight: 600,

                      fontSize: {
                        xs: "8px",
                        sm: "9px",
                      },

                      height: 25,

                      "& .MuiChip-label": {
                        px: {
                          xs: 0.8,
                          sm: 1,
                        },
                        whiteSpace: "normal",
                      },
                    }}
                  />
                </Box>

                <PricingPlan
                  title="WhatsApp Only"
                  price="₹1,999/mo"
                  annual="+ GST"
                  description="250 WhatsApp conversations/day, sequences, analytics"
                />

                <PricingPlan
                  title="Basic"
                  price="₹3,000/mo"
                  annual="₹2,125/mo billed annually"
                  description="Email + WhatsApp + AI calling · 2 calling languages · 4 AI voices"
                />

                <PricingPlan
                  title="Advance Popular"
                  price="₹6,000/mo"
                  description="Advanced outbound automation across Email, WhatsApp and AI voice."
                />
              </Card>

              {/* ================= WATI - RIGHT ================= */}
              <Card
                elevation={0}
                sx={{
                  width: "100%",
                  minWidth: 0,

                  p: {
                    xs: 2.5,
                    sm: 3,
                    md: 3.5,
                  },

                  borderRadius: {
                    xs: "16px",
                    sm: "18px",
                    md: "20px",
                  },

                  border: `1px solid ${COLORS.border}`,

                  boxSizing: "border-box",

                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* WATI HEADER */}
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",

                    flexDirection: {
                      xs: "column",
                      sm: "row",
                    },

                    justifyContent: "space-between",

                    alignItems: {
                      xs: "flex-start",
                      sm: "center",
                    },

                    gap: {
                      xs: 1.5,
                      sm: 2,
                    },

                    mb: {
                      xs: 2,
                      sm: 2.5,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "20px",
                        sm: "21px",
                        md: "23px",
                      },

                      lineHeight: 1.3,

                      fontWeight: 700,
                      color: COLORS.orange,
                    }}
                  >
                    Wati plans
                  </Typography>

                  <Chip
                    label="PER-USER FEES APPLY"
                    sx={{
                      maxWidth: "100%",

                      color: COLORS.purple,
                      bgcolor: "#fbf7ff",

                      fontWeight: 600,

                      fontSize: {
                        xs: "8px",
                        sm: "9px",
                      },

                      height: 25,

                      "& .MuiChip-label": {
                        px: {
                          xs: 0.8,
                          sm: 1,
                        },

                        whiteSpace: "normal",
                      },
                    }}
                  />
                </Box>

                <PricingPlan
                  title="Growth"
                  price="₹2,699/mo"
                  annual="₹2,199/mo billed annually"
                  description="1 channel · 3 users (no extra users) · 15k broadcasts/mo · no webhooks"
                />

                <PricingPlan
                  title="Pro"
                  price="₹6,499/mo"
                  annual="₹4,899/mo billed annually"
                  description="5 users · extra user ₹1,299/mo · unlimited broadcasts"
                />

                <PricingPlan
                  title="Business"
                  price="₹18,499/mo"
                  description="Advanced features, automation and larger team support."
                />
              </Card>
            </Box>
          </Container>
        </Box>
      </Box>

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
          sx={{
            pb: { xs: 3, md: 5 },
            pt: { xs: 3, md: 5 },
          }}
        >
          <Container maxWidth="xl">
            {/* =========================
        HEADING SECTION
    ========================== */}
            <Stack
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              sx={{
                width: "100%",
              }}
            >
              <Typography
                component="h2"
                sx={{
                  fontSize: {
                    xs: 15,
                    sm: 18,
                    md: 20,
                  },
                  fontWeight: 700,
                  color: COLORS.black,
                  textAlign: "center",
                  width: "100%",
                  lineHeight: 1.2,
                  mt: -5,
                }}
              >
                JFS WhatsApp conversation rates (India)
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  color: COLORS.lightBlue,
                  fontSize: {
                    xs: 10,
                    sm: 10,
                    md: 15,
                  },
                  textAlign: "center",
                  width: "100%",
                  lineHeight: 1.5,
                }}
              >
                Published openly — what you pay per conversation
                <br />
                category on top of your plan.
              </Typography>
            </Stack>

            {/* =========================
        4 CARDS - ONE ROW
    ========================== */}
            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "column",
                  md: "row",
                },
                gap: 1,
                mt: 1,
                width: "100%",
                alignItems: "stretch",
              }}
            >
              {/* Marketing */}
              <Box
                sx={{
                  flex: 1,
                  width: {
                    xs: "100%",
                    md: "25%",
                  },
                  minWidth: 0,
                  color: COLORS.lightBlue,
                  fontSize: {
                    xs: 10,
                    sm: 10,
                    md: 15,
                  },
                  fontWeight: 700,
                }}
              >
                <RateCard
                  title="Marketing"
                  badge="Promotional"
                  price="₹0.8631"
                  description="Per conversation — offers, broadcasts, nurturing"
                />
              </Box>

              {/* Utility */}
              <Box
                sx={{
                  flex: 1,
                  width: {
                    xs: "100%",
                    md: "25%",
                  },
                  minWidth: 0,
                }}
              >
                <RateCard
                  title="Utility"
                  badge="Transactional"
                  price="₹0.4150"
                  description="Per conversation — order updates, confirmations"
                />
              </Box>

              {/* Service */}
              <Box
                sx={{
                  flex: 1,
                  width: {
                    xs: "100%",
                    md: "25%",
                  },
                  minWidth: 0,
                }}
              >
                <RateCard
                  title="Service"
                  badge="Support"
                  price="Free"
                  free
                  description="Customer replies within the 24-hour window"
                />
              </Box>

              {/* Authentication */}
              <Box
                sx={{
                  flex: 1,
                  width: {
                    xs: "100%",
                    md: "25%",
                  },
                  minWidth: 0,
                }}
              >
                <RateCard
                  title="Authentication"
                  badge="OTP"
                  price="₹0.4150"
                  description="Per conversation — OTP and login verification"
                />
              </Box>
            </Box>

            {/* =========================
        BOTTOM DESCRIPTION
    ========================== */}
            <Typography
              sx={{
                mt: 4,
                color: COLORS.lightBlue,
                fontSize: {
                  xs: 10,
                  sm: 10,
                  md: 15,
                },
                lineHeight: 1.6,
                textAlign: "center",
                width: "100%",
              }}
            >
              WhatsApp conversation charges are billed separately as per Meta
              pricing and vary by country and category. Rates shown for Indian
              destination numbers as of June 2026.
            </Typography>
          </Container>
        </Box>
      </Box>
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

        <Container
          maxWidth={false}
          sx={{
            width: "100%",
            maxWidth: "1200px", // reduced from 1320px
            mx: "auto",
            px: {
              xs: 2,
              sm: 3,
              md: 4,
            },
          }}
        >
          {/* =========================
        SECTION HEADER
    ========================== */}
          <Stack
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            sx={{
              width: "100%",
            }}
          >
            {/* THE DECISION - CENTERED */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SectionLabel icon={<TrackChanges fontSize="small" />}>
                The Decision
              </SectionLabel>
            </Box>

            {/* MAIN HEADING */}
            <Typography
              component="h2"
              sx={{
                mt: 4,
                mb: 0,
                fontSize: {
                  xs: 25,
                  sm: 30,
                  md: 35,
                },
                fontWeight: 500,
                color: COLORS.black,
                lineHeight: 1.2,
                textAlign: "center",
              }}
            >
              Which Should <Highlight>You</Highlight> Choose?
            </Typography>
          </Stack>

          {/* =========================
        MAIN CONTENT
    ========================== */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "950px", // reduced from 1100px
              mx: "auto",
              mt: {
                xs: 5,
                md: 7,
              },
            }}
          >
            {/* =========================
          WATI
      ========================== */}
            <Box
              sx={{
                mb: {
                  xs: 6,
                  md: 7,
                },
              }}
            >
              <Typography
                component="h3"
                sx={{
                  m: 0,
                  mb: 3,
                  fontSize: {
                    xs: 22,
                    sm: 26,
                    md: 32,
                  },
                  fontWeight: 500,
                  color: COLORS.black,
                  lineHeight: 1.2,
                  textAlign: "center",
                  mt: -3,
                }}
              >
                Choose Wati if...
              </Typography>

              <Box
                component="ul"
                sx={{
                  m: 0,
                  p: 0,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                  listStyle: "none",
                }}
              >
                {/* Bullet 1 */}
                <Box
                  component="li"
                  sx={{
                    width: "100%",
                    maxWidth: "900px",
                    display: "flex",
                    alignItems: "flex-start",
                    color: COLORS.black,
                    fontSize: {
                      xs: 16,
                      sm: 18,
                      md: 19,
                    },
                    lineHeight: 1.6,
                    textAlign: "left",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      mr: 1.5,
                      flexShrink: 0,
                      fontWeight: 700,
                    }}
                  >
                    •
                  </Box>

                  <Box component="span">
                    You're{" "}
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 700,
                      }}
                    >
                      testing WhatsApp marketing for the first time
                    </Box>{" "}
                    and want a ₹0 start with free API onboarding.
                  </Box>
                </Box>

                {/* Bullet 2 */}
                <Box
                  component="li"
                  sx={{
                    width: "100%",
                    maxWidth: "900px",
                    display: "flex",
                    alignItems: "flex-start",
                    color: COLORS.black,
                    fontSize: {
                      xs: 16,
                      sm: 18,
                      md: 19,
                    },
                    lineHeight: 1.6,
                    textAlign: "left",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      mr: 1.5,
                      flexShrink: 0,
                      fontWeight: 700,
                    }}
                  >
                    •
                  </Box>

                  <Box component="span">
                    Your motion is{" "}
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 700,
                      }}
                    >
                      broadcast-and-retarget
                    </Box>
                    : offers, festival campaigns, newsletters to opted-in lists.
                  </Box>
                </Box>

                {/* Bullet 3 */}
                <Box
                  component="li"
                  sx={{
                    width: "100%",
                    maxWidth: "900px",
                    display: "flex",
                    alignItems: "flex-start",
                    color: COLORS.black,
                    fontSize: {
                      xs: 16,
                      sm: 18,
                      md: 19,
                    },
                    lineHeight: 1.6,
                    textAlign: "left",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      mr: 1.5,
                      flexShrink: 0,
                      fontWeight: 700,
                    }}
                  >
                    •
                  </Box>

                  <Box component="span">
                    You run{" "}
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 700,
                      }}
                    >
                      click-to-WhatsApp ads
                    </Box>{" "}
                    heavily and want the ads manager and campaign analytics in
                    the same tool.
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* =========================
          JFS
      ========================== */}
            <Box>
              <Typography
                component="h3"
                sx={{
                  m: 0,
                  mb: 3,
                  fontSize: {
                    xs: 22,
                    sm: 26,
                    md: 32,
                  },
                  fontWeight: 500,
                  color: COLORS.black,
                  lineHeight: 1.2,
                  textAlign: "center",
                  mt: -3,
                }}
              >
                Choose JFS if...
              </Typography>

              <Box
                component="ul"
                sx={{
                  m: 0,
                  p: 0,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                  listStyle: "none",
                }}
              >
                {/* Bullet 1 */}
                <Box
                  component="li"
                  sx={{
                    width: "100%",
                    maxWidth: "900px",
                    display: "flex",
                    alignItems: "flex-start",
                    color: COLORS.black,
                    fontSize: {
                      xs: 16,
                      sm: 18,
                      md: 19,
                    },
                    lineHeight: 1.6,
                    textAlign: "left",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      mr: 1.5,
                      flexShrink: 0,
                      fontWeight: 700,
                    }}
                  >
                    •
                  </Box>

                  <Box component="span">
                    You have{" "}
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 700,
                      }}
                    >
                      lead lists that need working
                    </Box>
                    , not just audiences that need broadcasting — B2B, real
                    estate, insurance, edtech, exporters.
                  </Box>
                </Box>

                {/* Bullet 2 */}
                <Box
                  component="li"
                  sx={{
                    width: "100%",
                    maxWidth: "900px",
                    display: "flex",
                    alignItems: "flex-start",
                    color: COLORS.black,
                    fontSize: {
                      xs: 16,
                      sm: 18,
                      md: 19,
                    },
                    lineHeight: 1.6,
                    textAlign: "left",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      mr: 1.5,
                      flexShrink: 0,
                      fontWeight: 700,
                    }}
                  >
                    •
                  </Box>

                  <Box component="span">
                    Your buyers{" "}
                    <Box
                      component="span"
                      sx={{
                        fontWeight: 700,
                      }}
                    >
                      respond to phone calls
                    </Box>{" "}
                    — and you want AI agents making those calls in Hindi,
                    Hinglish, or regional languages.
                  </Box>
                </Box>

                {/* Bullet 3 */}
                <Box
                  component="li"
                  sx={{
                    width: "100%",
                    maxWidth: "900px",
                    display: "flex",
                    alignItems: "flex-start",
                    color: COLORS.black,
                    fontSize: {
                      xs: 16,
                      sm: 18,
                      md: 19,
                    },
                    lineHeight: 1.6,
                    textAlign: "left",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      mr: 1.5,
                      flexShrink: 0,
                      fontWeight: 700,
                    }}
                  >
                    •
                  </Box>

                  <Box component="span">
                    You are a D2C brand fighting RTO and want voice-verified COD
                    orders.
                  </Box>
                </Box>

                {/* Bullet 4 */}
                <Box
                  component="li"
                  sx={{
                    width: "100%",
                    maxWidth: "900px",
                    display: "flex",
                    alignItems: "flex-start",
                    color: COLORS.black,
                    fontSize: {
                      xs: 16,
                      sm: 18,
                      md: 19,
                    },
                    lineHeight: 1.6,
                    textAlign: "left",
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      mr: 1.5,
                      flexShrink: 0,
                      fontWeight: 700,
                    }}
                  >
                    •
                  </Box>

                  <Box component="span">
                    You want one subscription instead of multiple tools.
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <FAQHome />
    </>
  );
}
