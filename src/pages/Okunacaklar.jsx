import React, { useEffect, useState } from "react";

const dummyOkunacaklar = [
    {
        id: 1,
        baslik: "Dune",
        yazar: "Frank Herbert"
    },
    {
        id: 2,
        baslik: "1984",
        yazar: "George Orwell"
    },
    {
        id: 3,
        baslik: "Sefiller",
        yazar: "Victor Hugo"
    }
];

const Okunacaklar = () => {
    const [okunacaklar, setOkunacaklar] = useState([]);
    const [arama, setArama] = useState("");

    useEffect(() => {
        // localStorage'da okunacaklar yoksa dummy veriyi kaydet
        const savedList = JSON.parse(localStorage.getItem("okunacaklar"));
        if (!savedList || savedList.length === 0) {
            localStorage.setItem("okunacaklar", JSON.stringify(dummyOkunacaklar));
            setOkunacaklar(dummyOkunacaklar);
        } else {
            setOkunacaklar(savedList);
        }
    }, []);

    const handleRemove = (kitapId) => {
        const yeniListe = okunacaklar.filter((kitap) => kitap.id !== kitapId);
        setOkunacaklar(yeniListe);
        localStorage.setItem("okunacaklar", JSON.stringify(yeniListe));
    };

    const handleMarkAsRead = (kitap) => {
        const yeniOkunacaklar = okunacaklar.filter((k) => k.id !== kitap.id);
        setOkunacaklar(yeniOkunacaklar);
        localStorage.setItem("okunacaklar", JSON.stringify(yeniOkunacaklar));

        const kitaplar = JSON.parse(localStorage.getItem("kitaplar")) || [];
        const kitapZatenVarMi = kitaplar.some((k) => k.id === kitap.id);

        if (!kitapZatenVarMi) {
            kitaplar.push(kitap);
            localStorage.setItem("kitaplar", JSON.stringify(kitaplar));
        }
    };

    const filtrelenmisListe = okunacaklar.filter((kitap) =>
        kitap.baslik && typeof kitap.baslik === "string" && kitap.baslik.toLowerCase().includes(arama.toLowerCase())
    );

    return (
        <div className="min-h-screen p-8 text-white">
            <h1 className="text-4xl font-bold mb-6 text-center">📚 Okuma Listem</h1>

            <input
                type="text"
                placeholder="Kitap ara..."
                value={arama}
                onChange={(e) => setArama(e.target.value)}
                className="mb-8 w-full max-w-md mx-auto block px-4 py-2 rounded-lg text-white"
            />

            {filtrelenmisListe.length === 0 ? (
                <p className="text-center text-lg text-gray-300">
                    Liste boş veya eşleşen kitap yok.
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtrelenmisListe.map((kitap) => (
                        <div
                            key={kitap.id}
                            className="bg-white/20 p-6 rounded-xl shadow-md backdrop-blur-md hover:shadow-purple-500/40 transition duration-300"
                        >
                            <h2 className="text-2xl font-semibold mb-2">{kitap.baslik}</h2>
                            <p className="text-sm text-gray-200 mb-4">{kitap.yazar}</p>

                            <div className="flex gap-4">
                                <button
                                    onClick={() => handleRemove(kitap.id)}
                                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-white text-sm"
                                >
                                    Kaldır
                                </button>

                                <button
                                    onClick={() => handleMarkAsRead(kitap)}
                                    className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white text-sm"
                                >
                                    Okundu olarak işaretle
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Okunacaklar;
