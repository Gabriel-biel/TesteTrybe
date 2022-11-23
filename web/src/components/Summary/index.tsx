import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionContext";
import { priceFormatter } from "../../utils/formatter";
import { SummaryContainer, SummaryCard } from "./styles";


export function Summary() {

  const { summary } = useContext(TransactionsContext)

  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e"/>
        </header>
        <strong>{priceFormatter.format(summary.cash_in / 100)}</strong>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68"/>
        </header>
        <strong>{priceFormatter.format(summary.cash_out / 100)}</strong>
      </SummaryCard>
      <SummaryCard color="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#fff"/>
        </header>
        <strong>{priceFormatter.format(summary.balance / 100)}</strong>
      </SummaryCard>
    </SummaryContainer>
  )

}