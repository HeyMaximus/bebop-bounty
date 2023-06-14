import styled from 'styled-components';

export const Host = styled.div`
  margin-top: 50px;
`;

export const UserProfileContainer = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  border: 2px solid white;
  padding: 20px;
  box-sizing: border-box;
  width: 93%;
  height: 80vh;
  margin: 10px auto;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProfileImage = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  padding-right: 40px;
`;

export const UserDetails = styled.div`
  h2 {
    font-size: 1.5em;
  }

  p {
    font-size: 1em;
  }
`;

export const Rating = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5em;
`;

export const RightContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  gap: 30px;
`;

export const ReviewContainer = styled.div`
  flex: 1 1 0%;
  overflow: auto;
  width: 100%;
  padding: 20px;
  border: 1px solid white;
  h2 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

export const TransactionContainer = styled.div`
  flex: 1 1 0%;
  overflow: auto;
  width: 100%;
  padding: 20px;
  border: 1px solid white;
  h2 {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;
