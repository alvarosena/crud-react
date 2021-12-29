import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';;

interface RequestUser {
  id: string;
  username: string;
  email: string;
  created_at: string;
}

function UsersTable() {
  const [users, setUsers] = useState<RequestUser[]>([]);

  useEffect(() => {
    api.get('/users')
      .then(res => setUsers(res.data));
  });

  return (
    <Container>
      <header>
        <nav>
          <a className="signup" href="">Sign Up</a>
          <a className="login" href="">Login</a>
        </nav>
      </header>
      <div>
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => {
                return (
                  <tr key={user.id}>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.created_at}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </Container>
  )
}

export { UsersTable }