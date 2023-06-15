import styled from 'styled-components';

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
  font-size: 1.3em;
`;

export const TransactionBottom = styled.div`
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
  font-size: 1.3em;
`;

export const ReviewBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
