import styles from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {items.map((item) => (
            <tr className={styles.tableRow} key={item.id}>
              <td>{item.type.toUpperCase()}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TransactionHistory;
