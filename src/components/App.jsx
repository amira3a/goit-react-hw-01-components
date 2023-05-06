import  Friends  from "./FriendList/FriendList";
import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import data from './data/data';
import Transactions from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div>
    <Profile/> 
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} /> 
    <Friends />
    <Transactions /> 
    </div>
  );
};
