const menu = [{
    name: "Home",
    imageurl: "reactsocialmedia/assets/images/icon1.png",
    navigateTo: '/Home',
    showmessage:false
  },
  {
    name: "Companies",
    imageurl: "reactsocialmedia/assets/images/icon2.png",
    navigateTo: '/companies',
    showmessage:false,
    submenu: [
      {
        name: "Companies",
        navigateTo: '/companies'
      },
      {
        name: "Company Profile",
        navigateTo: '/companyprofile'
      }
    ]
  }, 
  {
    name: "Projects",
    imageurl: "reactsocialmedia/assets/images/icon3.png",
    navigateTo: '/Project',
    showmessage:false
  },
  {
    name: "Profiles",
    imageurl: "reactsocialmedia/assets/images/icon4.png",
    navigateTo: '/Profiles',
    showmessage:false,
    submenu: [
      {
        name: "User Profile",
        navigateTo: '/UserProfile'
      },
      {
        name: "My Profile Feed",
        navigateTo: '/MyProfileFeed'
      }
    ]
  },
  {
    name: "Jobs",
    showmessage:false,
    imageurl: "reactsocialmedia/assets/images/icon5.png",
    navigateTo: '/Jobs'
  },
  {
    name: "Messages",
    imageurl: "reactsocialmedia/assets/images/icon6.png",      
    showmessage:false,
    navigateTo: '#',
    title: 'View All Messsages'
  },
  {
    name: "Notification",
    imageurl: "reactsocialmedia/assets/images/icon7.png",
    showmessage:false,
    navigateTo: '#',
    title: 'View All Notification'
  }]

  const menuReducer = (state = menu, action) => {
    switch (action.type) {   
      default:
          return state;
  }
}

export default menuReducer;