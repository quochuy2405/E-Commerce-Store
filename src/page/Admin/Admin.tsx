import { Footer, Header, Navigation } from '@/components'
import BodyView from '@/components/BodyView/BodyView'
import Styles from '@/styles/page/Admin.module.scss'
const Admin = (): JSX.Element => {
  return (
    <div className={Styles.admin}>
      <Header />
      <div className={Styles.main}>
        <div className={Styles.mainBox}>
          <Navigation />
          <div className={Styles.body}>
            <BodyView />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Admin
