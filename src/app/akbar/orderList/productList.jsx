"use client";
import React from 'react';

const ProductList = ({ data }) => {
    const thead = ["No", "IDCustomer", "Product", "Customers", "Location", "Quantity", "Status", "Amount"];

    return (
        <div className='table-responsive'>
            <table className='table table-sm border-none'>
                <thead className='w-full border-b border-[#6782ad]'>
                    <tr>
                        {thead.map((title, index) => (
                            // Add a CSS class for mobile responsiveness
                            <th className={`w-[150px] mx-5 text-[#6782ad] py-4 text-start ${index > 2 ? 'hidden md:table-cell' : ''}`} key={index}>
                                {title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className='py-5 '>
                    {data.map((item, index) => (
                        <tr className="text-start" key={index}>
                            <td>{index + 1}</td>
                            <td>{item.idcustomer}</td>
                            <td className='w-[300px]'>
                                <figure className='flex mt-3 items-center'>
                                    <img className='w-1/5' src={item.images} alt="" />
                                    <figcaption>
                                        <span className='flex ms-3'>{item.title}</span>
                                        <span className='flex text-[#435a7d] ms-3'>{item.gender}</span>
                                    </figcaption>
                                </figure>
                            </td>
                            {/* Hide "Customers" and "Location" in mobile mode */}
                            <td className='w-[250px] hidden md:table-cell'>{item.customers}</td>
                            <td className='w-[270px] hidden md:table-cell'>{item.location}</td>
                            <td className='w-[270px] hidden md:table-cell'>{item.quantity}</td>
                            <td>
                                <span
                                    className="text-white font-bold text-sm py-1.5 px-3 rounded-full"
                                    style={{ backgroundColor: item.status === 'Done' ? '#267DFF' : (item.status === 'Unpaid' ? '#FF7C51' : '#00D085') }}
                                >
                                    {item.status}
                                </span>
                            </td>
                            <td>${item.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
