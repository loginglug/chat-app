import React from 'react';
import SendInput from './SendInput';
import Messages from './Messages';
import { useSelector, useDispatch } from "react-redux";
import { setSelectedUser } from '../redux/userSlice';

const MessageContainer = () => {
    const { selectedUser, authUser, onlineUsers } = useSelector(store => store.user);
    const dispatch = useDispatch();

    const isOnline = onlineUsers?.includes(selectedUser?._id);

    return (
        <>
            {
                selectedUser !== null ? (
                    <div className='md:min-w-[550px] flex flex-col'>
                        <div className='flex gap-2 items-center bg-zinc-800 text-white px-4 py-2 mb-2 shadow-lg rounded-md'>
                            <div className={`w-12 h-12 rounded-full overflow-hidden ${isOnline ? 'ring-2 ring-green-500' : 'ring-2 ring-gray-500'}`}>
                                <img src={selectedUser?.profilePhoto} alt="user-profile" className="w-full h-full object-cover" />
                            </div>
                            <div className='flex flex-col flex-1'>
                                <div className='flex flex-col'>
                                    <p className='font-bold text-lg'>{selectedUser?.fullName}</p>
                                    <p className={`text-sm mt-1 ${isOnline ? 'text-green-500' : 'text-gray-400'}`}>
                                        {isOnline ? 'Online' : 'Offline'}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Messages />
                        <SendInput />
                    </div>
                ) : (
                    <div className='md:min-w-[550px] flex flex-col justify-center items-center'>
                        <h1 className='text-4xl text-white font-bold'>Hi 👋🏻, {authUser?.fullName} </h1>
                        <h1 className='text-2xl text-white mt-2'>Welcome! to this Real-Time <span className='text-red-500 font-bold'>Chat</span> Application</h1>
                    </div>
                )
            }
        </>
    );
};

export default MessageContainer;
