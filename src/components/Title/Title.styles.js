import styled from "styled-components";

export const DivTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-around;
    flex-wrap: wrap;
    align-items: center;
`;
export const TitleText = styled.h1`
    margin: 1%;
`;
export const Subtitle = styled.h3`
    margin: 0;
`;
export const ButtonCotizar = styled.button`
  width: 260px;
  height: 60px;
  background: #e94785;
  border-radius: 7px;
  color: #ffffff;
  border: 0;
  margin: 20px;
  cursor: pointer;
  &:hover  {
    color: #fff;
    background-color: #E31C79;
    border-color: #0a58ca;
  }
`;


export const TitleButton = styled.div`
  font-family: "Raleway";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
`;
