const company =
  {
    cover: "reactsocialmedia/assets/images/resources/company-cover.jpg",
    name: "Facebook Inc.",
    establish: "Established Since 2009",
    img: "reactsocialmedia/assets/images/resources/company-profile.png",
    dpimg:"reactsocialmedia/assets/images/resources/company-pic.png",
    following:34,
    followers:155,
    sociallinks : [
      {company:'Website',Icon:'la la-globe',website:'www.example.com'},
      {company:'Facebook',Icon:'la la-facebook-square',website:'Http://www.facebook.com/john'},
      {company:'Twitter',Icon:'la la-twitter',website:'Http://www.Twitter.com/john'},
      {company:'GooglePlus',Icon:'la la-google-plus-square',website:'Http://www.googleplus.com/john'},
      {company:'behance-square',Icon:'la la-behance-square',website:'Http://www.behance.com/john'},
      {company:'pinterest',Icon:'la la-pinterest',website:'Http://www.pinterest.com/john'},
      {company:'pinterest',Icon:'la la-pinterest',website:'Http://www.instagram.com/john'},
      {company:'youtube',Icon:'la la-youtube',website:'Http://www.youtube.com/john'}
    ],
    sections:[
      {name:'Feed',icon:'reactsocialmedia/assets/images/ic1.png'},
      {name:'Info',icon:'reactsocialmedia/assets/images/ic2.png'},
      {name:'Portfolio',icon:'reactsocialmedia/assets/images/ic3.png'},
    ]
  };

const companyProfileReducer = (state = company, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default companyProfileReducer;
