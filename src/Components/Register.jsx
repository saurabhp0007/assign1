import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [fullNameError, setFullNameError] = useState('');

  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [companyName, setCompanyName] = useState('');
  const [companyNameError, setCompanyNameError] = useState('');

  const [isAgency, setIsAgency] = useState('');
  const [isAgencyError, setIsAgencyError] = useState('');


  const validateFullName = (value) => {
    if (value.length < 3) {
      return 'Full Name must be at least 3 characters';
    }
    return '';
  };

  const validatePhoneNumber = (value) => {
    const phoneRegex = /^\d{10,}$/; // Regex to match at least 10 digits (\d)

    if (!value) {
      return 'Phone number is required';
    } else if (!phoneRegex.test(value)) {
      return 'Phone number must contain at least 10 digits';
    }

    return '';
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value) {
      return 'Email Address is required';
    } else if (!emailRegex.test(value)) {
      return 'Invalid Email Address';
    }
    return '';
  };

  const validatePassword = (value) => {
    if (!value) {
      return 'Password is required';
    } else if (value.length < 8) {
      return 'Password must be at least 8 characters';
    }
    return '';
  };


  const validateCompanyName = (value) => {
    if (value.length < 3) {
      return 'Company Name must be at least 3 characters';
    }
    return '';
  };

  const handleAgencyChange = (value) => {
    setIsAgency(value);
    setIsAgencyError('');
  };


  const handleInputChange = (fieldName, value) => {
    switch (fieldName) {
      case 'fullName':
        setFullName(value);
        setFullNameError(validateFullName(value));
        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        setPhoneNumberError(validatePhoneNumber(value));
        break;
      case 'email':
        setEmail(value);
        setEmailError(validateEmail(value));
        break;
      case 'password':
        setPassword(value);
        setPasswordError(validatePassword(value));
        break;
      case 'companyName':
        setCompanyName(value);
        setCompanyNameError(validateCompanyName(value));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate all input fields before submission
    const fullNameValidation = validateFullName(fullName);
    const phoneNumberValidation = validatePhoneNumber(phoneNumber);
    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    const companyNameValidation = validateCompanyName(companyName);

    // Update error states
    setFullNameError(fullNameValidation);
    setPhoneNumberError(phoneNumberValidation);
    setEmailError(emailValidation);
    setPasswordError(passwordValidation);
    setCompanyNameError(companyNameValidation);

    if (!isAgency) {
      setIsAgencyError('Please select whether you are an agency');
      return; // Prevent form submission if agency selection is not made
    }

    // Check if there are any validation errors
    if (
      fullNameValidation ||
      phoneNumberValidation ||
      emailValidation ||
      passwordValidation ||
      companyNameValidation
    ) {
      // Validation failed, do not submit the form
      return;
    }
    navigate('/profile');

    // Form submission logic (e.g., send data to server)
    console.log('Form submitted:', {
      fullName,
      phoneNumber,
      email,
      password,
      companyName,
      isAgency, 
    });
  };

  return (
    <div className='flex justify-center items-center'>
      <div className='border border-gray-200 max-w-auto m-2 p-4 bg-[#F7F8F9]'>
        <div className='pb-10 md:pb-10 lg:pb-20 xl:pb-30 mb-11 mt-4 text-start flex flex-col items-start justify-between'>
          <div>
            <span className='font-bold text-2xl'>
              Create your <br /> POP-X Account
            </span>

            <form onSubmit={handleSubmit}>
              {/* Full Name Input */}
              <div className='bg-[#F7F8F9] mt-8 rounded-lg'>
                <div className='relative'>
                  <label className='absolute left-2 -top-3 text-sm text-[#6C25FF] bg-[#F7F8F9] px-2 pointer-events-none'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    id='fullName'
                    name='fullName'
                    value={fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    className='bg-transparent h-10 w-80 rounded-lg text-[#919191] ring-2 ring-[#CBCBCB] px-2'
                    placeholder='Enter your full name'
                    required
                  />
                </div>
                {fullNameError && (
                  <p className='text-red-500 text-sm mt-1'>{fullNameError}</p>
                )}
              </div>

              {/* Phone Number Input */}
              <div className='bg-[#F7F8F9] mt-8 rounded-lg'>
                <div className='relative'>
                  <label className='absolute left-2 -top-3 text-sm text-[#6C25FF] bg-[#F7F8F9] px-2 pointer-events-none'>
                    Phone Number
                  </label>
                  <input
                    type='text'
                    id='phoneNumber'
                    name='phoneNumber'
                    value={phoneNumber}
                    onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                    className='bg-transparent h-10 w-80 rounded-lg text-[#919191] ring-2 ring-[#CBCBCB] px-2'
                    placeholder='Enter your phone number'
                    required
                  />
                </div>
                {phoneNumberError && (
                  <p className='text-red-500 text-sm mt-1'>{phoneNumberError}</p>
                )}
              </div>

              {/* Email Address Input */}
              <div className='bg-[#F7F8F9] mt-8 rounded-lg'>
                <div className='relative'>
                  <label className='absolute left-2 -top-3 text-sm text-[#6C25FF] bg-[#F7F8F9] px-2 pointer-events-none'>
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className='bg-transparent h-10 w-80 rounded-lg text-[#919191] ring-2 ring-[#CBCBCB] px-2'
                    placeholder='Enter your email address'
                    required
                  />
                </div>
                {emailError && (
                  <p className='text-red-500 text-sm mt-1'>{emailError}</p>
                )}
              </div>

              {/* Password Input */}
              <div className='bg-[#F7F8F9] mt-8 rounded-lg'>
                <div className='relative'>
                  <label className='absolute left-2 -top-3 text-sm text-[#6C25FF] bg-[#F7F8F9] px-2 pointer-events-none'>
                    Password
                  </label>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    value={password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className='bg-transparent h-10 w-80 rounded-lg text-[#919191] ring-2 ring-[#CBCBCB] px-2'
                    placeholder='Enter your password'
                    required
                  />
                </div>
                {passwordError && (
                  <p className='text-red-500 text-sm mt-1'>{passwordError}</p>
                )}
              </div>

              {/* Company Name Input */}
              <div className='bg-[#F7F8F9] mt-8 rounded-lg'>
                <div className='relative'>
                  <label className='absolute left-2 -top-3 text-sm text-[#6C25FF] bg-[#F7F8F9] px-2 pointer-events-none'>
                    Company Name
                  </label>
                  <input
                    type='text'
                    id='companyName'
                    name='companyName'
                    value={companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className='bg-transparent h-10 w-80 rounded-lg text-[#919191] ring-2 ring-[#CBCBCB] px-2'
                    placeholder='Enter your company name'
                    required
                  />
                </div>
                {companyNameError && (
                  <p className='text-red-500 text-sm mt-1'>{companyNameError}</p>
                )}
              </div>
              <div>
                {/* Agency Input */}
                <span className='text-[#6C25FF] mt-8 flex flex-row'>
                  Are you an agency? <p className='text-red-500'>*</p>
                </span>
                <div className='flex gap-4'>
                  <input
                    type="radio"
                    id="yes"
                    name="agency"
                    value="yes"
                    checked={isAgency === 'yes'}
                    onChange={() => handleAgencyChange('yes')}
                  />
                  <label htmlFor="yes">Yes</label>
                  <input
                    type="radio"
                    id="no"
                    name="agency"
                    value="no"
                    checked={isAgency === 'no'}
                    onChange={() => handleAgencyChange('no')}
                  />
                  <label htmlFor="no">No</label>
                </div>
                {isAgencyError && <p className='text-red-500 text-sm mt-1'>{isAgencyError}</p>}
              </div>
              {/* Submit Button */}
              <div>
                <button
                  type='submit'
                  className='mt-8 bg-[#6C25FF] hover:bg-[#51279E] text-white py-2 px-28 rounded-lg'

                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
