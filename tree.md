rafraf/
├── public/
│   └── index.html                      # Temel HTML dosyası
├── src/
│   ├── assets/                         # Görseller, kitap kapakları, ikonlar vs.
│   ├── components/                     # Reusable UI bileşenleri
│   │   └── ui/                         # ShadCN UI bileşenleri (button, input, dialog vs.)
│   ├── features/                       # Modül bazlı yapı (örnek: kitaplar)
│   │   └── books/
│   │       ├── BookList.jsx            # Kitap listesini gösteren bileşen
│   │       ├── BookItem.jsx            # Tek kitap kartı
│   │       ├── AddBookForm.jsx         # Kitap ekleme formu
│   │       └── bookData.js             # Dummy kitap verileri (JSON benzeri)
│   ├── layouts/                        # Sayfa düzeni (Navbar, Sidebar vs.)
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/                          # Uygulama sayfaları
│   │   ├── Home.jsx
│   │   ├── Library.jsx
│   │   └── Login.jsx                   # (Clerk ile giriş ekranı)
│   ├── routes/                         # React Router yönlendirmeleri
│   │   └── AppRouter.jsx
│   ├── utils/                          # Yardımcı fonksiyonlar
│   │   └── filterBooks.js
│   ├── lib/                            # ShadCN config, auth config vs.
│   │   └── auth.js                     # Clerk yapılandırması (ileride)
│   ├── App.jsx                         # Uygulamanın kök bileşeni
│   ├── main.jsx                        # React DOM render noktası
│   └── index.css                       # Global Tailwind stilleri
├── .gitignore
├── vite.config.js
├── package.json
└── README.md


| Alan                          | Teknoloji         | Açıklama                                                                                       |
| ----------------------------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| **Framework**                 | React             | UI (arayüz) oluşturmak için kütüphane. Sayfa bileşenleriyle çalışacağız.                       |
| **Dili**                      | JavaScript        | React bileşenlerini yazmak için kullanacağız. (TypeScript değil!)                              |
| **Proje Başlatıcı**           | Vite              | Çok hızlı ve modern bir frontend başlatıcı. Webpack yerine Vite kullanıyoruz çünkü daha hızlı. |
| **Stil Sistemi**              | Tailwind CSS      | Sınıf tabanlı modern CSS. Hızlıca responsive ve şık tasarım yapmamıza yardımcı olur.           |
| **UI Bileşenleri**            | ShadCN UI         | Tailwind üzerine kurulu, modern ve hazır bileşenler sunar (button, input, dialog vs.).         |
| **Routing (Sayfa geçişleri)** | React Router DOM  | Home, Library, Login gibi sayfalar arasında geçiş yapmak için.                                 |
| **Veri (şimdilik)**           | Dummy Data (JSON) | Gerçek backend olmadan kitap verilerini JS dosyasında tutacağız.                               |
| **(İleride)** Giriş Sistemi   | Clerk             | Login, logout gibi auth işlemleri için hazır çözümler sunar. Şimdilik sadece planlıyoruz.      |
