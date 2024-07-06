import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    function clickHandler() {
        //logic
        if(likedCourses.includes(course.id)) {
            //pehle se like hua pada tha
            setLikedCourses( (prev) => prev.filter((cid)=> (cid !== course.id) )  );
            toast.warning("like removed");
        }
        else {
            //pehle se like nahi hai ye course
            //insert karna h ye course liked courses me 
            if(likedCourses.length === 0 ) {
                setLikedCourses([course.id]);
            }
            else {
                //non-empty pehle se
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully");
        }
    }
  return (
    <div className='w-[300px] bg-gray-800 bg-opacity-90 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105'>
    <div className='relative'>
      <img src={course.image.url} className='w-full h-48 object-cover' alt={course.title}/>
  
      <div className='w-10 h-10 bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center shadow-md'>
        <button onClick={clickHandler} className='focus:outline-none'>
          {
            likedCourses.includes(course.id) ? 
            (<FcLike fontSize="1.75rem" />)
            :(<FcLikePlaceholder fontSize="1.75rem" />)
          }
        </button>
      </div>
    </div>
  
    <div className='p-4'>
      <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
      <p className='mt-2 text-gray-300'>
        {
          course.description.length > 100 ? 
          (course.description.substr(0, 100)) + "..." :
          (course.description)
        }
      </p>
    </div>
  </div>
  
  )
}

export default Card
