import React from "react";
import { Book, Target, Users, BarChart } from "lucide-react";
import KitapCard from "../components/KitapCard"; // yol konumuna göre ayarlayabilirsin

// Örnek dummy kitap verisi
const dummyKitaplar = [
  {
    id: 1,
    ad: "Sefiller",
    yazar: "Victor Hugo",
    puan: 4.8,
    aciklama: "19. yüzyıl Fransası'nda geçen epik bir roman.",
    gorseller: ["https://covers.openlibrary.org/b/id/8228691-L.jpg"],
  },
  {
    id: 2,
    ad: "1984",
    yazar: "George Orwell",
    puan: 4.6,
    aciklama: "Distopik bir gelecekte geçen siyasi bir roman.",
    gorseller: ["https://covers.openlibrary.org/b/id/1535614-L.jpg"],
  },
];

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-b from-zinc-950 to-zinc-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            RafRaf – Kişisel Kütüphaneni Yönet!
          </h1>
          <p className="text-lg md:text-xl mb-8 text-zinc-300">
            Tüm kitapların bir arada. Takip et, oku, puanla.
          </p>
          <div className="flex gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-md text-sm font-medium">
              Hemen Başla
            </button>
            <button className="border border-zinc-600 hover:border-zinc-400 text-white py-2 px-6 rounded-md text-sm font-medium">
              Demo İzle
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://cdn-icons-png.flaticon.com/512/29/29302.png"
            alt="Kitap Rafı"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* Özellikler */}
      <section className="py-20 px-6 md:px-20 bg-zinc-800">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Neden RafRaf?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-zinc-900 border border-zinc-700 p-6 text-center rounded-xl">
            <Book className="w-10 h-10 mx-auto mb-4 text-purple-500" />
            <h3 className="font-bold text-lg mb-2">Kişisel Takip</h3>
            <p className="text-zinc-400 text-sm">
              Okuduğun kitapları kaydet, notlar al, puanla.
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-700 p-6 text-center rounded-xl">
            <Target className="w-10 h-10 mx-auto mb-4 text-purple-500" />
            <h3 className="font-bold text-lg mb-2">Okuma Hedefleri</h3>
            <p className="text-zinc-400 text-sm">
              Haftalık veya aylık hedeflerini belirle ve ilerlemeni gör.
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-700 p-6 text-center rounded-xl">
            <Users className="w-10 h-10 mx-auto mb-4 text-purple-500" />
            <h3 className="font-bold text-lg mb-2">Paylaş</h3>
            <p className="text-zinc-400 text-sm">
              Rafını arkadaşlarınla paylaş, kitaplarını göster.
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-700 p-6 text-center rounded-xl">
            <BarChart className="w-10 h-10 mx-auto mb-4 text-purple-500" />
            <h3 className="font-bold text-lg mb-2">İstatistikler</h3>
            <p className="text-zinc-400 text-sm">
              Yazar, kategori, dil bazında analizler al.
            </p>
          </div>
        </div>
      </section>

      {/* Örnek Kitaplar */}
      <section className="py-20 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Kitap Koleksiyonundan Örnekler
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyKitaplar.map((kitap) => (
            <KitapCard key={kitap.id} kitap={kitap} />
          ))}
        </div>
      </section>
    </div>
  );
}
