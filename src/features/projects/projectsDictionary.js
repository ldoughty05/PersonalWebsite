export const projects = [
  {
    title: 'Web Server with RESTful API',
    year: '2025',
    skills: ['Express.js', 'Typescript', 'REST APIs', 'Networking', 'Race Conditions', 'User Authentication'],
    bullet_points: [
      "Express and Typescript backend for React web app",
      "Handles authentication and content delivery to multiple devices.",
    ],
    job_categories: {
      'embedded': 1,
      'networking': 2,
      'web_backend': 3,
    },
    isImportant: false,
  },
  {
    title: 'Carnegie Mellon University PicoCTF',
    year: '2025',
    skills: ['Cybersecurity', 'Burp Suite', 'Linux', 'REST APIs', 'bash'],
    bullet_points: [
      "Cybersecurity, REST API, and bash fundamentals like curl, ssh, grep, and netcat.",
      "Utilized Burp Suite to intercept and modify http requests to analyze a web server’s backend.",
      "Solved all sixty-two “easy” CTF challenges."
    ],
    job_categories: {
      'cybersecurity': 2,
      'networking': 1,
      'web_backend': 1,
    },
    isImportant: false,
    article_link: "https://www.linkedin.com/posts/lukedoughty_despite-the-growing-uneasiness-of-the-software-activity-7287136156956213248-8wsi?utm_source=share&utm_medium=member_desktop",
  },
  {
    title: 'Embedded Combo Lock',
    year: '2024',
    skills: ['Embedded Systems', 'C', 'Interrupts', 'Memory Mapped I/O', 'Raspberry Pi', 'State Machines', 'Teamwork'],
    description: 'Combination Lock with a rotary encoder, a servomotor and raspberry pi pico. Users can reset the combination with a numeric keypad.',
    bullet_points: [
      "Hardware includes a rotary encoder, servomotor, digital keypad, and Raspberry Pi Pico.",
      "Takes input from rotary encoder using memory mapped i/o.",
      "Watchdog timer for LED feedback.",
    ],
    job_categories: {
      'embedded': 3,
    },
    source_link: 'https://github.com/Minimac21/combolocklab',
    isImportant: true,
  },
  {
    title: 'Hashing with Trading Cards',
    year: '2024',
    skills: ['Hashing','JSON', 'React', 'Redux', 'Javascript', 'Search Engines'],
    description: 'Manage your trading cards. Add and remove cards. Search engine built with a hash map.',
    bullet_points: [
      "React+Redux app to upload and manage your trading card collection.",
      "Search engine using custom hash functions.",
      "JSON file for persistent storage of trading card data.",
    ],
    job_categories: {
      'web_backend': 3,
      'web_frontend': 1,
      'embedded': 1,
      'game': 1,
      'cybersecurity': 1,
    },
    isImportant: false,
    demo_link: 'http://tradingcards.lukedoughty.me/',

  },
  {
    title: 'Knapsack Optimizer',
    year: '2024',
    skills: ['Dynamic Programming', 'React', 'Redux', 'Javascript'],
    description: 'Assign a tastiness score to candies from a storefront. Optimizer tells you which candies to buy to maximize total tastiness.',
    demo_link: 'https://candy.lukedoughty.me/',
    isImportant: false,
  },
  {
    title: 'Mobile App UX Team',
    year: '2024',
    skills: ['UX User Testing', 'React', 'Redux', 'Javascript', 'Teamwork'],
    description: 'All of your music in one place. Combine your Apple Music, Spotify, Soundcloud and local music files in one library.',
    demo_link: 'https://musicplayer.lukedoughty.me/',
    article_link: 'https://lukedoughty.me/pdfs/Team_3_Final_Report.pdf',
    bullet_points: [
      "Conducting user studies to evaluate the usability of a UI and making iterations to improve UX.",
      "Doing research on user trends and making UI optimizations according to their behavior.",
      "Meeting with potential users to discuss their needs.",
    ],
    job_categories: {
      'web_frontend': 5,
      'entrepreneurship': 3,
    },
    isImportant: true,
  },
  {
    title: 'This Website!',
    year: '2024',
    skills: ['React', 'Redux', 'Javascript'],
    description: "A creative space to keep track of my projects!",
  },
  {
    title: 'Ag Infrastructure Segmentation Model',
    year: '2024',
    skills: ['Tensorflow', 'Keras', 'Javascript', 'Parallel Programming', 'Apache Beam', 'Google Cloud', 'REST APIs', 'AI/ML'],
    description: 'Deep Learning Model using Google Earth Engine and Vertex Ai Platform to segment central pivot irrigators from satellite imagery',
    article_link: "/articles/CPISummer",
    bullet_points: [
      "Deep learning model using Python, Google Earth Engine, and Vertex AI platform to segment central pivot irrigators from satellite imagery.",
      "U-Net convolutional neural network used to detect agricultural infrastructure.",
      "Useful in the event of a natural disaster, rural communities can be accounted for to get relief funding.",
    ],
    job_categories: {
      'ai': 8,
      'entrepreneurship': 3,
      'web_frontend': 1,
      'web_backend': 3,
    },
    isImportant: true,

  },
  {
    title: 'NEBP High Altitude Balloon',
    year: '2024',
    skills: ['C', 'Arduino', 'Teensy4.1', 'Teamwork', 'Embedded Systems'],
    description: 'Log readings from various sensors connected to a Teensy 4.1 as part of the NASA National Eclipse Balloning Project.',
    bullet_points: [
      "Team project in collaboration with NASA to film and take scientific readings during the 2024 total solar eclipse.",
      "Created drivers that pull data from sensors using I2C and store that data on a microSD.",
      "360 camera, as well as temperature, pressure, altitude, and UV radiation sensors.",
    ],
    job_categories: {
      'embedded': 5,
    },
    article_link: "https://www.linkedin.com/posts/lukedoughty_nebp-activity-7183637700447465472-6yyz?utm_source=share&utm_medium=member_desktop",
    isImportant: true,

  },
  {
    title: 'Global Trip Planner',
    year: '2024',
    skills: ['Python', 'SQL', 'Kivy', 'Teamwork', 'Databases', 'REST APIs'],
    description: 'Helped Herbie Husker circumnavigate the globe by finding the optimal connecting flights based on weather data and real airport location data.',
    bullet_points: [
      "Python app for calculating the optimal combination of flights to reach a faraway destination.",
      "Realtime weather data from open-source REST API.",
      "SQL database stores flight airport, and flight data.",
    ],
    job_categories: {
      'ai': 2,
      'entrepreneurship': 1,
      'web_backend': 3,
    },
    isImportant: true,
  },
  {
    title: 'Character Classifier',
    year: '2024',
    skills: ['Python', 'Tensorflow', 'Keras', 'AI/ML'],
    description: 'Deep learning CNN MNIST classifier with a GUI so you can try it with your own handwriting.',
    source_link: 'https://github.com/ldoughty05/character_classifier',
    article_link: 'https://lukedoughty.me/pdfs/MNIST_Report.pdf',
  },
  {
    title: 'Deep Learning Basics',
    year: '2023',
    skills: ['Python', 'AI/ML'],
    description: "Text generation, sentiment analysis, and more. Following along with 'Deep Learning' by Andrew W. Trask.",
    source_link: 'https://github.com/ldoughty05/Deep-Learning',
  },
  {
    title: '.wav File Formatter',
    year: '2023',
    skills: ['Bash', 'FFmpeg'],
    description: 'Bash script to convert a folder full of .WAV files to .MP3 along with correct metadata derived from filename.',
  },
  {
    title: 'Boid Simulator',
    year: '2023',
    skills: ['C++', 'OpenGL'],
    description: 'Simulates the flocking behavior of birds in 2d space.',
    source_link: 'https://github.com/ldoughty05/boidSim',
  },
  {
    title: 'Snake Game with Evolutionary AI',
    year: '2022',
    skills: ['Java', 'AI/ML'],
    description: 'The classic snake game, but the game learns to play itself as the weights for the snake AI are randomly adjusted each generation',
  },
  {
    title: 'SwimSim',
    year: '2021',
    skills: ['C#', 'Unity Game Engine', 'VR'],
    description: 'Go swimming and play water polo in this physics based VR game!',
    bullet_points: [
      "Simulated a realistic swimming experience in Unity Game Engine.",
      "Users can play games like water polo, where objects and the user have realistic buoyancy.",
    ],
    job_categories: {
      'game': 2,
      'web-backend': 1,
    }
  }
];
