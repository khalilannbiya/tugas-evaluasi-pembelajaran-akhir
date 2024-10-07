/**
 * @TODO:
 * 1. Baca semua nama folder yang ada di dalam direktori ini
 * 2. Tulis semua nama folder yang ada di dalam direktori ini ke dalam file `out.txt`
 * 3. Pastikan direktori yang ditulis pada `out.txt` diurutkan secara ascending (A-Z).
 *
 * Contoh:
 * Jika dalam direktori ini terdapat folder `aaa`, `bbb`, dan `ccc`,
 * maka file `out.txt` akan berisi -> aaa,bbb,ccc
 *
 * Catatan:
 * - Anda bisa men-generate kembali folder-folder dengan menjalankan berkas `generate-folders.js`
 * - Hindari untuk mengubah kode yang sudah ada sebelumnya
 */

const fs = require('fs');
const path = require('path');

function readDirAndWriteFile() {
  // Tulis jawaban di bawah ini
    const currentDir = __dirname;  // Mendapatkan direktori saat ini
    const allFilesAndFolders = fs.readdirSync(currentDir);  // Membaca semua file dan folder
    // Filter hanya folder, cek apakah itu direktori
    const folders = allFilesAndFolders.filter(item => {
        const itemPath = path.join(currentDir, item);
        return fs.lstatSync(itemPath).isDirectory();
    });

    // Sort nama folder secara ascending
    const sortedFolders = folders.sort();

    // Gabungkan nama folder dengan tanda koma
    const output = sortedFolders.join(',');

    // Tulis hasilnya ke file 'out.txt'
    fs.writeFileSync('out.txt', output);
}

readDirAndWriteFile();
