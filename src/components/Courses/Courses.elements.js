import styled from 'styled-components';

export const Banner = styled.div`
  background-color: #172647;
  height: 275px;
  color: white;
  text-align: center;
  padding: 90px 20px;
  font-size: 36px;
`;

export const CoursesContainer = styled.div`
  background-color: #F7F9FF;
  padding: 90px 0px;
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
  height: 30px;
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
  margin-right: 50px;
`;
