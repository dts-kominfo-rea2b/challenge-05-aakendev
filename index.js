const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...

// DEBUG Mode
// const nameAsc = names.sort().map((item) => {return `${names.indexOf(item) + 1}. ${item}`});
// const nameDesc = names.reverse().map((item) => {return `${names.indexOf(item) + 1}. ${item}`});
// console.log(nameAsc);
// console.log(nameDesc);
// console.log(names.sort());
// console.log(names.reverse());

const sorter = (names, sortMethod) => {
  const sorting = sortMethod(names);
  const newData = names.map((item) => {return `${names.indexOf(item) + 1}. ${item}`});
  return newData;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (names) => names.sort();

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (names) => names.reverse();

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
