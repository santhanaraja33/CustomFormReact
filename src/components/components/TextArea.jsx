const TextArea = ({ label }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <textarea
        placeholder="Enter details"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      ></textarea>
    </div>
  );
  
  export default TextArea;
  