import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h3 className="expenses-list__fallback">Found no expenses.</h3>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((x) => (
        <ExpenseItem
          key={x.id}
          title={x.title}
          amount={x.amount}
          date={x.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
