import { useContext } from "react"
import { TransactionsContext } from "../../contexts/TransactionContext"
import { dateFormatter, priceFormatter } from "../../utils/formatter"
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles"

export function Transactions() {

  const { transactions } = useContext(TransactionsContext)

  return (
    <TransactionsContainer>
      <TransactionsTable>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.type === 'cash_in' ? 'Transferência Recebida' : 'Transferência Enviada'}</td>
              <td>
                <PriceHighlight color={transaction.type === 'cash_in' ? 'green': 'red'} >
                  {priceFormatter.format(transaction.value /100)}
                </PriceHighlight>
              </td>
              <td>{dateFormatter.format(new Date(transaction.created_at))}</td>
            </tr>
          ))}
        </tbody>
      </TransactionsTable>
    </TransactionsContainer>
  )
}