import {FaUserCircle} from 'react-icons/fa'

const UserCard = () => {
    return (
        <div className="w-[12%] sm:w-[35%] md:w-[25%] lg:w-[17%] xl:w-[12%] bg-back1">
            <div className='flex flex-row items-center w-full h-full gap-2 hover:bg-highlighted cursor-pointer rounded-lg mx-1'>
                <FaUserCircle size='40'/>
                <div className='flex flex-col'>
                    <p className="text-sm font-semibold">Geovanna</p>
                    <p className="text-xs text-gray-400">Active</p>
                </div>
            </div>
        </div>
    )
}

export default UserCard