import userService, { User } from './services/user-service';

// Custom hooks
import useUsers from './hooks/useUsers';

const Networking = () => {
  const { users, error, isLoading, setUsers, setError } = useUsers();

  const deleteUser = (user: User) => {
    const orignialUsers = [...users];
    setUsers(users.filter(u => u.id !== user.id));

    userService.delete(user.id).catch(err => {
      setError(err.message);
      setUsers(orignialUsers);
    });
  };

  const addUser = () => {
    const orignialUsers = [...users];
    const newUser = { id: 0, name: 'Josh Clieach Shep' };
    setUsers([newUser, ...users]);

    userService
      .create(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch(err => {
        setError(err.message);
        setUsers(orignialUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + '!' };
    setUsers(users.map(u => (u.id === user.id ? updatedUser : u)));

    userService.updateUser(updatedUser).catch(err => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <ul className="list-group">
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      {users.map(user => (
        <li
          key={user.id}
          className="list-group-item d-flex justify-content-between"
        >
          {user.name}
          <div>
            <button
              className="btn btn-outline-secondary mx-1"
              onClick={() => updateUser(user)}
            >
              Update
            </button>
            <button
              className="btn btn-outline-danger mx-1"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Networking;
