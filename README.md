# TBPS Stack Template

A modern fullstack starter built with **Next.js 15**, **tRPC**, **Prisma**, **Auth.js (BetterAuth)**, and **ShadCN UI**. Designed for rapid freelance or client project development.

---

## English Version

### 🚀 Brief Description

TBPS Stack is a fullstack template leveraging Next.js 15, tRPC for typesafe APIs, Prisma ORM, Auth.js (BetterAuth) for authentication, and ShadCN UI for beautiful, customizable React components. It’s ideal for freelance, client, or personal projects.

### 🧩 Main Features

- **Authentication**: Secure login with BetterAuth (Google OAuth ready)
- **API**: Typesafe backend via tRPC
- **Database**: Prisma ORM with PostgreSQL (Docker setup included)
- **UI**: ShadCN UI components, TailwindCSS, and Lucide icons
- **React Query**: Data fetching and caching
- **Ready for Docker & Vercel deployment**

### 📦 Installation & Setup

1. **Use degit to copy this template**

   ```bash
   npx degit rizkyfauziilmi/tbps-stack my-new-project
   cd my-new-project
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Setup environment variables**
   - Copy `.env.example` to `.env` and fill in:
     ```
     DATABASE_URL=postgresql://tbps:tbps@localhost:5432/tbps_db
     GOOGLE_CLIENT_ID=your-google-client-id
     GOOGLE_CLIENT_SECRET=your-google-client-secret
     ```

4. **Start PostgreSQL with Docker**

   ```bash
   docker compose up -d
   ```

5. **Run Prisma migrations**
   ```bash
   npm run db:generate
   ```

### 📁 Main Folder Structure

```
src/
  app/           # Next.js app directory
    _components/ # Shared UI components
    api/         # API routes (tRPC, auth)
    (auth)/      # Auth pages
  components/    # ShadCN UI components
  env/           # Environment config
  lib/           # Utilities
  server/        # Backend logic (auth, trpc, db)
prisma/          # Prisma schema & migrations
public/          # Static assets
```

### 🏃 How to Run

- **Development**
  ```bash
  npm run dev
  ```
- **Production Build**
  ```bash
  npm run build
  npm start
  ```

### ⚠️ Important Notes

- **Renaming the Project**: Update `package.json`, and replace all instances of `tbps-stack` in your codebase.
- **Adding Features**: Create new routers in `src/server/trpc/routers/`.
- **Deployment Tips**: Use Vercel for easiest deployment. For Docker, ensure your database is accessible.
- **License**: This template is for personal or private use. For commercial/open source, add your own license.

---

## Versi Bahasa Indonesia

### 🚀 Deskripsi Singkat

TBPS Stack adalah template fullstack modern dengan Next.js 15, tRPC untuk API typesafe, Prisma ORM, Auth.js (BetterAuth) untuk autentikasi, dan ShadCN UI untuk komponen React yang indah. Cocok untuk proyek freelance, klien, atau pribadi.

### 🧩 Fitur Utama

- **Autentikasi**: Login aman dengan BetterAuth (Google OAuth siap pakai)
- **API**: Backend typesafe dengan tRPC
- **Database**: Prisma ORM & PostgreSQL (sudah ada Docker)
- **UI**: Komponen ShadCN UI, TailwindCSS, dan ikon Lucide
- **React Query**: Pengambilan dan caching data
- **Siap deploy Docker & Vercel**

### 📦 Instalasi & Setup

1. **Gunakan degit untuk menyalin template ini**

   ```bash
   npx degit rizkyfauziilmi/tbps-stack nama-proyek-baru
   cd nama-proyek-baru
   ```

2. **Install dependencies**

   ```bash
   npm install
   # atau
   yarn install
   ```

3. **Setup environment variables**
   - Salin `.env.example` ke `.env` dan isi:
     ```
     DATABASE_URL=postgresql://tbps:tbps@localhost:5432/tbps_db
     GOOGLE_CLIENT_ID=client-id-google-anda
     GOOGLE_CLIENT_SECRET=client-secret-google-anda
     ```

4. **Jalankan PostgreSQL dengan Docker**

   ```bash
   docker compose up -d
   ```

5. **Jalankan Prisma migration**
   ```bash
   npm run db:generate
   ```

### 📁 Struktur Folder Utama

```
src/
  app/           # Direktori utama Next.js
    _components/ # Komponen UI bersama
    api/         # API routes (tRPC, auth)
    (auth)/      # Halaman autentikasi
  components/    # Komponen ShadCN UI
  env/           # Konfigurasi environment
  lib/           # Utilities
  server/        # Logika backend (auth, trpc, db)
prisma/          # Prisma schema & migration
public/          # File statis
```

### 🏃 Cara Menjalankan

- **Development**
  ```bash
  npm run dev
  ```
- **Production Build**
  ```bash
  npm run build
  npm start
  ```

### ⚠️ Catatan Penting

- **Ganti Nama Project**: Ubah `package.json` dan semua instance `tbps-stack` di kode.
- **Tambah Fitur**: Buat router baru di `src/server/trpc/routers/`.
- **Tips Deploy**: Gunakan Vercel untuk deploy paling mudah. Untuk Docker, pastikan database bisa diakses.
- **Lisensi**: Template ini untuk penggunaan pribadi/privat. Untuk komersial/open source, tambahkan lisensi Anda sendiri.

---

Feel free to copy and use this README for your freelance or client projects! Let me know if you want it saved to your repo.
