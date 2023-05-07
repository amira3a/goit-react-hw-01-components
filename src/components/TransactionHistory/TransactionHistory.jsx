import style from './style.module.css';
export default function Transactions(props) {
    return (
    <div>
    <table className={style.transactionHistory}>
  
          <thead>
            <tr>
          <th className={style.th}>Type</th>
          <th className={style.th}>Amount</th>
              <th className={style.th}>Currency</th>
            </tr>  
        </thead>
  
            <tbody>
                {props.transactions.map(item => (
                    <tr key={item.id} >
                        <td >{item.type} </td>
                        <td>{item.amount}</td>
                        <td >{item.currency}</td>
                    </tr>
                ))}
            </tbody >
      </table>
        </div>
            );
}
