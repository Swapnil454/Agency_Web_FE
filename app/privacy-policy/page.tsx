import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#111111] font-sans selection:bg-[#00e56a] selection:text-black">
      <Header />
      
      <div className="pt-32 md:pt-40 pb-24 max-w-[1770px] mx-auto w-full px-5 sm:px-10 lg:px-24 xl:px-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent mb-6 max-w-5xl leading-tight tracking-tight">
          Website Terms & Conditions, Privacy Policy and Cookie Policy
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative mt-16">
          
          {/* Main Content */}
          <div className="flex-1 max-w-4xl text-[#a1a1aa] space-y-12 text-[16px] leading-relaxed">
            
            <section id="intro" className="space-y-6">
              <p>
                This document governs the use of the <strong className="text-white">[agencywebsite.com]</strong> website ('Website') and explains how <strong className="text-white">[Agency Name]</strong> collects, uses and protects personal data of its visitors, clients and job applicants. It is drafted to comply with Indian law, including the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, and the Digital Personal Data Protection Act, 2023 ('DPDP Act'), once its rules are notified and brought into force.
              </p>
              <p className="text-[14px] text-gray-500">Last updated: [DD Month YYYY] | Version [1.0]</p>
              
              <div className="bg-[#161616] border border-[#00FF88]/20 bg-gradient-to-br from-[#161616] to-[#111111] hover:border-[#00FF88]/40 transition-colors duration-500 p-6 md:p-8 rounded-xl mt-8 shadow-lg">
                <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00FF88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                  Website administrator
                </h3>
                <p>
                  The <span className="text-white">[agencywebsite.com]</span> website ('Website') is owned and operated by <strong className="text-white">[Agency Name]</strong> [Private Limited], a company incorporated under the Companies Act, 2013 / a partnership firm / a sole proprietorship (as applicable), having its registered office at [Full Registered Address, City, State, PIN Code, India], bearing Corporate Identification Number (CIN): [CIN Number], Permanent Account Number (PAN): [PAN Number], and Goods and Services Tax Identification Number (GSTIN): [GSTIN Number] ('Agency', 'we', 'us' or 'our').
                </p>
              </div>
            </section>

            {/* Part A */}
            <section id="part-a" className="space-y-10 scroll-mt-32 pt-8">
              <h2 className="text-3xl font-bold text-white border-b border-white/10 pb-4">Part A — Website Terms and Conditions of Use</h2>
              
              <div id="a1" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">1. Acceptance of Terms</h3>
                <p>By accessing or using the Website, you agree to be bound by these Website Terms and Conditions of Use ('T&C'), all applicable laws and regulations, and you accept responsibility for compliance with any local laws applicable to you. If you do not agree with any part of these terms, you must stop using the Website immediately. All content on the Website is protected under the Copyright Act, 1957, the Trade Marks Act, 1999, and other applicable Indian intellectual property laws.</p>
              </div>

              <div id="a2" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">2. Acceptable Use</h3>
                <p>You may use the Website only for lawful purposes. You must not use the Website:</p>
                <ul className="list-disc pl-6 space-y-3 text-[#d1d5db] marker:text-[#00FF88] marker:text-[#00FF88]">
                  <li>in any way that breaches any applicable local, national or international law or regulation;</li>
                  <li>in any way that is unlawful, fraudulent, or has an unlawful or fraudulent purpose or effect;</li>
                  <li>to send, knowingly receive, upload, use or re-use any content that does not comply with these T&C;</li>
                  <li>to transmit, or procure the sending of, any unsolicited or unauthorised advertising or promotional material, or any other form of similar solicitation ('spam');</li>
                  <li>to knowingly transmit any data, or send or upload any material that contains viruses, trojans, worms, spyware, adware or any other harmful programs or similar computer code designed to adversely affect the operation of any software or hardware; or</li>
                  <li>to attempt to gain unauthorised access to, interfere with, damage or disrupt any part of the Website, the server on which it is hosted, or any equipment, network or software connected to it, which may also constitute an offence under the Information Technology Act, 2000.</li>
                </ul>
              </div>

              <div id="a3" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">3. Use Licence</h3>
                <p>Subject to your compliance with these T&C, Agency grants you a limited, non-exclusive, non-transferable, revocable licence to view and download one copy of the material on the Website for personal, non-commercial, transitory viewing only. This is a licence, not a transfer of title, and under this licence you may not:</p>
                <ul className="list-disc pl-6 space-y-3 text-[#d1d5db] marker:text-[#00FF88] marker:text-[#00FF88]">
                  <li>modify or copy the material;</li>
                  <li>use the material for any commercial purpose or for any public display;</li>
                  <li>attempt to decompile, reverse engineer or extract the source code of any software on the Website;</li>
                  <li>remove any copyright, trade mark or other proprietary notation from the material; or</li>
                  <li>transfer the material to another person or 'mirror' it on any other server.</li>
                </ul>
                <p>This licence terminates automatically if you breach any of these restrictions and may be terminated by Agency at any time, with or without notice. On termination, you must destroy any downloaded material in your possession, in electronic or printed form.</p>
              </div>

              <div id="a4" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">4. Intellectual Property</h3>
                <p>All trademarks, logos, service marks, trade names, text, graphics, images and other content on the Website (excluding third-party content credited to its owners) are the property of Agency or its licensors and are protected by Indian and international intellectual property laws. Nothing on this Website should be construed as granting any licence or right to use any such intellectual property without the prior written permission of Agency.</p>
              </div>

              <div id="a5" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">5. Disclaimer</h3>
                <p>Agency makes no warranties or representations, express or implied, as to the availability, functionality, accuracy, completeness or reliability of the Website or its content. The Website and all material on it are provided on an 'as is' and 'as available' basis, without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, or non-infringement. Any information or statement on the Website does not constitute a binding offer and must not be relied upon as such.</p>
              </div>

              <div id="a6" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">6. Limitation of Liability</h3>
                <p>To the maximum extent permitted by applicable law, Agency and its officers, employees, agents and suppliers shall not be liable for any indirect, incidental, special, consequential or punitive damages, including but not limited to loss of data, loss of profit, loss of business, loss of reputation or goodwill, or third-party claims, arising out of or in connection with your use of, or inability to use, the Website or any material on it, even if Agency has been advised of the possibility of such damages. If you download material from the Website, you do so entirely at your own risk. Nothing in these T&C excludes or limits liability that cannot be excluded or limited under Indian law.</p>
              </div>

              <div id="a7" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">7. Indemnity</h3>
                <p>You agree to indemnify and hold harmless Agency, its directors, employees and agents from and against any claims, liabilities, damages, losses and expenses, including reasonable legal fees, arising out of or in any way connected with your breach of these T&C or your misuse of the Website.</p>
              </div>

              <div id="a8" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">8. Revision and Errata</h3>
                <p>Material on the Website may include technical, typographical or other errors. Agency does not warrant that any material on the Website is accurate, complete or current, and may suspend, withdraw, discontinue or modify all or part of the Website at any time without notice or liability.</p>
              </div>

              <div id="a9" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">9. Third-Party Links</h3>
                <p>The Website may contain links to third-party websites provided for your convenience only. Agency does not control, endorse or accept responsibility for the content, accuracy or practices of any linked website, and your use of any such website is entirely at your own risk.</p>
              </div>

              <div id="a10" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">10. Changes to These Terms</h3>
                <p>Agency may revise or amend these T&C at any time, at its sole discretion, by updating this page. Continued use of the Website after such changes constitutes your acceptance of the revised T&C. You are encouraged to review this page periodically.</p>
              </div>

              <div id="a11" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">11. Breach and Suspension</h3>
                <p>If Agency becomes aware of a breach of these T&C, it may take corrective action at its sole discretion, including suspending or terminating your access to the Website and removing any content submitted by you, at any time and without prior notice.</p>
              </div>

              <div id="a12" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">12. Governing Law and Jurisdiction</h3>
                <p>These T&C and any dispute or claim arising out of, or in connection with, the Website (including non-contractual disputes) shall be governed by and construed in accordance with the laws of India. The courts at <strong className="text-white">[City, e.g. Mumbai/Bengaluru/Delhi]</strong>, India, shall have exclusive jurisdiction over any such dispute.</p>
              </div>
            </section>


            {/* Part B */}
            <section id="part-b" className="space-y-10 scroll-mt-32 pt-16">
              <h2 className="text-3xl font-bold text-white border-b border-white/10 pb-4">Part B — Privacy Policy</h2>
              
              <div className="space-y-4">
                <p>Agency respects the privacy of visitors to the Website, our clients, and job applicants. This Privacy Policy explains what personal data we collect, why we collect it, how we use and protect it, and the choices and rights available to you. It is framed with reference to the Digital Personal Data Protection Act, 2023 ('DPDP Act') and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011.</p>
              </div>

              <div id="b1" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">1. Who We Are</h3>
                <p>For the purposes of this Privacy Policy, Agency acts as the 'Data Fiduciary' in respect of personal data collected through the Website, forms, event registrations and job applications. Our contact details are set out in Section 9 below.</p>
              </div>

              <div id="b2" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">2. Our Data Protection Principles</h3>
                <ul className="list-disc pl-6 space-y-3 text-[#d1d5db] marker:text-[#00FF88] marker:text-[#00FF88]">
                  <li>We collect personal data only for specified, clear and lawful purposes, and only to the extent necessary for those purposes.</li>
                  <li>We retain personal data only for as long as necessary to fulfil those purposes or as required by law.</li>
                  <li>We collect personal data fairly and lawfully, with your knowledge and, where required, your consent.</li>
                  <li>We apply reasonable technical and organisational safeguards against unauthorised access, loss, misuse or alteration of personal data.</li>
                  <li>We keep you informed about how your personal data is used through this Policy and, where applicable, at the point of collection.</li>
                </ul>
              </div>

              <div id="b3" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">3. Personal Data We Collect and Why</h3>
                <p>We process personal data for the following purposes, on the following grounds recognised under the DPDP Act (namely, your consent, or a 'legitimate use' such as a purpose for which you have voluntarily provided data for a specific purpose, or as necessary to comply with law):</p>
                <ul className="list-disc pl-6 space-y-3 text-[#d1d5db] marker:text-[#00FF88]">
                  <li><strong className="text-white">Contact and enquiry forms</strong> — name, email address, phone number and the content of your message, to respond to enquiries you raise through the Website (based on your voluntary submission of data / consent).</li>
                  <li><strong className="text-white">Marketing communications</strong> — name, email address and phone number, to send newsletters, event invitations, eBooks and other business updates, based on your consent, which you may withdraw at any time.</li>
                  <li><strong className="text-white">Recruitment</strong> — your CV/resume, contact details and the information contained in your application, to evaluate your candidacy, communicate with you during the hiring process, and, with your consent, to consider you for future openings.</li>
                  <li><strong className="text-white">Proposals and client onboarding</strong> — name, email, phone number and project-related details, to prepare a tailored offer or proposal at your request.</li>
                  <li><strong className="text-white">Website functionality and security</strong> — IP address, device and browser information, and usage data, to maintain, secure and improve the Website, and to generate aggregated, non-identifying usage statistics.</li>
                  <li><strong className="text-white">Legal compliance and dispute resolution</strong> — personal data may be processed as necessary to comply with applicable law or to establish, exercise or defend legal claims.</li>
                </ul>
                <p>Providing personal data is voluntary. However, if you choose not to provide certain data, we may be unable to respond to your enquiry, process your application, prepare a proposal, or provide certain features of the Website. We do not make any decision about you based solely on automated processing that produces a legal or similarly significant effect.</p>
              </div>

              <div id="b4" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">4. Data of Third Parties</h3>
                <p>Please do not submit personal data belonging to another individual through the Website unless you have that person's consent to share it with us for the stated purpose.</p>
              </div>

              <div id="b5" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">5. Data Retention</h3>
                <ul className="list-disc pl-6 space-y-3 text-[#d1d5db] marker:text-[#00FF88] marker:text-[#00FF88]">
                  <li><strong className="text-white">Enquiry/contact form data:</strong> retained for up to 12 months from the date of last contact.</li>
                  <li><strong className="text-white">Marketing data (newsletters, event invites, eBooks):</strong> retained until you withdraw consent or unsubscribe.</li>
                  <li><strong className="text-white">Recruitment data:</strong> retained for the duration of the relevant hiring process; if you consent to be considered for future roles, retained for up to 24 months from the date consent was given.</li>
                  <li><strong className="text-white">Proposal/offer data:</strong> retained for the duration of negotiations and for 12 months after the last contact, unless you become a client, in which case it forms part of our client records for the duration of the engagement and as required by applicable law (including tax and accounting record-keeping requirements under Indian law).</li>
                  <li><strong className="text-white">Server and security logs:</strong> retained for up to 24 months for administration, security and analytics purposes.</li>
                </ul>
              </div>

              <div id="b6" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">6. Sharing and Disclosure of Personal Data</h3>
                <p>We may share personal data with:</p>
                <ul className="list-disc pl-6 space-y-3 text-[#d1d5db] marker:text-[#00FF88] marker:text-[#00FF88]">
                  <li>service providers and sub-processors who support our IT infrastructure, marketing, analytics, recruitment and business operations, under appropriate confidentiality and data-processing arrangements;</li>
                  <li>professional advisers, auditors and insurers, where necessary for our legitimate business purposes;</li>
                  <li>courts, regulators, law enforcement or other government authorities, where required or permitted by applicable Indian law; and</li>
                  <li>a successor entity in connection with a merger, acquisition or sale of business assets, subject to equivalent confidentiality protections.</li>
                </ul>
                <p className="font-medium text-white">We do not sell personal data to third parties.</p>
              </div>

              <div id="b7" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">7. Cross-Border Data Transfers</h3>
                <p>Where personal data is transferred outside India (for example, to a cloud service provider or software vendor located overseas), we will do so in accordance with the DPDP Act and any conditions or restrictions notified by the Central Government from time to time, including any list of restricted countries or territories, and we will apply appropriate contractual and security safeguards with the recipient.</p>
              </div>

              <div id="b8" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">8. Your Rights</h3>
                <p>Subject to the applicable provisions of the DPDP Act and its rules, you (as a 'Data Principal') have the right to:</p>
                <ul className="list-disc pl-6 space-y-3 text-[#d1d5db] marker:text-[#00FF88] marker:text-[#00FF88]">
                  <li>obtain a summary of the personal data we hold about you and the processing activities carried out on it;</li>
                  <li>request correction, completion, or updating of your personal data;</li>
                  <li>request erasure of your personal data, where it is no longer necessary for the purpose it was collected;</li>
                  <li>withdraw consent at any time, without affecting the lawfulness of processing carried out before withdrawal;</li>
                  <li>nominate another individual to exercise these rights on your behalf in the event of your death or incapacity; and</li>
                  <li>register a grievance regarding the processing of your personal data, and, if unsatisfied with our response, approach the Data Protection Board of India.</li>
                </ul>
                <p>To exercise any of these rights, please contact our Grievance Officer using the details in Section 9. We will endeavour to respond within the timelines prescribed under applicable law.</p>
              </div>

              <div id="b9" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">9. Grievance Officer / Contact</h3>
                <div className="bg-[#161616] border border-[#00FF88]/20 bg-gradient-to-br from-[#161616] to-[#111111] hover:border-[#00FF88]/40 transition-colors duration-500 p-6 rounded-xl mt-4">
                  <p className="mb-4">In accordance with the Information Technology Act, 2000 and rules made thereunder, and the DPDP Act, the Grievance Officer / Data Protection contact for Agency is:</p>
                  <ul className="space-y-2 text-white">
                    <li><strong>Name:</strong> [Grievance Officer Name]</li>
                    <li><strong>Designation:</strong> [Designation]</li>
                    <li><strong>Email:</strong> [privacy@agencywebsite.com]</li>
                    <li><strong>Address:</strong> [Registered Office Address, City, State, PIN Code, India]</li>
                  </ul>
                  <p className="mt-4"><strong className="text-white">Response timeline:</strong> We aim to acknowledge grievances within 24 hours and resolve them within 15 days, in line with the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021.</p>
                </div>
              </div>

              <div id="b10" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">10. Children's Data</h3>
                <p>The Website and our services are not directed at children under the age of 18. We do not knowingly collect personal data from children without verifiable parental or guardian consent, as required under the DPDP Act. If you believe a child has provided us with personal data without such consent, please contact us so that we can delete it.</p>
              </div>

              <div id="b11" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">11. Security Measures</h3>
                <p>We implement reasonable security practices and procedures, including access controls, encryption in transit, and restricted access to personal data on a need-to-know basis, consistent with the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. No method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>
              </div>

              <div id="b12" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">12. Unsubscribing from Marketing Communications</h3>
                <p>You can unsubscribe from marketing emails at any time by clicking 'Unsubscribe' at the bottom of any marketing email, updating your email preferences, or by writing to us at the address in Section 9.</p>
              </div>
            </section>


            {/* Part C */}
            <section id="part-c" className="space-y-10 scroll-mt-32 pt-16">
              <h2 className="text-3xl font-bold text-white border-b border-white/10 pb-4">Part C — Cookie Policy</h2>
              
              <div className="space-y-4">
                <p>This Cookie Policy explains how Agency uses cookies and similar tracking technologies ('cookies') on the Website, in accordance with applicable Indian law and generally accepted consent standards.</p>
              </div>

              <div id="c1" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">1. What Are Cookies</h3>
                <p>Cookies are small text files placed on your device when you visit a website. They are widely used to make websites function properly, improve user experience, and provide information to website owners about how their site is used.</p>
              </div>

              <div id="c2" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white mb-6">2. Categories of Cookies We Use</h3>
                <p>We classify cookies into the following categories. Non-essential cookies are only set after you provide consent through our cookie consent banner, which you may withdraw or update at any time.</p>
                
                <div className="overflow-x-auto mt-6 border border-white/10 rounded-xl rounded-b-none">
                  <table className="w-full text-left text-[15px]">
                    <thead className="bg-[#1e1e1e] text-white border-b-2 border-[#00FF88]/30">
                      <tr>
                        <th className="p-5 font-bold border-b border-r border-white/10 w-1/3">Category</th>
                        <th className="p-5 font-bold border-b border-white/10">Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="bg-[#111111]">
                      <tr>
                        <td className="p-5 font-bold text-white border-b border-r border-white/10 align-top bg-[#161616]/50">Necessary</td>
                        <td className="p-5 border-b border-white/10 text-gray-300 leading-relaxed">Required for core site functionality such as security, load balancing, bot protection and remembering your cookie consent preferences. These cannot be switched off.</td>
                      </tr>
                      <tr>
                        <td className="p-5 font-bold text-white border-b border-r border-white/10 align-top bg-[#161616]/50">Functional</td>
                        <td className="p-5 border-b border-white/10 text-gray-300 leading-relaxed">Enable features such as social sharing, chat widgets, embedded video/audio, and remembering display preferences (e.g. language, region).</td>
                      </tr>
                      <tr>
                        <td className="p-5 font-bold text-white border-b border-r border-white/10 align-top bg-[#161616]/50">Analytics</td>
                        <td className="p-5 border-b border-white/10 text-gray-300 leading-relaxed">Help us understand how visitors use the Website (pages visited, time on site, traffic sources) so we can improve it. Data is generally aggregated or pseudonymised.</td>
                      </tr>
                      <tr>
                        <td className="p-5 font-bold text-white border-r border-white/10 align-top bg-[#161616]/50 rounded-bl-xl">Advertising</td>
                        <td className="p-5 text-gray-300 leading-relaxed rounded-br-xl">Used to deliver relevant advertising and measure the effectiveness of advertising campaigns across this and other websites.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="c3" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">3. Third-Party Cookies</h3>
                <p>Some cookies are set by third-party service providers embedded on our Website (for example, analytics, scheduling, video, social sharing, and advertising providers). These third parties may use cookies in accordance with their own privacy and cookie policies, over which Agency has no direct control. We recommend reviewing the relevant third party's policy for details.</p>
              </div>

              <div id="c4" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">4. Managing Your Cookie Preferences</h3>
                <p>When you first visit the Website, you will be shown a cookie consent banner allowing you to accept or reject non-essential cookie categories, and to change your preferences at any time through the 'Cookie Preferences' link in the Website footer. You can also control or delete cookies through your browser settings; however, disabling certain cookies may affect the functionality of the Website.</p>
              </div>

              <div id="c5" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">5. Cookie Retention</h3>
                <p>Individual cookie lifespans vary from a single browsing session to several years, depending on their purpose. A detailed, cookie-by-cookie list, including the specific name, duration and provider of each cookie currently active on the Website, is available on request or via our cookie consent management tool.</p>
              </div>

              <div id="c6" className="space-y-4 scroll-mt-32">
                <h3 className="text-xl font-bold text-white">6. Updates to This Policy</h3>
                <p>We may update this Cookie Policy from time to time to reflect changes in the cookies we use or for legal or regulatory reasons. Please revisit this page periodically to stay informed.</p>
              </div>

              <div className="pt-10 mt-10 border-t border-white/10">
                <p className="text-sm text-gray-500 italic">This template is provided for general guidance only and does not constitute legal advice. Before publishing, please have it reviewed by a qualified Indian lawyer to ensure it accurately reflects your business, data practices, and current legal requirements, including any rules notified under the Digital Personal Data Protection Act, 2023.</p>
              </div>
            </section>
          </div>
          
          {/* Right Sidebar (Sticky CONTENTS) */}
          <div className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-32 bg-[#161616] border border-white/5 rounded-2xl p-6 shadow-xl">
              <h3 className="text-white font-bold text-[13px] tracking-widest uppercase mb-6 flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
                Contents
              </h3>
              
              <nav className="space-y-4 text-[14px]">
                <div className="space-y-2">
                  <a href="#part-a" className="block text-white font-semibold hover:text-[#00FF88] transition-colors">Part A — Terms of Use</a>
                  <div className="pl-3 border-l border-white/10 space-y-2 text-gray-400">
                    <a href="#a1" className="block hover:text-white transition-colors">1. Acceptance of Terms</a>
                    <a href="#a2" className="block hover:text-white transition-colors">2. Acceptable Use</a>
                    <a href="#a3" className="block hover:text-white transition-colors">3. Use Licence</a>
                    <a href="#a4" className="block hover:text-white transition-colors">4. Intellectual Property</a>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <a href="#part-b" className="block text-white font-semibold hover:text-[#00FF88] transition-colors">Part B — Privacy Policy</a>
                  <div className="pl-3 border-l border-white/10 space-y-2 text-gray-400">
                    <a href="#b1" className="block hover:text-white transition-colors">1. Who We Are</a>
                    <a href="#b2" className="block hover:text-white transition-colors">2. Data Protection Principles</a>
                    <a href="#b3" className="block hover:text-white transition-colors">3. Personal Data We Collect</a>
                    <a href="#b8" className="block hover:text-white transition-colors">8. Your Rights</a>
                    <a href="#b9" className="block hover:text-white transition-colors">9. Grievance Officer / Contact</a>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <a href="#part-c" className="block text-white font-semibold hover:text-[#00FF88] transition-colors">Part C — Cookie Policy</a>
                  <div className="pl-3 border-l border-white/10 space-y-2 text-gray-400">
                    <a href="#c1" className="block hover:text-white transition-colors">1. What Are Cookies</a>
                    <a href="#c2" className="block hover:text-white transition-colors">2. Categories of Cookies We Use</a>
                    <a href="#c4" className="block hover:text-white transition-colors">4. Managing Your Preferences</a>
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
