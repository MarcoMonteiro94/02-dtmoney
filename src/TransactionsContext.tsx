import { createContext, useEffect, useState } from "react";
import { api } from "./services/api";

type TransactionProps = {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
};

type TransactionsProviderProps = {
  children: React.ReactNode;
};

export const TransactionsContext = createContext<TransactionProps[]>([]);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  useEffect(() => {
    api.get("/transactions").then((res) => {
      console.log(res.data.transactions);

      setTransactions(res.data.transactions);
    });
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}
