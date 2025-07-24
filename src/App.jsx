import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import AnaSayfa from './pages/AnaSayfa';
import Kitaplar from './pages/Kitaplar';
import Kayıt from './pages/Kayıt';
import Okunacaklar from './pages/Okunacaklar';
import Favoriler from './pages/Favoriler';
import Footer from './components/footer';
export default function App() {
  return (
    <div className="bg-custom min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-35 flex-grow flex items-center justify-center">
        <Routes>
          <Route path='/' element={<AnaSayfa />} />
          <Route path='/kitaplar' element={<Kitaplar />} />
          <Route path='/kayıt' element={<Kayıt />} />
          <Route path='/okunacaklar' element={<Okunacaklar />} />
          <Route path='/favoriler' element={<Favoriler />} />
        </Routes>

      </main>
      <Footer />
    </div>
  );
}
