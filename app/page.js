"use client"

import { useState } from "react"

export default function Page() {
  const [balance, setBalance] = useState(10000)
  const [rate, setRate] = useState(4.5)
  const [months, setMonths] = useState(12)

  const interestEarned = balance * (rate / 100) * (months / 12)
  const finalBalance = balance + interestEarned

  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "2rem",
        background: "#f4f6fb",
        minHeight: "100vh",
        fontFamily: "system-ui, -apple-system, sans-serif"
      }}
    >
      {/* TOOL */}
      <div
        style={{
          background: "#ffffff",
          padding: "1.5rem",
          borderRadius: "10px",
          marginBottom: "1.5rem"
        }}
      >
        <h1>High‑Yield Savings & CD Rate Tracker</h1>

        <p>
          Estimate how much interest you can earn from high‑yield savings accounts
          or certificates of deposit based on balance, rate, and term length.
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

        <div style={{ marginTop: "1.5rem" }}>
          <p><strong>Estimated Interest Earned:</strong> ${interestEarned.toFixed(2)}</p>
          <p><strong>Total Balance After Term:</strong> ${finalBalance.toFixed(2)}</p>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div
        style={{
          background: "#ffffff",
          padding: "1.5rem",
          borderRadius: "10px",
          marginBottom: "1.5rem"
        }}
      >
        <h2>How This Works</h2>
        <p>
          This calculator applies a simple interest estimate to show potential
          earnings over a selected term. Actual results may vary based on
          compounding frequency and account terms.
        </p>
      </div>

      {/* RELATED TOOLS */}
      <div
        style={{
          background: "#ffffff",
          padding: "1.5rem",
          borderRadius: "10px",
          marginBottom: "1.5rem"
        }}
      >
        <h2>Related Tools</h2>
        <ul>
          <li onClick={() => window.location.href = "https://creditcarddebtpayoffcalculator.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
            Credit Card Debt Payoff Calculator
          </li>
          <li onClick={() => window.location.href = "https://sidehustletaxestimator.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
            Side Hustle Tax Estimator
          </li>
          <li onClick={() => window.location.href = "https://mysubscriptioncost.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
            Subscription Cost Calculator
          </li>
          <li onClick={() => window.location.href = "https://debtreducingcalculator.com"} style={{ cursor: "pointer", textDecoration: "underline" }}>
            Debt Payoff Calculator
          </li>
        </ul>
      </div>

      {/* DISCLAIMER + FOOTER */}
      <div style={{ fontSize: "0.9rem", color: "#555", marginBottom: "1rem" }}>
        This tool provides estimates for informational purposes only.
      </div>

      <div style={{ fontSize: "0.9rem" }}>
        <span
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => window.location.href = "/privacy"}
        >
          Privacy Policy
        </span>
        {" | "}
        <span
          style={{ cursor: "pointer", textDecoration: "underline" }}
          onClick={() => window.location.href = "/terms"}
        >
          Terms of Service
        </span>
      </div>
    </main>
  )
}
