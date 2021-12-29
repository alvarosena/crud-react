import styled from "styled-components";

const Container = styled.main`
  margin-top: 1rem;

  header{
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem;

    nav{
      display: flex;
      align-items: center;
      justify-content: space-between;

      
      a:hover {
        filter: brightness(0.9);: 
        transition: filter 0.2s;
      }

      .signup{
          margin-left: 900px;
        }
      }

      .login {
        margin-right: 80px;
      }
    }
  }

  table {
    width: 80%;
    margin-left: 100px;
    border-spacing: 0.0.0.5rem;
    th {
      color: #fff;
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }
    td {
      padding: 1rem 2rem;
      border: 0;
      background: #242A36;
      color: #aaa;
      /* border-radius: 0.25rem;   */
`;

export { Container }