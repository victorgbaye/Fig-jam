import Footer from "../../components/compound/Footer/Footer"
import { PageBanner } from "../../components/compound/PageBanner/PageBanner"
import styles from './AboutUs.module.scss'

const AboutUs = () => {
  return (
    <div className={styles.AboutUsContainer}>
      <PageBanner
      title='About'
      />
      <div className={styles.PageContent}>
        <h2>Empowering Creativity with theFigPlug: Your Ultimate Figma Companion</h2>
        <p>
        Welcome to theFigPlug, a haven for Figma enthusiasts and UI/UX designers! We&apos;re a dynamic team dedicated to enhancing your design workflow. Our platform is the bridge between your creativity and efficiency, offering an extensive collection of Figma templates, UI elements, and design kits.
        <br/>
        <br/>
Whether you&apos;re brainstorming a new project or refining an existing design, theFigPlug simplifies your process. Our resources are tailored for versatility, catering to a diverse range of design needs. We pride ourselves on providing high-quality, customizable elements that fuel your creative journey.
At theFigPlug, we believe in the power of community and innovation. Join us, and let&apos;s shape the future of design together!
        </p>
      </div>
      <Footer/>
    </div>
  )
}

export default AboutUs