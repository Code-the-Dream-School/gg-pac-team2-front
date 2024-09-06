import React, { useState, useCallback } from 'react';


const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childrenNames: [''],
    numberOfSeats: '',
    dropOffDays: [],
    pickUpDays: [],
    address: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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

  const validate = () => {
    const newErrors = {};
    if (!formData.parentName) newErrors.parentName = 'Parent name is required';
    if (formData.childrenNames.some((name) => !name)) newErrors.childrenNames = 'All children\'s names are required';
    if (!formData.numberOfSeats) {
      newErrors.numberOfSeats = 'Number of seats is required';
    } else if (formData.numberOfSeats < 1 || formData.numberOfSeats > 12) {
      newErrors.numberOfSeats = 'Number of seats must be between 1 and 12';
    }
    if (!formData.dropOffDays.length) newErrors.dropOffDays = 'At least one drop-off day is required';
    if (!formData.pickUpDays.length) newErrors.pickUpDays = 'At least one pick-up day is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.phoneNumber || !/^\d{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = 'Phone number is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setErrorMessage('No token found, please log in');
        return;
      }

    const { parentName, numberOfSeats, address, phoneNumber, childrenNames, dropOffDays, pickUpDays } = formData;

      try {
        setLoading(true);
        const response = await fetch('http://localhost:8000/api/v1/profile', {
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
          pickUpDays
          }),
        });

        setLoading(false);
  
        if (response.ok) {
          const data = await response.json();
          console.log('Profile updated:', data);

        // Handle success feedback
        setSuccessMessage('Profile updated successfully!');
        setErrorMessage(''); // Clear any previous errors
        setFormData({
          parentName: '',
          childrenNames: [''],
          numberOfSeats: '',
          dropOffDays: [],
          pickUpDays: [],
          address: '',
          phoneNumber: '',
        });

      } else {
        const errorMessage = await response.text();
        setErrorMessage(`Server error: ${response.statusText} - ${errorMessage}`);
        setSuccessMessage('');  // Clear any previous success
      }
    } catch (error) {
      setLoading(false); // Hide loading state on error
      setErrorMessage(`Network error: ${error.message}`);
      setSuccessMessage('');  // Clear any previous success
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
    });
    setErrors({});
    setSuccessMessage('');
    setErrorMessage('');
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
        <button type="submit" className="btn btn-primary me-2"disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
        </button>
        <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default ProfileForm;