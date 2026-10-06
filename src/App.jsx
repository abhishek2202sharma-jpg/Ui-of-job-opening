import React from 'react'
import Card from "./Component/card.jsx";
const App = () => {
const jobs = [
  {
    brandlogo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/master/pass/google-logo.jpg",
    name: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVOd3natZBkG9RZCBZ-Vqt-TEm3Xxg9SkbJgGlSC4vJQ&s",
    name: "Microsoft",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$42/hour",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe-zbPS5MtftI9dmPU2eF521kF7sMUdAJW8WgkyeUcjw&s",
    name: "Amazon",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$30/hour",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREnJBOp2uZEviucCF0Lx3pfJvLr4Kv53o97tDMpNISXbCTYTgoDeANg4BR&s=10",
    name: "Flipkart",
    datePosted: "3 days ago",
    post: "UI Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$25/hour",
    location: "Bangalore, India"
  },
  {
    brandlogo: "https://static.vecteezy.com/system/resources/thumbnails/050/816/820/small_2x/uber-transparent-icon-free-png.png",
    name: "Uber",
    datePosted: "2 weeks ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$32/hour",
    location: "Pune, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDsc9Nxm33hddwDbjrJyEixDrXaIf3jBn66KBjQfhnDg&s",
    name: "Airbnb",
    datePosted: "4 days ago",
    post: "Web Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$48/hour",
    location: "Remote, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSb3Dp6LGqzsOBieU6FJkMhSrca1HVTzYdbk0gE3O7Ng&s",
    name: "Spotify",
    datePosted: "10 days ago",
    post: "Frontend Engineer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$28/hour",
    location: "Delhi, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBqT2UxJ4djLVVzY0TRpEs51mpiQu-DzV4camkbdjcIAz0sonDjH680Xs2&s=10",
    name: "Adobe",
    datePosted: "3 weeks ago",
    post: "React Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$40/hour",
    location: "Noida, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9wV6zsL0z8tljKW6QHFc76ACxJGmAlk8HT2tyL6-Gqw&s",
    name: "Swiggy",
    datePosted: "6 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$24/hour",
    location: "Gurgaon, India"
  },
  {
    brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFbk6Z0NlCKqGa7oeRWYWSpub5PsA16WlGb4XbTaHIhg&s",
    name: "Tesla",
    datePosted: "10 weeks ago",
    post: "Software Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$50/hour",
    location: "Remote, India"
  }
];
  return (
    <>
    <div className="parent">{
      jobs.map((elem) => {
        return < Card  company={elem.name} date={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} logo={elem.brandlogo}/>

      })
    }
    

      </div>
      </>

  )
}


export default App