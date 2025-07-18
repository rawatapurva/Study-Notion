import React from 'react'
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg"
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg"
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg"
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg"
import timelineImage from "../../../assets/Images/TimelineImage.png"

const timeline = [
    {
        Logo: Logo1,
        Heading: "Leadership",
        Description: "Fully committed to the business company"
    },
    {
        Logo: Logo2,
        Heading: "Leadership",
        Description: "Fully committed to the business company"
    },
    {
        Logo: Logo3,
        Heading: "Leadership",
        Description: "Fully committed to the business company"
    },
    {
        Logo: Logo4,
        Heading: "Leadership",
        Description: "Fully committed to the business company"
    },
]

const TimelineSection = () => {
  return (
    <div>
        <div className='flex gap-15 items-center'>

            <div className='w-[45%] flex flex-col gap-5'>
                {
                    timeline.map((element, index) => {
                        return (
                            <div className="flex flex-col lg:gap-3" key={index}>

                                <div className='flex gap-6' key={index}>
                                    <div className='w-[50px] h-[50px] bg-white rounded-full flex justify-center items-center shadow-[#00000012] shadow-[0_0_62px_0]'>
                                        <img src={element.Logo}/>
                                    </div>

                                    <div>
                                        <h2 className='font-semibold text-[18px]'>{element.Heading}</h2>
                                        <p className='text-base'>{element.Description}</p>
                                    </div>
                                </div>

                                <div
                                className={`hidden ${
                                timeline.length - 1 === index ? "hidden" : "lg:block"
                                }  h-14 border-dotted border-r border-richblack-100 bg-richblack-400/0 w-[26px]`}
                                >
                                </div>

                            </div>

                  
                        )
                    })
                }

            </div>

            <div className='relative shadow-blue-200 '>

                <img src={timelineImage}
                className='shadow-white object-cover h-fit'
                />

                <div className='absolute bg-caribbeangreen-700 flex text-white uppercase py-7 left-[50%] translate-x-[-50%] translate-y-[-40%]'>
                    <div className='flex gap-5 items-center border-r border-caribbeangreen-300 px-7'>
                        <p className='text-3xl font-bold'>10</p>
                        <p className='text-caribbeangreen-300 text-sm'>Years of Experience</p>
                    </div>

                    <div className='flex gap-5 items-center px-7'>
                        <p className='text-3xl font-bold'>250</p>
                        <p className='text-caribbeangreen-300 text-sm'>Type of Courses</p>

                    </div>

                </div>

            </div>

        </div>
      
    </div>
  )
}

export default TimelineSection
