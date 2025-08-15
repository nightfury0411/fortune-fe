const Row = ({ label, value }) => (
  <div className="flex items-center justify-between">
    <span className="text-gray-700 font-medium">{label}</span>
    <span className="font-mono text-gray-900">{value}</span>
  </div>
);

export default Row;
