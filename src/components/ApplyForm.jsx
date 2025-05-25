import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { FiSend } from 'react-icons/fi';
import toast from 'react-hot-toast';

function ApplyForm() {
  const [form, setForm] = useState({
    name: '',
    birthdate: '',
    age: '',
    city: '',
    expectedSalary: '3000 to 8000',
    reasons: '',
    willRelocate: '',
    hasLicense: '',
    acceptsCrunch: '',
  });

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = (e) => {
    e.preventDefault();
    if (
      !form.name ||
      !form.birthdate ||
      !form.city ||
      !form.reasons ||
      !form.willRelocate ||
      !form.hasLicense ||
      !form.acceptsCrunch
    ) {
      toast.error('Please fill in all required fields.');
      return;
    }
    if (form.age < 18 || form.age > 60) {
      toast.error('Age must be between 18 and 60 years.');
      return;
    }

    setShowModal(true);
  };

  const handleConfirm = () => {
    localStorage.setItem('applicationForm', JSON.stringify(form));
    toast.success('Application submitted!');
    navigate('/thankyou');
  };

  return (
    <div className='flex items-center justify-center'>
      <div className='flex flex-col items-center w-full max-w-3xl'>
        <h1 className='text-4xl font-bold mb-8 text-indigo-600 text-center pt-16'>
          Job Application Portal
        </h1>

        <div className='bg-white rounded-lg shadow-lg w-full overflow-hidden'>
          <div className='bg-indigo-600 py-4'>
            <h2 className='text-2xl font-bold text-white text-center'>
              Apply Form
            </h2>
          </div>

          <div className='p-6'>
            <form className='w-full'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='space-y-6'>
                  <label className='flex flex-col w-full'>
                    <span className='text-gray-700 font-medium mb-2'>
                      Name:
                    </span>
                    <input
                      type='text'
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      minLength={4}
                      className='rounded-md border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
                    />
                  </label>

                  <label className='flex flex-col w-full'>
                    <span className='text-gray-700 font-medium mb-2'>
                      Birthdate:
                    </span>
                    <input
                      type='date'
                      value={form.birthdate}
                      onChange={(e) => {
                        const birthdate = e.target.value;
                        const birthdateObj = new Date(birthdate);
                        const today = new Date();
                        let age =
                          today.getFullYear() - birthdateObj.getFullYear();
                        setForm({ ...form, birthdate, age });
                      }}
                      className='rounded-md border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'
                    />
                  </label>

                  <label className='flex flex-col w-full'>
                    <span className='text-gray-700 font-medium mb-2'>
                      Job Location:
                    </span>
                    <select
                      value={form.city}
                      onChange={(e) =>
                        setForm({ ...form, city: e.target.value })
                      }
                      className='rounded-md border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'>
                      <option value=''>-- Please select a city --</option>
                      <option value='Riyadh'>Riyadh</option>
                      <option value='Jeddah'>Jeddah</option>
                      <option value='Dammam'>Dammam</option>
                      <option value='Khobar'>Khobar</option>
                      <option value='Makkah'>Makkah</option>
                      <option value='Medina'>Medina</option>
                      <option value='Abha'>Abha</option>
                      <option value='Tabuk'>Tabuk</option>
                      <option value='Hail'>Hail</option>
                    </select>
                  </label>

                  <label className='flex flex-col w-full'>
                    <span className='text-gray-700 font-medium mb-2'>
                      Expected Salary:
                    </span>
                    <select
                      value={form.expectedSalary}
                      onChange={(e) =>
                        setForm({ ...form, expectedSalary: e.target.value })
                      }
                      className='rounded-md border border-gray-300 p-2 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500'>
                      <option value='3000 to 8000'>3000 to 8000</option>
                      <option value='9000 to 13000'>9000 to 13000</option>
                      <option value='more than 15000'>more than 15000</option>
                    </select>
                  </label>
                </div>

                <div className='space-y-6'>
                  <label className='flex flex-col w-full'>
                    <span className='text-gray-700 font-medium mb-2'>
                      Reasons for applying:
                    </span>
                    <textarea
                      value={form.reasons}
                      onChange={(e) =>
                        setForm({ ...form, reasons: e.target.value })
                      }
                      className='rounded-md border border-gray-300 p-2 w-full h-24 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                    />
                  </label>

                  <div className='space-y-2'>
                    <div className='flex items-center text-gray-700 font-medium mb-2'>
                      Are you willing to relocate?
                    </div>
                    <div className='flex gap-4'>
                      <label className='flex items-center gap-2'>
                        <input
                          type='radio'
                          name='relocate'
                          value='yes'
                          checked={form.willRelocate === 'yes'}
                          onChange={(e) =>
                            setForm({ ...form, willRelocate: e.target.value })
                          }
                        />
                        <span>Yes</span>
                      </label>
                      <label className='flex items-center gap-2'>
                        <input
                          type='radio'
                          name='relocate'
                          value='no'
                          checked={form.willRelocate === 'no'}
                          onChange={(e) =>
                            setForm({ ...form, willRelocate: e.target.value })
                          }
                        />
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <div className='flex items-center text-gray-700 font-medium mb-2'>
                      Do you have a professional license?
                    </div>
                    <div className='flex gap-4'>
                      <label className='flex items-center gap-2'>
                        <input
                          type='radio'
                          name='license'
                          value='yes'
                          checked={form.hasLicense === 'yes'}
                          onChange={(e) =>
                            setForm({ ...form, hasLicense: e.target.value })
                          }
                        />
                        <span>Yes</span>
                      </label>
                      <label className='flex items-center gap-2'>
                        <input
                          type='radio'
                          name='license'
                          value='no'
                          checked={form.hasLicense === 'no'}
                          onChange={(e) =>
                            setForm({ ...form, hasLicense: e.target.value })
                          }
                        />
                        <span>No</span>
                      </label>
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <div className='flex items-center text-gray-700 font-medium mb-2'>
                      Are you comfortable with crunch time?
                    </div>
                    <div className='flex gap-4'>
                      <label className='flex items-center gap-2'>
                        <input
                          type='radio'
                          name='crunch'
                          value='yes'
                          checked={form.acceptsCrunch === 'yes'}
                          onChange={(e) =>
                            setForm({ ...form, acceptsCrunch: e.target.value })
                          }
                        />
                        <span>Yes</span>
                      </label>
                      <label className='flex items-center gap-2'>
                        <input
                          type='radio'
                          name='crunch'
                          value='no'
                          checked={form.acceptsCrunch === 'no'}
                          onChange={(e) =>
                            setForm({ ...form, acceptsCrunch: e.target.value })
                          }
                        />
                        <span>No</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-8 flex justify-center'>
                <button
                  type='submit'
                  onClick={handleOpenModal}
                  className='bg-amber-700 text-white py-3 px-8 flex items-center justify-center rounded-md hover:bg-amber-500 transition-colors duration-300 font-medium'>
                  <FiSend className='mr-2' />
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {showModal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white rounded-lg p-6 w-full max-w-md shadow-lg'>
            <h2 className='text-xl font-semibold mb-4'>
              Confirm Your Application
            </h2>
            <div className='text-sm text-gray-700 space-y-1 max-h-[60vh] overflow-y-auto'>
              <p>
                <strong>Name:</strong> {form.name}
              </p>
              <p>
                <strong>Birthdate:</strong> {form.birthdate}
              </p>
              <p>
                <strong>Age:</strong> {form.age}
              </p>
              <p>
                <strong>City:</strong> {form.city}
              </p>
              <p>
                <strong>Expected Salary:</strong> {form.expectedSalary}
              </p>
              <p>
                <strong>Relocate:</strong> {form.willRelocate}
              </p>
              <p>
                <strong>Has License:</strong> {form.hasLicense}
              </p>
              <p>
                <strong>Crunch OK:</strong> {form.acceptsCrunch}
              </p>
              <p>
                <strong>Reasons:</strong> {form.reasons}
              </p>
            </div>
            <div className='mt-6 flex justify-end gap-4'>
              <button
                onClick={() => setShowModal(false)}
                className='px-4 py-2 bg-gray-300 rounded hover:bg-gray-400'>
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className='px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700'>
                Confirm & Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ApplyForm;
