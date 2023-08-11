
import Container from './Container/Container';
import Profile from './Profile/Profile';
import user from '../data/user';

export const App = () => {
  return (
      <Container>
        <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      </Container>
  );
};
