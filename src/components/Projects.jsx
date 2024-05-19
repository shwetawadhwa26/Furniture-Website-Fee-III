import { semicol } from "../assets";
import { projects, reviews } from "../utils";

export default function Projects() {
    return (
        <div className="w-full overflow-x-hidden">
            <div className="w-[85%] mx-auto flex flex-col items-center gap-4  ">
                <h2 className="font-bold text-[40px]">Our Projects</h2>
                <h3 className="text-center text-[20px] mb-[16px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h3>
                <div className="flex flex-col gap-5 sm:flex-row">
                    {projects.map((project) => (
                        <div className="relative w-[400px] h-[300px]">
                            <img src={project.img} alt="" className="absolute w-full h-full object-cover" />
                            <h3 className="relative z-[10] top-[230px] left-[27%] text-white font-medium text-[18px] w-fit ">{project.name}</h3>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-[85%] mx-auto flex flex-col items-center gap-4 pt-[180px]">
                <h2 className="uppercase font-bold text-[40px] text-center ">What is says our clients</h2>
                <h3 className="text-[20px] text-center mb-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                <div className="w-full h-[500px] flex flex-col justify-between sm:justify-center gap-10 ">
                    {reviews.map(review => (
                        <div className={`flex items-center justify-between w-full sm:w-fit gap-4 border-[1px] p-8 ${review.id === 2 && " sm:translate-x-[30rem]"}`}>
                            <div className="relative w-[400px] sm:w-fit h-full ">
                                <img src={review.img} alt="" className="w-full h-full object-cover" />
                                <img src={semicol} alt="" className="absolute right-10 -bottom-2" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h4 className="font-bold uppercase ">{review.name}</h4>
                                <p>{review.desc}</p>

                            </div>
                        </div>

                    ))}

                </div>



            </div>
        </div>
    )
}
