/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio = {
   name : "Georgi Yanev",
   role : "web developer",
   contacts : {
     mobile: "555555555",
     email: "georgiyanev.gy@gmail.com" ,
     github: "jumpalottahigh",
     twitter: "@jumpalottahigh",
     location: "Helsinki"
   },
   welcomeMessage: "lorem ipsum",
   skills: ["skill1", "skill2", "skill3"],
   biopic: "http://placehold.it/450x450.png",
   display: function () {
     console.log("showeed");
   }
 };

 var education = {
   schools: [{
     name: "shcool1",
     location: "Helsinki",
     degree: "Information Technology",
     majors: ["Software Engineering", "Computer Science"],
     dates: "2013-2016",
     url: "https://metropolia.fi"
   }, {
     name: "shcool2",
     location: "Helsinki",
     degree: "Information Technology",
     majors: ["Software Engineering", "Computer Science"],
     dates: "2013-2016",
     url: "https://metropolia.fi"
   }],
    onlineCourses: [{
      title: "some course",
      school: "school1",
      date: "2013-2014",
      url: "https://Udacity.com"
    }, {
      title: "some course2",
      school: "school2",
      date: "2013-2014",
      url: "https://Udacity.com"
    }],
      display: function () {
        console.log("test22");
      }
 };

var work = {
  jobs: [{
    employer: "employer1",
    title: "job title1",
    location: "Helsinki",
    dates: "in progress",
    description: "web developer"
  }, {
    employer: "employer1",
    title: "job title1",
    location: "Helsinki",
    dates: "in progress",
    description: "web developer"
  }],
  display: function () {
    console.log("jobs");
  }
};

var projects = {
  projects: [{
    title: "title1",
    dates: "2015-2016",
    description: "test descriptoio",
    images: ["http://placehold.it/400x400.png", "url2"]
  },{
    title: "title2",
    dates: "2016-2016",
    description: "test descriptoio",
    images: ["http://placehold.it/400x400.png", "url2"]
  }],
  display: function () {
    console.log("test234");
  }
};
