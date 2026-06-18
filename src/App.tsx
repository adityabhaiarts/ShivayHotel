/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './components/Layout';

// Placeholder Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Rooms } from './pages/Rooms';
import { Restaurant } from './pages/Restaurant';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { BookingPage } from './pages/BookingPage';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="restaurant" element={<Restaurant />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contact" element={<Contact />} />
            <Route path="booking" element={<BookingPage />} />
          </Route>
        </Routes>
        <FloatingActions />
      </BrowserRouter>
    </HelmetProvider>
  );
}

