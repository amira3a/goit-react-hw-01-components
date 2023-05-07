import style from './style.module.css';
export default function Friends(props) {
    return (
    <div>
        
            <ul className={style.friendList} >
                {props.friends.map(friend => (
                    <li className={style.item} key={friend.id} >
                        <span className={friend.isOnline ? style.online : style.offline} ></span>
                        <img className={style.avatar} src={friend.avatar} alt="User avatar" width="48"  />
                        <p className={style.name}>{friend.name}</p>
                    </li>
                ))}
            </ul >
           </div> 
            );
            
}
