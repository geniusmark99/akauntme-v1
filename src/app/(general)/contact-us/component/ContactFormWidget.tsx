'use client'

import React, { useState } from 'react'

const ContactFormWidget: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyEmail: '',
        companyName: '',
        companySize: '',
        country: '',
        roleLevel: '',
        department: '',
        phoneNumber: '',
        enquiry: '',
        helpMessage: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <form className=" mx-auto p-6 bg-white rounded-md shadow-md space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block font-medium mb-1">First name</label>
                    <input
                        name="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                    />
                    {/* {!formData.firstName && <p className="text-sm text-red-500 mt-1">Enter first name.</p>} */}
                </div>

                <div>
                    <label className="block font-medium mb-1">Last name</label>
                    <input
                        name="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"

                    />
                    {/* {!formData.lastName && <p className="text-sm text-red-500 mt-1">Enter last name.</p>} */}
                </div>
            </div>

            <div>
                <label className="block font-medium mb-1">Company email</label>
                <input
                    name="companyEmail"
                    type="email"
                    value={formData.companyEmail}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block font-medium mb-1">Company name</label>
                    <input
                        name="companyName"
                        type="text"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Company size</label>
                    <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select an option</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="201+">201+</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block font-medium mb-1">Country or region</label>
                <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select an option</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="NG">Nigeria</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block font-medium mb-1">Role level</label>
                    <select
                        name="roleLevel"
                        value={formData.roleLevel}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select an option</option>
                        <option value="junior">Junior</option>
                        <option value="senior">Senior</option>
                    </select>
                </div>

                <div>
                    <label className="block font-medium mb-1">Department</label>
                    <select
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select an option</option>
                        <option value="engineering">Engineering</option>
                        <option value="marketing">Marketing</option>
                    </select>
                </div>
            </div>

            <div>
                <label className="block font-medium mb-1">Phone number (optional)</label>
                <input
                    name="phoneNumber"
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div>
                <label className="block font-medium mb-1">What is your enquiry about?</label>
                <select
                    name="enquiry"
                    value={formData.enquiry}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="">Select an option</option>
                    <option value="support">Support</option>
                    <option value="sales">Sales</option>
                </select>
            </div>

            <div>
                <label className="block font-medium mb-1">How can we help?</label>
                <textarea
                    name="helpMessage"
                    value={formData.helpMessage}
                    onChange={handleChange}
                    rows={4}
                    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
                Submit
            </button>
        </form>
    )
}

export default ContactFormWidget
