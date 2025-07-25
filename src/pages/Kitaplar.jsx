import React, { useState } from "react";
import KitapCard from "../components/KitapCard";
import { dummyKitap } from "../assets/dummyKitap";

const turler = [
    "Tümü",
    "Roman",
    "Bilim Kurgu",
    "Tarih",
    "Biyografi",
    "Kişisel Gelişim",
    "Çocuk",
    "Felsefe",
    "Diğer",
];

const KitapListesi = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortType, setSortType] = useState("puan-desc");
    const [turFilter, setTurFilter] = useState("Tümü");
    const [page, setPage] = useState(1);
    const PAGE_SIZE = 8;

    // Kategorisi olmayan kitaplar için default "Diğer"
    // Not: dummyKitap içinde kategori yok, istersen ekleyebilirsin.
    const kitaplarWithKategori = dummyKitap.map((kitap) => ({
        ...kitap,
        kategori: kitap.kategori || "Diğer",
    }));

    // Filtreleme + arama
    const filtered = kitaplarWithKategori.filter((kitap) => {
        if (turFilter !== "Tümü" && kitap.kategori !== turFilter) return false;
        if (
            kitap.ad.toLowerCase().includes(searchTerm.toLowerCase()) ||
            kitap.yazar.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
            return true;
        }
        return false;
    });

    // Sıralama
    const sorted = [...filtered].sort((a, b) => {
        if (sortType === "puan-desc") return b.puan - a.puan;
        if (sortType === "puan-asc") return a.puan - b.puan;
        if (sortType === "ad-az") return a.ad.localeCompare(b.ad);
        if (sortType === "ad-za") return b.ad.localeCompare(a.ad);
        return 0;
    });

    // Sayfalama
    const totalPages = Math.ceil(sorted.length / PAGE_SIZE);
    const pagedKitaplar = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

    // Sayfa fonksiyonları
    const goPrev = () => setPage((p) => Math.max(1, p - 1));
    const goNext = () => setPage((p) => Math.min(totalPages, p + 1));

    return (
        <div className="px-6 py-6 min-h-screen max-w-7xl mx-auto">
            <h1 className="text-white text-3xl font-bold mb-6 mt-4">Kitaplar</h1>

            {/* Arama, filtre, sıralama */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                <input
                    type="text"
                    placeholder="Kitap adı veya yazar ara..."
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setPage(1);
                    }}
                    className="w-full sm:w-64 px-3 py-2 rounded-md border border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                />

                <select
                    value={turFilter}
                    onChange={(e) => {
                        setTurFilter(e.target.value);
                        setPage(1);
                    }}
                    className="w-full sm:w-44 px-3 py-2 rounded-md border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                >
                    {turler.map((tur) => (
                        <option key={tur} value={tur}>
                            {tur}
                        </option>
                    ))}
                </select>

                <select
                    value={sortType}
                    onChange={(e) => {
                        setSortType(e.target.value);
                        setPage(1);
                    }}
                    className="w-full sm:w-56 px-3 py-2 rounded-md border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-600 transition"
                >
                    <option value="puan-desc">Puan (yüksekten düşüğe)</option>
                    <option value="puan-asc">Puan (düşükten yükseğe)</option>
                    <option value="ad-az">Kitap adı (A'dan Z'ye)</option>
                    <option value="ad-za">Kitap adı (Z'den A'ya)</option>
                </select>
            </div>

            {/* Kartlar grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">
                {pagedKitaplar.length === 0 ? (
                    <p className="text-gray-400 col-span-full text-center mt-20">
                        Aradığınız kriterlere uygun kitap bulunamadı.
                    </p>
                ) : (
                    pagedKitaplar.map((kitap) => (
                        <KitapCard key={kitap.id} kitap={kitap} />
                    ))
                )}
            </div>

            {/* Sayfa kontrol */}
            <div className="flex justify-center items-center gap-4 mt-10">
                <button
                    onClick={goPrev}
                    disabled={page === 1}
                    className={`px-4 py-2 rounded-md font-semibold transition ${page === 1
                        ? "bg-gray-700 cursor-not-allowed"
                        : "bg-purple-600 hover:bg-purple-500"
                        } text-white`}
                >
                    Önceki
                </button>
                <span className="text-white font-medium">
                    {page} / {totalPages}
                </span>
                <button
                    onClick={goNext}
                    disabled={page === totalPages}
                    className={`px-4 py-2 rounded-md font-semibold transition ${page === totalPages
                        ? "bg-gray-700 cursor-not-allowed"
                        : "bg-purple-600 hover:bg-purple-500"
                        } text-white`}
                >
                    Sonraki
                </button>
            </div>
        </div>
    );
};

export default KitapListesi;
