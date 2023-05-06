import data from '../data/data';
import style from './style.module.css';
export default function Statistics (props) {
    return (
        <section className={style.statistics}>
            {props.title && <h2 className={style.title}>{props.title}</h2>}
            <ul className={style.statList}>
                {data.map(item => (
                    <li className={style.item} key={item.id}>
                        <span className={style.label}>{item.label}</span>
                        <span className={style.percentage}>{item.percentage}</span>
                    </li>
                ))}
            </ul> 
        </section>
    );
}
