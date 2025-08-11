const ProfileCard = ({username}) => {
    console.log({username})
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="relative h-[400px] w-[300px] rounded-md overflow-hidden">
                <img
                    src="sumit.jpg"
                    alt="Sumit"
                    className="z-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-left">
                    <h1 className="text-lg font-semibold text-white">{username}</h1>
                    <p className="mt-2 text-sm text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
                        debitis?
                    </p>
                <button className="mt-4 px-4 py-2 bg-white text-gray-900 rounded-lg text-sm font-semibold shadow hover:bg-gray-200 transition-colors duration-300">
                    View Profile →
            </button>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
