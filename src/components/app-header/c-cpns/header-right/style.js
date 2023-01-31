import styled from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .btns {
    display: flex;
    align-items: center;
    margin: 0 8px 0;
    color: #222;
    font-size: 14px;
    font-weight: bold;

    .btn {
      background: transparent;
      border: 0;
      cursor: pointer;
      margin: 0;
      text-align: inherit;
      padding: 12px;

      &:hover {
        background-color: #f5f5f5;
        border-radius: 21px;
      }
    }
  }

  .profile {
    display: flex;
    align-items: center;
    position: relative;
    text-align: inherit;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 21px;
    transition: box-shadow 0.2s ease;
    padding: 5px 8px;
    box-sizing: border-box;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow}

    .avatar {
      display: inline-block;
      margin-left: 12px;
      height: 30px;
    }

    .dir-ltr {
      position: absolute;
      height: 10px;
      min-width: 10px;
      top: 2px;
      right: 4px;
      box-shadow: 0 0 0 1.5px #fff;
      background-color: ${props => props.theme.color.primaryColor};
      border-radius: 50%;
    }

    .panel {
      position: absolute;
      right: 0;
      top: 54px;
      width: 240px;
      padding: 10px 0 10px;
      border-radius: 14px;
      box-shadow: 0 2px 4px 2px rgba(0,0,0,0.18);
      background-color: #fff;

      .register {
        color: #000;
        font-weight: bold;
      }


      .top {
        padding: 0 0 10px 0;
        border-bottom: 1px solid #ddd;
      }

      .bottom {
        padding-top: 10px;
      }

      .item {
        display: block;
        padding: 10px;

        &:hover {
          background-color: #f5f5f5;
        }
      }
    }
  }
`