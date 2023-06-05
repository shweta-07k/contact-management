import { useState } from 'react'
import { useAddContactsMutation, useGetContactsQuery, useUpdateContactsMutation } from '../api/ContactSlice'
import { ContactType } from '../types/contact'



function Contact() {
    const intialValue: ContactType = {
        firstname: "",
        lastname: "",
        status: true
    }
    const [showModal, setShowModal] = useState(false)
    const [contactData, setContactData] = useState(intialValue)
    const [addContacts] = useAddContactsMutation()
    const { data, isLoading } = useGetContactsQuery("")
    const handleAddContact = async () => {

        await addContacts(contactData)
        setShowModal(false)
    }

    if (isLoading) return <h1>loading...</h1>
    return <div className='h-screen'>
        <div className="flex justify-end px-12 py-5">
            <button onClick={e => setShowModal(true)} type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-blue-800 text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                +    Add Contact
            </button>
        </div>



        <div id="defaultModal" tabIndex={-1} aria-hidden="true" className={
            `${!showModal && "hidden"} bg-slate-100 h-screen overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-modal md:h-full`
        }>
            <div className=" p-4 w-full max-w-2xl h-full md:h-auto ">

                <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">

                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">

                        <pre>{JSON.stringify(contactData, null, 2)}</pre>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Add Contact
                        </h3>
                        <button onClick={e => setShowModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    {/* <form > */}
                    <div className="grid gap-4 mb-4 sm:grid-cols-2">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> First Name</label>
                            <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type First name" required onChange={e => setContactData({ ...contactData, firstname: e.target.value })} />
                        </div>
                        <div>
                            <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                            <input type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Last Name" required onChange={e => setContactData({
                                ...contactData,
                                lastname: e.target.value
                            })} />
                        </div>
                        <div>
                            <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                            <div className="flex items-center mb-4">
                                <input id="default-radio-1" type="radio" value="active" name="status" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => setContactData({
                                    ...contactData,
                                    status: e.target.value === "active"
                                })} />
                                <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Active</label>
                            </div>
                            <div className="flex items-center">
                                <input id="default-radio-2" type="radio" value="inactive" name="status" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => setContactData({
                                    ...contactData,
                                    status: e.target.value !== "inactive"
                                })} />
                                <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Inactive</label>
                            </div>
                            <div className="flex justify-center">
                                <button onClick={handleAddContact} type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-blue-800 text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                    Create New Contact
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* </form> */}
                </div >
            </div >
        </div >

        <ContactTable data={data} />
    </div>
}

const ContactTable = (prop: { data: [ContactType] }) => {
    const [showEditModal, setShowEditModal] = useState(false)
    const [selectedContact, setSelectedContact] = useState<ContactType>({
        firstname: "",
        lastname: "",
        status: true
    })
    const [updateContact] = useUpdateContactsMutation()
    const handleUpdateContact = async () => {
        await updateContact(selectedContact)
        setShowEditModal(false)
    }

    return <>
        <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased ml-56">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th className="px-4 py-4">First Name</th>
                                    <th className="px-4 py-3">Last Name</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    prop.data && prop.data.map((item: ContactType) => <tr className="border-b dark:border-gray-700">
                                        <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{item.firstname}</th>
                                        <td className="px-4 py-3">{item.lastname}</td>
                                        <td className="px-4 py-3">{item.status ? "Active" : "In-Active"}</td>
                                        <td className="px-4 py-3">
                                            <button
                                                onClick={e => {
                                                    setSelectedContact(item)
                                                    setShowEditModal(true)
                                                }}
                                                type="submit"
                                                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-orange-600 mx-2 text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                                Edit
                                            </button>
                                            <button type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-red-600 text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                                Delete
                                            </button>
                                        </td>

                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>


        {/* edit modal start */}
        <div id="defaultModal" tabIndex={-1} aria-hidden="true" className={
            `${!showEditModal && "hidden"} bg-slate-100 h-screen overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-modal md:h-full`
        }>
            <div className=" p-4 w-full max-w-2xl h-full md:h-auto ">

                <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">

                    <div className="flex justify-between items-center pb-4 mb-4 rounded-t border-b sm:mb-5 dark:border-gray-600">

                        <pre>{JSON.stringify(selectedContact, null, 2)}</pre>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Edit Contact
                        </h3>
                        <button onClick={e => setShowEditModal(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    {/* <!-- Modal body --> */}
                    {/* <form > */}
                    <div className="grid gap-4 mb-4 sm:grid-cols-2">
                        <div>
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> First Name</label>
                            <input type="text" value={selectedContact.firstname} name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type First name" required onChange={e => setSelectedContact({ ...selectedContact, firstname: e.target.value })} />
                        </div>
                        <div>
                            <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                            <input value={selectedContact.lastname} type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Last Name" required onChange={e => setSelectedContact({
                                ...selectedContact,
                                lastname: e.target.value
                            })} />
                        </div>
                        <div>
                            <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                            <div className="flex items-center mb-4">
                                <input
                                    checked={selectedContact.status}
                                    id="default-radio-1" type="radio" value="active" name="status" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => setSelectedContact({
                                        ...selectedContact,
                                        status: e.target.value === "active"
                                    })} />
                                <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Active</label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    checked={!selectedContact.status}
                                    id="default-radio-2" type="radio" value="inactive" name="status" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={e => setSelectedContact({
                                        ...selectedContact,
                                        status: e.target.value !== "inactive"
                                    })} />
                                <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Inactive</label>
                            </div>
                            <div className="flex justify-center">
                                <button onClick={handleUpdateContact} type="submit" className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center bg-blue-800 text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                                    Update Contact
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* </form> */}
                </div >
            </div >
        </div >

        {/* edit modal end*/}


    </>
}

export default Contact