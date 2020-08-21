const jobs = [
  {
    title: "Senior Product Designer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..",
    Rate: "$25/hr"
  },
  {
    title: "Senior UI / UX Designer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..",
    Rate: "$25/hr"
  }, {
    title: "Junior Seo Designer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..",
    Rate: "$25/hr"
  }, {
    title: "Senior PHP Designer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..",
    Rate: "$25/hr"
  }, {
    title: "Senior Developer Designer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit..",
    Rate: "$25/hr"
  }]

const jobsReducer = (state = jobs, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default jobsReducer;