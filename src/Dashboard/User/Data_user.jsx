import axios from "axios";

const get_user = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:8000/users/');
    if (response.status === 200) {
      console.log(response.data);
      return response.data.users;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return []; // or handle the error accordingly
  }
};

const fetchData = async () => {
  try {
    const new_data = await get_user();
    if (Array.isArray(new_data)) {
      const filteredData = new_data.filter((e) => !e.is_staff);
      return filteredData;
      // Do something with filteredData
    }
  } catch (error) {
    console.error("Error fetching and filtering user data:", error);
    return []; // or handle the error accordingly
  }
};

// export const data = get_user();

export const data =  [
    {
      id: 1,
      username: 'Wilmette',
      photo: './User/einstein.jpg',
      email: 'wmaasz0@jalbum.net',
      score: 2,
    },
    {
      id: 2,
      username: 'JohnDoe',
      photo: './img/john.png',
      email: 'john.doe@example.com',
      score: 3,
    },
    {
      id: 3,
      username: 'AliceSmith',
      photo: './img/alice.png',
      email: 'alice.smith@example.com',
      score: 5,
    },
    {
      id: 4,
      username: 'BobJohnson',
      photo: './img/bob.png',
      email: 'bob.johnson@example.com',
      score: 7,
    },
    {
      id: 5,
      username: 'EvaGreen',
      photo: './img/eva.png',
      email: 'eva.green@example.com',
      score: 23,
    },
    {
      id: 6,
      username: 'AlexBrown',
      photo: './img/alex.png',
      email: 'alex.brown@example.com',
      score: 12,
    },
    {
      id: 7,
      username: 'SophieWhite',
      photo: './img/sophie.png',
      email: 'sophie.white@example.com',
      score: 15,
    },
    {
      id: 8,
      username: 'DanielBlack',
      photo: './img/daniel.png',
      email: 'daniel.black@example.com',
      score: 16,
    },
    {
      id: 9,
      username: 'OliviaJones',
      photo: './img/olivia.png',
      email: 'olivia.jones@example.com',
      score: 6,
    },
    {
      id: 10,
      username: 'WilliamTaylor',
      photo: './img/william.png',
      email: 'william.taylor@example.com',
      score: 5,
    },
  ];
  