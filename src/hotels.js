// src/hotels.js

const hotels = [
  {
    id: "aqueduct",
    title: "מלון אקוודוקט | רגבה",
    image: "https://www.bgalil.co.il/files/tinymceuploads/DSC_9529_copy.jpg._1565688455",
    minPrice: 1400,
    lastRooms: false,
    bestValue: false,
    mostPopular: true,
    halfBoard: true,
    features: {
      pool: true,
      parking: true,
      synagogue: true,
      balcony: false,
      breakfast: true,
      cleaning: true,
      comfyBeds: true
    }
  },
  {
    id: "nofHaifa",
    title: "מלון נוף | חיפה",
    image: "https://booking.simplex-ltd.com/octopus/Upload/images/Chain_11488/Images/Resorts/outside-areas-1-1-.jpg",
    minPrice: 950,
    lastRooms: false,
    bestValue: true,
    mostPopular: false,
    halfBoard: true,
    features: {
      pool: false,
      parking: true,
      synagogue: false,
      balcony: true,
      breakfast: true,
      cleaning: false,
      comfyBeds: true
    }
  },
  {
    id: "elyam",
    title: "מלון אל ים | נתניה",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/c9/8e/09/paradiso-lifestyle-resort.jpg?w=900&h=500&s=1",
    minPrice: 1380,
    lastRooms: true,
    bestValue: false,
    mostPopular: false,
    halfBoard: false,
    features: {
      pool: true,
      parking: true,
      synagogue: true,
      balcony: true,
      breakfast: true,
      cleaning: true,
      comfyBeds: true
    }
  },
  {
    id: "residance",
    title: "מלון רזידנס | נתניה",
    image: "https://netanya-hotelz.co.il/wp-content/uploads/2016/07/rez7.jpg",
    minPrice: 1500,
    lastRooms: false,
    bestValue: false,
    mostPopular: false,
    halfBoard: false,
    features: {
      pool: false,
      parking: true,
      synagogue: true,
      balcony: false,
      breakfast: false,
      cleaning: true,
      comfyBeds: true
    }
  },
  {
    id: "tveria",
    title: "מלון רויאל פלאזה | טבריה",
    image: "https://royalplaza.co.il/wp-content/uploads/2020/06/%D7%A8%D7%95%D7%99%D7%90%D7%9C-%D7%A4%D7%9C%D7%90%D7%96%D7%94-%D7%98%D7%91%D7%A8%D7%99%D7%94.jpg",
    minPrice: 950,
    lastRooms: true,
    bestValue: false,
    mostPopular: true,
    halfBoard: false,
    features: {
      pool: true,
      parking: false,
      synagogue: true,
      balcony: false,
      breakfast: true,
      cleaning: false,
      comfyBeds: true
    }
  }
];

export default hotels;
