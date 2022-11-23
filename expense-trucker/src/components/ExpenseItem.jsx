const ExpenseItem = () => {
    const expenseTitle = 'Car Insuranse'
    const expenseDate = new Date ()
  return (
  <div className="expense-item">
    <div className="expense-item__description">Car Insuranse</div>
    <div>20 may 2022</div>
    <div className="expense-item__price">$200</div>
  </div>
  );
};

export default ExpenseItem;
