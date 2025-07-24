import React, { useState } from "react";

const kategoriler = [
    "Roman",
    "Bilim Kurgu",
    "Tarih",
    "Biyografi",
    "Kişisel Gelişim",
    "Çocuk",
    "Felsefe",
    "Diğer"
];

const diller = [
    "Türkçe",
    "İngilizce",
    "Almanca",
    "Fransızca",
    "İspanyolca",
    "Diğer"
];

function KitapOlustur() {
    const [form, setForm] = useState({
        kitapAdi: "",
        yazar: "",
        yayimYili: "",
        isbn: "",
        kategori: "",
        aciklama: "",
        sayfaSayisi: "",
        dil: "",
        puan: 0,
        okumaListesinde: false
    });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");

    const validate = () => {
        const newErrors = {};
        if (!form.kitapAdi.trim()) newErrors.kitapAdi = "Kitap adı zorunludur.";
        if (!form.yazar.trim()) newErrors.yazar = "Yazar adı zorunludur.";
        if (!form.yayimYili) newErrors.yayimYili = "Yayım yılı zorunludur.";
        else if (
            isNaN(form.yayimYili) ||
            Number(form.yayimYili) < 1900 ||
            Number(form.yayimYili) > new Date().getFullYear()
        )
            newErrors.yayimYili = `Yayım yılı 1900 ile ${new Date().getFullYear()} arasında olmalı.`;
        if (!form.isbn.trim()) newErrors.isbn = "ISBN zorunludur.";
        else if (!/^\d{10}(\d{3})?$/.test(form.isbn)) newErrors.isbn = "ISBN 10 veya 13 haneli olmalı.";
        if (!form.kategori) newErrors.kategori = "Kategori seçilmelidir.";
        if (!form.sayfaSayisi) newErrors.sayfaSayisi = "Sayfa sayısı zorunludur.";
        else if (isNaN(form.sayfaSayisi) || Number(form.sayfaSayisi) <= 0)
            newErrors.sayfaSayisi = "Sayfa sayısı pozitif bir sayı olmalı.";
        if (!form.dil) newErrors.dil = "Dil seçilmelidir.";
        return newErrors;
    };

    const handleChange = (e) => {
        if (e.target.type === "checkbox") {
            setForm({ ...form, [e.target.name]: e.target.checked });
        } else {
            setForm({ ...form, [e.target.name]: e.target.value });
        }
        setErrors({ ...errors, [e.target.name]: undefined });
        setSuccess("");
    };

    const handleStarClick = (puan) => {
        setForm({ ...form, puan });
        setSuccess("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            setSuccess("");
            return;
        }
        setSuccess("Kitap başarıyla kaydedildi!");
        setForm({
            kitapAdi: "",
            yazar: "",
            yayimYili: "",
            isbn: "",
            kategori: "",
            aciklama: "",
            sayfaSayisi: "",
            dil: "",
            puan: 0,
            okumaListesinde: false
        });
        setErrors({});
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-6 mb-12 bg-gray-900 rounded-lg shadow-lg text-white">
            <h2 className="text-3xl font-bold mb-6">Kitap Oluştur</h2>
            <p className="mb-8 text-gray-300">Lütfen aşağıdaki formu eksiksiz doldurun.</p>
            <form onSubmit={handleSubmit} noValidate>
                <div className="mb-6">
                    <label className="block mb-2 font-semibold" htmlFor="kitapAdi">Kitap Adı *</label>
                    <input
                        id="kitapAdi"
                        type="text"
                        name="kitapAdi"
                        value={form.kitapAdi}
                        onChange={handleChange}
                        className={`w-full px-5 py-3 rounded-md bg-gray-800 border ${errors.kitapAdi ? "border-red-500" : "border-gray-700"} focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base`}
                    />
                    {errors.kitapAdi && <p className="text-red-500 mt-2 text-sm">{errors.kitapAdi}</p>}
                </div>

                <div className="mb-6">
                    <label className="block mb-2 font-semibold" htmlFor="yazar">Yazar *</label>
                    <input
                        id="yazar"
                        type="text"
                        name="yazar"
                        value={form.yazar}
                        onChange={handleChange}
                        className={`w-full px-5 py-3 rounded-md bg-gray-800 border ${errors.yazar ? "border-red-500" : "border-gray-700"} focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base`}
                    />
                    {errors.yazar && <p className="text-red-500 mt-2 text-sm">{errors.yazar}</p>}
                </div>

                <div className="mb-6">
                    <label className="block mb-2 font-semibold" htmlFor="yayimYili">Yayım Yılı *</label>
                    <input
                        id="yayimYili"
                        type="number"
                        name="yayimYili"
                        value={form.yayimYili}
                        onChange={handleChange}
                        min="1900"
                        max={new Date().getFullYear()}
                        className={`w-full px-5 py-3 rounded-md bg-gray-800 border ${errors.yayimYili ? "border-red-500" : "border-gray-700"} focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base`}
                    />
                    {errors.yayimYili && <p className="text-red-500 mt-2 text-sm">{errors.yayimYili}</p>}
                </div>

                <div className="mb-6">
                    <label className="block mb-2 font-semibold" htmlFor="isbn">ISBN *</label>
                    <input
                        id="isbn"
                        type="text"
                        name="isbn"
                        maxLength={13}
                        value={form.isbn}
                        onChange={handleChange}
                        className={`w-full px-5 py-3 rounded-md bg-gray-800 border ${errors.isbn ? "border-red-500" : "border-gray-700"} focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base`}
                    />
                    {errors.isbn && <p className="text-red-500 mt-2 text-sm">{errors.isbn}</p>}
                </div>

                <div className="mb-6">
                    <label className="block mb-2 font-semibold" htmlFor="kategori">Kategori *</label>
                    <select
                        id="kategori"
                        name="kategori"
                        value={form.kategori}
                        onChange={handleChange}
                        className={`w-full px-5 py-3 rounded-md bg-gray-800 border ${errors.kategori ? "border-red-500" : "border-gray-700"} focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base`}
                    >
                        <option value="">Seçiniz</option>
                        {kategoriler.map((k, i) => (
                            <option key={i} value={k}>{k}</option>
                        ))}
                    </select>
                    {errors.kategori && <p className="text-red-500 mt-2 text-sm">{errors.kategori}</p>}
                </div>

                <div className="mb-6">
                    <label className="block mb-2 font-semibold" htmlFor="aciklama">Açıklama</label>
                    <textarea
                        id="aciklama"
                        name="aciklama"
                        value={form.aciklama}
                        onChange={handleChange}
                        className="w-full px-5 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base"
                        rows={4}
                    />
                </div>

                <div className="mb-6">
                    <label className="block mb-2 font-semibold" htmlFor="sayfaSayisi">Sayfa Sayısı *</label>
                    <input
                        id="sayfaSayisi"
                        type="number"
                        name="sayfaSayisi"
                        min="1"
                        value={form.sayfaSayisi}
                        onChange={handleChange}
                        className={`w-full px-5 py-3 rounded-md bg-gray-800 border ${errors.sayfaSayisi ? "border-red-500" : "border-gray-700"} focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base`}
                    />
                    {errors.sayfaSayisi && <p className="text-red-500 mt-2 text-sm">{errors.sayfaSayisi}</p>}
                </div>

                <div className="mb-6">
                    <label className="block mb-2 font-semibold" htmlFor="dil">Dil *</label>
                    <select
                        id="dil"
                        name="dil"
                        value={form.dil}
                        onChange={handleChange}
                        className={`w-full px-5 py-3 rounded-md bg-gray-800 border ${errors.dil ? "border-red-500" : "border-gray-700"} focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base`}
                    >
                        <option value="">Seçiniz</option>
                        {diller.map((d, i) => (
                            <option key={i} value={d}>{d}</option>
                        ))}
                    </select>
                    {errors.dil && <p className="text-red-500 mt-2 text-sm">{errors.dil}</p>}
                </div>

                <div className="mb-10">
                    <label className="block mb-2 font-semibold">Puan (Yıldız):</label>
                    <div className="flex items-center gap-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={"cursor-pointer text-3xl " + (star <= form.puan ? "text-yellow-400" : "text-gray-600")}
                                onClick={() => handleStarClick(star)}
                                data-testid={`star-${star}`}
                            >
                                ★
                            </span>
                        ))}
                        {form.puan > 0 && (
                            <span className="text-yellow-400 font-semibold text-lg">{form.puan} / 5</span>
                        )}
                    </div>
                </div>

                <div className="mb-10">
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            name="okumaListesinde"
                            checked={form.okumaListesinde}
                            onChange={handleChange}
                            className="form-checkbox h-5 w-5 text-indigo-600"
                        />
                        <span className="ml-3 text-white select-none text-base">Okuma listeme ekle</span>
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-bold py-3 rounded-md shadow-md text-lg"
                >
                    Kaydet
                </button>

                {success && (
                    <p className="mt-6 text-green-400 font-semibold text-center text-base">{success}</p>
                )}
            </form>
        </div>
    );
}

export default KitapOlustur;
