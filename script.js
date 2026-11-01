/* ==========================================================
   MASFEY STORE - PENGATURAN TOKO (BISA ANDA UBAH DI SINI)
   ========================================================== */

// 1. Nomor WhatsApp Admin (Gunakan kode negara tanpa tanda '+', contoh: 6281234567890)
const CONFIG_ADMIN = {
  nomorWA: "6285719324574", // GANTI dengan nomor WhatsApp Anda
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
    robux: 1000,harga: 180000,
metode: "Via Gamepass (Pending 5 Hari)",
badge: "Premium"
}
];
const container = document.getElementById("packagesContainer");
const usernameInput = document.getElementById("usernameInput");

function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

function renderPackages() {
  if (!container) return;

  container.innerHTML = ROBUX_PACKAGES.map(p => `
    <div style="background:#171126;border:1px solid #49316c;border-radius:16px;padding:22px;margin:12px 0;color:white;text-align:center">
      <div style="color:#c084fc;font-weight:bold">${p.badge}</div>
      <h2 style="color:#c084fc">${p.robux} Robux</h2>
      <p>${p.metode}</p>
      <h3>${formatRupiah(p.harga)}</h3>
      <button class="orderRobux" data-id="${p.id}"
        style="background:#9333ea;color:white;border:0;border-radius:10px;padding:13px 22px;font-weight:bold;width:100%">
        Beli via WhatsApp
      </button>
    </div>
  `).join("");
}

if (container) {
  container.addEventListener("click", function(e) {
    const tombol = e.target.closest(".orderRobux");
    if (!tombol) return;

    const paket = ROBUX_PACKAGES.find(
      p => p.id === Number(tombol.dataset.id)
    );

    const username = usernameInput?.value.trim() || "Belum diisi";

    const pesan = `Halo MASFEY STORE, saya ingin memesan Robux.

Username Roblox: ${username}
Nominal: ${paket.robux} Robux
Harga: ${formatRupiah(paket.harga)}
Metode: ${paket.metode}`;

    window.open(
      "https://wa.me/" + CONFIG_ADMIN.nomorWA +
      "?text=" + encodeURIComponent(pesan),
      "_blank"
    );
  });
}

renderPackages();

