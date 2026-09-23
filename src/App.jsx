import React, {
  useState,
  lazy,
  Suspense,
} from "react";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";

import "./index.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/Background";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

import ProtectedRoute from "./components/ProtectedRoute";

/* =========================
   LAZY IMPORTS
========================= */

const Portofolio = lazy(
  () => import("./Pages/Portofolio")
);

const ContactPage = lazy(
  () => import("./Pages/Contact")
);

const ProjectDetails = lazy(
  () => import("./components/ProjectDetail")
);

const WelcomeScreen = lazy(
  () => import("./Pages/WelcomeScreen")
);

const NotFoundPage = lazy(
  () => import("./Pages/404")
);

/* =========================
   LANDING PAGE
========================= */

const LandingPage = ({
  showWelcome,
  setShowWelcome,
}) => {
  return (
    <div className="relative min-h-screen">

      {/* =========================
          WELCOME SCREEN
      ========================= */}

      <AnimatePresence mode="wait">
        {showWelcome && (
          <Suspense fallback={null}>
            <WelcomeScreen
              onLoadingComplete={() =>
                setShowWelcome(false)
              }
            />
          </Suspense>
        )}
      </AnimatePresence>

      {/* =========================
          MAIN WEBSITE
      ========================= */}

      {!showWelcome && (
        <div
          className="
            relative
            z-10
            flex
            min-h-screen
            flex-col
          "
        >
          <Navbar />

          <main className="flex-1">
            <Home />

            <About />

            <Suspense
              fallback={
                <div className="h-20" />
              }
            >
              <Portofolio />
              <ContactPage />
            </Suspense>
          </main>

          <Footer />
        </div>
      )}
    </div>
  );
};

/* =========================
   PROJECT PAGE LAYOUT
========================= */

const ProjectPageLayout = () => {
  return (
    <div className="relative min-h-screen flex flex-col">

      <main className="relative z-10 flex-1 w-full">
        <Suspense
          fallback={
            <div className="min-h-[70vh] w-full flex items-center justify-center">
              <div
                className="
                  w-8
                  h-8
                  rounded-full
                  border-2
                  border-[#F04470]/20
                  border-t-[#F04470]
                  animate-spin
                "
              />
            </div>
          }
        >
          <ProjectDetails />
        </Suspense>
      </main>

      {/* FOOTER PALING ATAS */}
      <div className="relative z-20 w-full">
        <Footer />
      </div>

    </div>
  );
};

/* =========================
   APP
========================= */

function App() {
  const [showWelcome, setShowWelcome] =
    useState(true);

  return (
    <HelmetProvider>

      {/* =========================
          GLOBAL BACKGROUND
          
          Hanya satu background
          untuk seluruh aplikasi
      ========================= */}

      <AnimatedBackground />

      {/* =========================
          ROUTER
      ========================= */}

      <BrowserRouter>

        <Routes>

          {/* =========================
              PUBLIC / HOME
          ========================= */}

          <Route
            path="/"
            element={
              <LandingPage
                showWelcome={showWelcome}
                setShowWelcome={setShowWelcome}
              />
            }
          />

          {/* =========================
              PROJECT DETAILS
          ========================= */}

          <Route
            path="/project/:slug"
            element={
              <ProjectPageLayout />
            }
          />

          {/* =========================
              LOGIN
          ========================= */}

          <Route
            path="/login"
            element={<Login />}
          />

          {/* =========================
              ADMIN
          ========================= */}

          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* =========================
              404
          ========================= */}

          <Route
            path="*"
            element={
              <Suspense fallback={null}>
                <NotFoundPage />
              </Suspense>
            }
          />

        </Routes>

      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;