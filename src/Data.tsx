interface IState {
  usersData: {
    userId: number;
    firstName: string;
    lastName: string;
    designation: string;
    location: string;
    connections: number;
    profilePicture: string;
    contactInfo: {
      yourProfile: string;
      email: string;
      phoneNumber: string;
    };
    posts: [
      {
        postId: number;
        content: string;
        attachment: string;
      }
    ];
    messages: [
      {
        to: string;
        from: string;
      }
    ];
    isFavorite: boolean,
  }[];
}

const usersData: IState["usersData"] = [
  {
    userId: 1,
    firstName: "Naga Prasanna",
    lastName: "Darapureddy",
    designation: "Full Stack Developer",
    location: "Hyderabad, Telangana, India",
    connections: 350,
    profilePicture:
      "https://raajratna.com/wp-content/uploads/2019/01/person2.jpg",
    contactInfo: {
      yourProfile: "https://www.linkedin.com/in/prasanna-darapureddy/",
      email: "prasannna.darapureddy@extwebtech.in",
      phoneNumber: "9999999999",
    },
    posts: [
      {
        postId: 1,
        content: "",
        attachment: "",
      },
    ],
    messages: [
      {
        to: "",
        from: "",
      },
    ],
    isFavorite: false,
  },
  {
    userId: 2,
    firstName: "Sukeshini",
    lastName: "Bavge",
    designation: "Frontend React Developer",
    location: "Banglore, Karnataka, India",
    connections: 310,
    profilePicture:
      "https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg",
    contactInfo: {
      yourProfile: "https://www.linkedin.com/in/sukeshini-bavge-52b0ab27b/",
      email: "sukeshini.bavge@extwebtech.in",
      phoneNumber: "9986634599",
    },
    posts: [
      {
        postId: 1,
        content: "",
        attachment: "",
      },
    ],
    messages: [
      {
        to: "",
        from: "",
      },
    ],
    isFavorite: false,
  },
  {
    userId: 3,
    firstName: "Karunasri",
    lastName: "Tulugu",
    designation: "Associate Software Engineer",
    location: "Vizag, Andhra Pradesh, India",
    connections: 260,
    profilePicture:
      "https://sanjaytools.com/wp-content/uploads/2019/01/person5.jpg",
    contactInfo: {
      yourProfile: "https://www.linkedin.com/in/karunasri-tulugu-a268212a6/",
      email: "karunasri.tulugu@extwebtech.in",
      phoneNumber: "8797596679",
    },
    posts: [
      {
        postId: 1,
        content: "",
        attachment: "",
      },
    ],
    messages: [
      {
        to: "",
        from: "",
      },
    ],
    isFavorite: false,
  },
  {
    userId: 4,
    firstName: "Milan Krushna Das",
    lastName: "Mohapatra",
    designation: "Trainee Software Engineer",
    location: "Hyderabad, Telangana, India",
    connections: 220,
    profilePicture:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    contactInfo: {
      yourProfile: "https://www.linkedin.com/in/milan-krushna-a268212a6/",
      email: "milankrushna.mohapatra@extwebtech.in",
      phoneNumber: "9999999999",
    },
    posts: [
      {
        postId: 1,
        content: "",
        attachment: "",
      },
    ],
    messages: [
      {
        to: "",
        from: "",
      },
    ],
    isFavorite: false,
  },
  {
    userId: 5,
    firstName: "Milan Krushna Das",
    lastName: "Mohapatra",
    designation: "Trainee Software Engineer",
    location: "Hyderabad, Telangana, India",
    connections: 220,
    profilePicture:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    contactInfo: {
      yourProfile: "https://www.linkedin.com/in/milan-krushna-a268212a6/",
      email: "milankrushna.mohapatra@extwebtech.in",
      phoneNumber: "9999999999",
    },
    posts: [
      {
        postId: 1,
        content: "",
        attachment: "",
      },
    ],
    messages: [
      {
        to: "",
        from: "",
      },
    ],
    isFavorite: false,
  },
  {
    userId: 6,
    firstName: "Milan Krushna Das",
    lastName: "Mohapatra",
    designation: "Trainee Software Engineer",
    location: "Hyderabad, Telangana, India",
    connections: 220,
    profilePicture:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    contactInfo: {
      yourProfile: "https://www.linkedin.com/in/milan-krushna-a268212a6/",
      email: "milankrushna.mohapatra@extwebtech.in",
      phoneNumber: "9999999999",
    },
    posts: [
      {
        postId: 1,
        content: "",
        attachment: "",
      },
    ],
    messages: [
      {
        to: "",
        from: "",
      },
    ],
    isFavorite: false,
  },
  {
    userId: 7,
    firstName: "Milan Krushna Das",
    lastName: "Mohapatra",
    designation: "Trainee Software Engineer",
    location: "Hyderabad, Telangana, India",
    connections: 220,
    profilePicture:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    contactInfo: {
      yourProfile: "https://www.linkedin.com/in/milan-krushna-a268212a6/",
      email: "milankrushna.mohapatra@extwebtech.in",
      phoneNumber: "9999999999",
    },
    posts: [
      {
        postId: 1,
        content: "",
        attachment: "",
      },
    ],
    messages: [
      {
        to: "",
        from: "",
      },
    ],
    isFavorite: false,
  },
  {
    userId: 8,
    firstName: "Milan Krushna Das",
    lastName: "Mohapatra",
    designation: "Trainee Software Engineer",
    location: "Hyderabad, Telangana, India",
    connections: 220,
    profilePicture:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    contactInfo: {
      yourProfile: "https://www.linkedin.com/in/milan-krushna-a268212a6/",
      email: "milankrushna.mohapatra@extwebtech.in",
      phoneNumber: "9999999999",
    },
    posts: [
      {
        postId: 1,
        content: "",
        attachment: "",
      },
    ],
    messages: [
      {
        to: "",
        from: "",
      },
    ],
    isFavorite: false,
  },
  {
    userId: 9,
    firstName: "Milan Krushna Das",
    lastName: "Mohapatra",
    designation: "Trainee Software Engineer",
    location: "Hyderabad, Telangana, India",
    connections: 220,
    profilePicture:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    contactInfo: {
      yourProfile: "https://www.linkedin.com/in/milan-krushna-a268212a6/",
      email: "milankrushna.mohapatra@extwebtech.in",
      phoneNumber: "9999999999",
    },
    posts: [
      {
        postId: 1,
        content: "",
        attachment: "",
      },
    ],
    messages: [
      {
        to: "",
        from: "",
      },
    ],
    isFavorite: false,
  },
  {
    userId: 10,
    firstName: "Milan Krushna Das",
    lastName: "Mohapatra",
    designation: "Trainee Software Engineer",
    location: "Hyderabad, Telangana, India",
    connections: 220,
    profilePicture:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    contactInfo: {
      yourProfile: "https://www.linkedin.com/in/milan-krushna-a268212a6/",
      email: "milankrushna.mohapatra@extwebtech.in",
      phoneNumber: "9999999999",
    },
    posts: [
      {
        postId: 1,
        content: "",
        attachment: "",
      },
    ],
    messages: [
      {
        to: "",
        from: "",
      },
    ],
    isFavorite: false,
  },
  {
    userId: 11,
    firstName: "Milan Krushna Das",
    lastName: "Mohapatra",
    designation: "Trainee Software Engineer",
    location: "Hyderabad, Telangana, India",
    connections: 220,
    profilePicture:
      "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
    contactInfo: {
      yourProfile: "https://www.linkedin.com/in/milan-krushna-a268212a6/",
      email: "milankrushna.mohapatra@extwebtech.in",
      phoneNumber: "9999999999",
    },
    posts: [
      {
        postId: 1,
        content: "",
        attachment: "",
      },
    ],
    messages: [
      {
        to: "",
        from: "",
      },
    ],
    isFavorite: false,
  },
];

export default usersData;
