const menu = [{
  name: "Home",
  imageurl: "/assets/images/icon1.png",
  navigateTo: '/app/Home',
  showmessage: false
},
{
  name: "Companies",
  imageurl: "/assets/images/icon2.png",
  navigateTo: '/app/companies',
  showmessage: false,
  submenu: [
    {
      name: "Companies",
      navigateTo: '/app/companies'
    },
    {
      name: "Company Profile",
      navigateTo: '/app/companyprofile'
    }
  ]
},
{
  name: "Projects",
  imageurl: "/assets/images/icon3.png",
  navigateTo: '/app/Project',
  showmessage: false
},
{
  name: "Profiles",
  imageurl: "/assets/images/icon4.png",
  navigateTo: '/app/Profiles',
  showmessage: false,
  submenu: [
    {
      name: "User Profile",
      navigateTo: '/app/UserProfile'
    },
    {
      name: "My Profile Feed",
      navigateTo: '/app/MyProfileFeed'
    }
  ]
},
{
  name: "Jobs",
  showmessage: false,
  imageurl: "/assets/images/icon5.png",
  navigateTo: '/app/Jobs'
},
{
  name: "Messages",
  imageurl: "/assets/images/icon6.png",
  showmessage: false,
  navigateTo: '#',
  title: 'View All Messsages'
},
{
  name: "Notification",
  imageurl: "/assets/images/icon7.png",
  showmessage: false,
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