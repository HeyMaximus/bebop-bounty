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
    margin-bottom: 10px;
  }

  p {
    font-size: 1em;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 10px;
  margin-right: 70px;
`;

export const ReviewContainer = styled.div`
  flex: 1 1 0%;
  overflow: auto;
  width: 80%;
  padding: 10px;
  border: 1px solid white;
`;

export const TransactionContainer = styled.div`
  flex: 1 1 0%;
  overflow: auto;
  width: 80%;
  padding: 10px;
  border: 1px solid white;
`;
