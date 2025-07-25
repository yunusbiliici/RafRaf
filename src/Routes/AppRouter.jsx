// src/router/AppRouter.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/Register"; 
import AnaSayfa from "../pages/AnaSayfa";
import Kitaplar from "../pages/Kitaplar";
import KitapKaydet from "../pages/KitapKaydet";
import Okunacaklar from "../pages/Okunacaklar";
import Istatistikler from "../pages/StatisticsPage";

import Loading from "../components/Loading"; // <-- İsteğe bağlı

function PrivateRoute({ children }) {
  const { isSignedIn, isLoaded } = useUser();
  if (!isLoaded) return <Loading />;
  return isSignedIn ? children : <Navigate to="/login" replace />;
}

function PublicRoute({ children }) {
  const { isSignedIn, isLoaded } = useUser();
  if (!isLoaded) return <Loading />;
  return !isSignedIn ? children : <Navigate to="/dashboard" replace />;
}

export default function AppRouter() {
  return (
    <Routes>
      {/* Oturum açılmamış kullanıcılar */}
      <Route
        path="/"
        element={
          <PublicRoute>
            <LandingPage />
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/kayit"
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        }
      />

      {/* Giriş yapmış kullanıcılar */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <AnaSayfa />
          </PrivateRoute>
        }
      />
      <Route
        path="/kitaplar"
        element={
          <PrivateRoute>
            <Kitaplar />
          </PrivateRoute>
        }
      />
      <Route
        path="/kitap-ekle"
        element={
          <PrivateRoute>
            <KitapKaydet />
          </PrivateRoute>
        }
      />
      <Route
        path="/okunacaklar"
        element={
          <PrivateRoute>
            <Okunacaklar />
          </PrivateRoute>
        }
      />
      <Route
        path="/istatistikler"
        element={
          <PrivateRoute>
            <Istatistikler />
          </PrivateRoute>
        }
      />

      {/* Bilinmeyen route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
