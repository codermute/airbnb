import styled from "styled-components";


export const CenterWrapper = styled.div`
  padding: 0 24px;

  .search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 48px;
    border: 1px solid #ddd;
    padding: 0 7px;
    border-radius: 25px;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}

    .text {
      flex: 1;
      color: ${props => props.theme.color.textColorSecondary};
      padding: 0 16px;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: ${props => props.theme.color.primaryColor};
      color: #fff;
    }
  }
`