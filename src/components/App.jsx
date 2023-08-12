
import Container from './Container/Container';

import Profile from './Profile/Profile';
import user from '../data/user';

import Statistics from './Statistics/Statistics';
import data from '../data/data';

import FriendsList from './FriendsList/FriendsList';
import friends from '../data/friends';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions';

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
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </Container>
  );
};
