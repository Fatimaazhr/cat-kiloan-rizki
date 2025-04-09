function detailProduk() {
  return {
    produk: {},

    // Inisialisasi saat halaman dimuat
    init() {
      const produkList = [
        { id: 1, name: '001 - Cat Kiloan Rizki', img: '001.jpg', price: 13000 },
        { id: 2, name: '002 - Cat Kiloan Rizki', img: '005.jpg', price: 13000 },
        { id: 3, name: '003 - Cat Kiloan Rizki', img: '003.jpg', price: 13000 },
        { id: 4, name: '004 - Cat Kiloan Rizki', img: '004.jpg', price: 13000 },
        { id: 5, name: '005 - Cat Kiloan Rizki', img: '005.jpg', price: 13000 },
        { id: 6, name: '006 - Cat Kiloan Rizki', img: '006.jpg', price: 13000 },
        { id: 7, name: '007 - Cat Kiloan Rizki', img: '007.jpg', price: 13000 },
        { id: 8, name: '008 - Cat Kiloan Rizki', img: '008.jpg', price: 13000 },
        { id: 9, name: '009 - Cat Kiloan Rizki', img: '009.jpg', price: 13000 },
        { id: 10, name: '010 - Cat Kiloan Rizki', img: '010.jpg', price: 13000 },
        { id: 11, name: '011 - Cat Kiloan Rizki', img: '011.jpg', price: 13000 },
        { id: 12, name: '012 - Cat Kiloan Rizki', img: '012.jpg', price: 13000 },
        { id: 13, name: '013 - Cat Kiloan Rizki', img: '013.jpg', price: 13000 },
        { id: 14, name: '014 - Cat Kiloan Rizki', img: '014.jpg', price: 13000 },
        { id: 15, name: '015 - Cat Kiloan Rizki', img: '015.jpg', price: 13000 },
        { id: 16, name: '016 - Cat Kiloan Rizki', img: '016.jpg', price: 13000 },
      ];

      const params = new URLSearchParams(window.location.search);
      const id = parseInt(params.get('id'));

      const found = produkList.find(p => p.id === id);

      if (found) {
        this.produk = found;
      } else {
        this.produk = { name: "Produk tidak ditemukan", img: "", price: 0 };
      }
    },

    // Format ke Rupiah
    formatRupiah(number) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(number);
    }
  };
}
