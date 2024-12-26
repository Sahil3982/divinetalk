const AstrologerCard = ({ name, rating, skills, languages, experience, price, isFree, imageUrl }) => {

  const skillsText = Array.isArray(skills) ? skills.join(", ") : skills;
  const languagesText = Array.isArray(languages) ? languages.join(", ") : languages;

  return (
    <div className="flex items-center p-4 border rounded-xl shadow bg-white space-x-4 max-w-96">
      <div className="w-16 h-16">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full rounded-full border-2 border-green-500 object-cover"
        />
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          <div className="flex items-center space-x-1 text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.449 8.167 1.16-5.875 5.762 1.388 8.102L12 18.896l-7.348 3.864 1.388-8.102L.165 9.196l8.167-1.16L12 .587z" />
            </svg>
            <span className="text-sm">{rating}</span>
          </div>
        </div>
        <p className="text-sm text-gray-600 truncate">{skillsText}</p>
        <p className="text-sm text-gray-500">{languagesText}</p>
        <p className="text-sm text-gray-500">Exp: {experience}</p>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <div className="text-center">
          {isFree ? (
            <div>
              <span className="line-through text-gray-400 text-sm">₹{price}</span>{" "}
              <span className="text-red-500 font-bold text-sm">FREE</span>
            </div>
          ) : (
            <span className="text-gray-800 font-bold">₹{price}</span>
          )}
        </div>
        <button className="px-4 py-1 text-green-600 border border-green-600 rounded-md hover:bg-green-600 hover:text-white">
          Chat
        </button>
      </div>
    </div>
  );
};

export default AstrologerCard;
