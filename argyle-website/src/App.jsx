import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './components/ThemeProvider';
import { PageTransition } from './components/PageTransition';
import Layout from './components/Layout';
import Home from './pages/Home';
import ResourceMap from './pages/ResourceMap';
import GetHelp from './pages/GetHelp';
import PartnerPortal from './pages/PartnerPortal';
import About from './pages/About';
import ScrollToTop from './components/ScrollToTop';

// App content component with light transitions
function AppContent() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Layout />}>
                    <Route index element={
                        <PageTransition mode="fade">
                            <Home />
                        </PageTransition>
                    } />
                    <Route path="about" element={
                        <PageTransition mode="fade">
                            <About />
                        </PageTransition>
                    } />
                    <Route path="resource-map" element={
                        <PageTransition mode="fade">
                            <ResourceMap />
                        </PageTransition>
                    } />
                    <Route path="get-help" element={
                        <PageTransition mode="fade">
                            <GetHelp />
                        </PageTransition>
                    } />
                    <Route path="partner-portal" element={
                        <PageTransition mode="fade">
                            <PartnerPortal />
                        </PageTransition>
                    } />
                </Route>
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <ErrorBoundary>
            <ThemeProvider defaultTheme="light">
                <Router>
                    <ScrollToTop />
                    <AppContent />
                </Router>
            </ThemeProvider>
        </ErrorBoundary>
    );
}

export default App;
