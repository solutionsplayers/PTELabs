import React, { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../layout/navbar/Navbar";
import Footer from "../layout/footer/Footer";
import Loader from "../components/Loader/Loader";
import Summerize_Spkoen from "../pages/listening/Summerize_Spkoen";
import Test from "../Test";
const Landing = lazy(() => import("../pages/Landing"));
const Login = lazy(() => import("../pages/login/Login"));
const ContactUs = lazy(() => import("../pages/ContactUs/ContactUs"));
const Read_Aloud = lazy(() => import("../pages/speaking/Read_Aloud"));
const DescribeImage = lazy(() => import("../pages/speaking/DescribeImage"));
const Summerize_text = lazy(() => import("../pages/writting/Summerize_text"));
const Essay = lazy(() => import("../pages/writting/Essay"));
const R_W_FIB = lazy(() => import("../pages/reading/R_W_FIB"));
const Fill_in_Blank = lazy(() => import("../pages/listening/Fill_in_Blank"));
const Mcq_multiple = lazy(() => import("../pages/listening/Mcq_multiple"));
const Mcq_single = lazy(() => import("../pages/listening/Mcq_single"));
const Highlight_summary = lazy(() =>
  import("../pages/listening/Highlight_summary")
);
const Select_missing = lazy(() => import("../pages/listening/Select_missing"));
const Highlight_incorrect = lazy(() =>
  import("../pages/listening/Highlight_incorrect")
);
const MCQ_MA = lazy(() => import("../pages/reading/MCQ_MA"));
const MCQ_SA = lazy(() => import("../pages/reading/MCQ_SA"));
const FIB_DND = lazy(() => import("../pages/reading/FIB_DND"));
const Re_Order = lazy(() => import("../pages/reading/Re_Order"));

const AppRouter = () => {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === "/login";

  return (
    <>
      {!hideNavAndFooter && <Navbar />}
      <Suspense
        fallback={
          <div className="h-[100vh]">
            <Loader />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/read-aloud" element={<Read_Aloud />} />
          <Route path="/describe-image" element={<DescribeImage />} />
          <Route path="/summerize-written-text" element={<Summerize_text />} />
          <Route path="/essay" element={<Essay />} />
          <Route path="/fill-in-blanks-rw" element={<R_W_FIB />} />
          <Route path="/listening/fill-in-blank" element={<Fill_in_Blank />} />
          <Route path="/mcq-multi-select" element={<Mcq_multiple />} />
          <Route path="/mcq-multi-select-2" element={<MCQ_MA />} />
          <Route path="/fill-in-blanks-dnd" element={<FIB_DND />} />
          <Route path="/mcq-single-select" element={<Mcq_single />} />
          <Route path="/mcq-single-select-2" element={<MCQ_SA />} />
          <Route path="/test" element={<Test />} />
          <Route
            path="/highlight-correct-summary"
            element={<Highlight_summary />}
          />
          <Route path="/summerize-spoken-text" element={<Summerize_Spkoen />} />
          <Route path="/select-missing-word" element={<Select_missing />} />
          <Route path="/reading/re-order-paragraph" element={<Re_Order />} />
          <Route
            path="/highlight-incorrect-words"
            element={<Highlight_incorrect />}
          />
        </Routes>
      </Suspense>
      {!hideNavAndFooter && <Footer />}
    </>
  );
};

export default AppRouter;
