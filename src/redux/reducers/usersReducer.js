const users = [
  {
    name: "Jessica William",
    work: "Graphic Designer",
    img: "/assets/images/resources/s1.png"
  },
  {
    name: "Alameen Shaik Dawood",
    work: "PHP Developer",
    img: "/assets/images/resources/s2.png"
  },
  {
    name: "Poonam",
    work: "Wordpress Developer",
    img: "/assets/images/resources/s3.png"
  },
  {
    name: "Bill Gates",
    work: "C & C++ Developer",
    img: "/assets/images/resources/s4.png"
  },
  {
    name: "Jessica William",
    work: "Graphic Designer",
    img: "/assets/images/resources/s5.png"
  },
  {
    name: "Alameen Shaik Dawood",
    work: "PHP Developer",
    img: "/assets/images/resources/s6.png"
  }]

const usersReducer = (state = users, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default usersReducer;