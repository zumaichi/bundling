import React from "react";
import { Link } from "react-router-dom";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [org, setOrg] = React.useState(
    () => localStorage.getItem("org") || "lemoncode"
  );

  React.useEffect(() => {
    fetchMembers(org);
  }, [org]);

  const fetchMembers = (organization: string) => {
    fetch(`https://api.github.com/orgs/${organization}/members`)
      .then((response) => response.json())
      .then((json) => (Array.isArray(json) ? setMembers(json) : setMembers([])))
      .catch(() => setMembers([]));
  };

  const handleSearch = () => {
    localStorage.setItem("org", org);
    fetchMembers(org);
  };

  return (
    <>
      <h2>Hello from List page</h2>
      <div>
        <input
          type="text"
          value={org}
          onChange={(e) => setOrg(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <React.Fragment key={member.id}>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </React.Fragment>
        ))}
      </div>
      <Link to="/detail">Navigate to detail page</Link>
    </>
  );
};
