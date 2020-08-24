const messages = [{
  userimageurl: '/assets/images/resources/ny-img1.png',
  username: 'Jassica William',
  message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.',
  time: '2 min ago'
},
{
  userimageurl: '/assets/images/resources/ny-img2.png',
  username: 'Jassica William',
  message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.',
  time: '2 min ago'
},
{
  userimageurl: '/assets/images/resources/ny-img3.png',
  username: 'Jassica William',
  message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.',
  time: '2 min ago'
}]

const messageReducer = (state = messages, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default messageReducer;