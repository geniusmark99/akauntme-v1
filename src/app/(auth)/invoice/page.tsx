'use client'
import React, { useState } from 'react';
const Invoice = () => {

    const [items, setItems] = useState([{ name: '', description: '', quantity: 1, price: 0 }]);

    const handleItemChange = (index: number, field: string, value: any) => {
        const updated = [...items];
        // updated[index][field] = value;
        setItems(updated);
    };

    const addItem = () => {
        setItems([...items, { name: '', description: '', quantity: 1, price: 0 }]);
    };




    return <>
        <div className="px-5 mt-[70px] lg:mt-[80px]">

            {/* <div className="flex flex-col items-center justify-center">
                <button className="bg-akauntme text-white px-4 py-2 rounded-2xl">Add Invoice</button>
            </div> */}

            <div className="p-6 space-y-8">
                <div className="flex gap-y-4 flex-col md:flex-row justify-between md:items-center">
                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">Create Invoice</h1>
                    <div className="flex items-center gap-x-3 w-full md:w-auto">
                        <button className="w-6/12 md:w-auto cursor-pointer hover:bg-akauntme/90 bg-akauntme text-white px-4 py-3 rounded-xl text-sm">Preview</button>
                        <button className="w-6/12 md:w-auto cursor-pointer hover:bg-akauntme/90 bg-akauntme text-white px-4 py-3 rounded-xl text-sm whitespace-nowrap">Send Invoice</button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className='flex items-center gap-x-3 w-full md:w-9/12'>
                        <label className='w-3/12'>Business Name</label>
                        <input className="border-2 w-full md:w-7/12 py-3 px-2 rounded-lg border-gray-300 focus:border-akauntme outline-0 focus:outline-0" placeholder="e.g. Akauntme Technologies" />
                    </div>
                    <div className='flex items-center gap-x-3 w-full md:w-9/12'>
                        <label className='w-3/12'>Customer Name</label>
                        <input className="border-2 w-full md:w-7/12 py-3 px-2 rounded-lg border-gray-300 focus:border-akauntme outline-0 focus:outline-0" placeholder="e.g. Jane Doe" />
                    </div>
                    <div className='flex items-center gap-x-3 w-full md:w-9/12'>
                        <label className='w-3/12'>Invoice Date</label>
                        <input className="border-2 w-full md:w-7/12 py-3 px-2 rounded-lg border-gray-300 focus:border-akauntme outline-0 focus:outline-0" type="date" />
                    </div>
                    <div className='flex items-center gap-x-3 w-full md:w-9/12'>
                        <label className='w-3/12'>Due Date</label>
                        <input className="border-2 w-full md:w-7/12 py-3 px-2 rounded-lg border-gray-300 focus:border-akauntme outline-0 focus:outline-0" type="date" />
                    </div>
                </div>

                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Invoice Items</h2>
                    {items.map((item, index) => (
                        <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                            <div className='flex flex-col gap-y-1'>
                                <div className='text-sm font-semibold'>Item name</div>
                                <input
                                    className='border-[1.6px] rounded-lg px-2 py-2 border-gray-300 focus:border-akauntme outline-0 focus:outline-0'
                                    placeholder="Item Name"
                                    value={item.name}
                                    onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                                />
                            </div>
                            <div className='flex flex-col gap-y-1'>
                                <div className='text-sm font-semibold'>Item description</div>
                                <textarea
                                    className='border-[1.6px] rounded-lg px-2 border-gray-300 focus:border-akauntme outline-0 focus:outline-0'
                                    placeholder="Description"
                                    value={item.description}

                                    onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                                />
                            </div>

                            <div className='flex flex-col gap-y-1'>
                                <div className='text-sm font-semibold'>Item Quantity</div>
                                <input
                                    className='border-[1.6px] rounded-lg px-2 py-2 border-gray-300 focus:border-akauntme outline-0 focus:outline-0'
                                    type="number"
                                    placeholder="Qty"
                                    value={item.quantity}
                                    onChange={(e) => handleItemChange(index, 'quantity', parseInt(e.target.value))}
                                />
                            </div>

                            <div className='flex flex-col gap-y-1'>
                                <div className='text-sm font-semibold'>Item Price</div>
                                <input
                                    className='border-[1.6px] rounded-lg px-2 py-2 border-gray-300 focus:border-akauntme outline-0 focus:outline-0'
                                    type="number"
                                    placeholder="Price"
                                    value={item.price}
                                    onChange={(e) => handleItemChange(index, 'price', parseFloat(e.target.value))}
                                />
                            </div>
                            <div className="flex items-center text-2xl text-right justify-end font-medium">
                                ₦{(item.quantity * item.price).toFixed(2)}
                            </div>
                        </div>
                    ))}
                    <div className='flex items-center gap-x-2'>
                        <button onClick={addItem} className='bg-akauntme text-white px-4 py-2 rounded-xl text-sm'>
                            + Add Item
                        </button>
                        <button onClick={addItem} className='bg-akauntme text-white px-4 py-2 rounded-xl text-sm'>
                            + Remove Item
                        </button>
                    </div>

                </div>

                <div className="mt-6 flex justify-end text-xl font-bold">
                    {/* Total: ₦{subtotal.toFixed(2)} */}
                </div>

                <div className='flex flex-col w-full md:w-auto md:flex-row items-center justify-between'>
                    <div className="mt-8 flex w-full md:w-auto  md:items-start gap-x-2">
                        <label className='text-sm'>Notes / Terms</label>
                        <textarea placeholder="Thank you for your business..." className='border-2 w-full border-gray-300 outline-0 focus:outline-0 rounded-lg px-4 py-2' />
                    </div>

                    <div className="flex justify-end mt-10">
                        <button className="px-6 bg-akauntme text-white py-2 rounded-xl text-sm">Save Invoice</button>
                    </div>
                </div>

            </div>

        </div >

    </>
}

export default Invoice;