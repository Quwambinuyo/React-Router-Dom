import { Outlet, Link, useSearchParams } from "react-router-dom";

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();

  const showActiveUsers = searchParams.get("filter") === "active";

  return (
    <div>
      <h2>Users Page</h2>
      <ul>
        <li>
          <Link to="/users/1">User 1</Link>
        </li>
        <li>
          <Link to="/users/2">User 2</Link>
        </li>
        <li>
          <Link to="/users/3">User 3</Link>
        </li>
      </ul>
      <Outlet />

      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams()}>Reset Filter</button>
      </div>

      {showActiveUsers ? (
        <h2>Showing Active Users</h2>
      ) : (
        <h2>Showing all users</h2>
      )}
    </div>
  );
}

export default Users;
