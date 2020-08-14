const posts = [{
  ImageUrl: 'assets/images/resources/us-pic.png',
  Name : 'John Doe',
  PostedTime :'3 min ago',
  Tags:[{Icon:'assets/images/icon8.png' ,Text : 'Epic Coder'},
  {Icon:'assets/images/icon9.png' ,Text : 'India'}],
  Designation:'Senior Wordpress Developer',
  JobType:'Full Time',
  Rate:'$30 / hr',
  Technology:['HTML','PHP','CSS','Javascript','Wordpress'],
  PostText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet...',
},
{
  ImageUrl: 'assets/images/resources/us-pic.png',
  Name : 'Alameen',
  PostedTime :'3 min ago',
  Tags:[{Icon:'assets/images/icon8.png' ,Text : 'Epic Coder'},
  {Icon:'assets/images/icon9.png' ,Text : 'India'}],
  Designation:'Senior Wordpress Developer',
  JobType:'Full Time',
  Rate:'$30 / hr',
  Technology:['HTML','PHP','CSS','Javascript','Wordpress'],
  PostText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet...',
},
{
  ImageUrl: 'assets/images/resources/us-pic.png',
  Name : 'Hasina',
  PostedTime :'5 min ago',
  Tags:[{Icon:'assets/images/icon8.png' ,Text : 'Epic Coder'},
  {Icon:'assets/images/icon9.png' ,Text : 'India'}],
  Designation:'Senior Dot Developer',
  JobType:'Full Time',
  Rate:'$30 / hr',
  Technology:['HTML','DotNet','CSS','Javascript','Wordpress'],
  PostText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet...',
}]

  const postReducer = (state = posts, action) => {
    switch (action.type) {   
        default:
            return state;
    }
}

export default postReducer;