import { useNavigate } from 'react-router';
import { FiCheck, FiTrash2 } from 'react-icons/fi';
import toast from 'react-hot-toast';


function Application() {
  const navigate = useNavigate();
  const applicationData = JSON.parse(localStorage.getItem('applicationForm'));
  if (!applicationData) {
    return <div className='text-center font-bold'>No data found.</div>;
  }
  return (
    <div className='flex items-center justify-center'>
      <div className='bg-white rounded-lg shadow-lg w-full max-w-2xl overflow-hidden m-5'>
        <div className='bg-indigo-600 py-4'>
          <h2 className='text-2xl font-bold text-white text-center'>
            Thank you for applying.
          </h2>
        </div>
        <div className='p-6'>
          <div className='flex items-center justify-center mb-6'>
            <div className='rounded-full bg-green-100 p-3'>
              <FiCheck className='h-8 w-8 text-green-600' />
            </div>
          </div>
          <p className='text-gray-700 text-center mb-6'>
            Application Submitted Successfully!
          </p>
          <div className='bg-gray-50 rounded-lg p-4 mb-6'>
            <h3 className='text-lg font-semibold text-gray-800 mb-3'>
              Your Application Details:
            </h3>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='p-2'>
                <p className='text-sm text-gray-500'>Name</p>
                <p className='font-medium'>{applicationData.name}</p>
              </div>

              <div className='p-2'>
                <p className='text-sm text-gray-500'>Age</p>
                <p className='font-medium'>{applicationData.age}</p>
              </div>

              <div className='p-2'>
                <p className='text-sm text-gray-500'>Birthdate</p>
                <p className='font-medium'>{applicationData.birthdate}</p>
              </div>

              <div className='p-2'>
                <p className='text-sm text-gray-500'>City</p>
                <p className='font-medium'>{applicationData.city}</p>
              </div>

              <div className='p-2'>
                <p className='text-sm text-gray-500'>Expected Salary</p>
                <p className='font-medium'>{applicationData.expectedSalary}</p>
              </div>

              <div className='p-2'>
                <p className='text-sm text-gray-500'>Willing to Relocate</p>
                <p className='font-medium'>{applicationData.willRelocate}</p>
              </div>

              <div className='p-2'>
                <p className='text-sm text-gray-500'>
                  Has Professional License
                </p>
                <p className='font-medium'>{applicationData.hasLicense}</p>
              </div>

              <div className='p-2'>
                <p className='text-sm text-gray-500'>Accepts Crunch Time</p>
                <p className='font-medium'>{applicationData.acceptsCrunch}</p>
              </div>
            </div>

            <div className='mt-4 p-2'>
              <p className='text-sm text-gray-500'>Reasons for Application</p>
              <p className='font-medium'>{applicationData.reasons}</p>
            </div>
          </div>
          <div className='flex justify-center'>
            <button
              onClick={() => {
                if (
                  confirm('Are you sure you want to withdraw your application?')
                ) {
                  localStorage.removeItem('applicationForm');
                  navigate('/');
                  toast.success('Application withdrawn successfully!');
                }
              }}
              className='px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300 flex items-center'>
              <FiTrash2 className='h-5 w-5 mr-2' />
              Withdraw Application
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Application;
