const os = require('os');

setTimeout(() => {
  // 1. Cetak uptime dari process
  console.log(process.uptime());

  // 2. Cetak uptime dari sistem operasi
  console.log(os.uptime());

  // 3. Cetak total memori yang tersedia di sistem operasi
  console.log(os.totalmem());

  // 4. Cetak total heap memori
  const memoryUsage = process.memoryUsage();
  console.log(memoryUsage.heapTotal);
}, 1000);
