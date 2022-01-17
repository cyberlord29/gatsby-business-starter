import styled from 'styled-components';

export const Banner = styled.div`
  background-color: #172647;
  height: 275px;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  font-size: 36px;
  padding: 0px 3rem;
  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

export const CoursesContainer = styled.div`
  background-color: #F7F9FF;
`;

export const Header = styled.div`
  padding: 40px 20px;
  font-size: 24px;
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  background: #FFAB00 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px;
  border: none;
  margin-top: 10px;
  cursor: pointer;
  padding: 0px 10px;
  color: white;
  font-weight: bold;
`;


export const CourseItem = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 4px;
  border: none;
  background-color: white;
  width: 350px;
  padding: 8px;
  margin-top: 20px;
  margin-right: 50px;
`;
