import { Footer, Header, Navigation } from '@/components'
import Styles from '@/styles/page/Home.module.scss'
const Home = (): JSX.Element => {
  return (
    <div className={Styles.home}>
      <Header />
      <div className={Styles.main}>
        <div className={Styles.mainBox}>
          <Navigation />
          <div className={Styles.body}></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
