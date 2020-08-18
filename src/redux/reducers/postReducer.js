const posts = [{
  ImageUrl: 'reactsocialmedia/assets/images/resources/us-pic.png',
  Name: 'John Doe',
  PostedTime: '3 min ago',
  Tags: [{ Icon: 'reactsocialmedia/assets/images/icon8.png', Text: 'Epic Coder' },
  { Icon: 'reactsocialmedia/assets/images/icon9.png', Text: 'India' }],
  Designation: 'Senior Wordpress Developer',
  JobType: 'Full Time',
  Rate: '$30 / hr',
  Technology: ['HTML', 'PHP', 'CSS', 'Javascript', 'Wordpress'],
  PostText: 'The content should be relevant to your product and users. When people are able to read the content, they will give you feedback about the copy and how they feel about it. This will push you to reflect on the type of messages you communicate and the tone of voice that makes people trust your platform.',
},
{
  ImageUrl: 'reactsocialmedia/assets/images/resources/us-pic.png',
  Name: 'John Deo',
  PostedTime: '3 min ago',
  Tags: [{ Icon: 'reactsocialmedia/assets/images/icon8.png', Text: 'Epic Coder' },
  { Icon: 'reactsocialmedia/assets/images/icon9.png', Text: 'India' }],
  Designation: 'Senior Wordpress Developer',
  JobType: 'Full Time',
  Rate: '$30 / hr',
  Technology: ['HTML', 'PHP', 'CSS', 'Javascript', 'Wordpress'],
  PostText: 'Because no one understands Latin nowadays, designers tend to cut the lorem ipsum text when it pleases them to keep their designs nice and tidy. In reality, content is not the same size, you might have restrictions like between 400 and 600 words but nobody will ask you to write a 600 word article on the dot.',
},
{
  ImageUrl: 'reactsocialmedia/assets/images/resources/us-pic.png',
  Name: 'John Deo',
  PostedTime: '5 min ago',
  Tags: [{ Icon: 'reactsocialmedia/assets/images/icon8.png', Text: 'Epic Coder' },
  { Icon: 'reactsocialmedia/assets/images/icon9.png', Text: 'India' }],
  Designation: 'Senior Dot Developer',
  JobType: 'Full Time',
  Rate: '$30 / hr',
  Technology: ['HTML', 'DotNet', 'CSS', 'Javascript', 'Wordpress'],
  PostText: 'Your clients usually know their field better than you do. They have years of experience and can add a lot of value to your design. Have them involved in the process but also raise any questions or doubts you have regarding the copy. Ask for resources and feedback. Be specific otherwise, they wouldn’t know what you expect from them.',
}]

const postReducer = (state = posts, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default postReducer;