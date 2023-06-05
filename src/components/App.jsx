import Profile from 'components/Profiles/Profile';
import Statistics from './Statistics/Statistics';
import user from 'data/user';
import data from 'data/data';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
