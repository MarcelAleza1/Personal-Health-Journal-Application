import React, { useState } from 'react';

export const CreateModal = ({ showModal, closeModal, onSubmit,title }) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');

  const handleSubmit = () => {
  
    onSubmit({ input1, input2, input3, input4 });
  
    setInput1('');
    setInput2('');
    setInput3('');
    setInput4('');
    // Close the modal
    closeModal();
  };

  if (!showModal) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
        <div className="fixed inset-0 transition-opacity" onClick={closeModal}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">{title}</h3>
                <div className="mb-4">
                  <input
                    className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Input 1"
                    value={input1}
                    onChange={(e) => setInput1(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Input 2"
                    value={input2}
                    onChange={(e) => setInput2(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Input 3"
                    value={input3}
                    onChange={(e) => setInput3(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <input
                    className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Input 4"
                    value={input4}
                    onChange={(e) => setInput4(e.target.value)}
                  />
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent bg-blue-600 text-white py-2 px-4 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Save
                  </button>
                  <button
                    onClick={closeModal}
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 bg-white text-gray-700 py-2 px-4 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

