const companies = [
  {
    id: '1',
    name: "Facebook Inc.",
    establish: "Establish Feb, 2004",
    img: "assets/images/resources/cmp-icon.png"
  },
  {
    id: '2',
    name: "Google Inc.",
    establish: "Establish Feb, 2004",
    img: "assets/images/resources/cmp-icon1.png",
  },
  {
    id: '3',
    name: "Pinterest",
    establish: "Establish Feb, 2004",
    img: "assets/images/resources/cmp-icon2.png",
  },
  {
    id: '4',
    name: "Microsoft Inc.",
    establish: "Establish Feb, 2004",
    img: "assets/images/resources/cmp-icon3.png",
  },
  {
    id: '5',
    name: "Line Inc.",
    establish: "Establish Feb, 2004",
    img: "assets/images/resources/cmp-icon4.png",
  },
  {
    id: '6',
    name: "Linked In",
    establish: "Establish Feb, 2004",
    img: "assets/images/resources/cmp-icon5.png",
  },
  {
    id: '7',
    name: "Apple Inc.",
    establish: "Establish Feb, 2004",
    img: "assets/images/resources/cmp-icon6.png",
  },
  {
    id: '8',
    name: "Samsung Inc.",
    establish: "Establish Feb, 2004",
    img: "assets/images/resources/cmp-icon7.png",
  },
  {
    id: '9',
    name: "Oppo",
    establish: "Establish Feb, 2004",
    img: "assets/images/resources/cmp-icon8.png",
  },
  {
    id: '10',
    name: "Game loft",
    establish: "Establish Feb, 2004",
    img: "assets/images/resources/cmp-icon9.png",
  },
  {
    id: '11',
    name: "Android Inc.",
    establish: "Establish Feb, 2004",
    img: "assets/images/resources/cmp-icon10.png",
  },
  {
    id: '12',
    name: "Oracle",
    establish: "Establish Feb, 2004",
    img: "assets/images/resources/cmp-icon11.png",
  },
];

const companiesReducer = (state = companies, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default companiesReducer;
