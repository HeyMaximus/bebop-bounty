import React, { useState } from 'react';
import axios from 'axios';
import {
  StyledListBountyContainer,
  StyledListBountyOverlay,
  StyledListBountyBody,
  StyledListBountyContentContainer,
  StyledSubmitListBounty,
  StyledListBountyCloseBtn,
  StyledListBountyTitleInput,
  StyledListBountyTitle,
  StyledListBountyContent,
  StyledLBDropDowns,
} from './navbar.styled';

export default function ListBountyModal({ showListBountyModal }) {
  const [initialValues, setInitialValues] = useState({
    buyer_id: 1,
    name: '',
    description: '',
    condition: '',
    category: '',
    city: '',
    state: '',
    completed: false,
    price: '',
    deadline: '',
    preferred_payment: '',
    image: '',
  });
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const getImageURL = (e) => {
    const uploadedFile = e.target.files[0];
    if (/([^\s]+(\.(jpe?g|png)))/.test(uploadedFile.name) && uploadedFile.size < 10485760) {
      const form = new FormData();
      form.append('file', uploadedFile);
      axios
        .post('https://api.cloudinary.com/v1_1/dlbnwlpoq/image/upload', form, {
          params: {
            upload_preset: 'ulaqsdpl',
          },
        })
        .then(({ data }) => {
          console.log('data.secure', data.secure_url);
          setFormValues({ ...formValues, image: data.secure_url });
        })
        .catch((err) => console.error(err));
    }
  };

  const submitBounty = async () => {
    showListBountyModal();

    console.log('Form Values', formValues);
    try {
      const response = await axios.post('api/bounties', formValues);
      console.log('Bounty submitted successfully:', response.data);
    } catch (error) {
      console.error('Error submitting offer:', error);
    }
  };

  return (
    <StyledListBountyContainer>
      <StyledListBountyOverlay onClick={() => showListBountyModal()} />
      <StyledListBountyBody>
        {/* ====== INSERT UNIQUE CONTENT BELOW HERE ====== */}
        <StyledListBountyCloseBtn type="button" onClick={() => showListBountyModal()}>
          X
        </StyledListBountyCloseBtn>
        <h2>Bounty</h2>
        <StyledListBountyContentContainer>
          <StyledListBountyContent>
            <StyledListBountyTitle>
              Bounty Title:
              <StyledListBountyTitleInput
                name="name"
                value={formValues.name}
                onChange={handleChange}
              />
            </StyledListBountyTitle>
            <StyledLBDropDowns>
              <select name="category" value={formValues.category} onChange={handleChange}>
                <option>Category</option>
                <option>Clothing</option>
                <option>Decor</option>
                <option>Furniture</option>
                <option>Gadget</option>
              </select>
              <select name="condition" value={formValues.condition} onChange={handleChange}>
                <option>Condition</option>
                <option>new</option>
                <option>like-new</option>
                <option>good</option>
                <option>fair</option>
                <option>poor</option>
              </select>
              <select
                name="preferred_payment"
                value={formValues.preferred_payment}
                onChange={handleChange}
              >
                <option>Preferred Payment</option>
                <option>cash</option>
                <option>paypal</option>
                <option>venmo</option>
                <option>visa</option>
                <option>zelle</option>
              </select>
            </StyledLBDropDowns>
            <div>
              Deadline:{' '}
              <input
                type="date"
                name="deadline"
                value={formValues.deadline}
                style={{ cursor: 'pointer' }}
                onChange={handleChange}
              />
            </div>
            <div>
              City:
              <input
                style={{ width: '91%' }}
                type="text"
                name="city"
                value={formValues.city}
                onChange={handleChange}
              />
            </div>
            <div>
              State:
              <input
                style={{ width: '90%' }}
                type="text"
                name="state"
                value={formValues.state}
                onChange={handleChange}
              />
            </div>
            <div>
              Price:
              <input
                style={{ width: '90%' }}
                type="text"
                name="price"
                value={formValues.price}
                onChange={handleChange}
              />
            </div>
            <div>
              Upload An Image:{' '}
              <input
                type="file"
                accept="image/png, image/jpeg, image/jpg"
                name="image"
                style={{ borderBottom: 'none' }}
                onChange={(e) => getImageURL(e)}
              />
            </div>
            <div>
              Description:{' '}
              <textarea
                type="text"
                name="description"
                rows="5"
                cols="50"
                placeholder="Describe what you're looking for..."
                value={formValues.description}
                onChange={handleChange}
              />
            </div>
          </StyledListBountyContent>
        </StyledListBountyContentContainer>
        <StyledSubmitListBounty className="list-bounty-btn" onClick={submitBounty} type="button">
          List Bounty
        </StyledSubmitListBounty>
        {/* ====== INSERT UNIQUE CONTENT ABOVE HERE ====== */}
      </StyledListBountyBody>
    </StyledListBountyContainer>
  );
}
