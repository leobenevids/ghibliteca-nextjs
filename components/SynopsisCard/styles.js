import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  margin: 0.25rem;
  padding: 0.25rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: linear-gradient(
    rgba(232, 242, 242, 0.7),
    rgba(36, 123, 160, 0.7),
    rgba(0, 100, 148, 0.7)
  );
  font-family: "LouisGeorgeCafeBold";
  border-radius: 5px;
  color: var(--white);
  width: 500px;

  .title {
    display: flex;
    flex-direction: column;

    p {
      color: var(--dark-blue);
      font-size: 1.5rem;
      font-weight: bold;
      overflow: hidden;
    }

    span {
      color: var(--deep-blue);
      font-size: 0.75rem;
      font-family: "LouisGeorgeCafeBold";
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 0.5rem;
    margin: 0.5rem 0.25rem;

    img {
      box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
        rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
      border-radius: 5px;
      width: 100%;
      flex: 1;
    }

    .text-container {
      padding: 0.5rem;
      overflow: hidden;
      box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
        rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
        rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
      font-family: "LouisGeorgeCafe";
      background: linear-gradient(rgba(256, 256, 256 0.8));
      border-radius: 5px;
      flex: 1;
      
      p {
        z-index: 0;
        text-align: center;
        font-size: 1.2rem;

        -moz-transform: translateY(100%);
        -webkit-transform: translateY(100%);
        transform: translateY(100%);

        -moz-animation: my-animation 15s linear infinite;
        -webkit-animation: my-animation 15s linear infinite;
        animation: my-animation 20s linear infinite;
      }

      @-webkit-keyframes my-animation {
        from {
          -webkit-transform: translateY(100%);
        }
        to {
          -webkit-transform: translateY(-100%);
        }
      }
    }

    @keyframes my-animation {
      from {
        -moz-transform: translateY(100%);
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
      }
      to {
        -moz-transform: translateY(-100%);
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
      }
    }
  }

  footer {
    font-size: 1rem;
    width: 95%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--white);
    font-weight: bold;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
`;
