import { PageBanner } from  '../../components/compound/PageBanner/PageBanner'
import styles from  './TermOfUse.module.scss'

const TermOfUse = () => {
  return (
    <div>
      <PageBanner
      title= 'Terms of Service'
      />
      <div className={styles.PageContent}>
        <p>
        Welcome to theFigPlug! Our Terms of Service (ToS) are designed to ensure a clear understanding of the rules and guidelines for using our platform. By accessing and using theFigPlug, you agree to these terms, so please read them carefully.
        <br></br>
        <br/>

Acceptance of Terms
Scope: These ToS apply to all users of theFigPlug, including free and premium subscribers.
Amendments: We reserve the right to update these terms at any time. Continued use of the service following any changes indicates your acceptance of the new terms.
<br></br>
<br/>
Description of Service
Functionality: theFigPlug offers a range of services including access to Figma templates, UI elements, and design tools.
Service Modifications: We may modify or discontinue any part of our services without notice at any time.
<br></br>
<br/>
User Conduct and Responsibilities
Account Security: Users are responsible for maintaining the confidentiality of their account information, including passwords.
Prohibited Conduct: Users must not engage in unlawful, harmful, threatening, abusive, harassing, defamatory, or otherwise objectionable activities.
Content Ownership: Users retain ownership of the content they create but grant theFigPlug a license to use, modify, and display the content as part of the service.
<br></br>
<br/>
Intellectual Property Rights
Respect for IP: Users must respect the intellectual property rights of others and only upload content they have the right to use.
Infringement Claims: Procedures for reporting and addressing claims of intellectual property infringement.
<br></br>
<br/>
Disclaimer of Warranties and Limitation of Liability
<br></br>
<br/>
No Warranties: The service is provided &quot;as is&quot; without any express or implied warranties.
Limitation of Liability: theFigPlug shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the service.
<br></br>
<br/>
Modification of Terms
Updates and Changes: We may revise these terms from time to time, and we will try to provide at least 30 days &apos; notice prior to any new terms taking effect.
Governing Law and Dispute Resolution
Jurisdiction: These terms are governed by the laws of [Jurisdiction], without regard to its conflict of law principles.
Dispute Resolution: Any disputes arising out of these terms will be resolved through final and binding arbitration, except as otherwise stated in these terms.
<br></br>
<br/>
Thank you for choosing theFigPlug. We &apos;re dedicated to providing a creative and efficient platform for your design needs and look forward to your continued use of our services.

        </p>
      </div>
    </div>
  )
}

export default TermOfUse