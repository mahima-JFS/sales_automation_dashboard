import React from 'react';
import FAQHome from './FAQHome';

import {
  Box,
  Breadcrumbs,
  Container,
  Typography,
  Link,
  Divider,
  Alert,
} from '@mui/material';

import {
  CalendarMonth,
  AccessTime,
  MenuBook,
  ChevronRight,
  WhatsApp,
} from '@mui/icons-material';

import { Link as RouterLink, useParams } from 'react-router-dom';
import { blogData, createSlug } from './Blog';

const BlogDetails = () => {
  const { slug } = useParams();

  const blog = blogData.find((item) => createSlug(item.title) === slug);

  if (!blog) {
    return (
      <Container
        maxWidth='lg'
        sx={{
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          py: 10,
        }}
      >
        <Alert
          severity='error'
          sx={{
            width: '100%',
            maxWidth: '700px',
            mb: 3,
          }}
        >
          Blog article not found.
        </Alert>

        <Link
          component={RouterLink}
          to='/blog'
          underline='none'
          sx={{
            color: '#ff5a1f',
            fontSize: 10,
            fontWeight: 700,
          }}
        >
          ← Back to Blog
        </Link>
      </Container>
    );
  }

  const title = blog.title || 'Untitled Blog';
  const date = blog.date || '';
  const description = blog.description || '';
  const image = blog.image || '';

  const formatDate = (value) => {
    if (!value) return '';

    const parsedDate = new Date(value);

    if (Number.isNaN(parsedDate.getTime())) {
      return value;
    }

    return parsedDate.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const readTime = '10 min read';

  // ============================================================
  // 6 BLOG SECTIONS
  // ============================================================

 const getArticleData = (blogId) => {
  const articles = {
    // =========================================================
    // BLOG 1
    // =========================================================
    1: {
      contents: [
        {
          id: "section-1",
          title: "The Real Cost of a Missed Lead",
        },
        {
          id: "section-2",
          title: "One AI System, Multiple Customer Touchpoints",
        },
        {
          id: "section-3",
          title: "Turn Conversations Into Qualified Opportunities",
        },
        {
          id: "section-4",
          title: "Make Follow-Ups Automatic",
        },
        {
          id: "section-5",
          title: "Recover Revenue and Reduce Sales Losses",
        },
        {
          id: "section-6",
          title: "AI + Humans: The Future of Sales",
        },
      ],

      sections: [
        {
          id: "section-1",
          title: "The Real Cost of a Missed Lead",
          paragraphs: [
            "A lead that does not receive a quick response may move to a competitor.",
            "Sales teams also spend significant time on repetitive activities such as:",
          ],
          bullets: [
            "Calling new leads",
            "Asking basic qualification questions",
            "Sending reminders",
            "Updating CRM records",
            "Following up with inactive customers",
            "Confirming orders",
            "Answering frequently asked questions",
          ],
          afterParagraphs: [
            "AI can automate many of these activities while keeping human sales representatives involved when their expertise is needed.",
            "Customers do not always enquire during business hours. AI agents can respond to enquiries outside normal working hours, answer common questions, collect requirements, and qualify prospects.",
          ],
        },

        {
          id: "section-2",
          title: "One AI System, Multiple Customer Touchpoints",
          paragraphs: [
            "Customers communicate through different channels. Some prefer WhatsApp, some email, and others prefer phone calls.",
            "A modern AI sales platform can connect these channels into one customer journey.",
            "For example:",
          ],
          highlights: [
            "Website Enquiry → WhatsApp Response → AI Qualification → Voice Follow-Up → CRM Update → Sales Handoff",
          ],
          afterParagraphs: [
            "This creates a connected experience instead of treating every interaction as a separate activity.",
            "AI can provide continuous engagement with customers and help businesses manage conversations across multiple channels.",
          ],
        },

        {
          id: "section-3",
          title: "Turn Conversations Into Qualified Opportunities",
          paragraphs: [
            "Not every lead has the same value.",
            "AI can ask relevant questions and identify whether a prospect is ready to buy, needs more information, or is not currently a good fit.",
            "Based on the responses, leads can be:",
          ],
          highlights: [
            "Hot → Immediate Sales Follow-Up",
            "Warm → Automated Nurturing",
            "Cold → Long-Term Follow-Up",
          ],
          afterParagraphs: [
            "This helps sales teams spend their time where it matters most.",
            "AI can also understand customer requirements and collect important information before the lead reaches a salesperson.",
          ],
        },

        {
          id: "section-4",
          title: "Make Follow-Ups Automatic",
          paragraphs: [
            "One of the biggest sales problems is inconsistent follow-up.",
            "A salesperson may be busy, a lead may be forgotten, or a follow-up date may be missed.",
            "AI automation can manage follow-ups based on predefined rules.",
            "For example:",
          ],
          highlights: [
            "Day 1 → Initial Response",
            "Day 3 → Follow-Up",
            "Day 7 → Reminder",
            "Customer Replies → Human Sales Handoff",
            "Customer Converts → Automation Stops",
          ],
          afterParagraphs: [
            "This creates a structured and consistent sales process.",
            "AI voice agents can also support interactive conversations by understanding customer responses and continuing the discussion based on the context.",
          ],
          bullets: [
            "Lead qualification",
            "Appointment confirmation",
            "Order verification",
            "Customer surveys",
            "Follow-ups",
            "Service reminders",
          ],
        },

        {
          id: "section-5",
          title: "Recover Revenue and Reduce Sales Losses",
          paragraphs: [
            "Customer acquisition can be expensive. That's why businesses should also focus on customers who have already shown buying intent.",
            "For e-commerce businesses, abandoned carts are a good example.",
            "A customer may add a product to their cart but leave before payment.",
            "Instead of losing that opportunity, automation can trigger a personalized recovery journey:",
          ],
          highlights: [
            "Abandoned Cart → Reminder → Customer Engagement → Question Answered → Checkout → Purchase",
          ],
          afterParagraphs: [
            "The objective is simple: bring interested customers back into the buying journey.",
            "For businesses selling through Cash on Delivery, failed deliveries can increase logistics costs.",
            "AI automation can help by communicating with customers before dispatch and following up when delivery issues occur.",
          ],
          bullets: [
            "COD order verification",
            "Customer confirmation",
            "Delivery reminders",
            "NDR follow-ups",
            "Customer communication",
            "Prepaid conversion campaigns",
          ],
          finalParagraphs: [
            "Better communication can help businesses reduce avoidable returns and improve delivery success.",
          ],
        },

        {
          id: "section-6",
          title: "AI + Humans: The Future of Sales",
          paragraphs: [
            "International sales require businesses to handle different languages, time zones, and customer expectations.",
            "AI can provide continuous engagement with international prospects.",
            "An exporter can receive an enquiry from another country while the local sales team is offline. AI can respond, collect requirements, qualify the buyer, and schedule a follow-up.",
          ],
          highlights: [
            "Global Leads + 24/7 AI Engagement + Human Sales Team = Scalable International Sales",
          ],
          afterParagraphs: [
            "The most effective approach is not AI versus humans. It is AI + humans.",
            "AI can manage repetitive and high-volume activities, while sales professionals focus on:",
          ],
          bullets: [
            "Negotiations",
            "Relationship building",
            "Complex requirements",
            "Enterprise deals",
            "Closing important opportunities",
          ],
          finalParagraphs: [
            "The future sales process is becoming increasingly automated and intelligent.",
            "Instead of Lead → Salesperson → Manual Follow-Up → Manual CRM Update, businesses can move toward:",
          ],
          finalHighlights: [
            "Lead → AI Engagement → Qualification → Scoring → Automated Follow-Up → Human Handoff → Conversion",
          ],
          conclusion: [
            "AI-powered customer engagement is no longer limited to chatbots. It can support the complete customer journey—from the first enquiry to qualification, follow-up, purchase, delivery, and retention.",
            "For businesses looking to scale without increasing repetitive manual work, AI automation provides a smarter way to engage customers, improve response times, recover lost opportunities, and support sales teams.",
            "The next generation of sales is not about working harder. It is about automating smarter.",
          ],
        },
      ],
    },

    // =========================================================
    // BLOG 2
    // =========================================================
    2: {
      contents: [
        {
          id: "section-1",
          title: "What Is AI-Powered Sales Automation?",
        },
        {
          id: "section-2",
          title: "Why Lead Follow-Up Matters",
        },
        {
          id: "section-3",
          title: "Keep Your Complete Lead History in One Place",
        },
        {
          id: "section-4",
          title: "AI for B2B and WhatsApp Engagement",
        },
        {
          id: "section-5",
          title: "Recover Carts, Reduce COD Losses and Sell Globally",
        },
        {
          id: "section-6",
          title: "From Lead Generation to Conversion",
        },
      ],

      sections: [
        {
          id: "section-1",
          title: "What Is AI-Powered Sales Automation?",
          paragraphs: [
            "AI-powered sales automation combines artificial intelligence, automation, CRM, WhatsApp, email, and voice technology to manage customer interactions automatically.",
            "Instead of depending entirely on sales teams for every enquiry, businesses can use AI to:",
          ],
          bullets: [
            "Capture and qualify leads",
            "Answer customer questions",
            "Send personalized follow-ups",
            "Make AI voice calls",
            "Manage WhatsApp conversations",
            "Update CRM records",
            "Recover abandoned carts",
            "Verify COD orders",
            "Follow up on failed deliveries",
            "Support international customers",
          ],
          afterParagraphs: [
            "The result is a faster and more consistent customer experience.",
            "Modern AI automation platforms are designed for business teams as well as technical teams.",
            "Users can create campaigns, define qualification questions, configure follow-ups, and set automation rules without writing code.",
          ],
        },

        {
          id: "section-2",
          title: "Why Lead Follow-Up Matters",
          paragraphs: [
            "A lead can lose interest if a business takes too long to respond or forgets to follow up.",
            "AI automation can instantly respond to new enquiries and continue follow-ups according to predefined rules.",
            "When a lead responds, converts, opts out, or reaches a configured limit, the workflow can automatically stop or hand the conversation over to a sales representative.",
            "This allows sales teams to focus more on high-value conversations and closing deals.",
          ],
        },

        {
          id: "section-3",
          title: "Keep Your Complete Lead History in One Place",
          paragraphs: [
            "Sales teams often work across multiple channels. This can make it difficult to understand what happened with a lead.",
            "An AI-powered platform can bring interactions together, including:",
          ],
          bullets: [
            "WhatsApp conversations",
            "Voice calls",
            "Emails",
            "Follow-ups",
            "Lead qualification",
            "Notes",
            "Activities",
            "Lead scores",
            "Customer responses",
          ],
          afterParagraphs: [
            "With the complete interaction history available in one place, sales representatives can understand the customer before starting the next conversation.",
          ],
        },

        {
          id: "section-4",
          title: "AI for B2B and WhatsApp Engagement",
          paragraphs: [
            "For B2B businesses, manually qualifying every enquiry can consume significant time.",
            "AI can ask predefined qualification questions and identify important information such as:",
          ],
          bullets: [
            "Business requirements",
            "Budget",
            "Purchase timeline",
            "Company information",
            "Decision-making authority",
            "Product or service requirements",
          ],
          afterParagraphs: [
            "Leads can then be scored and automatically routed to the appropriate sales team.",
            "WhatsApp has become an important customer communication channel for many businesses.",
            "AI-powered WhatsApp automation can help businesses:",
          ],
          additionalBullets: [
            "Respond to enquiries",
            "Send approved campaign messages",
            "Answer frequently asked questions",
            "Follow up with prospects",
            "Share product information",
            "Capture customer requirements",
            "Transfer conversations to human agents",
          ],
          finalParagraphs: [
            "Businesses should always follow applicable WhatsApp policies, consent requirements, and messaging best practices. No platform can guarantee that an account will never face restrictions.",
          ],
        },

        {
          id: "section-5",
          title: "Recover Carts, Reduce COD Losses and Sell Globally",
          paragraphs: [
            "E-commerce businesses lose potential revenue when customers add products to their cart but leave without completing the purchase.",
            "AI automation can trigger a recovery journey such as:",
          ],
          highlights: [
            "Cart Abandoned → Reminder → AI Follow-Up → Customer Assistance → Checkout",
          ],
          afterParagraphs: [
            "The system can answer questions, provide relevant information, and send the customer back to the checkout process.",
            "COD orders can create challenges when customers are unavailable, unreachable, or unwilling to accept the shipment.",
            "AI automation can support the COD journey by:",
          ],
          bullets: [
            "Verifying orders",
            "Confirming customer intent",
            "Sending reminders",
            "Following up on failed deliveries",
            "Handling NDR communication",
            "Encouraging suitable customers to choose prepaid payment",
          ],
          finalParagraphs: [
            "International businesses need to communicate with customers across different countries and time zones.",
            "AI-powered sales automation can provide 24/7 customer engagement, helping exporters:",
          ],
          additionalBullets: [
            "Respond to international enquiries",
            "Qualify overseas buyers",
            "Communicate in multiple languages",
            "Follow up across time zones",
            "Schedule meetings",
            "Capture buyer requirements",
            "Update CRM records",
            "Route qualified opportunities to sales teams",
          ],
        },

        {
          id: "section-6",
          title: "From Lead Generation to Conversion",
          paragraphs: [
            "The biggest advantage of AI sales automation is that it connects multiple stages of the customer journey.",
            "A typical workflow can look like:",
          ],
          highlights: [
            "Lead Generated → Instant Response → AI Qualification → Lead Scoring → Automated Follow-Up → Sales Handoff → Conversion",
          ],
          afterParagraphs: [
            "For e-commerce:",
          ],
          additionalHighlights: [
            "Cart Abandoned → Reminder → AI Engagement → Checkout → Purchase",
          ],
          finalParagraphs: [
            "For COD:",
          ],
          finalHighlights: [
            "COD Order → Verification → Confirmation → Dispatch → NDR Follow-Up → Delivery",
          ],
          conclusion: [
            "AI does not have to replace sales teams. Instead, it can handle repetitive tasks while human teams focus on conversations that require experience, negotiation, and relationship building.",
            "The ideal model is: AI handles volume. Humans handle value.",
            "Businesses that combine automation with human expertise can respond faster, follow up more consistently, and create a better customer experience.",
            "AI-powered sales automation is changing how businesses manage leads, customers, and sales operations.",
            "The goal is simple: respond faster, follow up smarter, and convert more opportunities.",
          ],
        },
      ],
    },

    // =========================================================
    // BLOG 3
    // =========================================================
    3: {
      contents: [
        {
          id: "section-1",
          title: "What Is WhatsApp AI Automation?",
        },
        {
          id: "section-2",
          title: "Respond to Customers and Qualify Leads",
        },
        {
          id: "section-3",
          title: "Make Follow-Ups and Conversations Smarter",
        },
        {
          id: "section-4",
          title: "Connect WhatsApp With Your CRM",
        },
        {
          id: "section-5",
          title: "WhatsApp for E-commerce and COD",
        },
        {
          id: "section-6",
          title: "AI + Human Handoff and the Future",
        },
      ],

      sections: [
        {
          id: "section-1",
          title: "What Is WhatsApp AI Automation?",
          paragraphs: [
            "WhatsApp AI Automation combines AI, WhatsApp, and automated workflows to manage customer conversations with less manual effort.",
            "Businesses can use it to:",
          ],
          bullets: [
            "Respond to customer enquiries",
            "Qualify leads",
            "Send follow-ups",
            "Answer frequently asked questions",
            "Share product or service information",
            "Confirm appointments",
            "Verify orders",
            "Support customers",
            "Route important conversations to sales teams",
          ],
          afterParagraphs: [
            "The goal is simple: deliver the right response at the right time.",
          ],
        },

        {
          id: "section-2",
          title: "Respond to Customers and Qualify Leads",
          paragraphs: [
            "Customers often expect quick responses.",
            "A delayed reply can result in a customer losing interest or contacting a competitor.",
            "With AI-powered WhatsApp automation, new enquiries can receive an immediate response, even outside normal business hours.",
            "Sales teams don't need to manually ask the same basic questions to every lead.",
            "AI can collect important information such as:",
          ],
          highlights: [
            "Customer Enquiry → AI Response → Qualification → Sales Team",
          ],
          bullets: [
            "Customer requirement",
            "Budget",
            "Location",
            "Product interest",
            "Purchase timeline",
            "Business details",
          ],
          afterParagraphs: [
            "Based on the conversation, leads can be categorized and routed to the appropriate team.",
            "This allows salespeople to focus on qualified opportunities instead of spending time on repetitive questions.",
          ],
        },

        {
          id: "section-3",
          title: "Make Follow-Ups and Conversations Smarter",
          paragraphs: [
            "Many potential customers don't convert after the first conversation.",
            "They may need additional information, time to make a decision, or a reminder.",
            "WhatsApp AI automation can create structured follow-up journeys.",
            "Automation doesn't have to mean sending the same message to everyone.",
            "AI can use available customer information and conversation context to create more relevant responses.",
          ],
          highlights: [
            "Day 1: Initial response",
            "Day 3: Follow-up",
            "Day 7: Reminder",
            "Customer replies: Salesperson takes over",
            "Customer converts: Automation stops",
          ],
          afterParagraphs: [
            "Businesses can configure the rules according to their sales process.",
            "For example, a customer asking about a particular product can receive information related specifically to that product rather than a generic message.",
            "This creates a more personalized customer experience.",
          ],
        },

        {
          id: "section-4",
          title: "Connect WhatsApp With Your CRM",
          paragraphs: [
            "When WhatsApp conversations are connected with CRM systems, businesses can maintain a complete customer record.",
            "Teams can track:",
          ],
          bullets: [
            "Conversations",
            "Lead status",
            "Follow-ups",
            "Sales activities",
            "Customer requirements",
            "Lead scores",
            "Conversion status",
          ],
          afterParagraphs: [
            "This means the sales team doesn't have to search through different platforms to understand what happened with a customer.",
          ],
        },

        {
          id: "section-5",
          title: "WhatsApp for E-commerce and COD",
          paragraphs: [
            "WhatsApp AI automation can also support e-commerce businesses.",
            "It can be used for:",
          ],
          bullets: [
            "Order confirmation",
            "Delivery updates",
            "Product enquiries",
            "Abandoned-cart recovery",
            "COD verification",
            "Customer support",
            "Post-purchase communication",
          ],
          afterParagraphs: [
            "For example:",
          ],
          highlights: [
            "Cart Abandoned → WhatsApp Reminder → Customer Question → AI Response → Checkout",
          ],
          finalParagraphs: [
            "This gives businesses another opportunity to recover potential sales.",
            "Cash-on-delivery businesses can use WhatsApp automation to confirm customer orders before dispatch.",
            "A simple workflow can be:",
          ],
          finalHighlights: [
            "COD Order → WhatsApp Confirmation → Customer Confirms → Dispatch",
          ],
          conclusion: [
            "If the customer does not confirm, the system can trigger an appropriate follow-up based on the business rules.",
            "This can help businesses reduce avoidable failed deliveries and RTO-related costs.",
          ],
        },

        {
          id: "section-6",
          title: "AI + Human Handoff and the Future",
          paragraphs: [
            "AI should not handle every conversation alone.",
            "When a customer has a complex question or a high-value requirement, the conversation can be transferred to a human representative.",
            "The ideal process is:",
          ],
          highlights: [
            "AI Handles Routine Conversations → Human Handles Complex Conversations",
          ],
          afterParagraphs: [
            "This gives customers the speed of automation with the expertise of a real sales representative when needed.",
            "Businesses should use WhatsApp automation responsibly.",
            "Important practices include:",
          ],
          bullets: [
            "Follow applicable WhatsApp policies",
            "Use appropriate customer consent",
            "Respect opt-out requests",
            "Avoid spam-like messaging",
            "Use approved templates where required",
            "Monitor message quality",
          ],
          finalParagraphs: [
            "No platform can guarantee that a WhatsApp number will never face restrictions, but responsible implementation can help reduce unnecessary risk.",
            "WhatsApp AI automation is moving businesses from manual communication to intelligent customer engagement.",
            "Instead of waiting for a salesperson to respond to every message, businesses can create automated journeys that operate around the clock.",
          ],
          finalHighlights: [
            "More conversations. Faster responses. Smarter follow-ups. Better customer experiences.",
          ],
          conclusion: [
            "WhatsApp is more than a messaging platform. With AI automation, it can become an important part of a company's sales, marketing, customer support, and e-commerce strategy.",
            "From lead qualification and automated follow-ups to order verification and abandoned-cart recovery, WhatsApp AI automation can help businesses manage customer interactions at scale.",
            "The future of customer engagement is faster, smarter, and more personalized—and AI is helping make it possible.",
            "With [YourBrand], businesses can automate customer engagement, qualify leads, manage follow-ups, and connect conversations with their sales process.",
          ],
        },
      ],
    },

    // =========================================================
    // BLOG 4
    // =========================================================
    4: {
      contents: [
        {
          id: "section-1",
          title: "What Is an AI Voice Agent?",
        },
        {
          id: "section-2",
          title: "24/7 Customer Communication",
        },
        {
          id: "section-3",
          title: "Automate High-Volume Calls",
        },
        {
          id: "section-4",
          title: "Natural and Multilingual Conversations",
        },
        {
          id: "section-5",
          title: "AI Voice for Sales and E-commerce",
        },
        {
          id: "section-6",
          title: "Human Handoff, CRM and the Future",
        },
      ],

      sections: [
        {
          id: "section-1",
          title: "What Is an AI Voice Agent?",
          paragraphs: [
            "An AI Voice Agent is an intelligent virtual agent that can communicate with customers through phone calls.",
            "It can understand customer responses, answer questions, collect information, and perform predefined actions based on the conversation.",
            "Businesses can use AI Voice Agents for:",
          ],
          bullets: [
            "Lead qualification",
            "Sales follow-ups",
            "Appointment confirmation",
            "Order verification",
            "Customer support",
            "Surveys",
            "Payment reminders",
            "Delivery confirmation",
            "Feedback collection",
          ],
        },

        {
          id: "section-2",
          title: "24/7 Customer Communication",
          paragraphs: [
            "Your customers don't always call during business hours.",
            "An AI Voice Agent can handle conversations outside normal working hours, allowing businesses to engage customers whenever they need assistance.",
            "For example:",
          ],
          highlights: [
            "Customer Enquiry → AI Call → Requirement Captured → Lead Qualified → Sales Team Notified",
          ],
          afterParagraphs: [
            "This helps businesses respond faster without requiring employees to work around the clock.",
          ],
        },

        {
          id: "section-3",
          title: "Automate High-Volume Calls",
          paragraphs: [
            "Making hundreds or thousands of repetitive calls manually can take significant time.",
            "AI Voice Agents can handle high-volume calling workflows for activities such as:",
          ],
          bullets: [
            "Lead qualification",
            "Customer verification",
            "Order confirmation",
            "Appointment reminders",
            "Follow-ups",
          ],
          afterParagraphs: [
            "Human agents can then focus on complex conversations and high-value customers.",
          ],
        },

        {
          id: "section-4",
          title: "Natural and Multilingual Conversations",
          paragraphs: [
            "Modern AI voice technology is designed to provide more natural conversations than traditional automated IVR systems.",
            "Depending on the configuration, an AI agent can understand customer responses, maintain conversation context, and respond accordingly.",
            "This creates a more interactive experience instead of simply playing a recorded message.",
            "Businesses serving customers across different regions often need multilingual communication.",
            "AI Voice Agents can support multiple languages, depending on the selected voice and technology configuration.",
            "This can be particularly useful for businesses serving:",
          ],
          bullets: [
            "Different Indian states",
            "Multiple regional markets",
            "International customers",
            "Multilingual B2B buyers",
          ],
        },

        {
          id: "section-5",
          title: "AI Voice for Sales and E-commerce",
          paragraphs: [
            "Sales teams often spend a large amount of time calling leads and asking basic questions.",
            "AI can automate the initial qualification process by asking questions about:",
          ],
          bullets: [
            "Customer requirements",
            "Budget",
            "Location",
            "Purchase timeline",
            "Product interest",
            "Business requirements",
          ],
          afterParagraphs: [
            "Qualified leads can then be transferred to the sales team.",
          ],
          highlights: [
            "AI qualifies the lead. Your salesperson closes the opportunity.",
          ],
          finalParagraphs: [
            "AI Voice Agents can also support e-commerce operations.",
            "For example:",
          ],
          finalHighlights: [
            "New COD Order → AI Verification Call → Customer Confirmation → Order Processing",
          ],
          conclusion: [
            "They can also support delivery reminders, customer feedback, and follow-ups.",
            "This can help businesses improve customer communication throughout the order journey.",
          ],
        },

        {
          id: "section-6",
          title: "Human Handoff, CRM and the Future",
          paragraphs: [
            "AI doesn't need to handle every conversation.",
            "When a customer requires a human representative, the system can transfer or route the conversation according to the configured workflow.",
            "This creates a simple model:",
          ],
          highlights: [
            "AI Handles Routine Tasks → Human Handles Complex Conversations",
          ],
          afterParagraphs: [
            "Integrating AI voice calls with a CRM allows businesses to maintain a complete customer history.",
            "Call outcomes, lead status, qualification information, notes, and follow-up actions can be recorded in the CRM.",
            "Sales teams can therefore understand the customer's previous interaction before continuing the conversation.",
            "AI Voice Agents can help businesses achieve:",
          ],
          bullets: [
            "Faster customer response",
            "24/7 engagement",
            "Lower repetitive workload",
            "Consistent communication",
            "Scalable calling operations",
            "Faster lead qualification",
            "Better customer follow-up",
          ],
          finalParagraphs: [
            "The biggest advantage is scalability: businesses can increase customer interactions without increasing manual calling effort at the same rate.",
            "AI Voice Agents are becoming an important part of modern customer engagement.",
            "They can help businesses move from traditional manual calling to intelligent, automated conversations.",
            "The future is not about removing human interaction. It is about using AI for speed and scale, while humans focus on relationships, decisions, and complex conversations.",
            "AI Voice Agents are transforming how businesses communicate with customers.",
            "From lead qualification and sales follow-ups to order verification and customer support, AI can help businesses manage repetitive voice interactions more efficiently.",
            "With 24/7 availability, multilingual capabilities, automated workflows, and CRM integration, AI Voice Agents can become a powerful part of a modern sales and customer-service strategy.",
            "With [YourBrand], businesses can automate voice interactions, qualify leads, follow up with customers, and connect AI conversations with their sales workflow.",
          ],
        },
      ],
    },

    // =========================================================
    // BLOG 5
    // =========================================================
    5: {
      contents: [
        {
          id: "section-1",
          title: "What Is AI Lead Qualification?",
        },
        {
          id: "section-2",
          title: "Respond to Leads and Ask the Right Questions",
        },
        {
          id: "section-3",
          title: "Identify High-Intent Leads",
        },
        {
          id: "section-4",
          title: "Automate Follow-Ups and Connect CRM",
        },
        {
          id: "section-5",
          title: "Handle High-Volume B2B Enquiries",
        },
        {
          id: "section-6",
          title: "AI + Human Sales Teams",
        },
      ],

      sections: [
        {
          id: "section-1",
          title: "What Is AI Lead Qualification?",
          paragraphs: [
            "AI lead qualification uses artificial intelligence to understand incoming leads and determine their potential based on predefined business criteria.",
            "Instead of treating every lead equally, AI can analyze information such as:",
          ],
          bullets: [
            "Customer requirements",
            "Company size",
            "Budget",
            "Location",
            "Purchase timeline",
            "Product interest",
            "Previous interactions",
            "Engagement level",
          ],
          afterParagraphs: [
            "Based on this information, leads can be categorized as Hot, Warm, or Cold.",
          ],
        },

        {
          id: "section-2",
          title: "Respond to Leads and Ask the Right Questions",
          paragraphs: [
            "Speed matters in B2B sales.",
            "When a potential customer submits an enquiry, AI can respond immediately through channels such as WhatsApp, website chat, email, or voice.",
            "This helps businesses avoid delays and keeps prospects engaged while their interest is high.",
            "AI can automatically ask relevant questions based on the customer's requirement.",
            "For example:",
          ],
          bullets: [
            "What product or service are you interested in?",
            "What is your expected quantity?",
            "What is your budget range?",
            "When are you planning to purchase?",
            "Which location do you operate from?",
          ],
          afterParagraphs: [
            "The answers can help the system understand whether the lead is worth immediate sales attention.",
          ],
        },

        {
          id: "section-3",
          title: "Identify High-Intent Leads",
          paragraphs: [
            "Not every enquiry has the same level of buying intent.",
            "AI can analyze customer responses and interactions to identify high-intent prospects.",
            "For example:",
          ],
          highlights: [
            "Hot Lead: Ready to discuss pricing or schedule a meeting.",
            "Warm Lead: Interested but needs more information or time.",
            "Cold Lead: Low engagement or early-stage interest.",
          ],
          afterParagraphs: [
            "Sales teams can then focus their time on leads that have a higher possibility of conversion.",
          ],
        },

        {
          id: "section-4",
          title: "Automate Follow-Ups and Connect CRM",
          paragraphs: [
            "Many B2B leads are lost because follow-ups are missed.",
            "AI can automatically schedule and send follow-ups based on customer responses and previous interactions.",
          ],
          highlights: [
            "Hi Rahul, you recently enquired about our enterprise plan. Would you like to schedule a quick discussion with our sales team?",
          ],
          afterParagraphs: [
            "This keeps the conversation active without requiring salespeople to manually track every lead.",
            "AI becomes even more powerful when connected with a CRM.",
            "Customer conversations, qualification responses, lead scores, follow-ups, and sales activities can be recorded automatically.",
            "This gives sales teams a complete view of the customer journey.",
            "Instead of searching through emails, WhatsApp conversations, and spreadsheets, the team can access relevant information from one place.",
          ],
        },

        {
          id: "section-5",
          title: "Handle High-Volume B2B Enquiries",
          paragraphs: [
            "Large businesses may receive hundreds or thousands of enquiries every month.",
            "Manually qualifying every lead can put significant pressure on sales teams.",
            "AI can handle the initial qualification process at scale and identify which leads require human attention.",
            "This allows sales representatives to spend more time on:",
          ],
          bullets: [
            "Product demonstrations",
            "Negotiations",
            "Meetings",
            "Proposals",
            "Closing deals",
          ],
        },

        {
          id: "section-6",
          title: "AI + Human Sales Teams",
          paragraphs: [
            "AI does not have to replace salespeople.",
            "The best approach is often AI + Human Collaboration.",
            "AI can handle repetitive tasks such as:",
          ],
          bullets: [
            "Initial responses",
            "Lead qualification",
            "Basic questions",
            "Follow-ups",
            "Lead scoring",
            "CRM updates",
          ],
          afterParagraphs: [
            "When a lead becomes sales-ready, the conversation can be transferred to a human sales representative.",
            "This creates a smoother customer experience while reducing the workload for the sales team.",
            "Businesses can use AI to achieve:",
          ],
          additionalBullets: [
            "Faster lead response",
            "Better lead prioritization",
            "Automated qualification",
            "Consistent follow-ups",
            "Reduced manual work",
            "Better CRM data",
            "Higher sales productivity",
            "Improved customer experience",
            "Scalable lead management",
          ],
          finalParagraphs: [
            "B2B sales is becoming more automated, data-driven, and customer-focused.",
            "AI can help businesses move from simply collecting leads to understanding which leads matter most and what action should happen next.",
            "With AI-powered qualification, businesses can respond faster, follow up consistently, and help sales teams focus on opportunities with real buying potential.",
            "AI is making B2B lead qualification faster, smarter, and more scalable.",
            "By combining instant communication, intelligent qualification, automated follow-ups, lead scoring, and CRM integration, businesses can create a more efficient sales process.",
            "The goal is simple: identify the right leads, engage them at the right time, and help sales teams convert more opportunities.",
            "With [YourBrand]'s AI-powered automation solutions, businesses can automate lead qualification, customer engagement, follow-ups, and sales workflows—helping teams save time and focus on growth.",
          ],
        },
      ],
    },

    // =========================================================
    // BLOG 6
    // =========================================================
    6: {
      contents: [
        {
          id: "section-1",
          title: "What Is AI + CRM Integration?",
        },
        {
          id: "section-2",
          title: "Automatically Capture Leads",
        },
        {
          id: "section-3",
          title: "Understand Conversations and Score Leads",
        },
        {
          id: "section-4",
          title: "Never Miss a Follow-Up",
        },
        {
          id: "section-5",
          title: "Automate CRM and Sales Assistance",
        },
        {
          id: "section-6",
          title: "AI + Human Collaboration and the Future",
        },
      ],

      sections: [
        {
          id: "section-1",
          title: "What Is AI + CRM Integration?",
          paragraphs: [
            "AI + CRM integration connects artificial intelligence with your existing customer relationship management system.",
            "AI can collect and understand customer interactions from different channels and automatically update relevant information in the CRM.",
            "This can include:",
          ],
          bullets: [
            "Lead details",
            "Customer conversations",
            "Call history",
            "Email interactions",
            "WhatsApp conversations",
            "Lead qualification responses",
            "Follow-up dates",
            "Lead scores",
            "Customer requirements",
            "Sales activities",
          ],
          afterParagraphs: [
            "Instead of manually entering every detail, the system can automate much of the process.",
            "CRM systems contain important information about leads, customers, conversations, activities, and sales opportunities.",
            "When communication and CRM systems are disconnected, sales representatives may need to manually update records and switch between multiple tools.",
          ],
        },

        {
          id: "section-2",
          title: "Automatically Capture Leads",
          paragraphs: [
            "Leads can come from websites, advertisements, WhatsApp, social media, email, forms, and other channels.",
            "AI can help capture these enquiries and automatically create or update lead records in the CRM.",
            "This reduces manual data entry and helps ensure that enquiries are not missed.",
          ],
        },

        {
          id: "section-3",
          title: "Understand Conversations and Score Leads",
          paragraphs: [
            "AI can analyze customer conversations and identify important information.",
            "For example, it can understand:",
          ],
          bullets: [
            "What the customer needs",
            "Which product they are interested in",
            "Their budget",
            "Purchase timeline",
            "Questions or concerns",
            "Level of buying interest",
          ],
          afterParagraphs: [
            "This information can then be used to support the sales process.",
            "Not every lead has the same value.",
            "AI can analyze customer behavior and interactions to help assign a lead score.",
            "For example:",
          ],
          highlights: [
            "Hot Lead: High buying intent and ready for sales discussion.",
            "Warm Lead: Interested but requires additional information or follow-up.",
            "Cold Lead: Low engagement or early-stage interest.",
          ],
          finalParagraphs: [
            "Sales teams can prioritize their efforts accordingly.",
          ],
        },

        {
          id: "section-4",
          title: "Never Miss a Follow-Up",
          paragraphs: [
            "Follow-up is one of the most important parts of sales.",
            "AI can monitor lead activity and help trigger follow-ups automatically.",
            "For example, if a customer requests a quotation but does not respond, the system can schedule a follow-up message.",
            "If a customer asks for a product demo, the CRM can create a task for the sales representative.",
            "This helps create a consistent sales process.",
          ],
        },

        {
          id: "section-5",
          title: "Automate CRM and Sales Assistance",
          paragraphs: [
            "A CRM integrated with AI can provide a consolidated view of customer interactions.",
            "Sales representatives can quickly understand:",
          ],
          bullets: [
            "Previous conversations",
            "Calls made",
            "Emails sent",
            "WhatsApp messages",
            "Previous enquiries",
            "Follow-up status",
            "Customer requirements",
          ],
          afterParagraphs: [
            "This means salespeople don't need to ask the customer the same questions repeatedly.",
            "Sales teams often spend a significant amount of time updating CRM records.",
            "AI can help automate activities such as:",
          ],
          additionalBullets: [
            "Updating lead status",
            "Adding conversation summaries",
            "Recording customer requirements",
            "Creating follow-up tasks",
            "Updating lead scores",
            "Recording interaction history",
          ],
          finalParagraphs: [
            "This allows salespeople to spend more time selling and less time doing administrative work.",
            "AI can also assist sales representatives during the sales process.",
            "It can help suggest:",
          ],
          finalBullets: [
            "What to say next",
            "When to follow up",
            "Which product to recommend",
            "Which leads require immediate attention",
            "How to respond to common customer questions",
          ],
          conclusion: [
            "This makes the CRM more than just a database—it becomes an intelligent sales assistant.",
          ],
        },

        {
          id: "section-6",
          title: "AI + Human Collaboration and the Future",
          paragraphs: [
            "Customers expect fast and relevant communication.",
            "With AI + CRM integration, businesses can respond faster while maintaining customer context.",
            "For example, when a customer contacts the company again, the system can recognize their previous interaction and provide relevant information to the sales or support team.",
            "This creates a smoother and more personalized customer experience.",
            "AI should support sales teams, not replace them.",
            "AI can handle repetitive activities such as:",
          ],
          bullets: [
            "Lead capture",
            "Initial responses",
            "Qualification",
            "Follow-ups",
            "Data entry",
            "Conversation summaries",
          ],
          afterParagraphs: [
            "Human sales representatives can focus on:",
          ],
          additionalBullets: [
            "Negotiation",
            "Relationship building",
            "Complex questions",
            "Product demonstrations",
            "Closing deals",
          ],
          finalParagraphs: [
            "This creates an efficient combination of automation and human expertise.",
            "Businesses can benefit from:",
          ],
          finalBullets: [
            "Faster lead response",
            "Better lead management",
            "Automated follow-ups",
            "Improved CRM data",
            "Higher sales productivity",
            "Better customer visibility",
            "Reduced manual work",
            "More personalized communication",
            "Improved sales team efficiency",
          ],
          conclusion: [
            "Traditional CRM systems mainly store customer information.",
            "The next generation of CRM systems will do much more.",
            "With AI integration, CRM platforms can become intelligent systems that understand customer behavior, recommend actions, automate communication, and help sales teams make better decisions.",
            "The result is a more proactive and efficient sales process.",
            "AI + CRM integration can transform the way businesses manage leads and customer relationships.",
            "From automatically capturing leads to understanding conversations, scoring opportunities, managing follow-ups, and assisting sales teams, AI can bring greater intelligence and automation into the CRM.",
            "The goal is simple: Less manual work. Better customer engagement. Smarter sales decisions.",
            "With [YourBrand]'s AI and CRM automation solutions, businesses can connect customer interactions, sales workflows, lead management, and follow-ups in one intelligent system—helping teams work smarter and grow faster.",
          ],
        },
      ],
    },
  };

  return articles[blogId] || articles[1];
};
const articleData = getArticleData(blog.id);
  const recentPosts = blogData
    .filter((item) => item.id !== blog.id)
    .slice(0, 6);

  const getImageUrl = (imageUrl) => {
    if (!imageUrl) {
      return '';
    }

    return String(imageUrl).trim();
  };

  return (
    <Box
      component='section'
      sx={{
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',

        pt: { xs: 3, sm: 5, md: 7 },
        px: { xs: 2, sm: 3 },
        pb: { xs: 2, sm: 3, md: 3 },

        backgroundColor: '#FDFDFF',

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
      {/* Background Texture */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E\")",
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          width: '100%',
          color: '#07182f',
        }}
      >
        {/* ======================================================
            HERO SECTION
        ====================================================== */}

        <Container
          maxWidth={false}
          sx={{
            maxWidth: '1400px',
            mx: 'auto',
            px: { xs: 2, sm: 4, md: 6 },
            pb: { xs: 5, md: 8 },
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '-10%',
              left: '-5%',
              width: '500px',
              height: '500px',
              borderRadius: '50%',
              background:
                'radial-gradient(circle, rgba(255,90,31,0.06) 0%, rgba(255,90,31,0) 70%)',
              zIndex: 0,
            }}
          />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                md: '1fr 1fr',
              },
              gap: {
                xs: 5,
                md: 7,
              },
              alignItems: 'center',
              position: 'relative',
              zIndex: 1,
            }}
          >
            {/* LEFT SIDE */}

            <Box>
              <Box
                sx={{
                  display: 'inline-block',
                  bgcolor: '#ffe0d2',
                  color: '#ff5a1f',
                  fontSize: 13,
                  fontWeight: 700,
                  px: 2,
                  py: 0.6,
                  borderRadius: '20px',
                  mb: 2.5,
                }}
              >
                Sales Automation
              </Box>

              <Typography
                component='h1'
                sx={{
                  fontSize: {
                    xs: 28,
                    sm: 34,
                    md: 42,
                    lg: 46,
                  },
                  lineHeight: 1.15,
                  fontWeight: 800,
                  letterSpacing: '-1.5px',
                  color: '#050505',
                  mb: 3,
                }}
              >
                {title}
              </Typography>

              {description && (
                <Typography
                  sx={{
                    fontSize: {
                      xs: 15,
                      md: 18,
                    },
                    lineHeight: 1.7,
                    color: '#555',
                    mb: 4,
                    maxWidth: '480px',
                  }}
                >
                  {description}
                </Typography>
              )}

              <Divider
                sx={{
                  mb: 3,
                  borderColor: '#eee',
                }}
              />

              {/* META */}

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <CalendarMonth
                      sx={{
                        fontSize: 19,
                        color: '#777',
                      }}
                    />

                    <Typography
                      sx={{
                        fontSize: 14,
                        color: '#777',
                      }}
                    >
                      {formatDate(date)}
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                    }}
                  >
                    <AccessTime
                      sx={{
                        fontSize: 19,
                        color: '#777',
                      }}
                    />

                    <Typography
                      sx={{
                        fontSize: 14,
                        color: '#777',
                      }}
                    >
                      {readTime}
                    </Typography>
                  </Box>
                </Box>

                {/* SHARE */}

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: '50%',
                      border: '1px solid #eee',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      '&:hover': {
                        borderColor: '#ff5a1f',
                      },
                    }}
                  >
                    <WhatsApp
                      sx={{
                        fontSize: 17,
                        color: '#25D366',
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* RIGHT IMAGE */}

            <Box
              sx={{
                width: '100%',
                height: {
                  xs: 280,
                  sm: 360,
                  md: 460,
                },
                overflow: 'hidden',
                borderRadius: '18px',
                backgroundColor: '#f3f4f6',
              }}
            >
              {image ? (
                <Box
                  component='img'
                  src={getImageUrl(image)}
                  alt={title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                />
              ) : (
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography color='text.secondary'>
                    No image available
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
        </Container>

        {/* ======================================================
            ARTICLE + CONTENTS
        ====================================================== */}

        <Container
          maxWidth={false}
          sx={{
            maxWidth: '1400px',
            mx: 'auto',
            px: {
              xs: 2,
              sm: 3,
              md: 5,
            },
            py: {
              xs: 5,
              md: 8,
            },
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                lg: '350px 1fr',
              },
              gap: {
                xs: 4,
                lg: 5,
              },
              alignItems: 'start',
            }}
          >
            {/* ==================================================
                CONTENTS
            ================================================== */}

            <Box
              sx={{
                border: '1px solid #dedede',
                borderRadius: '24px',
                backgroundColor: '#fafafa',
                p: {
                  xs: 3,
                  md: 4,
                },
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 58,
                    height: 58,
                    borderRadius: '16px',
                    backgroundColor: '#ffe0d2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <MenuBook
                    sx={{
                      color: '#ff5a1f',
                      fontSize: 30,
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontSize: 25,
                      fontWeight: 800,
                      color: '#111',
                    }}
                  >
                    Contents
                  </Typography>

                  <Typography
                    sx={{
                      color: '#555',
                      fontSize: 15,
                    }}
                  >
                    {articleData.contents.length} sections
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ mb: 2 }} />

              {articleData.contents.map((item, index) => {
                const itemId = item.id || `section-${index + 1}`;

                return (
                  <Box
                    key={itemId}
                    component='a'
                    href={`#${itemId}`}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1.5,
                      py: 1.6,
                      textDecoration: 'none',
                      color: '#697386',
                      cursor: 'pointer',

                      '&:hover': {
                        color: '#ff5a1f',
                      },
                    }}
                  >
                    <Typography
                      component='span'
                      sx={{
                        color: '#ff5a1f',
                        fontSize: 20,
                        lineHeight: 1,
                      }}
                    >
                      ›
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: 15,
                        lineHeight: 1.45,
                        fontWeight: 600,
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                );
              })}
            </Box>

            {/* ==================================================
                ARTICLE
            ================================================== */}

            <Box
              sx={{
                border: '1px solid #dedede',
                borderRadius: '24px',
                backgroundColor: '#fafafa',
                p: {
                  xs: 3,
                  sm: 4,
                  md: 5,
                },

                height: {
                  lg: 'calc(110vh - 150px)',
                },

                overflowY: {
                  lg: 'auto',
                },

                overflowX: 'hidden',
              }}
            >
              <Typography
                component='h2'
                sx={{
                  fontSize: {
                    xs: 20,
                    sm: 22,
                    md: 25,
                  },
                  lineHeight: 1.25,
                  fontWeight: 800,
                  color: '#111',
                  mb: 3,
                }}
              >
                {title}
              </Typography>

              {/* DESCRIPTION */}

              {description && (
                <Typography
                  sx={{
                    fontSize: {
                       xs: 16,
                       sm: 17,
                       md: 20,
                    },
                    lineHeight: 1.65,
                    color: '#555',
                    mb: 4,
                  }}
                >
                  {description}
                </Typography>
              )}

              {/* ==================================================
                  6 ARTICLE SECTIONS
              ================================================== */}

              {articleData.sections.map((section) => (
                <Box
                  key={section.id}
                  id={section.id}
                  sx={{
                    scrollMarginTop: '100px',
                    mb: 5,
                  }}
                >
                  <Typography
                    component='h3'
                    sx={{
                      fontSize: {
                     xs: 16,
                     sm: 17,
                     md: 20,
                      },
                      lineHeight: 1.3,
                      fontWeight: 800,
                      color: '#111',
                      mb: 2,
                    }}
                  >
                    {section.title}
                  </Typography>

                  {section.paragraphs.map((paragraph, index) => (
                    <Typography
                      key={index}
                      component='p'
                      sx={{
                        fontSize: {
                            xs: 16,
                            sm: 17,
                            md: 20,
                        },
                        lineHeight: 1.7,
                        color: '#222',
                        mb: 2.5,
                      }}
                    >
                      {paragraph}
                    </Typography>
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
        </Container>

        {/* ======================================================
            RECENT POSTS
        ====================================================== */}

        <Container
          maxWidth={false}
          sx={{
            maxWidth: '1400px',
            mx: 'auto',
            px: {
              xs: 2,
              sm: 3,
              md: 5,
            },
            pb: 8,
          }}
        >
          <Box
            sx={{
              border: '1px solid #dedede',
              borderRadius: '24px',
              backgroundColor: '#fafafa',
              p: {
                xs: 3,
                md: 4,
              },
            }}
          >
            <Typography
              sx={{
                fontSize: 26,
                fontWeight: 800,
                color: '#111',
                mb: 3,
              }}
            >
              Recent Posts
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  md: '1fr 1fr',
                },
                columnGap: 6,
              }}
            >
              {recentPosts.map((item) => {
                const itemTitle = item.title || 'Untitled Blog';
                const itemSlug = createSlug(itemTitle);

                return (
                  <Box
                    key={item.id}
                    component={RouterLink}
                    to={`/blog/${itemSlug}`}
                    sx={{
                      display: 'block',
                      textDecoration: 'none',
                      color: '#111',
                      py: 2.5,

                      '&:hover .recent-title': {
                        color: '#ff5a1f',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 1.5,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: 20,
                          lineHeight: 1,
                          color: '#ff5a1f',
                        }}
                      >
                        ›
                      </Typography>

                      <Box>
                        <Typography
                          className='recent-title'
                          sx={{
                            fontSize: {
                              xs: 15,
                              sm:15,
                              md: 20,
                            },
                            lineHeight: 1.45,
                            fontWeight: 500,
                            transition: '0.2s',
                          }}
                        >
                          {itemTitle}
                        </Typography>

                        <Typography
                          sx={{
                            mt: 1,
                            fontSize: 15,
                            color: '#555',
                          }}
                        >
                          {formatDate(item.date)}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Container>

        <FAQHome />
      </Box>
    </Box>
  );
};

export default BlogDetails;