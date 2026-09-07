import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Container,
  FormControl,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";

import ContactUs from "./ContactUs";
import AutomateOutreach from "./AutomateOutreach";
import ContactForm from "./ContactForm";
import FAQHome from "./FAQHome";

/* =========================================================
   CREATE SLUG
========================================================= */

export const createSlug = (title = "") => {
  return String(title)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

/* =========================================================
   BLOG DATA
========================================================= */

export const blogData = [
  {
  id: 1,
  date: "2026-07-06",
  image: "https://vibeus-cdn.vibe.pub/blog/vhXh4zssjveGXBU2w1r0okP5dAQbyly3.png",
  title:
    "From Missed Leads to More Sales: How AI Is Building Smarter Customer Journeys",
  description:
    "The best real estate CRM features for high-volume developers include native Meta ad...",
},

  {
  id: 2,
  date: "2026-07-02",
  image:
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
  title:
    "How AI-Powered Sales Automation Is Transforming Lead Engagement and Customer Conversion",
  description:
    "The best real estate CRM features for high-volume developers include native Meta ad...",
},

 {
  id: 3,
  date: "2026-07-01",
  image:
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
  title:
    "How WhatsApp AI Automation Can Transform Customer Engagement",
  description:
    "Higher education lead management requires separating serious applicants from junk...",
},

  {
  id: 4,
  date: "2026-06-30",
  image:
    "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  title:
    "AI Voice Agents: The Future of 24/7 Customer Communication",
  description:
    "When comparing WhatsApp automation vs email marketing for sales, the answer is not...",
},
 {
  id: 5,
  date: "2026-06-27",
  image:
    "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  title:
    "How AI Is Making B2B Lead Qualification Faster and Smarter",
  description:
    "To accurately track sales campaign ROI across WhatsApp and email, businesses...",
},

  {
  id: 6,
  date: "2026-06-26",
  image:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  title:
    "How AI + CRM Integration Can Improve Your Sales Process",
  description:
    "A multi-channel sales sequence is an automated outreach strategy that engages...",
},
  // {
  //   id: 7,
  //   date: "2026-06-26",
  //   image:
  //     "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80",
  //   title: "WhatsApp Business Automation: A Blueprint fo...",
  //   description:
  //     "Leads from your favorite platforms. Conversations on autopilot.",
  // },

  // {
  //   id: 8,
  //   date: "2026-06-25",
  //   image:
  //     "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
  //   title: "Follow-Up Automation for High-Ticket Sales:...",
  //   description:
  //     "High-ticket sales follow-up requires a multi-channel automated strategy...",
  // },

  // {
  //   id: 9,
  //   date: "2026-06-24",
  //   image:
  //     "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
  //   title: "Stop Tool Sprawl: How to Consolidate Your Sales Tec...",
  //   description:
  //     "To consolidate your sales tech stack, bring your communication and automation...",
  // },

  // {
  //   id: 10,
  //   date: "2026-06-24",
  //   image:
  //     "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  //   title: "Why Fast-Growing Teams Are Replacing 3 Tools with...",
  //   description:
  //     "Fast-growing teams are replacing multiple sales tools with one unified platform to...",
  // },

  // {
  //   id: 11,
  //   date: "2026-06-23",
  //   image:
  //     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  //   title: "Sales Automation ROI Calculator: How Much Can...",
  //   description:
  //     "To calculate the ROI of sales automation, subtract the total cost of automation...",
  // },

  // {
  //   id: 12,
  //   date: "2026-06-23",
  //   image:
  //     "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
  //   title: "Traditional CRM vs. Automated Sales...",
  //   description:
  //     "The primary difference between a traditional CRM and an automated sales communication...",
  // },
];

/* =========================================================
   BLOG COMPONENT
========================================================= */

const Blog = () => {
  const navigate = useNavigate();

  /* =======================================================
     CONTACT FORM STATE
  ======================================================= */

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    teamSize: "",
    useCase: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    severity: "success",
    message: "",
  });

  /* =======================================================
     SHOW MESSAGE
  ======================================================= */

  const showMessage = (message, severity = "success") => {
    setSnackbar({
      open: true,
      severity,
      message,
    });
  };

  /* =======================================================
     CLOSE SNACKBAR
  ======================================================= */

  const handleCloseSnackbar = () => {
    setSnackbar((previous) => ({
      ...previous,
      open: false,
    }));
  };

  /* =======================================================
     HANDLE INPUT CHANGE
  ======================================================= */

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: "",
      }));
    }
  };

  /* =======================================================
     VALIDATE FORM
  ======================================================= */

  const validateForm = () => {
    const newErrors = {};

    const fullName = formData.fullName.trim();
    const email = formData.email.trim();
    const phone = formData.phone.trim();
    const company = formData.company.trim();

    const phoneDigits = phone.replace(/\D/g, "");

    if (!fullName) {
      newErrors.fullName = "Full name is required";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!phone) {
      newErrors.phone = "Phone number is required";
    } else if (phoneDigits.length < 10) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!company) {
      newErrors.company = "Company name is required";
    }

    if (!formData.teamSize) {
      newErrors.teamSize = "Please select team size";
    }

    setErrors(newErrors);

    return newErrors;
  };

  /* =======================================================
     SUBMIT FORM
  ======================================================= */

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitted(true);

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      showMessage("Please fill all required fields correctly.", "error");

      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 800);
      });

      console.log("Contact Form Data:", formData);

      showMessage("Your message has been sent successfully!", "success");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        teamSize: "",
        useCase: "",
      });

      setErrors({});
      setSubmitted(false);
    } catch (error) {
      console.error("Contact form error:", error);

      showMessage("Something went wrong. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  /* =======================================================
     STANDARD FIELD STYLE
  ======================================================= */

  const fieldSx = (fieldName) => ({
    width: "100%",

    "& .MuiOutlinedInput-root": {
      height: {
        xs: "46px",
        md: "50px",
      },

      borderRadius: "12px",

      fontSize: {
        xs: "14px",
        md: "16px",
      },

      backgroundColor: "#ffffff",
    },

    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: submitted && errors[fieldName] ? "#ff1f1f" : "#111111",

      borderWidth: submitted && errors[fieldName] ? "2px" : "1px",
    },

    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: submitted && errors[fieldName] ? "#ff1f1f" : "#111111",
    },

    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: submitted && errors[fieldName] ? "#ff1f1f" : "#4b36df",

      borderWidth: "2px",
    },

    "& input::placeholder": {
      color: "#718096",
      opacity: 1,
    },

    "& textarea::placeholder": {
      color: "#718096",
      opacity: 1,
    },

    "& .MuiFormHelperText-root": {
      marginLeft: 0,
      marginTop: "4px",
      fontSize: "13px",
    },
  });

  /* =======================================================
     SELECT STYLE
  ======================================================= */

  const selectSx = {
    width: "100%",

    height: {
      xs: "46px",
      md: "50px",
    },

    borderRadius: "12px",

    fontSize: {
      xs: "14px",
      md: "16px",
    },

    backgroundColor: "#ffffff",

    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#111111",
    },

    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#111111",
    },

    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#4b36df",
      borderWidth: "2px",
    },

    "& .MuiSelect-select": {
      display: "flex",
      alignItems: "center",
      minHeight: "unset",

      paddingLeft: {
        xs: "14px",
        md: "16px",
      },
    },
  };

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
            width: "100%",
            // backgroundColor: "#ffffff",

            // pt: {
            //   xs: 3,
            //   sm: 5,
            //   md: 7,
            // },

            // pb: {
            //   xs: 6,
            //   sm: 8,
            //   md: 9,
            // },
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              px: {
                xs: 2,
                sm: 3,
                md: 4,
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "1100px",
                mx: "auto",
                textAlign: "center",
              }}
            >
              <Typography
                component="h1"
                sx={{
                  fontSize: {
                    xs: "2.2rem",
                    sm: "3rem",
                    md: "2.5rem",
                  },

                  lineHeight: 1.15,
                  fontWeight: 700,
                  color: "#000000",

                  mb: {
                    xs: 2,
                    md: 3,
                  },
                }}
              >
                Resources &{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#4b36df",
                    fontWeight: 700,
                  }}
                >
                  Guides
                </Box>
              </Typography>

              <Typography
                sx={{
                  maxWidth: "1100px",
                  mx: "auto",

                  fontSize: {
                    xs: "16px",
                    sm: "18px",
                    md: "21px",
                  },

                  lineHeight: 1.5,
                  fontWeight: 400,
                  color: "#526b8a",
                  mb: 3,
                }}
              >
                Practical guides on outbound automation, AI calling, WhatsApp
                compliance, and reducing COD returns for D2C brands — written
                for operators, not just marketers.
              </Typography>
            </Box>
          </Container>
          <Box
            sx={{
              width: "100%",

              pb: {
                xs: 7,
                sm: 9,
                md: 12,
              },
            }}
          >
            <Container
              maxWidth="xl"
              sx={{
                px: {
                  xs: 2,
                  sm: 3,
                  md: 4,
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",

                  display: "grid",

                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "repeat(2, minmax(0, 1fr))",
                    md: "repeat(3, minmax(0, 1fr))",
                  },

                  gap: {
                    xs: 2.5,
                    md: 3,
                  },
                }}
              >
                {blogData.map((blog) => (
                  <Box
                    key={blog.id}
                    sx={{
                      width: "100%",

                      display: "flex",

                      backgroundColor: "#ffffff",

                      border: "1px solid #dedede",

                      borderRadius: "18px",

                      overflow: "hidden",

                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",

                      transition: "all 0.3s ease",

                      "&:hover": {
                        transform: "translateY(-5px)",

                        boxShadow: "0 16px 35px rgba(0, 0, 0, 0.12)",
                      },
                    }}
                  >
                    {/* BLOG CARD */}

                    <Box
                      sx={{
                        width: "100%",

                        display: "flex",

                        flexDirection: "column",
                      }}
                    >
                      {/* IMAGE */}

                      <Box
                        sx={{
                          width: "100%",

                          height: {
                            xs: "210px",
                            sm: "220px",
                            md: "245px",
                          },

                          overflow: "hidden",

                          backgroundColor: "#f5f5f5",
                        }}
                      >
                        <Box
                          component="img"
                          src={blog.image}
                          alt={blog.title}
                          loading="lazy"
                          sx={{
                            width: "100%",
                            height: "100%",
                            display: "block",

                            objectFit: "cover",

                            transition: "transform 0.4s ease",

                            "&:hover": {
                              transform: "scale(1.03)",
                            },
                          }}
                        />
                      </Box>

                      {/* CONTENT */}

                      <Box
                        sx={{
                          flex: 1,

                          display: "flex",

                          flexDirection: "column",

                          px: {
                            xs: 3,
                            sm: 3.5,
                            md: 3.5,
                          },

                          py: {
                            xs: 3,
                            sm: 3.5,
                            md: 3.5,
                          },
                        }}
                      >
                        {/* DATE */}

                        <Box
                          sx={{
                            display: "flex",

                            alignItems: "center",

                            gap: 1,

                            mb: 2.2,
                          }}
                        >
                          <Typography
                            component="span"
                            sx={{
                              fontSize: {
                                xs: "20px",
                                md: "21px",
                              },

                              color: "#111111",

                              lineHeight: 1,
                            }}
                          >
                            📅
                          </Typography>

                          <Typography
                            sx={{
                              fontSize: {
                                xs: "15px",
                                md: "17px",
                              },

                              color: "#111111",

                              fontWeight: 400,
                            }}
                          >
                            {blog.date}
                          </Typography>
                        </Box>

                        {/* TITLE */}

                        <Typography
                          component="h2"
                          sx={{
                            fontSize: {
                              xs: "22px",
                              sm: "23px",
                              md: "25px",
                            },

                            lineHeight: 1.35,

                            fontWeight: 700,

                            color: "#050505",

                            mb: 2.2,

                            display: "-webkit-box",

                            WebkitLineClamp: 2,

                            WebkitBoxOrient: "vertical",

                            overflow: "hidden",
                          }}
                        >
                          {blog.title}
                        </Typography>

                        {/* DESCRIPTION */}

                        <Typography
                          sx={{
                            fontSize: {
                              xs: "16px",
                              md: "17px",
                            },

                            lineHeight: 1.55,

                            color: "#718096",

                            mb: 3,

                            display: "-webkit-box",

                            WebkitLineClamp: 2,

                            WebkitBoxOrient: "vertical",

                            overflow: "hidden",
                          }}
                        >
                          {blog.description}
                        </Typography>

                        {/* READ MORE */}

                        <Box
                          sx={{
                            mt: "auto",
                          }}
                        >
                          <Button
                            component={Link}
                            to={`/blog/${createSlug(blog.title)}`}
                            variant="text"
                            endIcon={
                              <Box
                                component="span"
                                sx={{
                                  fontSize: "20px",
                                  lineHeight: 1,
                                }}
                              >
                                →
                              </Box>
                            }
                            sx={{
                              minWidth: "auto",
                              p: 0,

                              color: "#f45116",

                              fontSize: {
                                xs: "16px",
                                md: "18px",
                              },

                              fontWeight: 500,

                              textTransform: "none",

                              "&:hover": {
                                backgroundColor: "transparent",

                                color: "#d83e08",
                              },

                              "& .MuiButton-endIcon": {
                                marginLeft: "8px",
                              },
                            }}
                          >
                            Read More
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>

      <AutomateOutreach />

      <ContactForm />

      <FAQHome />

      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{
            width: "100%",
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Blog;
