import { Routes, Route } from "react-router-dom";

// Website Pages
import Home from "../pages/Website/Home";
import ContactUs from "../pages/Website/ContactUs";
import Blog from "../pages/Website/Blog";
import Pricing from "../pages/Website/Pricing";
import Features from "../pages/Website/Features";
import Comparisons from "../pages/Website/Comparisons";
import BookDemo from "../pages/Website/BookDemo";
import FeatureAIAgent from "../pages/Website/FeatureAIAgent";
import WhatappAutomation from "../pages/Website/WhatappAutomation";
import EmailOutreach from "../pages/Website/EmailOutreach";
import BlogDetails from "../pages/Website/BlogDetails";
import WhatsAppRedirect from '../components/WhatsappRedirect';


// Auth
import Login from "../Login/Login";
import ComparisonsDetails from "../pages/Website/ComparisonsDetails";

// import LeadSources from "../pages/LeadSources/LeadSources";
// import Automation from "../pages/Automation/Automation";
// import Email from "../pages/Email/Email";
// import WhatsApp from "../pages/WhatsApp/WhatsApp";
// import AICalls from "../pages/AICalls/AICalls";
// import FollowUps from "../pages/FollowUps/FollowUps";
// import Analytics from "../pages/Analytics/Analytics";
// import Settings from "../pages/Settings/Settings";

const AppRoutes = () => {
  return (
    <Routes>
      {/* LOGIN - NO HEADER / FOOTER */}
      <Route path="/login" element={<Login />} />

      {/* WEBSITE PAGES */}
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/features" element={<Features />} />
      <Route path="/comparisons" element={<Comparisons />} />
      <Route path="/book-a-demo" element={<BookDemo />} />
<Route path="/whatsapp" element={<WhatsAppRedirect />} />
      <Route path="/feature/ai-calling-agent" element={<FeatureAIAgent />} />

      <Route
        path="/feature/whatsapp-automation"
        element={<WhatappAutomation />}
      />

      <Route path="/feature/email-outreach" element={<EmailOutreach />} />

      <Route path="/blog/:slug" element={<BlogDetails />} />
      <Route>
        <Route index element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/features" element={<Features />} />
        <Route path="/comparisons" element={<Comparisons />} />
        <Route path="/book-a-demo" element={<BookDemo />} />
        <Route path="/feature/ai-calling-agent" element={<FeatureAIAgent />} />
        <Route
          path="/feature/whatsapp-automation"
          element={<WhatappAutomation />}
        />
        <Route path="/feature/email-outreach" element={<EmailOutreach />} />
        <Route path="/blog/:slug"element={<BlogDetails />}/>
<Route
  path="/comparisons/jfs-vs-wati"
  element={<ComparisonsDetails />}
/>




      </Route>
      {/* Main Dashboard Layout */}
      {/* <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />

        <Route path="leads" element={<Leads />} />
      </Route> */}
    </Routes>
  );
};

export default AppRoutes;
