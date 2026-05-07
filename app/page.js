"use client"

import { useState } from "react"

export default function Page() {
  const [balance, setBalance] = useState(10000)
  const [rate, setRate] = useState(4.5)
  const [months, setMonths] = useState(12)

  const interestEarned =
    balance * (rate / 100) * (months / 12)

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h1>High Yield Savings and CD Rate Tracker</h1>

      <p>
        Estimate how much interest you can earn from high yield savings accounts
        or certificates of deposit based on balance, rate, and term.
      </p>

      <div style={{ marginTop: "1.5rem" }}>
        <label>Deposit Amount</label>
        <input
          type="number"
          value={balance}
          onChange={(e) => setBalance(Number(e.target.value))}
          style={{ width: "100%", padding: "8px", marginBottom: "1rem" }}
        />

        <label>Annual Interest Rate (percent)</label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          style={{ width: "100%", padding: "8px", marginBottom: "1rem" }}
        />

        <label>Term Length (months)</label>
        <input
          type="number"
          value={months}
          onChange={(e) => setMonths(Number(e.target.value))}
          style={{ width: "100%", padding: "8px" }}
        />
      </div>

      <div style={{ marginTop: "2rem" }}>
        <p>Estimated Interest Earned: ${interestEarned.toFixed(2)}</p>
        <p>Total Balance After Term: ${(balance + interestEarned).toFixed(2)}</p>
      </div>

      <section style={{ marginTop: "2rem" }}>
        <h2>How This Works</h2>
        <p>
          This calculator applies a simple interest estimate to show how much
          your money may grow over a selected term. Actual earnings may vary
          depending on compounding and account terms.
        </p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Related Tools</h2>
        <ul>
          <li onClick={() => window.location.href = "https://creditcarddebtpayoffcalculator.com"}>Credit Card Debt Payoff Calculator</li>
          <li onClick={() => window.location.href = "https://side-hustle-profit-tax-estimator.com"}>Side Hustle Profit and Tax Estimator</li>
          <li onClick={() => window.location.href = "https://mysubscriptioncost.com"}>Subscription Cost Calculator</li>
          <li onClick={() => window.location.href = "https://debtreducingcalculator.com"}>Debt Payoff Calculator</li>
        </ul>
      </section>

      <p style={{ marginTop: "2rem", fontSize: "0.9rem" }}>
        This tool provides estimates for informational purposes only.
      </p>

      <p style={{ fontSize: "0.9rem" }}>
        <span onClick={() => window.location.href = "/privacy"}>Privacy Policy</span>{" "}
        |{" "}
        <span onClick={() => window.location.href = "/terms"}>Terms of Service</span>
      </p>
    </main>
  )
}
