import { useState } from 'react';

import ExpenseList, { Expense } from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import ExpenseFilter from './components/ExpenseFilter';

const ExpenseTracker = () => {
  // Expense tracker
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const visibleExpenses = selectedCategory
    ? expenses.filter(e => e.category === selectedCategory)
    : expenses;

  return (
    <>
      {/* Expense tracker */}
      <div className="mb-5 mt-3">
        <ExpenseForm
          onSubmit={expense =>
            setExpenses([
              ...expenses,
              {
                ...expense,
                id: expenses.length + 1
              }
            ])
          }
        />
      </div>
      <div className="mt-3 mb-3">
        <ExpenseFilter
          onSelectCategory={category => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={id => setExpenses(expenses.filter(e => e.id !== id))}
      />
    </>
  );
};

export default ExpenseTracker;
