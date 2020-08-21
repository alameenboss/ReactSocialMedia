const company =
{
  cover: "reactsocialmedia/assets/images/resources/company-cover.jpg",
  name: "Facebook Inc.",
  establish: "Established Since 2009",
  img: "reactsocialmedia/assets/images/resources/company-profile.png",
  dpimg: "reactsocialmedia/assets/images/resources/company-pic.png",
  following: 34,
  followers: 155,
  sociallinks: [
    { company: 'Website', Icon: 'la la-globe', website: 'www.example.com' },
    { company: 'Facebook', Icon: 'la la-facebook-square', website: 'Http://www.facebook.com/john' },
    { company: 'Twitter', Icon: 'la la-twitter', website: 'Http://www.Twitter.com/john' },
    { company: 'GooglePlus', Icon: 'la la-google-plus-square', website: 'Http://www.googleplus.com/john' },
    { company: 'behance-square', Icon: 'la la-behance-square', website: 'Http://www.behance.com/john' },
    { company: 'pinterest', Icon: 'la la-pinterest', website: 'Http://www.pinterest.com/john' },
    { company: 'pinterest', Icon: 'la la-pinterest', website: 'Http://www.instagram.com/john' },
    { company: 'youtube', Icon: 'la la-youtube', website: 'Http://www.youtube.com/john' }
  ],
  sections: [
    { name: 'Feed', icon: 'reactsocialmedia/assets/images/ic1.png' },
    { name: 'Info', icon: 'reactsocialmedia/assets/images/ic2.png' },
    { name: 'Portfolio', icon: 'reactsocialmedia/assets/images/ic3.png' },

    { name: 'Jobs', icon: '/reactsocialmedia/assets/images/ic4.png' },
    { name: 'Bids', icon: '/reactsocialmedia/assets/images/ic5.png' },
    { name: 'Reviews', icon: '/reactsocialmedia/assets/images/review.png' },
    { name: 'Payment', icon: '/reactsocialmedia/assets/images/ic6.png' },

  ],
  portfolio: [
    { name: '', img: 'reactsocialmedia/assets/images/resources/pf-img1.jpg' },
    { name: '', img: 'reactsocialmedia/assets/images/resources/pf-img2.jpg' },
    { name: '', img: 'reactsocialmedia/assets/images/resources/pf-img3.jpg' },
    { name: '', img: 'reactsocialmedia/assets/images/resources/pf-img4.jpg' },
    { name: '', img: 'reactsocialmedia/assets/images/resources/pf-img5.jpg' },
    { name: '', img: 'reactsocialmedia/assets/images/resources/pf-img6.jpg' },
    { name: '', img: 'reactsocialmedia/assets/images/resources/pf-img7.jpg' },
    { name: '', img: 'reactsocialmedia/assets/images/resources/pf-img8.jpg' },
    { name: '', img: 'reactsocialmedia/assets/images/resources/pf-img9.jpg' },
    { name: '', img: 'reactsocialmedia/assets/images/resources/pf-img10.jpg' },
  ],
  gallery: [
    'reactsocialmedia/assets/images/resources/pf-gallery1.png',
    'reactsocialmedia/assets/images/resources/pf-gallery2.png',
    'reactsocialmedia/assets/images/resources/pf-gallery3.png',
    'reactsocialmedia/assets/images/resources/pf-gallery4.png',
    'reactsocialmedia/assets/images/resources/pf-gallery5.png',
    'reactsocialmedia/assets/images/resources/pf-gallery6.png',
    'reactsocialmedia/assets/images/resources/pf-gallery7.png',
    'reactsocialmedia/assets/images/resources/pf-gallery8.png',
    'reactsocialmedia/assets/images/resources/pf-gallery9.png',
    'reactsocialmedia/assets/images/resources/pf-gallery10.png',
    'reactsocialmedia/assets/images/resources/pf-gallery11.png',
    'reactsocialmedia/assets/images/resources/pf-gallery12.png',
  ]
};

const companyProfileReducer = (state = company, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default companyProfileReducer;
