const myInfo = {
  name: "John Doe",
  work: "Graphic Designer at Self Employed",
  following: 34,
  followers: 155,
  img: "reactsocialmedia/assets/images/resources/user-pic.png",
  img2: "reactsocialmedia/assets/images/resources/user.png",
  firstName: "John"
}

const myInfoReducer = (state = myInfo, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default myInfoReducer;





















