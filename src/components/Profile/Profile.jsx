import style from "./style.module.css";
import user from "../data/user";

export default function Profile() {
  return (
      < div className = {style.profile} >
        
          <div className={style.description}>
        <img
              src={user.avatar}
              alt="User avatar"
              className={style.avatar}
               />
            <p className={style.username}>{user.username}</p>
            <p className="tag">{user.tag}</p>
            <p className="location">{user.location}</p>
      </div>
      
            <ul className={style.stats}>
              
              <li className={style.unit}>
                <span className={style.label}>followers</span>
                <span className={style.quantity}>{user.stats.followers}</span>
              </li>
              <li className={style.unit}>
                <span className={style.label}>Views</span>
                <span className={style.quantity}>{user.stats.views}</span>
              </li>
              <li className={style.unit}>
                <span className={style.label}>Likes</span>
                <span className={style.quantity}>{user.stats.likes}</span>
              </li>
          
            </ul>
            
          
   
</div >  
);
}
