const users = [
  {
    name: "Jessica William",
    work: "Graphic Designer",
    img: "reactsocialmedia/assets/images/resources/s1.png"
  },
  {
    name: "John Doe",
    work: "PHP Developer",
    img: "reactsocialmedia/assets/images/resources/s2.png"
  },
  {
    name: "Poonam",
    work: "Wordpress Developer",
    img: "reactsocialmedia/assets/images/resources/s3.png"
  },
  {
    name: "Bill Gates",
    work: "C & C++ Developer",
    img: "reactsocialmedia/assets/images/resources/s4.png"
  },
  {
    name: "Jessica William",
    work: "Graphic Designer",
    img: "reactsocialmedia/assets/images/resources/s5.png"
  },
  {
    name: "John Doe",
    work: "PHP Developer",
    img: "reactsocialmedia/assets/images/resources/s6.png"
  }]

const usersReducer = (state = users, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default usersReducer;