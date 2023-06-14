import styled from 'styled-components';

export const Host = styled.div`
  margin: 0;
`;

export const TransactionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TransactionEntry = styled.div`
  margin-top: 10px;
  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
  }
`;

export const TransactionTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

export const ReviewEntry = styled.div`
  width: 100%;
  margin-top: 10px;
`;

export const ReviewTop = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
