rafraf/
├── public/
│   └── index.html                      # Tarayıcıda yüklenen ana HTML dosyası
├── src/
│   ├── assets/                         # Statik varlıklar (görseller, ikonlar, vb.)
│   ├── components/
│   │   └── ui/                         # ShadCN UI tarafından yönetilen temel UI bileşenleri (Button, Input, Dialog vb.)
│   ├── features/                       # Uygulama özellikleri (modüller halinde)
│   │   └── books/
│   │       ├── BookList.jsx            # Kitap listesini render eden bileşen
│   │       ├── BookItem.jsx            # Liste içindeki tek bir kitap bileşeni
│   │       ├── AddBookForm.jsx         # Yeni kitap ekleme formu bileşeni
│   │       └── bookData.js             # Geçici (dummy) kitap verileri
│   ├── layouts/                        # Sayfa düzenini sağlayan bileşenler (Navbar, Footer vb.)
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/                          # Rotalara karşılık gelen ana sayfa bileşenleri
│   │   ├── Home.jsx
│   │   ├── Library.jsx
│   │   └── Login.jsx                   # Clerk ile yönetilecek giriş sayfası
│   ├── routes/                         # React Router yönlendirme yapılandırması
│   │   └── AppRouter.jsx
│   ├── utils/                          # Genel yardımcı fonksiyonlar (filtreleme, formatlama vb.)
│   │   └── filterBooks.js
│   ├── lib/                            # Kütüphane yapılandırmaları (ShadCN, Clerk Auth vb.)
│   │   └── auth.js                     # Clerk kimlik doğrulama yapılandırması
│   ├── App.jsx                         # Uygulamanın kök bileşeni, yönlendiriciyi ve layout'ları içerir
│   ├── main.jsx                        # React uygulamasını DOM'a render eden başlangıç noktası
│   └── index.css                       # Global stiller ve Tailwind CSS direktifleri
├── .gitignore
├── tailwind.config.js                  # Tailwind CSS yapılandırma dosyası
├── postcss.config.js                   # PostCSS yapılandırma dosyası
├── vite.config.js
├── package.json
└── README.md


| Alan                          | Teknoloji         | Açıklama                                                                                       |
| ----------------------------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| **Framework**                 | React             | Kullanıcı arayüzü (UI) oluşturmak için kullanılan JavaScript kütüphanesi.                       |
| **Dil**                       | JavaScript        | Projenin ana programlama dili.                                                                 |
| **Proje Oluşturucu**          | Vite              | Hızlı ve modern bir frontend geliştirme ortamı ve derleme aracı.                                 |
| **Stil Sistemi**              | Tailwind CSS      | Utility-first (yardımcı sınıf tabanlı) CSS framework'ü ile hızlı ve tutarlı tasarımlar.        |
| **UI Kütüphanesi**            | ShadCN UI         | Tailwind CSS üzerine kurulu, kopyala-yapıştır ile projeye eklenebilen UI bileşenleri.          |
| **Yönlendirme**               | React Router DOM  | Uygulama içi sayfa geçişlerini ve yönlendirmeleri yönetmek için.                               |
| **Veri Yönetimi (Geçici)**    | Dummy Data (JSON) | Backend olmadan uygulama geliştirmek için kullanılan statik JavaScript nesneleri.              |
| **Kimlik Doğrulama (Plan)**   | Clerk             | Kullanıcı girişi, kaydı ve oturum yönetimi için planlanan servis.                              |
