import style from "./style.module.css";

export default function Profile(props) {
  return (
      < div className = {style.profile} >
        
          <div className={style.description}>
        <img
              src={props.avatar}
              alt="User avatar"
              className={style.avatar}
               />
            <p className={style.username}>{props.username}</p>
            <p className="tag">{props.tag}</p>
            <p className="location">{props.location}</p>
      </div>
      
            <ul className={style.stats}>
              
              <li className={style.unit}>
                <span className={style.label}>followers</span>
                <span className={style.quantity}>{props.stats.followers}</span>
              </li>
              <li className={style.unit}>
                <span className={style.label}>Views</span>
                <span className={style.quantity}>{props.stats.views}</span>
              </li>
              <li className={style.unit}>
                <span className={style.label}>Likes</span>
                <span className={style.quantity}>{props.stats.likes}</span>
              </li>
          
            </ul>
            
          
   
</div >  
);
}
