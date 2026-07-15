import React from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function RefundCancellationPolicy() {
  return (
    <main className="min-h-screen bg-[#111111] font-sans selection:bg-[#00e56a] selection:text-black">
      <Header />
      
      <div className="pt-32 md:pt-40 pb-24 max-w-[1770px] mx-auto w-full px-5 sm:px-10 lg:px-24 xl:px-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent mb-6 max-w-5xl leading-tight tracking-tight">
          Cancellation & Refund Policy
        </h1>
        <p className="text-xl text-gray-400 mb-2 font-medium">Client Engagement Terms — Cancellation, Termination and Refund Provisions</p>
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative mt-16">
          
          {/* Main Content */}
          <div className="flex-1 max-w-4xl text-[#a1a1aa] space-y-12 text-[16px] leading-relaxed">
            
            <section id="intro" className="space-y-6">
              <p className="text-[14px] text-gray-500">Document Version: 1.0 | Effective Date: 14 July 2026 | Governing Law: Republic of India</p>
              
              <div className="bg-[#161616] border border-[#00FF88]/20 bg-gradient-to-br from-[#161616] to-[#111111] hover:border-[#00FF88]/40 transition-colors duration-500 p-6 md:p-8 rounded-xl mt-8 shadow-lg">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00FF88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                  Important Notice
                </h3>
                <p>
                  This Policy forms an integral part of, and is incorporated by reference into, every proposal, statement of work, master services agreement and invoice issued by the <strong className="text-white">Agency</strong>.
                </p>
              </div>
            </section>

            {/* PART 1 */}
            <section id="part-1" className="space-y-10 scroll-mt-32 pt-8">
              <h2 className="text-3xl font-bold text-white border-b border-white/10 pb-4">PART 1 — PRELIMINARY</h2>
              
              <div id="p1-1" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">1. Introduction and Purpose</h3>
                <p>This Cancellation & Refund Policy (the <strong className="text-white">"Policy"</strong>) sets out the terms on which <strong className="text-white">AGENCY</strong>, an information technology consulting and software development firm operating under the laws of India (the <strong className="text-white">"Agency"</strong>, <strong className="text-white">"we"</strong>, <strong className="text-white">"us"</strong> or <strong className="text-white">"our"</strong>), and a client engaging the Agency for software design, development, consulting or related digital services (the <strong className="text-white">"Client"</strong>) may cancel, suspend, or terminate an engagement, and the consequences that follow, including the treatment of fees, deposits, work product, source code, and Client data.</p>
                <p>This Policy is drafted to reduce ambiguity and to pre-empt the disputes that most commonly arise between software agencies and clients on cancellation — namely, disagreement over what has been "completed," what is refundable, who owns partially built work, and what happens to hosting, source code, and data after an engagement ends. It is intended to operate fairly and to be enforceable under Indian contract and consumer protection law, while remaining workable for engagements with international clients.</p>
              </div>

              <div id="p1-2" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">2. Definitions and Interpretation</h3>
                <p>In this Policy, unless the context otherwise requires, the following terms have the meanings given below:</p>
                <ul className="list-disc pl-6 space-y-3 text-[#d1d5db] marker:text-[#00FF88]">
                  <li><strong className="text-white">"Agreement"</strong> means, collectively, the applicable proposal, statement of work ("SOW"), master services agreement ("MSA"), purchase order, or website Terms & Conditions under which the Agency provides Services to the Client, together with this Policy.</li>
                  <li><strong className="text-white">"Business Day"</strong> means a day (other than a Saturday, Sunday, or public holiday) on which banks are open for general business in India.</li>
                  <li><strong className="text-white">"Cancellation"</strong> means the ending of an engagement, in whole or in part, before the Services contracted for have been fully performed, whether initiated by the Client or the Agency, and includes "termination" unless the context distinguishes between the two.</li>
                  <li><strong className="text-white">"Deliverable"</strong> means any software, application, source code, design, document, report, or other work product that the Agency develops, configures, or provides to the Client under an engagement.</li>
                  <li><strong className="text-white">"Effective Date of Cancellation"</strong> means the date on which a Notice of Cancellation is deemed received in accordance with Clause 33 (Notices), or such later date specified in the notice or agreed by the parties.</li>
                  <li><strong className="text-white">"Fixed-Price Project"</strong> means an engagement for which the Agency and the Client have agreed a single, all-inclusive fee for a defined scope of work, payable on a schedule agreed in the SOW.</li>
                  <li><strong className="text-white">"Milestone"</strong> means a defined stage of a project, set out in the applicable SOW, the completion of which triggers an invoice or payment obligation.</li>
                  <li><strong className="text-white">"Monthly Retainer"</strong> means an engagement under which the Client pays a recurring monthly fee for a defined allocation of the Agency's time, capacity, or ongoing services, whether or not the full allocation is used in any given month.</li>
                  <li><strong className="text-white">"Non-Refundable Deposit"</strong> means the upfront payment described in Clause 14, payable by the Client on execution of the Agreement or before commencement of work, which is not refundable except as expressly stated in this Policy.</li>
                  <li><strong className="text-white">"Subscription Service"</strong> means a Deliverable or Service made available to the Client on a recurring subscription basis (for example, a hosted SaaS product built and operated by the Agency for the Client), billed at a recurring interval.</li>
                  <li><strong className="text-white">"Third-Party Costs"</strong> means amounts payable to third parties in connection with an engagement, including cloud hosting (such as AWS, Azure, or Google Cloud), domain registration, SSL certificates, software licences, APIs, and other paid services procured for the Client's project.</li>
                  <li><strong className="text-white">"Time & Material Engagement" or "T&M"</strong> means an engagement billed on the basis of actual time spent and materials or expenses incurred, at agreed hourly or daily rates, rather than a fixed price.</li>
                  <li><strong className="text-white">"Work-in-Progress" or "WIP"</strong> means any part of a Deliverable that has been partly developed but not yet completed, tested, or formally delivered and accepted as at the Effective Date of Cancellation.</li>
                </ul>
                <p>Headings are for convenience only and do not affect interpretation. Words importing the singular include the plural and vice versa. References to "writing" or "written notice" include email, unless this Policy expressly requires a different form.</p>
              </div>

              <div id="p1-3" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">3. Scope and Application</h3>
                <p>This Policy applies to every engagement between the Agency and a Client for the provision of Services, including AI development, SaaS development, web and mobile application development, API development, cloud infrastructure and DevOps services, UI/UX design, automation, and custom software development, regardless of whether the engagement was initiated through the Agency's website, a proposal, an SOW, an MSA, or a purchase order.</p>
                <p>This Policy applies equally to Clients located in India and to international Clients, subject to Clause 30 (Cross-Border Engagements and International Payments) and Clause 32 (Governing Law and Dispute Resolution).</p>
              </div>

              <div id="p1-4" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">4. Order of Precedence</h3>
                <p>Where the Agency and the Client have executed a signed SOW or MSA that contains cancellation, termination, or refund terms that expressly conflict with this Policy, the signed document prevails to the extent of the conflict, and this Policy applies to fill any gap that the signed document does not address. Where no such conflicting terms exist, this Policy applies in full and is incorporated into the Agreement by reference.</p>
              </div>
            </section>

            {/* PART 2 */}
            <section id="part-2" className="space-y-10 scroll-mt-32 pt-16">
              <h2 className="text-3xl font-bold text-white border-b border-white/10 pb-4">PART 2 — CANCELLATION BY ENGAGEMENT TYPE</h2>
              
              <div id="p2-5" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">5. Cancellation Before Commencement of Work</h3>
                <p>If the Client cancels an engagement after signing the Agreement or paying the Non-Refundable Deposit, but before the Agency has commenced any design, development, planning, resource allocation, or other work under the engagement:</p>
                <ul className="list-disc pl-6 space-y-3 text-[#d1d5db] marker:text-[#00FF88]">
                  <li>the Non-Refundable Deposit described in Clause 14 is retained by the Agency in full and is not refundable; and</li>
                  <li>any amount paid by the Client in excess of the Non-Refundable Deposit, for which no corresponding work has commenced and no Third-Party Costs have been incurred, is refunded within 15 Business Days of the Effective Date of Cancellation, less any payment processing or currency conversion charges actually incurred by the Agency.</li>
                </ul>
                <p>"Commencement of work" includes, without limitation, discovery or requirements workshops, architecture or technical planning, environment or repository setup, design work, resource scheduling that displaces other client work, and procurement of Third-Party Costs. Where any of these has occurred, Clause 6 onward applies instead of this Clause 5.</p>
              </div>

              <div id="p2-6" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">6. Cancellation After Commencement of Work — General Principles</h3>
                <p>Once work has commenced, cancellation is governed by the specific rules for the applicable engagement type set out in Clauses 7 to 11. The following principles apply across all engagement types unless the applicable clause states otherwise:</p>
                <ul className="list-disc pl-6 space-y-3 text-[#d1d5db] marker:text-[#00FF88]">
                  <li>the Client remains liable for all fees for work actually performed up to the Effective Date of Cancellation, calculated in accordance with the applicable pricing model;</li>
                  <li>the Client remains liable for all Third-Party Costs already incurred or committed by the Agency on the Client's behalf as at the Effective Date of Cancellation, including non-cancellable subscriptions and pre-paid licences procured for the engagement;</li>
                  <li>cancellation does not relieve the Client of any payment obligation that accrued before the Effective Date of Cancellation, including for a Milestone completed but not yet invoiced; and</li>
                  <li>the Agency will issue a final invoice within 10 Business Days of the Effective Date of Cancellation itemising fees for work performed, Third-Party Costs, and any amount refundable to the Client under this Policy.</li>
                </ul>
              </div>

              <div id="p2-7" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">7. Fixed-Price Projects</h3>
                <p>For Fixed-Price Projects, cancellation after commencement of work is treated as follows:</p>
                <ul className="list-disc pl-6 space-y-3 text-[#d1d5db] marker:text-[#00FF88]">
                  <li><strong className="text-white">Proportional fee.</strong> the Agency will calculate the fee payable for work performed using the Agency's good-faith, itemised assessment of the proportion of the total agreed scope that has been completed as at the Effective Date of Cancellation, by reference to the project plan, Milestones, or task breakdown recorded in the SOW;</li>
                  <li><strong className="text-white">Minimum retained fee.</strong> where work has commenced, the Agency retains, at a minimum, the greater of (i) the Non-Refundable Deposit, or (ii) the proportional fee calculated under this Clause, whichever is higher;</li>
                  <li><strong className="text-white">Balance.</strong> any amount paid by the Client in advance that exceeds the amount retained under this Clause is refunded within 15 Business Days of the Effective Date of Cancellation; and</li>
                  <li><strong className="text-white">Shortfall.</strong> where the amount paid by the Client is less than the amount payable under this Clause, the Client will settle the shortfall within 15 Business Days of the final invoice, in accordance with Clause 18 (Outstanding Invoices).</li>
                </ul>
              </div>

              <div id="p2-8" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">8. Milestone-Based Projects</h3>
                <p>For projects structured around defined Milestones:</p>
                <ul className="list-disc pl-6 space-y-3 text-[#d1d5db] marker:text-[#00FF88]">
                  <li>each Milestone payment becomes due and non-refundable on completion of the corresponding Milestone (meaning the Deliverable for that Milestone has been made available to the Client for review), regardless of whether the engagement is subsequently cancelled and regardless of whether the Client has formally "accepted" that Milestone, provided the Agency has given the Client a reasonable opportunity to review it under Clause 17;</li>
                  <li>if cancellation occurs while a Milestone is in progress but not yet completed, the Agency will invoice for that in-progress Milestone on the basis set out in Clause 7 (Fixed-Price Projects) for the proportion of that Milestone completed, treating the in-progress Milestone as a stand-alone Fixed-Price Project for this purpose; and</li>
                  <li>Milestones already completed and paid for are not reopened, recalculated, or refunded on account of the cancellation of later Milestones.</li>
                </ul>
              </div>

              <div id="p2-9" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">9. Time & Material (T&M) Engagements</h3>
                <p>For T&M Engagements:</p>
                <ul className="list-disc pl-6 space-y-3 text-[#d1d5db] marker:text-[#00FF88]">
                  <li>the Client is liable for all hours worked and expenses properly incurred up to the Effective Date of Cancellation, at the rates set out in the Agreement, regardless of whether those hours have yet been invoiced;</li>
                  <li>time records are maintained by the Agency in the ordinary course of business and are conclusive evidence of hours worked, absent manifest error, and will be made available to the Client on request;</li>
                  <li>no minimum notice period is required to stop future work under a T&M Engagement, but the notice and wind-down provisions of Clause 13 continue to apply; and</li>
                  <li>any pre-paid hours or retainer-style advance payment not yet consumed as at the Effective Date of Cancellation is refunded within 15 Business Days, less a wind-down fee equal to 10% of the unused balance to cover administrative closure of the engagement.</li>
                </ul>
              </div>

              <div id="p2-10" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">10. Monthly Retainers</h3>
                <p>For Monthly Retainer engagements:</p>
                <ul className="list-disc pl-6 space-y-3 text-[#d1d5db] marker:text-[#00FF88]">
                  <li>the retainer fee for the calendar month in which the Notice of Cancellation is given is fully earned and non-refundable, regardless of the amount of allocated time actually used by the Client during that month;</li>
                  <li>the engagement terminates at the end of the notice period described in Clause 13, and the Client remains liable for the retainer fee for each full month that falls within the notice period; and</li>
                  <li>unused allocated hours or capacity do not roll over, accrue cash value, or become refundable on cancellation, save where the Agreement expressly provides otherwise.</li>
                </ul>
              </div>

              <div id="p2-11" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">11. Subscription Services</h3>
                <p>For Subscription Services operated by the Agency on the Client's behalf (for example, a hosted application billed on a recurring basis):</p>
                <ul className="list-disc pl-6 space-y-3 text-[#d1d5db] marker:text-[#00FF88]">
                  <li>the Client may cancel a Subscription Service at any time, effective at the end of the then-current billing cycle, by giving notice in accordance with Clause 13;</li>
                  <li>fees already paid for the current billing cycle are non-refundable, and no partial-month or pro-rated refund is given for cancellation part-way through a billing cycle, except where mandatorily required by applicable consumer protection law;</li>
                  <li>on the effective date of cancellation of a Subscription Service, the Agency may disable, suspend, or decommission the associated hosting environment, subject to the data retention and return provisions of Clauses 25 and 26; and</li>
                  <li>where a Subscription Service was offered under an introductory, discounted, or promotional term subject to a minimum commitment period, early cancellation before the end of that minimum period may attract the early-termination charge disclosed to the Client at the time of subscribing.</li>
                </ul>
              </div>

              <div id="p2-12" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">12. Change Requests After a Cancellation Notice</h3>
                <p>Once a Notice of Cancellation has been given by either party, the Agency is not obliged to accept new change requests, scope additions, or out-of-scope work, and may elect to treat any further instruction from the Client as a new, separate engagement subject to a new proposal and separate payment terms. Any work the Agency agrees to perform after a Notice of Cancellation has been given is chargeable in addition to, and does not extend, any notice period already running.</p>
              </div>
            </section>

            {/* PART 3 */}
            <section id="part-3" className="space-y-10 scroll-mt-32 pt-16">
              <h2 className="text-3xl font-bold text-white border-b border-white/10 pb-4">PART 3 — NOTICE, DEPOSITS AND REFUNDS</h2>
              
              <div id="p3-13" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white mb-6">13. Notice Requirements</h3>
                <p>Cancellation or termination notice must be given in writing ("Notice of Cancellation") to the contact details in Clause 39 (Contact Details), and, unless a different period is agreed in the SOW or MSA, the following minimum notice periods apply:</p>
                
                <div className="overflow-x-auto mt-6 border border-[#00FF88]/20 rounded-xl rounded-b-none shadow-lg">
                  <table className="w-full text-left text-[15px]">
                    <thead className="bg-[#1e1e1e] text-white border-b-2 border-[#00FF88]/30">
                      <tr>
                        <th className="p-5 font-bold border-r border-white/10 w-1/2">Engagement Type</th>
                        <th className="p-5 font-bold">Minimum Notice Period (from either party)</th>
                      </tr>
                    </thead>
                    <tbody className="bg-[#111111]">
                      <tr>
                        <td className="p-5 font-bold text-white border-b border-r border-white/10 align-top bg-[#161616]/50">Fixed-Price Project</td>
                        <td className="p-5 border-b border-white/10 text-gray-300 leading-relaxed">15 calendar days</td>
                      </tr>
                      <tr>
                        <td className="p-5 font-bold text-white border-b border-r border-white/10 align-top bg-[#161616]/50">Milestone-Based Project</td>
                        <td className="p-5 border-b border-white/10 text-gray-300 leading-relaxed">15 calendar days</td>
                      </tr>
                      <tr>
                        <td className="p-5 font-bold text-white border-b border-r border-white/10 align-top bg-[#161616]/50">Time & Material Engagement</td>
                        <td className="p-5 border-b border-white/10 text-gray-300 leading-relaxed">7 calendar days</td>
                      </tr>
                      <tr>
                        <td className="p-5 font-bold text-white border-b border-r border-white/10 align-top bg-[#161616]/50">Monthly Retainer</td>
                        <td className="p-5 border-b border-white/10 text-gray-300 leading-relaxed">30 calendar days, or the end of the then-current billing month, whichever is later</td>
                      </tr>
                      <tr>
                        <td className="p-5 font-bold text-white border-r border-white/10 align-top bg-[#161616]/50 rounded-bl-xl">Subscription Service</td>
                        <td className="p-5 text-gray-300 leading-relaxed rounded-br-xl">As stated in Clause 11 (end of current billing cycle)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="pt-4">A Notice of Cancellation is deemed received: (a) on the same Business Day, if sent by email before 6:00 p.m. Indian Standard Time; (b) on the next Business Day, if sent after that time or on a non-Business Day; or (c) on the date of delivery confirmed by courier or registered post, if sent by physical mail. During any notice period, both parties will continue to perform their existing obligations under the Agreement, including payment obligations, unless the parties agree in writing to an earlier wind-down.</p>
                <p>This Clause 13 does not apply to termination for cause under Clause 21, which may take effect immediately.</p>
              </div>

              <div id="p3-14" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">14. Non-Refundable Deposits</h3>
                <p>Unless the SOW or MSA states a different figure, the Agency requires an upfront deposit of 20% of the total estimated Fixed-Price Project fee, or a minimum deposit equivalent to two weeks of estimated fees for T&M and retainer engagements, payable before commencement of work ("Non-Refundable Deposit").</p>
                <p>The Non-Refundable Deposit compensates the Agency for the allocation of team capacity, the turning-away of other prospective work, initial planning, and administrative on-boarding, and is earned in full on receipt. It is not refundable on cancellation for any reason, including cancellation before commencement of work under Clause 5, save where required by applicable law or where the Agency itself cancels the engagement without cause under Clause 20.</p>
              </div>

              <div id="p3-15" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">15. Refund Eligibility and Calculation</h3>
                <p>Subject to the specific rules in Clauses 5 to 11, the following general principles govern refund eligibility:</p>
                <ul className="list-disc pl-6 space-y-3 text-[#d1d5db] marker:text-[#00FF88]">
                  <li><strong className="text-white">No refund for work performed.</strong> fees for work actually performed, and Third-Party Costs actually incurred, are earned and non-refundable, regardless of whether the Client ultimately uses, launches, or is satisfied with the Deliverable, provided the work was performed in accordance with the Agreement.</li>
                  <li><strong className="text-white">Refund of unearned advance payments.</strong> any amount paid in advance for work not yet performed, and not otherwise identified as non-refundable under this Policy, is refunded within 15 Business Days of the Effective Date of Cancellation.</li>
                  <li><strong className="text-white">Method of refund.</strong> refunds are made to the original payment method or bank account used by the Client, or, where that is not possible, to a bank account nominated by the Client in writing, less any bank charges, payment gateway fees, or currency conversion losses actually incurred by the Agency in making the refund.</li>
                  <li><strong className="text-white">Disputed quality.</strong> where the Client cancels on the ground that Deliverables are defective or non-conforming, the dispute resolution and warranty provisions of the Agreement (including the 30-day defect-fixing warranty referred to in the Agency's Terms & Conditions) apply before any refund claim is assessed, and the Client will give the Agency a reasonable opportunity to remedy a defect before a refund is considered.</li>
                </ul>
                <p>Nothing in this Clause obliges the Agency to make a refund that would result in the Agency being paid less than the fair value of work actually and properly performed.</p>
              </div>

              <div id="p3-16" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">16. Third-Party and Pass-Through Costs</h3>
                <p>Third-Party Costs procured by the Agency on the Client's behalf — including cloud hosting (AWS, Azure, Google Cloud), domain registration, SSL certificates, third-party software licences, paid APIs, and SaaS subscriptions used to build or operate the Deliverable — are:</p>
                <ul className="list-disc pl-6 space-y-3 text-[#d1d5db] marker:text-[#00FF88]">
                  <li>payable by the Client in full, regardless of cancellation, to the extent already incurred, committed, or non-cancellable as at the Effective Date of Cancellation;</li>
                  <li>passed through to the Client at the Agency's actual cost, plus any handling fee disclosed in the SOW, unless otherwise agreed;</li>
                  <li>the Client's sole responsibility to continue, transfer, or cancel directly with the relevant third-party provider after transition under Clause 27, where such accounts are held in the Client's own name; and</li>
                  <li>where such accounts are held in the Agency's name for the Client's benefit, the Agency may, at its discretion and subject to Clause 25 (Data Retention), continue, suspend or terminate those accounts following cancellation, and is not obliged to maintain them at its own cost beyond the transition period described in Clause 27.</li>
                </ul>
              </div>

              <div id="p3-17" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">17. Completed Work and Work-in-Progress</h3>
                <p>On cancellation:</p>
                <ul className="list-disc pl-6 space-y-3 text-[#d1d5db] marker:text-[#00FF88]">
                  <li><strong className="text-white">Completed and paid Deliverables.</strong> any Milestone, module, or Deliverable that has been completed and paid for in full remains with the Client, subject to the intellectual property conditions in Clause 24, and is not affected by cancellation of the remaining engagement.</li>
                  <li><strong className="text-white">Work-in-Progress.</strong> WIP is made available to the Client in its then-current state ("as is"), without warranty as to completeness, stability, or fitness for purpose, once all outstanding invoices relating to that WIP have been settled in accordance with Clause 18. The Agency is under no obligation to complete, polish, document, or further test WIP after the Effective Date of Cancellation unless separately engaged and paid to do so.</li>
                  <li><strong className="text-white">Review opportunity.</strong> before treating a Milestone as "completed" for invoicing purposes, the Agency will make the relevant Deliverable available for the Client's review and will consider any specific, written, good-faith objection raised within 5 Business Days; the Agency's reasonable determination on completion is otherwise final for the purpose of this Policy.</li>
                </ul>
              </div>

              <div id="p3-18" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">18. Outstanding Invoices and Set-Off</h3>
                <p>All invoices issued before, or as a result of, cancellation remain payable in accordance with their original payment terms, or within 15 Business Days of the invoice date, whichever is earlier. The Agency may set off any refund otherwise due to the Client under this Policy against any amount owed by the Client to the Agency under the same or any related engagement, and will provide the Client a written statement of the set-off calculation. Late payment of an outstanding invoice may attract interest and administrative charges as set out in the Agency's Terms & Conditions and the applicable Agreement.</p>
              </div>
            </section>

            {/* PART 4 */}
            <section id="part-4" className="space-y-10 scroll-mt-32 pt-16">
              <h2 className="text-3xl font-bold text-white border-b border-white/10 pb-4">PART 4 — SUSPENSION AND TERMINATION</h2>
              
              <div id="p4-19" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">19. Suspension for Non-Payment</h3>
                <p>If any invoice remains unpaid 15 calendar days after its due date, the Agency may, on written notice to the Client, suspend performance of the Services, access to Deliverables, hosting, and support, without liability for any resulting delay, until the outstanding amount (together with any accrued interest) is paid in full. Suspension under this Clause does not itself terminate the engagement and does not relieve the Client of its payment obligations. Continued non-payment for a further 30 calendar days after suspension entitles the Agency to terminate the engagement for cause under Clause 21.</p>
              </div>

              <div id="p4-20" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">20. Termination Rights of the Agency</h3>
                <p>In addition to termination for cause under Clause 21, the Agency may terminate an engagement for convenience by giving the Client the notice period specified in Clause 13. Where the Agency terminates for convenience, and not for any cause attributable to the Client:</p>
                <ul className="list-disc pl-6 space-y-3 text-[#d1d5db] marker:text-[#00FF88]">
                  <li>the Client remains liable only for fees for work actually performed and Third-Party Costs actually incurred up to the Effective Date of Cancellation;</li>
                  <li>any amount paid in advance for work not yet performed is refunded in full within 15 Business Days, without deduction of the wind-down fee referred to in Clause 9; and</li>
                  <li>the Non-Refundable Deposit is, in this specific case only, refunded to the extent it exceeds fees earned for work actually performed.</li>
                </ul>
              </div>

              <div id="p4-21" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">21. Immediate Termination for Cause</h3>
                <p>Notwithstanding any notice period elsewhere in this Policy, the Agency may suspend or terminate an engagement immediately, without notice and without liability to the Client, where the Agency reasonably believes that:</p>
                <ul className="list-disc pl-6 space-y-3 text-[#d1d5db] marker:text-[#00FF88]">
                  <li>the Client has engaged, or is engaging, in fraud, misrepresentation, or dishonesty in connection with the engagement, including providing false information to secure services or payment terms;</li>
                  <li>the Client's project, instructions, or use of a Deliverable involves or facilitates illegal activity, including but not limited to money laundering, unlicensed financial services, unlicensed gambling, or the infringement of a third party's intellectual property or privacy rights;</li>
                  <li>the Client, its personnel, or its representatives engage in abuse, harassment, threats, or offensive conduct toward the Agency's personnel;</li>
                  <li>continuing the engagement would breach applicable sanctions, export control law, or anti-money-laundering obligations binding on the Agency, including where the Client, its ultimate beneficial owner, or its jurisdiction becomes subject to comprehensive sanctions;</li>
                  <li>the Client is in material breach of the representations and warranties given in the Agency's Terms & Conditions, or of any confidentiality, payment, or acceptable-use obligation, and (where the breach is capable of remedy) fails to remedy it within 7 calendar days of being asked to do so; or</li>
                  <li>the Client becomes insolvent, enters into liquidation, has a receiver or administrator appointed, or is unable to pay its debts as they fall due.</li>
                </ul>
                <p>On termination for cause under this Clause: (a) all outstanding invoices become immediately due and payable; (b) the Non-Refundable Deposit and all fees for work performed to date are retained in full and are not refundable; (c) the Agency may withhold delivery of WIP and source code until all outstanding amounts are paid, subject to Clause 24; and (d) the Agency reserves the right to preserve records and report the matter to law enforcement or regulatory authorities in accordance with its Terms & Conditions.</p>
              </div>

              <div id="p4-22" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">22. Termination Rights of the Client</h3>
                <p>The Client may terminate an engagement for the Agency's uncured material breach of the Agreement (for example, sustained and unremedied failure to deliver agreed Milestones) by giving the Agency written notice specifying the breach and a reasonable opportunity, of not less than 15 calendar days, to remedy it. If the Agency fails to remedy the breach within that period, the Client may terminate with immediate effect, and: (a) the Client remains liable only for fees for work properly performed and Third-Party Costs properly incurred up to the Effective Date of Cancellation; and (b) any amount paid in advance for work not performed, or performed defectively and not remedied, is refunded within 15 Business Days, calculated in accordance with Clause 15.</p>
              </div>

              <div id="p4-23" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">23. Effect of Termination</h3>
                <p>On termination or expiry of an engagement, howsoever arising: (a) each party's accrued rights and obligations as at the Effective Date of Cancellation are unaffected; (b) each party will promptly return or, at the disclosing party's election, destroy the other party's confidential information, save for archival copies retained solely for legal, audit, or regulatory compliance purposes; (c) the Agency will issue a final account in accordance with Clause 6; and (d) the provisions of this Policy that by their nature ought to survive termination, including those listed in Clause 29 (Survival), continue in force.</p>
              </div>
            </section>

            {/* PART 5 */}
            <section id="part-5" className="space-y-10 scroll-mt-32 pt-16">
              <h2 className="text-3xl font-bold text-white border-b border-white/10 pb-4">PART 5 — INTELLECTUAL PROPERTY AND DATA</h2>
              
              <div id="p5-24" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">24. Intellectual Property and Source Code Release Conditions</h3>
                <p>Ownership of source code and other Deliverables is governed by the intellectual property provisions of the Agency's Terms & Conditions and the applicable SOW or MSA. For the purpose of cancellation and termination specifically:</p>
                <ul className="list-disc pl-6 space-y-3 text-[#d1d5db] marker:text-[#00FF88]">
                  <li><strong className="text-white">Full payment condition.</strong> source code and Deliverables transfer to the Client only on receipt by the Agency of full and final payment for the Milestone, phase, or engagement to which they relate. Until full and final payment is received, all rights, title, and interest in the relevant Deliverable, including source code, remain with the Agency.</li>
                  <li><strong className="text-white">Release on settlement.</strong> once all outstanding invoices relating to a Deliverable have been paid in full, the Agency will make the corresponding source code and build artefacts available to the Client within 10 Business Days, by repository transfer, access grant, or another method reasonably requested by the Client.</li>
                  <li><strong className="text-white">Pre-existing and third-party materials.</strong> pre-existing Agency tools, frameworks, internal libraries, and know-how used in building a Deliverable remain the Agency's property and are licensed, not sold, to the Client for use with that Deliverable; open-source components remain governed by their original licences, as described in the Agency's Terms & Conditions.</li>
                  <li><strong className="text-white">Withheld WIP.</strong> the Agency is not obliged to release source code for WIP relating to unpaid invoices, and may withhold such release under Clause 21(c) or pending settlement under Clause 18, without this constituting a breach of the Agreement.</li>
                </ul>
              </div>

              <div id="p5-25" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white mb-6">25. Data Retention After Termination</h3>
                <p>Following termination, the Agency retains Client data and project materials (including source code, design files, credentials, and communications) for the following periods, after which they are securely deleted unless a longer period is required by law or a legal hold:</p>
                
                <div className="overflow-x-auto mt-6 border border-[#00FF88]/20 rounded-xl rounded-b-none shadow-lg">
                  <table className="w-full text-left text-[15px]">
                    <thead className="bg-[#1e1e1e] text-white border-b-2 border-[#00FF88]/30">
                      <tr>
                        <th className="p-5 font-bold border-r border-white/10 w-1/2">Category</th>
                        <th className="p-5 font-bold">Retention Period After Termination</th>
                      </tr>
                    </thead>
                    <tbody className="bg-[#111111]">
                      <tr>
                        <td className="p-5 font-bold text-white border-b border-r border-white/10 align-top bg-[#161616]/50">Source code and build artefacts (paid in full)</td>
                        <td className="p-5 border-b border-white/10 text-gray-300 leading-relaxed">90 calendar days, available for the Client to retrieve</td>
                      </tr>
                      <tr>
                        <td className="p-5 font-bold text-white border-b border-r border-white/10 align-top bg-[#161616]/50">Work-in-progress relating to unpaid invoices</td>
                        <td className="p-5 border-b border-white/10 text-gray-300 leading-relaxed">30 calendar days from settlement, or 90 calendar days from termination, whichever is earlier, after which it may be deleted</td>
                      </tr>
                      <tr>
                        <td className="p-5 font-bold text-white border-b border-r border-white/10 align-top bg-[#161616]/50">Hosting environment / database backups</td>
                        <td className="p-5 border-b border-white/10 text-gray-300 leading-relaxed">30 calendar days, then decommissioned unless a transition or extended hosting arrangement is agreed</td>
                      </tr>
                      <tr>
                        <td className="p-5 font-bold text-white border-b border-r border-white/10 align-top bg-[#161616]/50">Project communications and records</td>
                        <td className="p-5 border-b border-white/10 text-gray-300 leading-relaxed">Retained for up to 3 years for legal, accounting and dispute-resolution purposes</td>
                      </tr>
                      <tr>
                        <td className="p-5 font-bold text-white border-r border-white/10 align-top bg-[#161616]/50 rounded-bl-xl">Access credentials and secrets</td>
                        <td className="p-5 text-gray-300 leading-relaxed rounded-br-xl">Rotated or revoked within 5 Business Days of termination</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="pt-4">The Agency is not a long-term data escrow or backup provider. The Client is responsible for taking its own final export or backup of any data or Deliverable it wishes to retain before the applicable retention period described above expires.</p>
              </div>

              <div id="p5-26" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">26. Return and Deletion of Client Data</h3>
                <p>On written request made within the applicable retention period in Clause 25, the Agency will: (a) provide the Client a reasonable opportunity to export or receive a copy of its data and Deliverables in a commonly used format or via the original tooling used to build them; and (b) following such export, or on expiry of the retention period, delete or anonymise the Client's data from the Agency's active systems, save for backup copies that are deleted in the ordinary course of the Agency's backup rotation cycle and any copies the Agency is required to retain by law. The Agency may charge a reasonable fee for data-export assistance that goes beyond a standard export already available through the Deliverable's own tooling.</p>
              </div>

              <div id="p5-27" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">27. Transition Assistance</h3>
                <p>Where the Client has separately purchased transition or hand-over assistance (for example, to move hosting to the Client's own account or to onboard a new development team), the Agency will provide such assistance on the terms, scope, and fees agreed in the applicable SOW. Where transition assistance has not been separately purchased, the Agency may, at its discretion, offer it on a T&M basis at the Agency's then-current rates. In either case, transition assistance is conditional on settlement of all outstanding invoices under Clause 18 and does not extend the data retention periods in Clause 25 unless expressly agreed in writing.</p>
              </div>
            </section>

            {/* PART 6 */}
            <section id="part-6" className="space-y-10 scroll-mt-32 pt-16 pb-16">
              <h2 className="text-3xl font-bold text-white border-b border-white/10 pb-4">PART 6 — GENERAL PROVISIONS</h2>
              
              <div id="p6-28" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">28. Force Majeure</h3>
                <p>Neither party is liable for any failure or delay in performance, including in meeting a notice period or completing wind-down obligations under this Policy, to the extent caused by circumstances beyond its reasonable control, including natural disasters, internet or cloud-provider outages, government action, war, pandemic, or power failure ("Force Majeure Event"). The affected party will notify the other as soon as reasonably practicable and will resume performance as soon as reasonably possible once the Force Majeure Event ends. A Force Majeure Event does not excuse payment obligations for work already performed or costs already incurred. If a Force Majeure Event continues for more than 60 calendar days, either party may terminate the affected engagement on written notice, in which case Clause 23 (Effect of Termination) applies.</p>
              </div>

              <div id="p6-29" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">29. Survival</h3>
                <p>The following provisions survive cancellation, termination, or expiry of an engagement, however arising: payment obligations accrued before termination (Clauses 6 to 18); intellectual property and source code conditions (Clause 24); data retention, return and deletion (Clauses 25 and 26); confidentiality obligations under the Agency's Terms & Conditions; indemnities given under the Agreement; limitation of liability; governing law and dispute resolution (Clause 32); and any other provision which, by its nature, is intended to continue beyond termination.</p>
              </div>

              <div id="p6-30" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">30. Cross-Border Engagements and International Payments</h3>
                <p>Where the Client is located outside India, the following additional terms apply:</p>
                <ul className="list-disc pl-6 space-y-3 text-[#d1d5db] marker:text-[#00FF88]">
                  <li>all fees are quoted and invoiced in the currency stated in the Agreement; where a refund is due, it is made in the same currency, and the Client bears any currency conversion difference, correspondent bank charges, or wire transfer fees arising from cross-border payment or refund;</li>
                  <li>payments and refunds are processed in accordance with applicable Indian foreign exchange control regulations, including regulations issued by the Reserve Bank of India, and the Agency may request documentation reasonably necessary to process an international payment or refund, including for purposes of remittance reporting;</li>
                  <li>notice periods under Clause 13 are calculated by reference to Indian Standard Time and Indian Business Days, regardless of the Client's own time zone; and</li>
                  <li>nothing in this Clause affects the Client's statutory rights, if any, under mandatory consumer protection law of the Client's own jurisdiction, to the extent such law applies notwithstanding Clause 32 (Governing Law).</li>
                </ul>
              </div>

              <div id="p6-31" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">31. Export Control and Sanctions</h3>
                <p>Where an engagement involves a Client located in, or a Deliverable used in or exported to, a jurisdiction subject to export control or sanctions law (including the law of the United States, the European Union, or India), the Client warrants that neither it, its ultimate beneficial owners, nor its intended use of the Deliverable is subject to comprehensive sanctions or export restriction under applicable law. A breach of this warranty entitles the Agency to terminate immediately under Clause 21, without liability and without refund.</p>
              </div>

              <div id="p6-32" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">32. Governing Law and Dispute Resolution</h3>
                <p>This Policy, and any dispute or claim arising out of or in connection with it or its subject matter (including cancellation, termination, or refund disputes, and including non-contractual disputes), is governed by and construed in accordance with the laws of India, without regard to conflict-of-law principles.</p>
                <p>The parties will first attempt to resolve any dispute arising under this Policy through good-faith negotiation between authorised representatives within 15 Business Days of one party notifying the other of the dispute in writing. If the dispute is not resolved within that period, either party may refer it to arbitration in accordance with the Arbitration and Conciliation Act, 1996, before a sole arbitrator appointed by mutual agreement, seated in the city of the Agency's registered office, conducted in the English language. This Clause does not prevent either party from seeking urgent interim or injunctive relief from a court of competent jurisdiction where necessary to prevent irreparable harm. Subject to the foregoing arbitration agreement, the courts situated at the place of the Agency's registered office in India have exclusive jurisdiction over any dispute not required to be arbitrated.</p>
              </div>

              <div id="p6-33" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">33. Notices</h3>
                <p>A Notice of Cancellation, or any other notice required under this Policy, must be in writing and delivered by email to the addresses in Clause 39 (Contact Details), or by courier or registered post to the Agency's registered office address (available on request), and copied to the primary commercial contact named in the applicable SOW. A notice is effective on the date determined under Clause 13.</p>
              </div>

              <div id="p6-34" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">34. Severability</h3>
                <p>If any provision of this Policy is held by a court or arbitral tribunal of competent jurisdiction to be invalid, illegal, or unenforceable, that provision is severed, and the remaining provisions of this Policy continue in full force and effect, provided that the parties will negotiate in good faith to replace the severed provision with a valid provision that most closely achieves its original commercial intent.</p>
              </div>

              <div id="p6-35" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">35. Waiver</h3>
                <p>No failure or delay by either party in exercising any right, power, or remedy under this Policy operates as a waiver of that right, power, or remedy, nor does any single or partial exercise preclude any further exercise. A waiver is effective only if given in writing and signed by the waiving party, and applies only to the specific instance for which it is given.</p>
              </div>

              <div id="p6-36" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">36. Assignment</h3>
                <p>The Client may not assign, transfer, or sub-contract any right or obligation under this Policy without the Agency's prior written consent. The Agency may assign or transfer this Policy and the underlying Agreement, in whole or in part, to a successor entity in connection with a merger, acquisition, corporate reorganisation, or sale of business assets, on written notice to the Client, provided the successor assumes the Agency's obligations under this Policy.</p>
              </div>

              <div id="p6-37" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">37. Entire Agreement</h3>
                <p>This Policy, together with the applicable proposal, SOW, MSA, purchase order, and the Agency's website Terms & Conditions, constitutes the entire agreement between the parties regarding cancellation, termination, and refunds, and supersedes all prior discussions, representations, or agreements on that subject, whether written or oral, except for any signed document that expressly varies this Policy in accordance with Clause 4 (Order of Precedence).</p>
              </div>

              <div id="p6-38" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">38. Amendments</h3>
                <p>The Agency may update or amend this Policy from time to time to reflect changes in its business practices or applicable law, by publishing a revised version with an updated version number and effective date. Amendments apply prospectively to engagements entered into, or cancellation notices given, on or after the effective date of the revised Policy, and do not retroactively alter the cancellation terms of an engagement already in progress unless the Client agrees in writing or the change is required by law.</p>
              </div>

              <div id="p6-39" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white mb-6">39. Contact Details</h3>
                <p>All notices, refund requests, and queries regarding this Policy should be directed to:</p>
                
                <div className="overflow-x-auto mt-6 border border-[#00FF88]/20 rounded-xl rounded-b-none shadow-lg">
                  <table className="w-full text-left text-[15px]">
                    <thead className="bg-[#1e1e1e] text-white border-b-2 border-[#00FF88]/30">
                      <tr>
                        <th className="p-5 font-bold border-r border-white/10 w-1/3">Purpose</th>
                        <th className="p-5 font-bold">Contact</th>
                      </tr>
                    </thead>
                    <tbody className="bg-[#111111]">
                      <tr>
                        <td className="p-5 font-bold text-white border-b border-r border-white/10 align-top bg-[#161616]/50">General / Notices</td>
                        <td className="p-5 border-b border-white/10 text-gray-300 leading-relaxed">support@AGENCY.com</td>
                      </tr>
                      <tr>
                        <td className="p-5 font-bold text-white border-b border-r border-white/10 align-top bg-[#161616]/50">Legal / Cancellation Notices</td>
                        <td className="p-5 border-b border-white/10 text-gray-300 leading-relaxed">legal@AGENCY.com</td>
                      </tr>
                      <tr>
                        <td className="p-5 font-bold text-white border-b border-r border-white/10 align-top bg-[#161616]/50">Billing / Refund Queries</td>
                        <td className="p-5 border-b border-white/10 text-gray-300 leading-relaxed">legal@AGENCY.com</td>
                      </tr>
                      <tr>
                        <td className="p-5 font-bold text-white border-r border-white/10 align-top bg-[#161616]/50 rounded-bl-xl">Registered Office Address</td>
                        <td className="p-5 text-gray-300 leading-relaxed rounded-br-xl">Available on request and as published in the Agency's client contracting documents</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-10 mt-10 border-t border-white/10">
                <p className="text-sm text-gray-500 italic leading-relaxed">This document is a general-purpose template drafted for guidance and to reduce common sources of contractual dispute. It does not constitute legal advice and does not create a solicitor-client or advocate-client relationship. Before publishing or relying on this Policy, or inserting it into a live contract, have it reviewed by a qualified Indian advocate to confirm the numeric thresholds (deposit percentages, notice periods, retention periods, fees), the company's registration details, and its consistency with the specific services agreements and jurisdictions in which the Agency operates.</p>
              </div>
            </section>
          </div>
          
          {/* Right Sidebar (Sticky CONTENTS) */}
          <div className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-32 bg-[#161616] border border-white/5 rounded-2xl p-6 shadow-xl max-h-[calc(100vh-8rem)] overflow-y-auto">
              <h3 className="text-white font-bold text-[13px] tracking-widest uppercase mb-6 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00FF88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                Contents
              </h3>
              
              <nav className="space-y-4 text-[14px]">
                <div className="space-y-2">
                  <a href="#part-1" className="block text-white font-semibold hover:text-[#00FF88] transition-colors">Part 1 — Preliminary</a>
                  <div className="pl-3 border-l-2 border-transparent hover:border-[#00FF88] -ml-3 space-y-2 text-gray-400">
                    <a href="#p1-1" className="block hover:text-white transition-colors pl-3">1. Introduction</a>
                    <a href="#p1-2" className="block hover:text-white transition-colors pl-3">2. Definitions</a>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <a href="#part-2" className="block text-white font-semibold hover:text-[#00FF88] transition-colors">Part 2 — Engagement Type</a>
                  <div className="pl-3 border-l-2 border-transparent hover:border-[#00FF88] -ml-3 space-y-2 text-gray-400">
                    <a href="#p2-5" className="block hover:text-white transition-colors pl-3">5. Before Commencement</a>
                    <a href="#p2-6" className="block hover:text-white transition-colors pl-3">6. After Commencement</a>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <a href="#part-3" className="block text-white font-semibold hover:text-[#00FF88] transition-colors">Part 3 — Notice & Refunds</a>
                  <div className="pl-3 border-l-2 border-transparent hover:border-[#00FF88] -ml-3 space-y-2 text-gray-400">
                    <a href="#p3-13" className="block hover:text-white transition-colors pl-3">13. Notice Requirements</a>
                    <a href="#p3-14" className="block hover:text-white transition-colors pl-3">14. Deposits</a>
                    <a href="#p3-15" className="block hover:text-white transition-colors pl-3">15. Refund Eligibility</a>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <a href="#part-4" className="block text-white font-semibold hover:text-[#00FF88] transition-colors">Part 4 — Termination</a>
                  <div className="pl-3 border-l-2 border-transparent hover:border-[#00FF88] -ml-3 space-y-2 text-gray-400">
                    <a href="#p4-19" className="block hover:text-white transition-colors pl-3">19. Suspension</a>
                    <a href="#p4-20" className="block hover:text-white transition-colors pl-3">20. Agency Rights</a>
                    <a href="#p4-22" className="block hover:text-white transition-colors pl-3">22. Client Rights</a>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <a href="#part-5" className="block text-white font-semibold hover:text-[#00FF88] transition-colors">Part 5 — IP & Data</a>
                  <div className="pl-3 border-l-2 border-transparent hover:border-[#00FF88] -ml-3 space-y-2 text-gray-400">
                    <a href="#p5-24" className="block hover:text-white transition-colors pl-3">24. IP & Source Code</a>
                    <a href="#p5-25" className="block hover:text-white transition-colors pl-3">25. Data Retention</a>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <a href="#part-6" className="block text-white font-semibold hover:text-[#00FF88] transition-colors">Part 6 — General</a>
                  <div className="pl-3 border-l-2 border-transparent hover:border-[#00FF88] -ml-3 space-y-2 text-gray-400">
                    <a href="#p6-32" className="block hover:text-white transition-colors pl-3">32. Dispute Resolution</a>
                    <a href="#p6-39" className="block hover:text-white transition-colors pl-3">39. Contact Details</a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
