import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import AnaSayfa from "./pages/AnaSayfa";
import Kitaplar from "./pages/Kitaplar";
import KitapKaydet from "./pages/KitapKaydet";
import Okunacaklar from "./pages/Okunacaklar";
import Footer from "./components/footer";
import StatisticsPage from "./pages/StatisticsPage";
export default function App() {
  return (
    <div className="bg-custom min-h-screen flex flex-col">
      <Navbar />

      <main className="pt-35 flex-grow flex items-center justify-center">
        <Routes>
          <Route path="/" element={<AnaSayfa />} />
          <Route path="/kitaplar" element={<Kitaplar />} />
          <Route path="/kayıt" element={<KitapKaydet />} />
          <Route path="/okunacaklar" element={<Okunacaklar />} />
          <Route path="/statistics_page" element={<StatisticsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
