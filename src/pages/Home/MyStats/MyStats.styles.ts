import styled from "styled-components";

export const MyStatsNumbers = styled.div`
  overflow: hidden;
  position: relative;

`

export const StatsFrame = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;

  span {
      color: #FFC107;
      font-weight: 600;
      font-family: "Poppins", sans-serif;
      font-size: 22px

  }

  @media screen and (max-width: 500px) {
    h6 {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 65px;

      &:hover {
        white-space: normal;
        overflow: visible;
        text-overflow: initial;
        max-width: 150px;
    }

    }
  }

`