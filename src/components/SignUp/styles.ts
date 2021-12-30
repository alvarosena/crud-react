import styled from 'styled-components';

const Container = styled.div`
  margin-left: 8rem;
  margin-top: 4rem;

  h1 {
    color: #A873F7;
    font-size: 2.4rem;
  }

  form {

    .icons {
    display: flex;
    margin-top: 2rem;
    margin-left: 20%;

    a {
      padding: 0.5rem;
      font-size: 28px;
    }

    .facebook {
      color: #485993;
    }

    .twitter {
      color: #1D9CEA;
    }
  }


    margin-left: 30px;
    width: 30%;

    p {
      color #fff;
      margin-bottom: 1rem;
    }

    input {
      padding: 1rem;
      width: 65%;
      margin-bottom: 1rem;
      color: #fff;
      font-size: 1rem;

      border: 0;
      border-radius: 0.25rem;
      background: #242A36;
      transition: 0.2s;

      &:hover{
        padding: 25px;
        transition: 0.3s;
      }
    }
    

    button {
      margin-top: 1rem;
      width: 200px;
      margin-left: 30px;
      height: 40px;

      border-radius: 20px;

      color: #fff;
      font-weight: 500;
      font-size: 16px;
      transition: 0.5s;

      &:hover{
        background: #091017;
        outline: 1px solid #A873F7;
        transition: 0.5s;
      }
    }

  }

  img {
    height: 450px;
    margin-left: 500px;
  }
`;

export { Container }