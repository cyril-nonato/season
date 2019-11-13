const SHOP_DATA = {
  samsung: {
    id: 'samsung',
    brand: 'Samsung',
    items: {
      galaxy_m30: {
        id: 1,
        name: 'Galaxy M30',
        price: 500,
        imageUrl: 'https://i.imgur.com/7a2hJya.jpg',
        status: 'Available. Released 2019, March',
        battery: 'Non-removable Li-Po 5000 mAh battery',
        memory: '64GB 4GB RAM, 128GB 6GB RAM'
      },
      galaxy_note10_plus: {
        id: 2,
        name: 'Galaxy Note 10 Plus',
        price: 750,
        imageUrl: 'https://i.imgur.com/rt44mZG.jpg',
        status: 'Available. Released 2019, August',
        battery: 'Non-removable Li-Ion 4300 mAh battery',
        memory: '256GB 12GB RAM, 512GB 12GB RAM'
      },
      galaxy_note10: {
        id: 3,
        name: 'Galaxy Note 10',
        price: 700,
        imageUrl: 'https://i.imgur.com/FsxfSJu.jpg',
        status: 'Available. Released 2019, August',
        battery: 'Non-removable Li-Ion 3500 mAh battery',
        memory: '256GB 8GB RAM'
      },
      galaxy_s10: {
        id: 4,
        name: 'Galaxy S10',
        price: 600,
        imageUrl: 'https://i.imgur.com/jYyDcvJ.jpg',
        status: 'Available. Released 2019, March',
        battery: 'Non-removable Li-Ion 3400 mAh battery',
        memory: '128GB 8GB RAM, 512GB 8GB RAM'
      },
      galaxy_a50: {
        id: 5,
        name: 'Galaxy A50',
        price: 650,
        imageUrl: 'https://i.imgur.com/Agu4evA.jpg',
        status: 'Available. Released 2019, March',
        battery: 'Non-removable Li-Ion 3600 mAh battery',
        memory: '128GB 8GB RAM, 512GB 8GB RAM'
      },
      galaxy_m40: {
        id: 6,
        name: 'Galaxy M40',
        price: 500,
        imageUrl: 'https://i.imgur.com/FsxfSJu.jpg',
        status: 'Available. Released 2019, August',
        battery: 'Non-removable Li-Ion 3500 mAh battery',
        memory: '256GB 8GB RAM'
      },
    }
  },
  apple: {
    id: 'apple',
    brand: 'Apple',
    items: {
      iphone_11: {
        id: 7,
        name: 'Iphone 11',
        price: 1100,
        imageUrl: 'https://i.imgur.com/2t9ZYcx.jpg',
        status: 'Available. Released 2019, September',
        battery: 'Non-removable Li-Ion 3110 mAh battery (11.91 Wh)',
        memory: '64GB 4GB RAM, 128GB 4GB RAM, 256GB 4GB RAM'
      },
      iphone_11_pro: {
        id: 8,
        name: 'Iphone 11 pro',
        price: 1200,
        imageUrl: 'https://i.imgur.com/zDPWd9Q.jpg',
        status: 'Available. Released 2019, September',
        battery: 'Non-removable Li-Ion 3046 mAh battery (11.67 Wh)',
        memory: '64GB 4GB RAM, 256GB 4GB RAM, 512GB 4GB RAM'
      },
      iphone_xs: {
        id:9,
        name: 'Iphone XS',
        price: 700,
        imageUrl: 'https://i.imgur.com/Ljk9ADD.jpg',
        status: 'Available. Released 2018, September',
        battery: 'Non-removable Li-Ion 2658 mAh battery (10.13 Wh)',
        memory: '64GB 4GB RAM, 256GB 4GB RAM, 512GB 4GB RAM'
      },
      iphone_x: {
        id: 10,
        name: 'Iphone X',
        price: 990,
        imageUrl: 'https://i.imgur.com/R9YlTlQ.jpg',
        status: 'Available. Released 2017, October',
        battery: 'Non-removable Li-Ion 2716 mAh battery (10.35 Wh)',
        memory: '64GB 3GB RAM, 256GB 3GB RAM'
      },
    }
  },

  huawei: {
    id: 'huawei',
    brand: 'Huawei',
    items: {
      enjoy_10s: {
        id: 13,
        name: 'Enjoy 10s',
        price: 600,
        imageUrl: 'https://i.imgur.com/m2gNX8c.jpg',
        status: 'Available. Released 2019, October',
        battery: 'Non-removable Li-Ion 3110 mAh battery (11.91 Wh)',
        memory: '64GB 4GB RAM, 128GB 4GB RAM, 256GB 4GB RAM'
      },
      nova_5z: {
        id: 14,
        name: 'Nova 5z',
        price: 700,
        imageUrl: 'https://i.imgur.com/DABxh0w.jpg',
        status: 'Available. Released 2019, September',
        battery: 'Non-removable Li-Ion 3046 mAh battery (11.67 Wh)',
        memory: '64GB 4GB RAM, 256GB 4GB RAM, 512GB 4GB RAM'
      },
      nova_5: {
        id: 15,
        name: 'Nova 5z',
        price: 650,
        imageUrl: 'https://i.imgur.com/45RqudZ.jpg',
        status: 'Available. Released 2018, September',
        battery: 'Non-removable Li-Ion 2658 mAh battery (10.13 Wh)',
        memory: '64GB 4GB RAM, 256GB 4GB RAM, 512GB 4GB RAM'
      },
      nova_5t: {
        id: 16,
        name: 'Nova 5T',
        price: 750,
        imageUrl: 'https://i.imgur.com/qDWDBJC.jpg',
        status: 'Available. Released 2017, October',
        battery: 'Non-removable Li-Ion 2716 mAh battery (10.35 Wh)',
        memory: '64GB 3GB RAM, 256GB 3GB RAM'
      },
      mate_30: {
        id: 17,
        name: 'Mate 30',
        price: 900,
        imageUrl: 'https://i.imgur.com/Nkjgsgt.jpg',
        status: 'Available. Released 2019, October',
        battery: 'Non-removable Li-Ion 5512 mAh battery (10.35 Wh)',
        memory: '64GB 4GB RAM, 256GB 6GB RAM'
      },
      y9_prime: {
        id: 18,
        name: 'Y9 Prime',
        price: 500,
        imageUrl: 'https://i.imgur.com/JFAXdov.jpg',
        status: 'Available. Released 2019, October',
        battery: 'Non-removable Li-Ion 5512 mAh battery (10.35 Wh)',
        memory: '64GB 3GB RAM, 256GB 4GB RAM'
      },
    }
  },
  xiaomi: {
    id: 'xiaomi',
    brand: 'Xiaomi',
    items: {
      redmi_note_8_pro: {
        id: 19,
        name: 'Redmi Note 8 Pro',
        price: 500,
        imageUrl: 'https://i.imgur.com/6rEvqPS.jpg',
        status: 'Available. Released 2019, October',
        battery: 'Non-removable Li-Ion 3110 mAh battery (11.91 Wh)',
        memory: '64GB 4GB RAM, 128GB 4GB RAM, 256GB 4GB RAM'
      },
      redmi_8: {
        id: 20,
        name: 'Redmi 8',
        price: 400,
        imageUrl: 'https://i.imgur.com/03ejpkL.jpg',
        status: 'Available. Released 2019, September',
        battery: 'Non-removable Li-Ion 3046 mAh battery (11.67 Wh)',
        memory: '64GB 4GB RAM, 256GB 4GB RAM, 512GB 4GB RAM'
      },
      redmi_note_8t: {
        id: 21,
        name: 'Redmi Note 8T',
        price: 550,
        imageUrl: 'https://i.imgur.com/W5ceOU9.jpg',
        status: 'Available. Released 2018, September',
        battery: 'Non-removable Li-Ion 2658 mAh battery (10.13 Wh)',
        memory: '64GB 4GB RAM, 256GB 4GB RAM, 512GB 4GB RAM'
      },
      mi_9_pro: {
        id: 16,
        name: 'Mi 9 Pro',
        price: 650,
        imageUrl: 'https://i.imgur.com/OKQTtNh.jpg',
        status: 'Available. Released 2017, October',
        battery: 'Non-removable Li-Ion 2716 mAh battery (10.35 Wh)',
        memory: '64GB 6GB RAM, 256GB 8GB RAM'
      },
      redmi_7a: {
        id: 17,
        name: 'Redmi_7a',
        price: 300,
        imageUrl: 'https://i.imgur.com/JxpNsp0.jpg',
        status: 'Available. Released 2019, October',
        battery: 'Non-removable Li-Ion 5512 mAh battery (10.35 Wh)',
        memory: '64GB 4GB RAM, 256GB 6GB RAM'
      },
    }
  }

}

export default SHOP_DATA;