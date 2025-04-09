    document.addEventListener('alpine:init', () => {
        Alpine.data('products', () => ({
            items: [
                { id: 1, name: '001 - Cat Kiloan Rizki', img: '001.jpg', price: 13000},
                { id: 2, name: '002 - Cat Kiloan Rizki', img: '005.jpg', price: 13000},
                { id: 3, name: '003 - Cat Kiloan Rizki', img: '003.jpg', price: 13000},
                { id: 4, name: '004 - Cat Kiloan Rizki', img: '004.jpg', price: 13000},
                { id: 5, name: '005 - Cat Kiloan Rizki', img: '005.jpg', price: 13000},
                { id: 6, name: '006 - Cat Kiloan Rizki', img: '006.jpg', price: 13000},
                { id: 7, name: '007 - Cat Kiloan Rizki', img: '007.jpg', price: 13000},
                { id: 8, name: '008 - Cat Kiloan Rizki', img: '008.jpg', price: 13000},
                { id: 9, name: '009 - Cat Kiloan Rizki', img: '009.jpg', price: 13000},
                { id: 10, name: '010 - Cat Kiloan Rizki', img: '010.jpg', price: 13000},
                { id: 11, name: '011 - Cat Kiloan Rizki', img: '011.jpg', price: 13000},
                { id: 12, name: '012 - Cat Kiloan Rizki', img: '012.jpg', price: 13000},
                { id: 13, name: '013 - Cat Kiloan Rizki', img: '013.jpg', price: 13000},
                { id: 14, name: '014 - Cat Kiloan Rizki', img: '014.jpg', price: 13000},
                { id: 15, name: '015 - Cat Kiloan Rizki', img: '015.jpg', price: 13000},
                { id: 16, name: '016 - Cat Kiloan Rizki', img: '016.jpg', price: 13000},
            ],
        }));

        Alpine.store('cart', {
            items: [],
            total: 0,
            quantity: 0,
            add(newItem) {
                // Cek apakah ada barang yang sama di cart
                const cartItem = this.items.find((item) => item.id === newItem.id);

                // Jika belum ada / cart masih kosong
                if(!cartItem){
                    this.items.push({...newItem, quantity: 1, total: newItem.price});
                    this.quantity++;
                    this.total += newItem.price;
                } else {
                    // Jika barang sudah ada, cek apakah barang beda atau sama dengan yang ada di cart
                    this.items = this.items.map((item) => {
                        // jika barang berbeda
                        if(item.id !== newItem.id) {
                            return item;
                        } else {
                            // jika barang sudah ada, tambah quantity dan subtotalnya
                            item.quantity++;
                            item.total = item.price * item.quantity;
                            this.quantity++;
                            this.total += item.price;
                            return item;
                        }
                    });
                }
            },
            remove(id) {
                // Ambil item yang mau diremove berdasarkan id nya
                const cartItem = this.items.find((item) => item.id === id);

                // Jika item > 1
                if(cartItem.quantity > 1) {
                    // telusuri 1 1
                    this.items = this.items.map((item) => {
                        // jika bukan barang yang di klik
                        if(item.id !== id) {
                            return item;
                        } else {
                            item.quantity--;
                            item.total = item.price * item.quantity;
                            this.quantity--;
                            this.total -= item.price;
                            return item;
                        }
                    })
                } else if (cartItem.quantity === 1) {
                    // jika barangnya sisa 1
                    this.items = this.items.filter((item) => item.id !== id);
                    this.quantity--;
                    this.total -= cartItem.price;
                }
            }
        });
    });

    // Konversi Rupiah
    const rupiah = (number) => {
        return new Intl.NumberFormat( 'id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(number);
    };

    