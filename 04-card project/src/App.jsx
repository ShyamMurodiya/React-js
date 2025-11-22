
import Cards from "./components/Cards";
import React from 'react'

const App = () => {
const jobs = [
  {
    company: "Amazon",
    logo: "https://logo.clearbit.com/amazon.com",
    time: "5 days ago",
    title: "Senior UI/UX Designer",
    type1: "Part time",
    type2: "Senior Level",
    salary: "$120 / hr",
    location: "Nagpur, India"
  },
  {
    company: "Google",
    logo: "https://logo.clearbit.com/google.com",
    time: "2 days ago",
    title: "Frontend Developer",
    type1: "Full time",
    type2: "Mid Level",
    salary: "$150 / hr",
    location: "Pune, India"
  },
  {
    company: "Microsoft",
    logo: "https://logo.clearbit.com/microsoft.com",
    time: "1 week ago",
    title: "Cloud Engineer",
    type1: "Remote",
    type2: "Senior Level",
    salary: "$180 / hr",
    location: "Remote"
  },
  {
    company: "Tesla",
    logo: "https://logo.clearbit.com/tesla.com",
    time: "3 days ago",
    title: "React Developer",
    type1: "Full time",
    type2: "Junior Level",
    salary: "$90 / hr",
    location: "Mumbai, India"
  },
  {
    company: "Netflix",
    logo: "https://logo.clearbit.com/netflix.com",
    time: "4 days ago",
    title: "Backend Engineer",
    type1: "Part time",
    type2: "Mid Level",
    salary: "$140 / hr",
    location: "Hyderabad, India"
  },
  {
    company: "Meta",
    logo: "https://logo.clearbit.com/meta.com",
    time: "1 day ago",
    title: "Product Designer",
    type1: "Full time",
    type2: "Senior Level",
    salary: "$170 / hr",
    location: "Bangalore, India"
  },

  // ⭐ NEW 4 JOBS WITH LOGOS
  {
    company: "Apple",
    logo: "https://logo.clearbit.com/apple.com",
    time: "6 days ago",
    title: "iOS Developer",
    type1: "Full time",
    type2: "Senior Level",
    salary: "$160 / hr",
    location: "Chennai, India"
  },
  
  {
    company: "Flipkart",
    logo: "https://logo.clearbit.com/flipkart.com",
    time: "7 days ago",
    title: "Full Stack Developer",
    type1: "Remote",
    type2: "Mid Level",
    salary: "$130 / hr",
    location: "Remote"
  }
];

  return (
    <div className="parent">
        
          {jobs.map(function(ele){
            return <Cards 
            comp={ele.company}
            logo={ele.logo}
            time={ele.time}
            title={ele.title}
            type1={ele.type1}
            type2={ele.type2}
            salary={ele.salary}
            location={ele.location}/>
          })}
       
      </div>
  )
}

export default App
