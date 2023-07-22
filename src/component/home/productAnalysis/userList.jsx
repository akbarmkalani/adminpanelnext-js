import React, { useEffect, useState } from 'react';


const Table = ({ post, titel }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
 
    return (
        <table className='table-fixed border-none'>
            <thead className='w-full border-b border-[#6782ad]'>
                <tr>
                    <th className="text-start w-[70px]">
                        <input
                            type="checkbox"
                            className="form-checkbox border-none bg-transparent border-[#6782ad]"
                        />
                    </th>
                    {titel.map((title, index) => (
                        <th className="w-[200px] text-[#6782ad] py-4 text-start" key={index}>
                            {title}
                            <span className='ms-2'>
                                <svg width="10" height="6" class="inline-block" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.70711 1.70711C10.0976 1.31658 10.0976 0.683418 9.70711 0.292894C9.31658 -0.0976307 8.68342 -0.0976308 8.29289 0.292894L5 3.58579L1.70711 0.292893C1.31658 -0.097631 0.683417 -0.0976311 0.292893 0.292893C-0.0976309 0.683417 -0.097631 1.31658 0.292893 1.70711L4.29289 5.70711C4.68342 6.09763 5.31658 6.09763 5.70711 5.70711L9.70711 1.70711Z" fill="currentColor"></path>
                                </svg>
                            </span>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className='py-5 tableMargin'>
                {post.map((val, index) => (
                    <tr className="text-start" key={index}>
                        <td className="pt-4">
                            <input type="checkbox" className="form-checkbox border bg-none border-[#6782ad]" />
                        </td>
                        <td className=" pt-4">
                            {val.website}
                        </td>
                        <td className="pt-4 ">
                            <div className="flex items-center gap-2.5">
                                <img className="w-[50px] rounded-full" src={val.image} alt="image" />
                                <p className="line-clamp-1 max-w-[200px] truncate">{val.name}</p>
                            </div>
                        </td>

                        <td className="pt-4">
                            <span
                                className="text-white font-bold text-sm py-1.5 px-3 rounded-full"
                                style={{ backgroundColor: val.status === 'Private' ? '#267DFF' : '#00D085' }}
                            >
                                {val.status}
                            </span>
                        </td>

                        <td className="pt-4 ">
                            <div className="flex items-center gap-2">
                                <span className="text-gray"></span>
                                <p className="line-clamp-1 max-w-[200px] truncate">{val.categories}</p>
                            </div>
                        </td>
                        <td className="pt-4">
                            {!isMobile && (
                                <div className="flex items-center gap-2">
                                    <span></span>
                                    <p className="line-clamp-1 max-w-[200px] truncate">{val.tags}</p>
                                </div>
                            )}
                        </td>
                        <td className="pt-4 ">{!isMobile && val.Date}</td>
                        <td className="pt-4 ">
                            {!isMobile && val.country}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
