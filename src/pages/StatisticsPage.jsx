import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Oca", pages: 200 },
  { month: "Şub", pages: 350 },
  { month: "Mar", pages: 280 },
  { month: "Nis", pages: 400 },
  { month: "May", pages: 320 },
  { month: "Haz", pages: 450 },
  { month: "Tem", pages: 500 },
];

const StatisticsPage = () => {
  const totalBooks = 12;
  const totalPages = 3450;
  const estimatedHours = 57;
  const yearlyGoal = 20;
  const completedBooks = 12;
  const progressPercent = Math.round((completedBooks / yearlyGoal) * 100);

  return (
    <div className="min-h-screen text-white p-8 md:p-16">
      <h1 className="text-3xl font-bold mb-10 text-center">📊 İSTATİSTİKLER</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Toplam Kitap */}
        <div className="bg-white/10 rounded-xl p-6 text-center">
          <div className="text-6xl mb-4">📚</div>
          <h2 className="text-xl font-semibold">Toplam Okunan Kitaplar</h2>
          <p className="text-3xl mt-2">{totalBooks} kitap</p>
        </div>

        {/* Toplam Sayfa */}
        <div className="bg-white/10 rounded-xl p-6 text-center">
          <div className="text-6xl mb-4">📄</div>
          <h2 className="text-xl font-semibold">Toplam Okunan Sayfa Sayısı</h2>
          <p className="text-3xl mt-2">{totalPages.toLocaleString()} sayfa</p>
        </div>

        {/* Tahmini Okuma Süresi */}
        <div className="bg-white/10 rounded-xl p-6 text-center">
          <div className="text-6xl mb-4">⏱️</div>
          <h2 className="text-xl font-semibold">Tahmini Okuma Süresi</h2>
          <p className="text-3xl mt-2">{estimatedHours} saat</p>
        </div>
      </div>

      {/* Grafik */}
      <div className="bg-white/10 rounded-xl p-6">
        <h2 className="text-2xl font-semibold mb-6">📈 Aylık Okuma Grafiği</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={data}
            margin={{ top: 10, right: 20, bottom: 10, left: 0 }}
          >
            <CartesianGrid stroke="#444" strokeDasharray="3 3" />
            <XAxis dataKey="month" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip
              contentStyle={{ backgroundColor: "#2E0A6F", borderRadius: 8 }}
              itemStyle={{ color: "#fff" }}
              labelStyle={{ color: "#ccc" }}
            />
            <Bar dataKey="pages" fill="#a855f7" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Yıllık Hedef */}
      <div className="bg-white/10 rounded-xl p-6 mt-10 text-center">
        <h2 className="text-xl font-semibold mb-4">🎯 Yıllık Hedef</h2>
        <p className="text-3xl font-bold">
          {completedBooks} / {yearlyGoal} Kitap ({progressPercent}% tamamlandı)
        </p>
        <div className="w-full bg-gray-600 rounded-full h-4 mt-4 overflow-hidden">
          <div
            className="bg-purple-600 h-4 rounded-full transition-all"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
