import React, { useState, useEffect, useCallback } from 'react';


const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childrenNames: [''], // Only the first child name is required
    numberOfSeats: '',
    dropOffDays: [],
    pickUpDays: [],
    address: '',
    phoneNumber: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showPasswordFields, setShowPasswordFields] = useState(false); // Control password fields visibility
  const [userId, setUserId] = useState(''); // Store user ID

   // 1. Load user profile data on component mount
   useEffect(() => {
    const fetchProfileData = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setErrorMessage('No token found, please log in');
        return;
      }

      try {
        const response = await fetch('http://localhost:8000/api/v1/profile', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();

          // Ensure data is populated correctly
          if (data && data.user) {
            setUserId(data.user._id); // Store the user ID for password change
            setFormData((prevFormData) => ({
              ...prevFormData,
              parentName: data.user.parentName || '', // Pre-fill Parent Name
              childrenNames: Array.isArray(data.childrenNames) && data.childrenNames.length > 0 ? data.childrenNames : [''], // Check if childrenNames is an array
              numberOfSeats: data.numberOfSeats || '',
              dropOffDays: data.dropOffDays || [],
              pickUpDays: data.pickUpDays || [],
              address: data.address || '',
              phoneNumber: data.phoneNumber || '',
              currentPassword: '',
              newPassword: '',
              confirmPassword: '',
            }));
          } else {
          setErrorMessage('Parent name not found in response.');
          }
        } else {
          setErrorMessage(`Failed to fetch profile data: ${response.statusText}`);
        }
      } catch (error) {
        setErrorMessage(`Error fetching profile data: ${error.message}`);
      }
    };

    fetchProfileData();
  }, []);


  const handleChange = useCallback((e) => {
    const { name, value, checked } = e.target;
    setFormData((prevState) => {
      if (name === 'dropOffDays' || name === 'pickUpDays') {
        return {
          ...prevState,
          [name]: checked
            ? [...prevState[name], value]
            : prevState[name].filter((day) => day !== value),
        };
      }
      return {
        ...prevState,
        [name]: value,
      };
    });
  }, []);

  const handleChildNameChange = useCallback((e, index) => {
    const updatedChildrenNames = [...formData.childrenNames];
    updatedChildrenNames[index] = e.target.value;
    setFormData({
      ...formData,
      childrenNames: updatedChildrenNames,
    });
  }, [formData]);

  const handleAddChild = useCallback(() => {
    setFormData({
      ...formData,
      childrenNames: [...formData.childrenNames, ''],
    });
  }, [formData]);

  const handleRemoveChild = useCallback((index) => {
    const updatedChildrenNames = formData.childrenNames.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      childrenNames: updatedChildrenNames,
    });
  }, [formData]);

  // Validate form data
  const validate = () => {
    const newErrors = {};
    if (!formData.parentName) newErrors.parentName = 'Parent name is required';
    // Validation: Only the first child's name is required
    if (!formData.childrenNames[0]) newErrors.childrenNames = 'All children\'s names are required';

    if (!formData.numberOfSeats) {
      newErrors.numberOfSeats = 'Number of seats is required';
    } else if (formData.numberOfSeats < 1 || formData.numberOfSeats > 12) {
      newErrors.numberOfSeats = 'Number of seats must be between 1 and 12';
    }
    if (!formData.dropOffDays.length) newErrors.dropOffDays = 'At least one drop-off day is required';
    if (!formData.pickUpDays.length) newErrors.pickUpDays = 'At least one pick-up day is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = 'Phone number is required';
    
     // Password validation
     if (showPasswordFields) {
      if (!formData.currentPassword || !formData.newPassword || !formData.confirmPassword) {
        newErrors.newPassword = 'All password fields are required';
      } else if (formData.newPassword.length < 8) {
        newErrors.newPassword = 'New password must be at least 8 characters';
      } else if (formData.newPassword !== formData.confirmPassword) {
        newErrors.confirmPassword = 'New password and confirm password must match';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit form to change profile data or password
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setErrorMessage('No token found, please log in');
        return;
      }

    

      try {
        setLoading(true);
        const { parentName, numberOfSeats, address, phoneNumber, childrenNames, dropOffDays, pickUpDays,  currentPassword, newPassword, } = formData;

        // Profile update request
        const profileUpdateResponse  = await fetch('http://localhost:8000/api/v1/profile', {
          method: 'PATCH',
          headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          parentName,
          numberOfSeats,
          address,
          phoneNumber,
          childrenNames,
          dropOffDays,
          pickUpDays,
        }),
      });

      if (!profileUpdateResponse.ok) {
        throw new Error(`Profile update failed: ${profileUpdateResponse.statusText}`);
      }
      
      if (showPasswordFields) {
        // Password change request
        const passwordChangeResponse = await fetch(`http://localhost:8000/api/v1/profile/${userId}/change-password`, {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            currentPassword,
            newPassword,
          }),
        });

        if (!passwordChangeResponse.ok) {
          const errorMessage = await passwordChangeResponse.text();
          throw new Error(`Password change failed: ${errorMessage}`);
        }
      }

        setLoading(false);
        setSuccessMessage('Profile updated successfully!');
        setErrorMessage(''); // Clear any previous errors

        // Keep the form filled with updated data, do not reset formData
        setFormData((prevFormData) => ({
          ...prevFormData,
          currentPassword: '',
          newPassword: '',
          confirmPassword: '',
        }));

      } catch (error) {
      setLoading(false); // Hide loading state on error
      setErrorMessage(`Network error: ${error.message}`);
      setSuccessMessage('');  // Clear any previous success message
      }
    }
  };

  const handleCancel = () => {
    setFormData({
      parentName: '',
      childrenNames: [''],
      numberOfSeats: '',
      dropOffDays: [],
      pickUpDays: [],
      address: '',
      phoneNumber: '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
    setErrors({});
    setSuccessMessage('');
    setErrorMessage('');
    setShowPasswordFields(false); // Hide password fields on cancel
  };

  return (
    <div className="container">
      <h1 className="text-center mt-4">Profile Page</h1>

      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label className="form-label">Parent Name</label>
          <input
            type="text"
            className="form-control"
            name="parentName"
            value={formData.parentName}
            onChange={handleChange}
          />
          {errors.parentName && <div className="text-danger">{errors.parentName}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Children's Names</label>
          {formData.childrenNames.map((childName, index) => (
            <div key={index} className="d-flex mb-2">
              <input
                type="text"
                className="form-control"
                name="childrenNames"
                value={childName}
                onChange={(e) => handleChildNameChange(e, index)}
              />
              <button
                type="button"
                className="btn btn-danger ms-2"
                onClick={() => handleRemoveChild(index)}
                disabled={formData.childrenNames.length === 1}
              >
                Remove
              </button>
            </div>
          ))}
          <button type="button" className="btn btn-secondary" onClick={handleAddChild}>Add Child</button>
          {errors.childrenNames && <div className="text-danger">{errors.childrenNames}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Number of Seats in Car</label>
          <input
            type="number"
            className="form-control"
            name="numberOfSeats"
            value={formData.numberOfSeats}
            onChange={handleChange}
            min="1"
            max="12"
          />
          {errors.numberOfSeats && <div className="text-danger">{errors.numberOfSeats}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Available Drop-Off Days</label>
          {daysOfWeek.map((day) => (
            <div className="form-check" key={day}>
              <input
                className="form-check-input"
                type="checkbox"
                name="dropOffDays"
                value={day}
                onChange={handleChange}
                checked={formData.dropOffDays.includes(day)}
              />
              <label className="form-check-label">{day}</label>
            </div>
          ))}
          {errors.dropOffDays && <div className="text-danger">{errors.dropOffDays}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Available Pick-Up Days</label>
          {daysOfWeek.map((day) => (
            <div className="form-check" key={day}>
              <input
                className="form-check-input"
                type="checkbox"
                name="pickUpDays"
                value={day}
                onChange={handleChange}
                checked={formData.pickUpDays.includes(day)}
              />
              <label className="form-check-label">{day}</label>
            </div>
          ))}
          {errors.pickUpDays && <div className="text-danger">{errors.pickUpDays}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <div className="text-danger">{errors.address}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            inputMode="numeric"
            pattern="\d{10}"
            title="Please enter a 10-digit phone number"
          />
          {errors.phoneNumber && <div className="text-danger">{errors.phoneNumber}</div>}
        </div>

        <button
          type="button"
          className="btn btn-link mb-3"
          onClick={() => setShowPasswordFields((prev) => !prev)}
        >
          {showPasswordFields ? 'Cancel Change Password' : 'Change Password'}
        </button> 

        {/* Conditionally render password fields */}
        {showPasswordFields && (
          <>
        <div className="mb-3">
          <label className="form-label">Current Password</label>
          <input
            type="password"
            className="form-control"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
          />
          {errors.currentPassword && <div className="text-danger">{errors.currentPassword}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">New Password</label>
          <input
            type="password"
            className="form-control"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
          />
          {errors.newPassword && <div className="text-danger">{errors.newPassword}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Confirm New Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
        </div>
      </>
    )}
        <div>
          <button type="submit" className="btn btn-primary me-2"disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;