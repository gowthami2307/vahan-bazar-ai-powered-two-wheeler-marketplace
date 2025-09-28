// Mock data for demo purposes
export const mockUsers = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@demo.com',
    password: 'admin123', // In real app, this would be hashed
    role: 'admin',
    created_at: '2024-01-01'
  },
  {
    id: 2,
    username: 'john_doe',
    email: 'john@demo.com',
    password: 'user123',
    role: 'user',
    created_at: '2024-01-02'
  },
  {
    id: 3,
    username: 'jane_smith',
    email: 'jane@demo.com',
    password: 'user123',
    role: 'user',
    created_at: '2024-01-03'
  }
];

export const mockBikes = [
  {
    id: 1,
    name: 'Honda Activa 6G',
    price: 75000,
    brand: 'Honda',
    fuelType: 'Petrol',
    mileage: 45,
    image: 'https://cdn.bikedekho.com/processedimages/honda/activa-6g/640X309/activa-6g67ff4941afe8a.jpg',
    description: 'The Honda Activa 6G is a popular scooter known for its reliability and fuel efficiency.',
    specifications: {
      engine: '109cc',
      power: '8.31 PS',
      torque: '8.79 Nm',
      transmission: 'CVT',
      brakes: 'Drum',
      wheels: '12 inch'
    },
    created_by: 1,
    created_at: '2024-01-01'
  },
  {
    id: 2,
    name: 'Ather 450X',
    price: 150000,
    brand: 'Ather',
    fuelType: 'Electric',
    mileage: 100,
    image: 'https://cdn.bikedekho.com/processedimages/ather-energy/2025-450x/source/2025-450x6777c2f384486.jpg?imwidth=412&impolicy=resize',
    description: 'The Ather 450X is a premium electric scooter with advanced features and long range.',
    specifications: {
      battery: '2.9 kWh',
      range: '85 km',
      charging_time: '3.5 hours',
      top_speed: '80 km/h',
      motor: '6 kW'
    },
    created_by: 1,
    created_at: '2024-01-01'
  },
  {
    id: 3,
    name: 'Bajaj Pulsar NS200',
    price: 120000,
    brand: 'Bajaj',
    fuelType: 'Petrol',
    mileage: 50,
    image: 'https://cdn.bikedekho.com/processedimages/bajaj/bajaj-pulsar-200-ns/source/bajaj-pulsar-200-ns68552a2c91fc3.jpg?imwidth=412&impolicy=resize',
    description: 'The Bajaj Pulsar NS200 is a sporty motorcycle with aggressive styling and powerful performance.',
    specifications: {
      engine: '199.5cc',
      power: '24.5 PS',
      torque: '18.74 Nm',
      transmission: '6-speed',
      brakes: 'Disc',
      wheels: '17 inch'
    },
    created_by: 1,
    created_at: '2024-01-01'
  },
  {
    id: 4,
    name: 'TVS Apache RTR 160 4V',
    price: 95000,
    brand: 'TVS',
    fuelType: 'Petrol',
    mileage: 55,
    image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201911/160_4V_3-4th_Angle_0.jpeg?size=690:388',
    description: 'The TVS Apache RTR 160 4V offers sporty performance with advanced features.',
    specifications: {
      engine: '159.7cc',
      power: '16.5 PS',
      torque: '14.8 Nm',
      transmission: '5-speed',
      brakes: 'Disc',
      wheels: '17 inch'
    },
    created_by: 1,
    created_at: '2024-01-01'
  },
  {
    id: 5,
    name: 'Hero Splendor Plus',
    price: 65000,
    brand: 'Hero',
    fuelType: 'Petrol',
    mileage: 60,
    image: 'https://media.zigcdn.com/media/model/2025/Jun/lest-side-view-1151258608_600x400.jpg',
    description: 'The Hero Splendor Plus is known for its fuel efficiency and low maintenance costs.',
    specifications: {
      engine: '97.2cc',
      power: '8.02 PS',
      torque: '8.05 Nm',
      transmission: '4-speed',
      brakes: 'Drum',
      wheels: '18 inch'
    },
    created_by: 1,
    created_at: '2024-01-01'
  },
  {
    id: 6,
    name: 'Yamaha FZ-S V3',
    price: 110000,
    brand: 'Yamaha',
    fuelType: 'Petrol',
    mileage: 48,
    image: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/188041/yamaha-fz-s-right-front-three-quarter2.jpeg?isig=0&q=80',
    description: 'The Yamaha FZ-S V3 combines style and performance with modern features.',
    specifications: {
      engine: '149cc',
      power: '12.4 PS',
      torque: '13.6 Nm',
      transmission: '5-speed',
      brakes: 'Disc',
      wheels: '17 inch'
    },
    created_by: 1,
    created_at: '2024-01-01'
  },
  {
    id: 7,
    name: 'Royal Enfield Classic 350',
    price: 180000,
    brand: 'Royal Enfield',
    fuelType: 'Petrol',
    mileage: 35,
    image: 'https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/new-classic-350/studio-shots/360/emerald/01.png',
    description: 'The Royal Enfield Classic 350 is a timeless motorcycle with vintage appeal.',
    specifications: {
      engine: '349cc',
      power: '20.2 PS',
      torque: '27 Nm',
      transmission: '5-speed',
      brakes: 'Disc',
      wheels: '19 inch'
    },
    created_by: 1,
    created_at: '2024-01-01'
  },
  {
    id: 8,
    name: 'KTM Duke 200',
    price: 200000,
    brand: 'KTM',
    fuelType: 'Petrol',
    mileage: 35,
    image: 'https://cdn.bikedekho.com/processedimages/ktm/2023-200-duke/source/2023-200-duke6710a8cadf221.jpg',
    description: 'The KTM Duke 200 is a performance-oriented motorcycle with aggressive styling.',
    specifications: {
      engine: '199.5cc',
      power: '25 PS',
      torque: '19.2 Nm',
      transmission: '6-speed',
      brakes: 'Disc',
      wheels: '17 inch'
    },
    created_by: 1,
    created_at: '2024-01-01'
  },
  {
    id: 9,
    name: 'Hero Xpulse 200',
    price: 130000,
    brand: 'Hero',
    fuelType: 'Petrol',
    mileage: 45,
    image: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/105184/xpulse-200-4v-right-side-view-10.png?isig=0',
    description: 'The Hero Xpulse 200 is an adventure motorcycle designed for both city and off-road riding.',
    specifications: {
      engine: '199.6cc',
      power: '18.4 PS',
      torque: '17.1 Nm',
      transmission: '5-speed',
      brakes: 'Disc',
      wheels: '21 inch front, 18 inch rear'
    },
    created_by: 1,
    created_at: '2024-01-01'
  },
  {
    id: 10,
    name: 'TVS Apache RTR 200 4V',
    price: 140000,
    brand: 'TVS',
    fuelType: 'Petrol',
    mileage: 40,
    image: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/204536/apache-200-right-front-three-quarter-3.jpeg?isig=0',
    description: 'The TVS Apache RTR 200 4V is a sporty motorcycle with advanced features and aggressive styling.',
    specifications: {
      engine: '197.75cc',
      power: '20.5 PS',
      torque: '16.8 Nm',
      transmission: '5-speed',
      brakes: 'Disc',
      wheels: '17 inch'
    },
    created_by: 1,
    created_at: '2024-01-01'
  },
  {
    id: 11,
    name: 'Bajaj Dominar 400',
    price: 220000,
    brand: 'Bajaj',
    fuelType: 'Petrol',
    mileage: 30,
    image: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/114423/dominar-400-right-side-view-2.png?isig=0',
    description: 'The Bajaj Dominar 400 is a powerful touring motorcycle with excellent performance and comfort.',
    specifications: {
      engine: '373.3cc',
      power: '40 PS',
      torque: '35 Nm',
      transmission: '6-speed',
      brakes: 'Disc',
      wheels: '17 inch'
    },
    created_by: 1,
    created_at: '2024-01-01'
  },
  {
    id: 12,
    name: 'Royal Enfield Himalayan',
    price: 250000,
    brand: 'Royal Enfield',
    fuelType: 'Petrol',
    mileage: 30,
    image: 'https://www.royalenfield.com/content/dam/royal-enfield/motorcycles/new-classic-350/classic-350-motorcycle-listing.jpg',
    description: 'The Royal Enfield Himalayan is an adventure motorcycle built for long-distance touring and off-road riding.',
    specifications: {
      engine: '411cc',
      power: '24.3 PS',
      torque: '32 Nm',
      transmission: '5-speed',
      brakes: 'Disc',
      wheels: '21 inch front, 17 inch rear'
    },
    created_by: 1,
    created_at: '2024-01-01'
  },
  {
    id: 13,
    name: 'KTM RC 200',
    price: 210000,
    brand: 'KTM',
    fuelType: 'Petrol',
    mileage: 35,
    image: 'https://imgd.aeplcdn.com/476x268/bw/models/ktm-rc-200-bs-vi20200928131706.jpg',
    description: 'The KTM RC 200 is a sporty motorcycle designed for track and performance riding.',
    specifications: {
      engine: '199.5cc',
      power: '25 PS',
      torque: '19.2 Nm',
      transmission: '6-speed',
      brakes: 'Disc',
      wheels: '17 inch'
    },
    created_by: 1,
    created_at: '2024-01-01'
  },
  {
    id: 14,
    name: 'Hero Passion Pro',
    price: 70000,
    brand: 'Hero',
    fuelType: 'Petrol',
    mileage: 65,
    image: 'https://imgd.aeplcdn.com/664x374/bw/ec/39027/Hero-Passion-Pro-110-Side-152360.jpg?wm=0&q=80',
    description: 'The Hero Passion Pro is a reliable commuter motorcycle known for its fuel efficiency and low maintenance.',
    specifications: {
      engine: '97.2cc',
      power: '8.02 PS',
      torque: '8.05 Nm',
      transmission: '4-speed',
      brakes: 'Drum',
      wheels: '18 inch'
    },
    created_by: 1,
    created_at: '2024-01-01'
  },
  {
    id: 15,
    name: 'TVS Ntorq 125',
    price: 85000,
    brand: 'TVS',
    fuelType: 'Petrol',
    mileage: 45,
    image: 'https://cdn.bikedekho.com/processedimages/tvs/ntorq-125/source/ntorq-125681b550dd5892.jpg?imwidth=412&impolicy=resize',
    description: 'The TVS Ntorq 125 is a sporty scooter with advanced features and modern design.',
    specifications: {
      engine: '124.8cc',
      power: '9.4 PS',
      torque: '10.5 Nm',
      transmission: 'CVT',
      brakes: 'Disc',
      wheels: '12 inch'
    },
    created_by: 1,
    created_at: '2024-01-01'
  },
  {
    id: 16,
    name: 'Bajaj Avenger 220',
    price: 150000,
    brand: 'Bajaj',
    fuelType: 'Petrol',
    mileage: 40,
    image: 'https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/bajaj-select-model-moon-white-1669289927752.png?q=80',
    description: 'The Bajaj Avenger 220 is a cruiser motorcycle with comfortable riding position and relaxed ergonomics.',
    specifications: {
      engine: '220cc',
      power: '19.03 PS',
      torque: '17.5 Nm',
      transmission: '5-speed',
      brakes: 'Disc',
      wheels: '17 inch'
    },
    created_by: 1,
    created_at: '2024-01-01'
  }
];

export const mockUsedBikes = [
  {
    id: 1,
    name: 'Suzuki Access 125',
    price: 50000,
    brand: 'Suzuki',
    fuelType: 'Petrol',
    mileage: 40,
    image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/suzuki-access-125-standard1738074352591.jpg?q=80',
    seller: 'Ravi Kumar',
    seller_contact: '9876543210',
    year_of_purchase: 2020,
    condition_rating: 4,
    description: 'Well maintained scooter with regular service history. Single owner.',
    created_at: '2024-01-01'
  },
  {
    id: 2,
    name: 'TVS Jupiter',
    price: 40000,
    brand: 'TVS',
    fuelType: 'Petrol',
    mileage: 42,
    image: 'https://imgd.aeplcdn.com/1056x594/n/3quh7eb_1768797.jpg?q=80',
    seller: 'Amit Singh',
    seller_contact: '9876543211',
    year_of_purchase: 2019,
    condition_rating: 3,
    description: 'Good condition scooter with minor scratches. All documents available.',
    created_at: '2024-01-01'
  },
  {
    id: 3,
    name: 'Honda Activa 5G',
    price: 45000,
    brand: 'Honda',
    fuelType: 'Petrol',
    mileage: 45,
    image: 'https://imgd.aeplcdn.com/0X0/n/cw/ec/44686/activa-6g-right-side-view-8.jpeg?isig=0&q=80',
    seller: 'Priya Sharma',
    seller_contact: '9876543212',
    year_of_purchase: 2021,
    condition_rating: 5,
    description: 'Excellent condition, like new. Only 5000 km driven. All service records available.',
    created_at: '2024-01-02'
  },
  {
    id: 4,
    name: 'Bajaj Pulsar 150',
    price: 65000,
    brand: 'Bajaj',
    fuelType: 'Petrol',
    mileage: 50,
    image: 'https://imgd.aeplcdn.com/1056x594/n/8c7ckeb_1766805.jpg?q=80',
    seller: 'Rajesh Kumar',
    seller_contact: '9876543213',
    year_of_purchase: 2020,
    condition_rating: 4,
    description: 'Powerful bike with good mileage. Recently serviced. All papers clear.',
    created_at: '2024-01-03'
  },
  {
    id: 5,
    name: 'Yamaha FZ-S',
    price: 75000,
    brand: 'Yamaha',
    fuelType: 'Petrol',
    mileage: 48,
    image: 'https://shop.yamaha-motor-india.com/cdn/shop/files/Blue_1200x.webp?v=1715159838',
    seller: 'Vikram Singh',
    seller_contact: '9876543214',
    year_of_purchase: 2021,
    condition_rating: 4,
    description: 'Sporty bike in great condition. Single owner, well maintained.',
    created_at: '2024-01-04'
  },
  {
    id: 6,
    name: 'Hero Splendor Plus',
    price: 35000,
    brand: 'Hero',
    fuelType: 'Petrol',
    mileage: 60,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2V4OGCIUB2douQKfSmSMQlqxoTdBCP3yfZQ&s',
    seller: 'Sunil Kumar',
    seller_contact: '9876543215',
    year_of_purchase: 2018,
    condition_rating: 3,
    description: 'Reliable bike with excellent fuel efficiency. Perfect for daily commuting.',
    created_at: '2024-01-05'
  }
];

export const mockShowrooms = [
  {
    id: 1,
    name: 'Honda Showroom - MG Road',
    address: '123 MG Road, Bangalore',
    contact: '080-12345678',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560001',
    services: ['Sales', 'Service', 'Spare Parts', 'Test Rides']
  },
  {
    id: 2,
    name: 'Ather Space - Indiranagar',
    address: '456 Indiranagar, Bangalore',
    contact: '080-87654321',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560038',
    services: ['Sales', 'Service', 'Charging Station', 'Test Rides']
  },
  {
    id: 3,
    name: 'Bajaj Showroom - Koramangala',
    address: '789 Koramangala 5th Block, Bangalore',
    contact: '080-98765432',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560095',
    services: ['Sales', 'Service', 'Spare Parts', 'Test Rides', 'Insurance']
  },
  {
    id: 4,
    name: 'TVS Showroom - Whitefield',
    address: '321 Whitefield Main Road, Bangalore',
    contact: '080-11223344',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560066',
    services: ['Sales', 'Service', 'Spare Parts', 'Test Rides', 'Finance']
  },
  {
    id: 5,
    name: 'Yamaha Showroom - Jayanagar',
    address: '654 Jayanagar 4th Block, Bangalore',
    contact: '080-55667788',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560011',
    services: ['Sales', 'Service', 'Spare Parts', 'Test Rides', 'Extended Warranty']
  },
  {
    id: 6,
    name: 'Royal Enfield Showroom - Brigade Road',
    address: '987 Brigade Road, Bangalore',
    contact: '080-99887766',
    city: 'Bangalore',
    state: 'Karnataka',
    pincode: '560001',
    services: ['Sales', 'Service', 'Spare Parts', 'Test Rides', 'Customization']
  }
];

export const mockUpcoming = [
  {
    id: 1,
    name: 'Hero EV',
    brand: 'Hero',
    launch_date: '2025-12-01',
    expected_price: 80000,
    description: 'Hero\'s first electric scooter with advanced features and long range.'
  },
  {
    id: 2,
    name: 'Suzuki e-Bike',
    brand: 'Suzuki',
    launch_date: '2025-11-15',
    expected_price: 120000,
    description: 'Suzuki\'s premium electric motorcycle with sporty design.'
  },
  {
    id: 3,
    name: 'Bajaj Chetak Electric Pro',
    brand: 'Bajaj',
    launch_date: '2025-10-20',
    expected_price: 95000,
    description: 'Enhanced version of Chetak with improved range and performance.'
  },
  {
    id: 4,
    name: 'TVS iQube ST',
    brand: 'TVS',
    launch_date: '2025-09-30',
    expected_price: 85000,
    description: 'Sporty variant of iQube with better acceleration and top speed.'
  },
  {
    id: 5,
    name: 'Yamaha E01',
    brand: 'Yamaha',
    launch_date: '2025-08-15',
    expected_price: 150000,
    description: 'Yamaha\'s premium electric scooter with cutting-edge technology.'
  },
  {
    id: 6,
    name: 'Honda Activa Electric',
    brand: 'Honda',
    launch_date: '2025-07-10',
    expected_price: 90000,
    description: 'Electric version of the popular Activa with Honda\'s reliability.'
  }
];

export const mockReviews = [
  {
    id: 1,
    user_id: 2,
    bike_id: 1,
    rating: 5,
    comment: 'Excellent scooter! Very fuel efficient and reliable. Perfect for daily commuting.',
    username: 'john_doe',
    created_at: '2024-01-15'
  },
  {
    id: 2,
    user_id: 3,
    bike_id: 2,
    rating: 4,
    comment: 'Great electric scooter with good range. Charging is convenient and the build quality is solid.',
    username: 'jane_smith',
    created_at: '2024-01-16'
  }
];

// Mock localStorage for demo
class MockStorage {
  constructor() {
    this.data = {};
  }

  getItem(key) {
    return this.data[key] || null;
  }

  setItem(key, value) {
    this.data[key] = value;
  }

  removeItem(key) {
    delete this.data[key];
  }
}

export const mockStorage = new MockStorage();
