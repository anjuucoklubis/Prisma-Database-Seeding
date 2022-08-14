# Prisma-Database-Seeding
Database seeder sangat berguna untuk inisiasi data pada tabel atau beberapa tabel ketika setup aplikasi pertama kali. Bisa juga untuk memperbarui data yang sudah ada atau menghapusnya dari belakang layar.

## Membuat Seeder
Perlu diketahui bahwa tidak secara default Nest JS menempatkan file seed yang kita buat kedalam direktori database/seeds. Class seed dapat menggunakan nama sesuai yang anda inginkan, akan tetapi dan sebaiknya nama yang digunakan mewakili sample data yang akan kita buat, misal : UsersTableSeeder yang mewakili sample data untuk users. 

## Seeding database dengan TypeScript atau JavaScript
- Buat file baru bernama seed.ts. Ini dapat ditempatkan di mana saja dalam struktur folder proyek Anda. Contoh di bawah ini menempatkannya di folder /prisma.
- Di file seed.ts, impor Prisma Client, inisialisasi dan buat beberapa catatan
- Tambahkan dependensi pengembangan TypeScript, ts-node dan @types/node: npm install -D typescript ts-node @types/node
- Tambahkan field prisma.seed ke file package.json Anda:
 "prisma": {
  "seed": "ts-node prisma/seed.ts"
},
- Untuk seed database, jalankan perintah db seed CLI: 'npx prisma db seed'


## Source : https://www.prisma.io/docs/guides/database/seed-database
## Written by : Anju Lubis
   
