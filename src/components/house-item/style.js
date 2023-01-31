import styled from "styled-components";

export const HouseWrapper = styled.div`
  width: 25%;
  box-sizing: border-box;

  .inner {
    display: flex;
    flex-direction: column;
    padding: 8px;

    .good {
      position: relative;
      box-sizing: border-box;
      padding: 66.66% 0 0;
      margin-bottom: 2px;
      border-radius: 4px;
      overflow: hidden;

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
    }

    .introduce {
      font-size: 14px;
      color: ${props => props.introduceColor};
    }

    .name {
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-weight: bold;
      overflow: hidden;
      margin: 6px 0;
    }

    .bottom {
      display: flex;
      align-items: center;
    }

    .bottom_info {
      display: inline-block;
      margin-left: 6px;
      font-size: 12px;
      color: ${props => props.contentColor}
    }
  }
` 