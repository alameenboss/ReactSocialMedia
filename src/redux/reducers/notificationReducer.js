const notifications = [{
  userimageurl: 'reactsocialmedia/assets/images/resources/ny-img1.png',
  username: 'Jassica William',
  message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.',
  time: '2 min ago'
},
{
  userimageurl: 'reactsocialmedia/assets/images/resources/ny-img2.png',
  username: 'Jassica William',
  message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.',
  time: '2 min ago'
},
{
  userimageurl: 'reactsocialmedia/assets/images/resources/ny-img3.png',
  username: 'Jassica William',
  message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.',
  time: '2 min ago'
}]

const notificationReducer = (state = notifications, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default notificationReducer;