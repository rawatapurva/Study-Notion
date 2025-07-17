import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from './HighlightText';
import CTAButton from "../../../components/core/HomePage/Button";
import { FaArrowRight } from 'react-icons/fa';

const InstructorSection = () => {
  return (
    <div className='mt-14'>
      <div className='flex gap-20 items-center'>

        <div className='w-[50%]'>
            <img src={Instructor}
            className='shadow-white shadow-[-20px_-20px_0_0]'
            />
        </div>

        <div className='w-[50%] flex flex-col gap-10'>
            <div className='text-4xl font-semibold w-[50%]'>
                Became an
                <HighlightText text={"Instructor"}/>
            </div>

            <p className='font-medium text-[16px] w-[80%] text-richblack-300'>
                Instructors from around the world teach millions of students on
                StudyNotion. We provide the tools and skills to teach what you
            </p>

            <div className='w-fit'>

                <CTAButton active = {true} linkto={"/signup"}>
                    <div className="flex flex-row gap-2 items-center"> 
                        Start Teaching Today
                        <FaArrowRight/>
                    </div>
                </CTAButton>

            </div>

            

        </div>


      </div>
    </div>
  )
}

export default InstructorSection
