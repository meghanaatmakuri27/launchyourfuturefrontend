

const Card = ({ title, value }) => {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
      <p className="mt-2 text-2xl font-bold text-teal-600">{value}</p>
    </div>
  );
};

export default Card;
