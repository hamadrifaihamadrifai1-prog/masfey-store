/* ==========================================================
   MASFEY STORE - PENGATURAN TOKO (BISA ANDA UBAH DI SINI)
   ========================================================== */

// 1. Nomor WhatsApp Admin (Gunakan kode negara tanpa tanda '+', contoh: 6281234567890)
const CONFIG_ADMIN = {
  nomorWA: "6285719334574", // GANTI dengan nomor WhatsApp Anda
  namaToko: "MASFEY STORE"
};

// 2. Daftar Paket Robux & Harga Rupiah (Bebas Anda edit/tambah/hapus)
const ROBUX_PACKAGES = [
  {
    id: 1,
    robux: 100,
    harga: 15000,
    metode: "Via Gamepass (Pending 5 Hari)",
    badge: "Termurah"
  },
  {
    id: 2,
    robux: 200,
    harga: 30000,
    metode: "Via Gamepass (Pending 5 Hari)",
    badge: "Populer"
  },
  {
    id: 3,
    robux: 500,
    harga: 75000,
    metode: "Via Gamepass (Pending 5 Hari)",
    badge: "Best Seller"
  },
  {
    id: 4,
    robux: 1000,
