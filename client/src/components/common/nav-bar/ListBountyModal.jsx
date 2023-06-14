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
} from './navbar.styled';

export default function ListBountyModal({ showListBountyModal }) {
  const [initialValues, setInitialValues] = useState({
    name: '',
    price: '',
    description: '',
    condition: '',
    category: '',
    city: '',
    state: '',
    deadline: '',
    preferred_payment: '',
    image: '',
  });
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

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

  return (
    <StyledListBountyContainer>
      <StyledListBountyOverlay />
      <StyledListBountyBody>

        {/* ====== INSERT UNIQUE CONTENT BELOW HERE ====== */}
        <StyledListBountyCloseBtn type="button" onClick={() => showListBountyModal()}>
          X
        </StyledListBountyCloseBtn>
        <h2>Bounty</h2>
        <StyledListBountyContentContainer>
          <StyledListBountyTitle>
            Bounty Title:
            <StyledListBountyTitleInput
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
          </StyledListBountyTitle>
          <div>
            <select name="category" value={formValues.category} onChange={handleChange}>
              Catgory
              <option>-- Select Category --</option>
              <option>Gadget</option>
              <option>Clothing</option>
              <option>Furniture</option>
            </select>
            <select name="condition" value={formValues.condition} onChange={handleChange}>
              Condition
              <option>-- Select Condition --</option>
              <option>new</option>
              <option>nike-new</option>
              <option>good</option>
              <option>fair</option>
              <option>poor</option>
            </select>
            <div>
              Deadline{' '}
              <input
                type="date"
                name="deadline"
                value={formValues.deadline}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            City
            <input type="text" name="city" value={formValues.city} onChange={handleChange} />
          </div>
          <div>
            State
            <input type="text" name="state" value={formValues.state} onChange={handleChange} />
          </div>
          <select
            name="preferred_payment"
            value={formValues.preferred_payment}
            onChange={handleChange}
          >
            Preferred Payment
            <option>cash</option>
            <option>paypal</option>
            <option>venmo</option>
            <option>visa</option>
            <option>zelle</option>
          </select>
          <div>
            Price
            <input type="text" name="price" value={formValues.price} onChange={handleChange} />
          </div>
          <div>
            Upload An Image{' '}
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              name="image"
              onChange={(e) => getImageURL(e)}
            />
          </div>
          <div>
            Description{' '}
            <textarea
              type="text"
              name="description"
              value={formValues.description}
              onChange={handleChange}
            />
          </div>
        </StyledListBountyContentContainer>
        <StyledSubmitListBounty className="list-bounty-btn" type="button">
          List Button
        </StyledSubmitListBounty>
        {/* ====== INSERT UNIQUE CONTENT ABOVE HERE ====== */}

      </StyledListBountyBody>
    </StyledListBountyContainer>
  );
}
