import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Container,
  Stack,
} from "@mui/material";

/* =====================================================
   CHECK ICON
===================================================== */

const CheckIcon = () => (
  <Box
    component="svg"
    viewBox="0 0 20 20"
    sx={{ width: 14, height: 14, flexShrink: 0, mt: "3px" }}
  >
    <path
      d="M4 10.5L8 14.5L16 5.5"
      fill="none"
      stroke="#22c55e"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Box>
);

/* =====================================================
   PRICING MODELS DATA
   (Per Minute / Per Call / One-Time)
===================================================== */

const pricingModes = {
  perMinute: {
    leftText: "Usage-based · billed monthly",
    banner: "Showing Model 1 & Model 3 — billed on connected calling minutes.",
    plans: [
      {
        tag: "CLIENT AI STACK",
        tagColor: "#f35b0b",
        price: "₹1",
        unit: "/min",
        subtext: "You bring the LLM, STT & TTS",
        cta: "Get Started",
        ctaVariant: "dark",
        features: [
          "Dialer + call orchestration",
          "Campaign & bot configuration",
          "Dashboard, logs & call records",
          "Platform maintenance included",
          "Client owns LLM/STT/TTS costs",
          "E.g. 1,00,000 min/mo = ₹1,00,000",
        ],
      },
      {
        tag: "FULLY MANAGED",
        tagColor: "#e11d48",
        badge: "POPULAR",
        highlighted: true,
        price: "₹5",
        unit: "/min",
        subtext: "LLM, STT & TTS all included",
        cta: "Get Started",
        ctaVariant: "orange",
        features: [
          "TruDialer platform + dialer",
          "LLM, STT & TTS included",
          "Call orchestration & workflows",
          "Dashboard, logs & records",
          "Routine maintenance & updates",
          "E.g. 50,000 min = ₹2,50,000; 1L min = ₹5,00,000",
        ],
      },
      {
        tag: "ENTERPRISE",
        tagColor: "#e11d48",
        isEnterprise: true,
        headline: "Let's Talk",
        subtext: "Custom volumes & enterprise-wide deployment",
        cta: "Contact Sales",
        ctaVariant: "pink",
        features: [
          "Custom pricing for high committed volumes",
          "Dedicated environment / on-premises option",
          "Custom integrations & workflows",
          "Security certification support",
          "Dedicated account & SLA terms",
        ],
      },
    ],
  },

  perCall: {
    leftText: "Volume-based · billed monthly",
    banner:
      "Showing Model 2 — billed on monthly call-count slabs, not duration.",
    plans: [
      {
        tag: "FIXED CALL SLAB",
        tagColor: "#4F46E5",
        price: "₹50,000",
        unit: "/ 1L calls",
        subtext: "≈ ₹0.50 per call · slab resets each month",
        cta: "Get Started",
        ctaVariant: "dark",
        features: [
          "Up to 1L calls — ₹50,000/mo",
          "1L–2L calls — ₹1,00,000/mo",
          "2L–3L calls — ₹1,50,000/mo",
          "Call-count based, not duration",
          "Client owns infra & AI vendor costs",
          "+₹50,000 for each additional 1L-call block",
        ],
      },
      {
        tag: "ENTERPRISE",
        tagColor: "#e11d48",
        isEnterprise: true,
        headline: "Let's Talk",
        subtext: "Custom volumes & enterprise-wide deployment",
        cta: "Contact Sales",
        ctaVariant: "pink",
        features: [
          "Custom pricing for high committed volumes",
          "Dedicated environment / on-premises option",
          "Custom integrations & workflows",
          "Security certification support",
          "Dedicated account & SLA terms",
        ],
      },
    ],
  },

  oneTime: {
    leftText: "One-time · no recurring platform fee",
    banner:
      "Showing Model 4 — a single one-time payment with 12 months maintenance included.",
    plans: [
      {
        tag: "SOURCE CODE BUYOUT",
        tagColor: "#4F46E5",
        price: "₹45L",
        unit: "one-time",
        subtext: "Full source, handover & 12mo maintenance",
        cta: "Talk to Sales",
        ctaVariant: "dark",
        features: [
          "Full source code, agreed scope",
          "Deployment & handover docs",
          "12 months free updates",
          "Knowledge-transfer sessions",
          "AMC available after year one",
        ],
      },
      {
        tag: "ENTERPRISE",
        tagColor: "#e11d48",
        isEnterprise: true,
        headline: "Let's Talk",
        subtext: "Custom volumes & enterprise-wide deployment",
        cta: "Contact Sales",
        ctaVariant: "pink",
        features: [
          "Custom pricing for high committed volumes",
          "Dedicated environment / on-premises option",
          "Custom integrations & workflows",
          "Security certification support",
          "Dedicated account & SLA terms",
        ],
      },
    ],
  },
};

const billingTabs = [
  { value: "perMinute", label: "Per Minute" },
  { value: "perCall", label: "Per Call" },
  { value: "oneTime", label: "One-Time" },
];

/* =====================================================
   COMPARE ALL MODELS — DATA
===================================================== */

const comparisonRows = [
  {
    parameter: "Pricing",
    model1: "₹1 / min",
    model3: "₹5 / min",
    model2: "₹50,000 / 1L calls",
    model4: "₹45L one-time",
  },
  {
    parameter: "Client provides LLM/STT/TTS",
    model1: "Yes",
    model3: "No",
    model2: "Yes",
    model4: "Deployment choice",
  },
  {
    parameter: "TruDialer platform",
    model1: "Included",
    model3: "Included",
    model2: "Included",
    model4: "Included in source",
  },
  {
    parameter: "Billing basis",
    model1: "Minutes",
    model3: "Minutes",
    model2: "Calls",
    model4: "One-time",
  },
  {
    parameter: "Best for",
    model1: "Own AI stack",
    model3: "Fully managed service",
    model2: "High-volume predictable billing",
    model4: "Ownership / self-hosting",
  },
  {
    parameter: "Maintenance",
    model1: "During active service*",
    model3: "During active service*",
    model2: "During active service*",
    model4: "12 months included",
  },
];

/* =====================================================
   PLAN CARD
===================================================== */

const PlanCard = ({ plan }) => {
  const getCtaBg = () => {
    if (plan.ctaVariant === "orange") return "#f35b0b";
    if (plan.ctaVariant === "pink")
      return "linear-gradient(90deg, #ec4899 0%, #db2777 100%)";
    return "#12141c";
  };

  const getCtaHoverBg = () => {
    if (plan.ctaVariant === "orange") return "#d94f09";
    if (plan.ctaVariant === "pink")
      return "linear-gradient(90deg, #db2777 0%, #be185d 100%)";
    return "#000000";
  };

  const cardInner = (
    <Box
      sx={{
        height: "100%",
        bgcolor: "#ffffff",
        borderRadius: "14px",
        border: plan.highlighted ? "none" : "1px solid #e6e7ec",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {plan.badge && (
        <Box
          sx={{
            width: "100%",
            py: 0.8,
            textAlign: "center",
            background: "linear-gradient(90deg, #7c3aed 0%, #e11d48 100%)",
          }}
        >
          <Typography
            sx={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "1px",
              color: "#ffffff",
            }}
          >
            ★ {plan.badge}
          </Typography>
        </Box>
      )}

      <Box
        sx={{
          px: 2.5,
          py: 2.5,
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontSize: 12.5,
            fontWeight: 700,
            color: plan.tagColor || "#f35b0b",
            mb: 0.8,
          }}
        >
          {plan.tag}
        </Typography>

        {/* PRICE / ENTERPRISE HEADLINE */}
        {plan.isEnterprise ? (
          <>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: 26,
                fontWeight: 700,
                color: "#151b28",
                mb: 0.3,
              }}
            >
              {plan.headline}
            </Typography>
            {plan.subtext && (
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: 12,
                  color: "#9aa0ab",
                  mb: 2,
                }}
              >
                {plan.subtext}
              </Typography>
            )}
          </>
        ) : (
          <>
            <Typography
              sx={{
                textAlign: "center",
                fontSize: 26,
                fontWeight: 700,
                color: "#151b28",
              }}
            >
              {plan.price}
              <Box
                component="span"
                sx={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#8a8f9c",
                }}
              >
                {" "}
                {plan.unit}
              </Box>
            </Typography>

            {plan.subtext && (
              <Typography
                sx={{
                  textAlign: "center",
                  fontSize: 11,
                  color: "#9aa0ab",
                  mt: 0.5,
                  mb: 2,
                }}
              >
                {plan.subtext}
              </Typography>
            )}
          </>
        )}

        <Button
          fullWidth
          disableElevation
          sx={{
            textTransform: "none",
            fontWeight: 600,
            fontSize: 13.5,
            borderRadius: "10px",
            py: 1,
            mb: 2.5,
            background: getCtaBg(),
            color: "#ffffff",
            "&:hover": {
              background: getCtaHoverBg(),
            },
          }}
        >
          {plan.cta}
        </Button>

        <Box
          component="ul"
          sx={{
            listStyle: "none",
            m: 0,
            p: 0,
            display: "flex",
            flexDirection: "column",
            gap: 0.9,
          }}
        >
          {plan.features.map((feature) => (
            <Box
              key={feature}
              component="li"
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 0.8,
              }}
            >
              <CheckIcon />
              <Typography
                sx={{
                  fontSize: 12,
                  lineHeight: 1.5,
                  color: "#4b5160",
                }}
              >
                {feature}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box
      sx={{
        borderRadius: "16px",
        p: plan.highlighted ? "2px" : 0,
        background: plan.highlighted
          ? "linear-gradient(160deg, #7c3aed 0%, #f35b0b 100%)"
          : "transparent",
        boxShadow: plan.highlighted
          ? "0 20px 45px rgba(124, 58, 237, 0.18)"
          : "0 10px 30px rgba(30, 20, 60, 0.05)",
      }}
    >
      {cardInner}
    </Box>
  );
};

/* =====================================================
   COMPONENT (Pricing + Compare, all in one)
===================================================== */

const PricingSection = () => {
  const [billing, setBilling] = useState("perMinute");
  const currentMode = pricingModes[billing];

  return (
    <>
      {/* =====================================================
          PRICING BLOCK
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

          backgroundImage: `
              radial-gradient(at 15% 20%, rgba(79, 70, 229, 0.16) 0px, transparent 50%),
              radial-gradient(at 85% 10%, rgba(255, 104, 17, 0.14) 0px, transparent 50%),
              radial-gradient(at 50% 60%, rgba(236, 72, 153, 0.08) 0px, transparent 50%),
              radial-gradient(at 90% 80%, rgba(79, 70, 229, 0.10) 0px, transparent 50%)
            `,
        }}
      >
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
        <Box sx={{ width: "100%" }}>
          {/* BADGE */}
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.6,
                px: 1.8,
                py: 0.5,
                borderRadius: "999px",
                bgcolor: "#fdece0",
              }}
            >
              <Typography sx={{ fontSize: 12 }}>🏷️</Typography>
              <Typography
                sx={{ fontSize: 12, fontWeight: 600, color: "#f35b0b" }}
              >
                PRICING
              </Typography>
            </Box>
          </Box>

          {/* HEADING + DESCRIPTION */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: 1.5,
            }}
          >
            <Typography
              component="h2"
              sx={{
                textAlign: "center",
                fontWeight: 700,
                fontSize: { xs: 24, sm: 28, md: 32 },
                m: 0,
              }}
            >
              <Box component="span" sx={{ color: "#4F46E5" }}>
                Start Small,
              </Box>{" "}
              <Box component="span" sx={{ color: "#151b28" }}>
                Scale Every Call.
              </Box>
            </Typography>

            <Typography
              sx={{
                textAlign: "center",
                fontSize: { xs: 15, sm: 17, md: 18 },
                lineHeight: 1.6,
                color: "#6b7280",
                maxWidth: 850,
                mt: 1,
              }}
            >
              Replace separate LLM, STT, TTS and dialer subscriptions with one
              platform. Consolidate your voice AI stack and track exact calling
              costs in real time.
            </Typography>
          </Box>

          {/* BILLING TOGGLE */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: { xs: 2, sm: 3 },
              mt: { xs: 4, sm: 4.5, md: 4 },
              flexWrap: "wrap",
            }}
          >
            <Typography
              sx={{
                color: "#5138dc",
                fontFamily: "Arial, sans-serif",
                fontSize: { xs: "14px", sm: "15px" },
                fontWeight: 600,
                whiteSpace: "nowrap",
                textAlign: { xs: "center", sm: "right" },
              }}
            >
              {currentMode.leftText}
            </Typography>

            <ToggleButtonGroup
              exclusive
              value={billing}
              onChange={(event, value) => {
                if (value !== null) {
                  setBilling(value);
                }
              }}
              sx={{
                height: { xs: "48px", sm: "52px" },
                background: "#e8f8ef",
                border: "1px solid #b9e8cf",
                borderRadius: "28px",
                padding: "4px",
                "& .MuiToggleButtonGroup-grouped": {
                  border: "none !important",
                  margin: 0,
                },
              }}
            >
              {billingTabs.map((item) => (
                <ToggleButton
                  key={item.value}
                  value={item.value}
                  sx={{
                    px: { xs: "14px", sm: "24px" },
                    minWidth: { xs: "95px", sm: "125px" },
                    borderRadius: "24px !important",
                    color: "#17855a",
                    fontFamily: "Arial, sans-serif",
                    fontSize: { xs: "13px", sm: "15px" },
                    fontWeight: 600,
                    textTransform: "none",
                    whiteSpace: "nowrap",
                    "&.Mui-selected": {
                      background: "#fff",
                      color: "#17855a",
                      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                    },
                    "&.Mui-selected:hover": {
                      background: "#fff",
                    },
                    "&:hover": {
                      background: "rgba(255,255,255,0.5)",
                    },
                  }}
                >
                  {item.label}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>

          {/* MODEL BANNER */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Box
              sx={{
                px: 2.5,
                py: 1,
                borderRadius: "10px",
                bgcolor: "#eaf7ef",
                border: "1px solid #b9e8cf",
                maxWidth: 700,
              }}
            >
              <Typography
                sx={{ fontSize: 13, color: "#374151", textAlign: "center" }}
              >
                {currentMode.banner}
              </Typography>
            </Box>
          </Box>

          {/* PLAN CARDS GRID */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
                lg:
                  currentMode.plans.length === 3
                    ? "repeat(3, minmax(0, 1fr))"
                    : "repeat(2, minmax(0, 1fr))",
              },
              gap: 3,
              maxWidth: currentMode.plans.length === 3 ? 1200 : 800,
              mx: "auto",
              mt: 5,
            }}
          >
            {currentMode.plans.map((plan) => (
              <PlanCard key={plan.tag} plan={plan} />
            ))}
          </Box>
        </Box>
      </Box>

      {/* =====================================================
          COMPARE ALL MODELS BLOCK
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

          backgroundImage: `
              radial-gradient(at 15% 20%, rgba(79, 70, 229, 0.16) 0px, transparent 50%),
              radial-gradient(at 85% 10%, rgba(255, 104, 17, 0.14) 0px, transparent 50%),
              radial-gradient(at 50% 60%, rgba(236, 72, 153, 0.08) 0px, transparent 50%),
              radial-gradient(at 90% 80%, rgba(79, 70, 229, 0.10) 0px, transparent 50%)
            `,
        }}
      >
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
        <Box sx={{ width: "100%", maxWidth: 1100 }}>
          {/* HEADING */}
          <Typography
            component="h2"
            sx={{
              textAlign: "center",
              fontWeight: 700,
              fontSize: { xs: 22, sm: 26, md: 28 },
              color: "#151b28",
              m: 0,
            }}
          >
            Compare all models
          </Typography>

          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xs: 13.5, sm: 15 },
              color: "#6b7280",
              mt: 1,
              mb: { xs: 3, sm: 4 },
            }}
          >
            A side-by-side look at what each commercial actually includes.
          </Typography>

          {/* TABLE */}
          <Box
            sx={{
              border: "1px solid #e6e7ec",
              borderRadius: { xs: "10px", md: "14px" },
              overflow: "hidden",
              overflowX: "auto",
              bgcolor: "#ffffff",
              width: "100%",
            }}
          >
            <Box
              component="table"
              sx={{
                width: "100%",
                minWidth: { xs: "650px", md: "700px" },
                borderCollapse: "collapse",
              }}
            >
              {/* HEADER ROW */}
              <Box component="thead">
                <Box component="tr">
                  <Box
                    component="th"
                    sx={{
                      textAlign: "left",
                      px: { xs: 1.5, sm: 2, md: 3 },
                      py: { xs: 1.5, md: 2 },
                      fontSize: { xs: 10.5, sm: 11.5, md: 12.5 },
                      fontWeight: 700,
                      color: "#010202",
                      bgcolor: "#e8f8ef",
                      letterSpacing: { xs: "0.3px", md: "0.5px" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    PARAMETER
                  </Box>

                  <Box
                    component="th"
                    sx={{
                      textAlign: "center",
                      px: { xs: 1.5, sm: 2, md: 3 },
                      py: { xs: 1.5, md: 2 },
                      fontSize: { xs: 10.5, sm: 11.5, md: 12.5 },
                      fontWeight: 700,
                      color: "#010202",
                      bgcolor: "#e8f8ef",
                      letterSpacing: { xs: "0.3px", md: "0.5px" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    MODEL 1
                  </Box>

                  <Box
                    component="th"
                    sx={{
                      textAlign: "center",
                      px: { xs: 1.5, sm: 2, md: 3 },
                      py: { xs: 1.5, md: 2 },
                      fontSize: { xs: 10.5, sm: 11.5, md: 12.5 },
                      fontWeight: 700,
                      color: "#ffffff",
                      background:
                        "linear-gradient(90deg, #7c3aed 0%, #e11d48 100%)",
                      letterSpacing: { xs: "0.3px", md: "0.5px" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    MODEL 2
                  </Box>

                  <Box
                    component="th"
                    sx={{
                      textAlign: "center",
                      px: { xs: 1.5, sm: 2, md: 3 },
                      py: { xs: 1.5, md: 2 },
                      fontSize: { xs: 10.5, sm: 11.5, md: 12.5 },
                      fontWeight: 700,
                      color: "#010202",
                      bgcolor: "#e8f8ef",
                      letterSpacing: { xs: "0.3px", md: "0.5px" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    MODEL 3
                  </Box>

                  <Box
                    component="th"
                    sx={{
                      textAlign: "center",
                      px: { xs: 1.5, sm: 2, md: 3 },
                      py: { xs: 1.5, md: 2 },
                      fontSize: { xs: 10.5, sm: 11.5, md: 12.5 },
                      fontWeight: 700,
                      color: "#010202",
                      bgcolor: "#e8f8ef",
                      letterSpacing: { xs: "0.3px", md: "0.5px" },
                      whiteSpace: "nowrap",
                    }}
                  >
                    MODEL 4
                  </Box>
                </Box>
              </Box>

              {/* BODY ROWS */}
              <Box component="tbody">
                {comparisonRows.map((row, idx) => (
                  <Box
                    component="tr"
                    key={row.parameter}
                    sx={{
                      bgcolor: idx % 2 === 0 ? "#fbfbfd" : "#ffffff",
                      "&:not(:last-of-type)": {
                        borderBottom: "1px solid #eceef2",
                      },
                    }}
                  >
                    <Box
                      component="td"
                      sx={{
                        px: { xs: 1.5, sm: 2, md: 3 },
                        py: { xs: 1.5, md: 2 },
                        fontSize: { xs: 11.5, sm: 12.5, md: 13.5 },
                        fontWeight: 600,
                        color: "#17855a",
                        bgcolor: "#e8f8ef",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {row.parameter}
                    </Box>

                    <Box
                      component="td"
                      sx={{
                        px: { xs: 1.5, sm: 2, md: 3 },
                        py: { xs: 1.5, md: 2 },
                        fontSize: { xs: 11.5, sm: 12.5, md: 13.5 },
                        color: "#374151",
                        textAlign: "center",
                        whiteSpace: "normal",
                      }}
                    >
                      {row.model1}
                    </Box>

                    <Box
                      component="td"
                      sx={{
                        px: { xs: 1.5, sm: 2, md: 3 },
                        py: { xs: 1.5, md: 2 },
                        fontSize: { xs: 11.5, sm: 12.5, md: 13.5 },
                        fontWeight: 600,
                        color: "#151b28",
                        textAlign: "center",
                        bgcolor: "rgba(124, 58, 237, 0.05)",
                        whiteSpace: "normal",
                      }}
                    >
                      {row.model3}
                    </Box>

                    <Box
                      component="td"
                      sx={{
                        px: { xs: 1.5, sm: 2, md: 3 },
                        py: { xs: 1.5, md: 2 },
                        fontSize: { xs: 11.5, sm: 12.5, md: 13.5 },
                        color: "#374151",
                        textAlign: "center",
                        whiteSpace: "normal",
                      }}
                    >
                      {row.model2}
                    </Box>

                    <Box
                      component="td"
                      sx={{
                        px: { xs: 1.5, sm: 2, md: 3 },
                        py: { xs: 1.5, md: 2 },
                        fontSize: { xs: 11.5, sm: 12.5, md: 13.5 },
                        color: "#374151",
                        textAlign: "center",
                        whiteSpace: "normal",
                      }}
                    >
                      {row.model4}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PricingSection;
