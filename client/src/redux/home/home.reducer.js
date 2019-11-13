
const INITIAL_STATE = {
  sections: {
    samsung: {
      id: 1,
      name: 'Samsung',
      linkUrl: 'shop/samsung',
      img: 'https://i.imgur.com/ouYdlsb.jpg'
    },
    apple: {
      id: 2,
      name: 'Apple',
      linkUrl: 'shop/apple',
      img: 'https://i.imgur.com/JytOUqP.jpg'
    },
    huawei: {
      id: 3,
      name: 'Huawei',
      linkUrl: 'shop/huawei',
      img: 'https://i.imgur.com/z9eVlRH.jpg'
    },
    xiaomi: {
      id: 4,
      name: 'Xiaomi',
      linkUrl: 'shop/xiaomi',
      img: 'https://i.imgur.com/9E6JxET.jpg'
    }
  }

}

const homeReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

export default homeReducer;