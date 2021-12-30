import { Container } from './styles';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { BsTwitter } from 'react-icons/bs';
import winterImg from '../../assets/winter.svg';
import { useState } from 'react';

function SignUp() {

  return (
    <Container>
      <h1>Create your account!</h1>
      <form>
        <div className="icons">
          <a className="google" href=""><FcGoogle /></a>
          <a className="facebook" href=""><BsFacebook /></a>
          <a className="twitter" href=""><BsTwitter /></a>
        </div>
        <p>Username</p>
        <input type="text" name="username" autoFocus />
        <p>Email</p>
        <input type="email" name="email" autoFocus />
        <p>Password </p>
        <input type="password" name="password" autoFocus /> <br />
        <button type="submit">Create account</button>
      </form>
      <img src={winterImg} alt="winter" />
    </Container>
  )
}

export { SignUp }