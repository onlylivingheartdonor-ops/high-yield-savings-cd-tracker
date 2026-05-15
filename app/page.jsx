"use client"

import { useState } from "react"
import { RELATED_LINKS as RELATED } from "./lib/links"

const css = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #faf8f4; font-family: 'DM Mono', monospace; color: #1a1a1a; }
  .hys-wrap { max-width: 780px; margin: 0 auto; padding: 2rem 1.5rem; }
  .hys-header { border-bottom: 2px solid #1a1a1a; padding-bottom: 1.5rem; margin-bottom: 2rem; }
  .hys-eyebrow { font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: #888; margin-bottom: .5rem; }
  .hys-title { font-family: 'DM Serif Display', serif; font-size: clamp(2rem, 5vw, 3.2rem); line-height: 1.1; }
  .hys-title em { font-style: italic; color: #166534; }
  .hys-card { background: #fff; border: 1px solid #e0dbd3; border-radius: 4px; padding: 1.5rem; margin-bottom: 1.5rem; }
  .hys-section-title { font-family: 'DM Serif Display', serif; font-size: 1.2rem; margin-bottom: 1rem; color: #1a1a1a; }

  .hys-field-row { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1.25rem; margin-bottom: 1.25rem; }
  .hys-field-block { }
  .hys-field-label { font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: #888; display: block; margin-bottom: .4rem; }
  .hys-field-hint { font-size: 12px; color: #888; margin-top: .3rem; }
  .hys-input-wrap { position: relative; }
  .hys-prefix { position: absolute; left: 0; top: .4rem; font-size: 1rem; color: #aaa; }
  .hys-suffix { position: absolute; right: 0; top: .4rem; font-size: 1rem; color: #aaa; }
  .hys-input { width: 100%; border: none; border-bottom: 1.5px solid #e0dbd3; background: transparent; font-family: 'DM Mono', monospace; font-size: 1.1rem; color: #1a1a1a; padding: .4rem 1.2rem .4rem 1.2rem; outline: none; transition: border-color .2s; }
  .hys-input.no-prefix { padding-left: 0; }
  .hys-input.no-suffix { padding-right: 0; }
  .hys-input:focus { border-color: #166534; }

  .hys-compound-row { display: flex; gap: .5rem; flex-wrap: wrap; margin-bottom: 1.25rem; }
  .hys-compound-label { font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: #888; display: block; margin-bottom: .5rem; }
  .hys-compound-tab { padding: .4rem .85rem; border: 1px solid #e0dbd3; border-radius: 2px; font-family: 'DM Mono', monospace; font-size: 12px; color: #555; cursor: pointer; transition: all .15s; background: none; }
  .hys-compound-tab.on { border-color: #166534; background: #f0faf4; color: #166534; }

  .hys-result-hero { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: #e0dbd3; border: 1px solid #e0dbd3; border-radius: 2px; overflow: hidden; margin-bottom: 1.5rem; }
  .hys-result-cell { background: #fff; padding: 1.25rem; }
  .hys-result-label { font-size: 10px; letter-spacing: .08em; text-transform: uppercase; color: #888; margin-bottom: .3rem; }
  .hys-result-val { font-family: 'DM Serif Display', serif; font-size: 1.8rem; color: #1a1a1a; }
  .hys-result-val.green { color: #166534; }

  .hys-bar-section { margin-bottom: 1.5rem; }
  .hys-bar-label { font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: #888; margin-bottom: .5rem; display: flex; justify-content: space-between; }
  .hys-bar-track { height: 10px; background: #e0dbd3; border-radius: 5px; overflow: hidden; margin-bottom: .4rem; }
  .hys-bar-principal { height: 100%; background: #1a1a1a; display: inline-block; border-radius: 5px 0 0 5px; transition: width .5s; }
  .hys-bar-interest { height: 100%; background: #166534; display: inline-block; border-radius: 0 5px 5px 0; transition: width .5s; }
  .hys-bar-legend { display: flex; gap: 1.5rem; font-size: 11px; color: #888; }
  .hys-legend-dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; margin-right: .35rem; vertical-align: middle; }

  .hys-compound-effect { border: 1.5px dashed #bbf7d0; border-radius: 4px; padding: 1.25rem; margin-bottom: 1rem; }
  .hys-compound-effect-title { font-size: 11px; letter-spacing: .08em; text-transform: uppercase; color: #166534; margin-bottom: .75rem; }
  .hys-compound-grid { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 1px; background: #e0dbd3; border: 1px solid #e0dbd3; border-radius: 2px; overflow: hidden; }
  .hys-compound-cell { background: #fff; padding: .75rem; }
  .hys-compound-cell-label { font-size: 10px; letter-spacing: .06em; text-transform: uppercase; color: #aaa; margin-bottom: .25rem; }
  .hys-compound-cell-val { font-family: 'DM Serif Display', serif; font-size: 1.1rem; color: #166534; }
  .hys-compound-cell-val.muted { color: #888; }

  .hys-schedule-toggle { font-size: 12px; color: #166534; cursor: pointer; text-decoration: underline; margin-bottom: .75rem; display: inline-block; }
  .hys-schedule { display: none; overflow-x: auto; }
  .hys-schedule.show { display: block; }
  .hys-schedule-table { width: 100%; border-collapse: collapse; font-size: 12px; min-width: 400px; }
  .hys-schedule-table th { font-size: 10px; letter-spacing: .08em; text-transform: uppercase; color: #888; text-align: left; padding: .4rem .5rem; border-bottom: 1px solid #e0dbd3; }
  .hys-schedule-table td { padding: .4rem .5rem; border-bottom: 1px solid #f5f3ef; color: #444; }
  .hys-schedule-table tr:last-child td { color: #166534; font-weight: 500; }

  .hys-info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1rem; }
  .hys-info-item { padding: .75rem; border-left: 2px solid #bbf7d0; }
  .hys-info-title { font-size: 12px; font-weight: 500; color: #1a1a1a; margin-bottom: .25rem; }
  .hys-info-body { font-size: 12px; color: #888; line-height: 1.5; }

  .hys-prose p { font-size: 13px; color: #444; line-height: 1.7; margin-bottom: .75rem; }
  .hys-prose p:last-child { margin-bottom: 0; }
  .hys-prose ul { font-size: 13px; color: #444; line-height: 1.8; padding-left: 1.2rem; margin-bottom: .75rem; }
  .hys-prose ul li { margin-bottom: .3rem; }

  .hys-tip-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  .hys-tip-num { font-family: 'DM Serif Display', serif; font-size: 2rem; color: #bbf7d0; line-height: 1; margin-bottom: .4rem; }
  .hys-tip-title { font-size: 12px; font-weight: 500; color: #1a1a1a; margin-bottom: .25rem; }
  .hys-tip-body { font-size: 12px; color: #888; line-height: 1.5; }

  .hys-related-links { display: flex; flex-wrap: wrap; gap: .5rem; }
  .hys-related-link { font-size: 12px; padding: .35rem .75rem; border: 1px solid #e0dbd3; border-radius: 2px; color: #555; text-decoration: none; transition: all .15s; display: inline-block; }
  .hys-related-link:hover { border-color: #1a1a1a; color: #1a1a1a; }
  .hys-disclaimer { font-size: 11px; color: #888; line-height: 1.6; border-top: 1px solid #e0dbd3; padding-top: 1rem; margin-top: 1rem; }
  .hys-footer-links { display: flex; gap: 1rem; font-size: 11px; margin-top: .75rem; }
  .hys-footer-links a { color: #888; text-decoration: underline; }

  @media (max-width: 600px) {
    .hys-field-row { grid-template-columns: 1fr; }
    .hys-result-hero, .hys-info-grid, .hys-tip-grid { grid-template-columns: 1fr; }
    .hys-compound-grid { grid-template-columns: 1fr 1fr; }
  }
`

const COMPOUND_OPTIONS = [
  { key: "annually",   label: "Annually",   n: 1 },
  { key: "quarterly",  label: "Quarterly",  n: 4 },
  { key: "monthly",    label: "Monthly",    n: 12 },
  { key: "daily",      label: "Daily",      n: 365 },
]

import { RELATED_LINKS as RELATED } from "./lib/links"

function fmt(n) { return "$" + Math.round(n).toLocaleString("en-US") }
function fmtDec(n) { return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }

function compound(principal, rate, n, months) {
  const r = rate / 100
  const t = months / 12
  const final = principal * Math.pow(1 + r / n, n * t)
  return { final, interest: final - principal }
}

function buildSchedule(principal, rate, n, months) {
  const rows = []
  const step = months <= 24 ? 1 : Math.ceil(months / 24)
  for (let m = step; m <= months; m += step) {
    const { final, interest } = compound(principal, rate, n, m)
    rows.push({ month: m, balance: final, interest })
  }
  // Always include final month
  const last = rows[rows.length - 1]
  if (!last || last.month !== months) {
    const { final, interest } = compound(principal, rate, n, months)
    rows.push({ month: months, balance: final, interest })
  }
  return rows
}

export default function Page() {
  const [balance, setBalance]     = useState("10000")
  const [rate, setRate]           = useState("4.50")
  const [months, setMonths]       = useState("12")
  const [compoundKey, setCompound] = useState("monthly")
  const [showSchedule, setShowSchedule] = useState(false)

  const b = parseFloat(balance) || 0
  const r = parseFloat(rate)    || 0
  const m = parseInt(months)    || 0
  const n = COMPOUND_OPTIONS.find(o => o.key === compoundKey)?.n || 12

  const { final, interest } = b && r && m ? compound(b, r, n, m) : { final: b, interest: 0 }
  const interestPct   = final > 0 ? Math.round(interest / final * 100) : 0
  const principalPct  = 100 - interestPct
  const schedule      = b && r && m ? buildSchedule(b, r, n, m) : []

  // Compare compounding frequencies
  const compoundComparison = COMPOUND_OPTIONS.map(opt => {
    const res = b && r && m ? compound(b, r, opt.n, m) : { interest: 0 }
    return { ...opt, interest: res.interest }
  })

  return (
    <>
      <style>{css}</style>
      <main className="hys-wrap">

        <div className="hys-header">
          <p className="hys-eyebrow">Savings &amp; Investing</p>
          <h1 className="hys-title">High-Yield Savings<br /><em>&amp; CD Calculator</em></h1>
        </div>

        {/* TOOL */}
        <div className="hys-card">
          <div className="hys-field-row">
            <div className="hys-field-block">
              <label className="hys-field-label" htmlFor="balance">Deposit amount</label>
              <div className="hys-input-wrap">
                <span className="hys-prefix">$</span>
                <input id="balance" className="hys-input" type="number" min="0" placeholder="10000"
                  value={balance} onChange={e => setBalance(e.target.value)} />
              </div>
            </div>
            <div className="hys-field-block">
              <label className="hys-field-label" htmlFor="rate">Annual interest rate</label>
              <div className="hys-input-wrap">
                <input id="rate" className="hys-input no-prefix" type="number" min="0" step="0.01" placeholder="4.50"
                  value={rate} onChange={e => setRate(e.target.value)} />
                <span className="hys-suffix">%</span>
              </div>
            </div>
            <div className="hys-field-block">
              <label className="hys-field-label" htmlFor="months">Term length</label>
              <div className="hys-input-wrap">
                <input id="months" className="hys-input no-prefix" type="number" min="1" placeholder="12"
                  value={months} onChange={e => setMonths(e.target.value)} />
                <span className="hys-suffix">mo</span>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: "1.25rem" }}>
            <span className="hys-compound-label">Compounding frequency</span>
            <div className="hys-compound-row">
              {COMPOUND_OPTIONS.map(o => (
                <button key={o.key} className={`hys-compound-tab${compoundKey === o.key ? " on" : ""}`}
                  onClick={() => setCompound(o.key)}>{o.label}</button>
              ))}
            </div>
          </div>

          {b > 0 && r > 0 && m > 0 && (
            <>
              <div className="hys-result-hero">
                <div className="hys-result-cell">
                  <p className="hys-result-label">Interest earned</p>
                  <p className="hys-result-val green">{fmtDec(interest)}</p>
                </div>
                <div className="hys-result-cell">
                  <p className="hys-result-label">Final balance</p>
                  <p className="hys-result-val">{fmtDec(final)}</p>
                </div>
              </div>

              <div className="hys-bar-section">
                <div className="hys-bar-label">
                  <span>Deposit vs earnings</span>
                  <span>{principalPct}% principal · {interestPct}% interest</span>
                </div>
                <div className="hys-bar-track">
                  <div className="hys-bar-principal" style={{ width: principalPct + "%" }} />
                  <div className="hys-bar-interest" style={{ width: interestPct + "%" }} />
                </div>
                <div className="hys-bar-legend">
                  <span><span className="hys-legend-dot" style={{ background: "#1a1a1a" }} />Principal: {fmt(b)}</span>
                  <span><span className="hys-legend-dot" style={{ background: "#166534" }} />Interest: {fmtDec(interest)}</span>
                </div>
              </div>

              <div className="hys-compound-effect">
                <p className="hys-compound-effect-title">How compounding frequency affects your earnings</p>
                <div className="hys-compound-grid">
                  {compoundComparison.map(o => (
                    <div className="hys-compound-cell" key={o.key}>
                      <p className="hys-compound-cell-label">{o.label}</p>
                      <p className={`hys-compound-cell-val${compoundKey === o.key ? "" : " muted"}`}>
                        {fmtDec(o.interest)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <span className="hys-schedule-toggle" onClick={() => setShowSchedule(s => !s)}>
                {showSchedule ? "Hide" : "Show"} growth schedule
              </span>
              <div className={`hys-schedule${showSchedule ? " show" : ""}`}>
                <table className="hys-schedule-table">
                  <thead>
                    <tr>
                      <th>Month</th>
                      <th>Interest earned</th>
                      <th>Total balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {schedule.map((row, i) => (
                      <tr key={i}>
                        <td>{row.month}</td>
                        <td>{fmtDec(row.interest)}</td>
                        <td>{fmtDec(row.balance)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>

        {/* HOW IT WORKS */}
        <div className="hys-card">
          <p className="hys-section-title">How this calculator works</p>
          <div className="hys-prose">
            <p>Enter your deposit amount, the annual interest rate offered by your account or CD, and the term length in months. The calculator applies compound interest — the same method banks use — to show your true earnings over the period.</p>
            <p>The compounding frequency selector shows how often interest is added to your balance. Daily compounding produces slightly more than monthly, which produces more than annual — because each time interest is added, it starts earning interest itself. Most high-yield savings accounts compound daily; most CDs compound daily or monthly.</p>
            <p>The comparison table shows what the same deposit would earn under each compounding frequency, so you can see exactly how much the frequency choice matters for your specific inputs.</p>
          </div>
          <div className="hys-info-grid">
            <div className="hys-info-item">
              <p className="hys-info-title">APY vs APR</p>
              <p className="hys-info-body">Banks advertise APY (Annual Percentage Yield), which already accounts for compounding. If your account shows an APY, the results here will match your statement closely. APR does not account for compounding and will slightly understate earnings.</p>
            </div>
            <div className="hys-info-item">
              <p className="hys-info-title">High-yield savings vs CD</p>
              <p className="hys-info-body">HYSAs offer variable rates that can change anytime — rates may rise or fall with market conditions. CDs lock in a fixed rate for the full term, providing certainty at the cost of flexibility. Early withdrawal from a CD typically incurs a penalty.</p>
            </div>
            <div className="hys-info-item">
              <p className="hys-info-title">FDIC insurance</p>
              <p className="hys-info-body">Both HYSAs and CDs at FDIC-insured banks are protected up to $250,000 per depositor, per institution. This makes them among the safest places to hold cash while still earning meaningful interest.</p>
            </div>
            <div className="hys-info-item">
              <p className="hys-info-title">Tax on interest</p>
              <p className="hys-info-body">Interest earned in an HYSA or CD is taxable as ordinary income in the year it is credited. Your bank will issue a 1099-INT if you earn $10 or more. This calculator shows pre-tax earnings — factor in your tax rate for a net figure.</p>
            </div>
          </div>
        </div>

        {/* WHY IT MATTERS */}
        <div className="hys-card">
          <p className="hys-section-title">Why high-yield savings accounts matter</p>
          <div className="hys-prose">
            <p>The average traditional savings account pays a fraction of a percent in interest — often 0.01% to 0.10% APY. High-yield savings accounts, typically offered by online banks, have paid 4–5% APY in recent years, making the gap between the two account types the largest it has been in decades.</p>
            <p>On a $20,000 emergency fund, the difference between 0.05% and 4.50% APY is roughly $890 per year in additional interest — money that requires no extra work, no investment risk, and no lock-up period. For cash you plan to hold anyway, the account you choose matters more than most people realize.</p>
            <p>The case for CDs is slightly different: they sacrifice flexibility for rate certainty. If you believe rates will fall — as they often do after a rate cycle peak — locking in a current rate for 12 or 24 months can be a sensible move for cash you won&apos;t need immediately.</p>
          </div>
        </div>

        {/* TIPS */}
        <div className="hys-card">
          <p className="hys-section-title">Getting the most from your savings rate</p>
          <div className="hys-tip-grid">
            <div>
              <p className="hys-tip-num">01</p>
              <p className="hys-tip-title">Shop rates actively</p>
              <p className="hys-tip-body">HYSA rates change frequently and vary significantly between institutions. Online banks consistently offer higher rates than traditional banks because they have lower overhead. Checking rates every few months takes minutes and can meaningfully increase annual earnings.</p>
            </div>
            <div>
              <p className="hys-tip-num">02</p>
              <p className="hys-tip-title">Consider a CD ladder</p>
              <p className="hys-tip-body">Instead of putting all savings into a single CD, a ladder splits the deposit across multiple CDs with staggered maturity dates — for example, 3, 6, 12, and 24 months. This gives you periodic access to funds while still capturing term premiums.</p>
            </div>
            <div>
              <p className="hys-tip-num">03</p>
              <p className="hys-tip-title">Keep emergency funds liquid</p>
              <p className="hys-tip-body">CDs are best for money you&apos;re confident you won&apos;t need before maturity. Emergency funds — typically 3–6 months of expenses — belong in an HYSA where they&apos;re accessible without penalty. Avoid locking up your safety net.</p>
            </div>
            <div>
              <p className="hys-tip-num">04</p>
              <p className="hys-tip-title">Watch for promotional rates</p>
              <p className="hys-tip-body">Some banks offer promotional rates for new customers or specific term lengths. These can be excellent short-term opportunities, but confirm what the rate reverts to afterward — and whether the promotional period covers the full term shown in advertising.</p>
            </div>
          </div>
        </div>

        {/* HYSA VS CD */}
        <div className="hys-card">
          <p className="hys-section-title">High-yield savings vs certificates of deposit</p>
          <div className="hys-prose">
            <p>Both account types are safe, FDIC-insured options for cash you want to earn meaningful interest on. The right choice depends on when you&apos;ll need the money and your view on where rates are headed:</p>
            <ul>
              <li><strong style={{fontWeight:500}}>Choose an HYSA</strong> if you want full flexibility — no lock-up, no penalty for withdrawals, and the ability to add to the balance at any time. Rates are variable, so they rise when the Fed raises rates and fall when it cuts them.</li>
              <li><strong style={{fontWeight:500}}>Choose a CD</strong> if you have a specific future date in mind and want certainty. A 12-month CD purchased today locks in today&apos;s rate regardless of what happens to interest rates over the next year.</li>
              <li><strong style={{fontWeight:500}}>Consider both</strong> for larger cash positions: keep your liquid reserve in an HYSA and park longer-horizon cash in CDs of varying terms to balance flexibility and yield.</li>
            </ul>
            <p>No-penalty CDs are a middle ground worth exploring — they offer a fixed rate like a traditional CD but allow early withdrawal without a fee, combining some of the benefits of both account types.</p>
          </div>
        </div>

       {/* ========== MONEYWISE LINK — START ========== */}
        <div style={{ background: "#fff", border: "1px solid #e0dbd3", borderRadius: "4px", padding: "1rem 1.5rem", marginBottom: "1.5rem", textAlign: "center" }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "13px", color: "#888" }}>
            Looking for more free financial tools?{" "}
            <a href="https://moneywisecalculator.com" style={{ color: "#b45309", textDecoration: "underline" }}>
              Visit MoneyWiseCalculator.com
            </a>
          </p>
        </div>
        {/* ========== MONEYWISE LINK — END ========== */}

        {/* RELATED */}
        <div className="dr-card">
          <p className="dr-section-title">Related tools</p>
          <div className="dr-related-links">
            {RELATED.map((r, i) => (
              <a key={i} className="dr-related-link" href={r.href}>{r.label}</a>
            ))}
          </div>
          <div className="dr-disclaimer">
            This tool provides estimates for informational purposes only and does not constitute financial advice. Results assume a fixed interest rate and fixed monthly payment for the full repayment period. This site may use cookies and analytics. By using this site, you agree to our Privacy Policy and Terms of Service.
            <div className="dr-footer-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}
