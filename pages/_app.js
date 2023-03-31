import '@styles/globals.css'
import '../components/Footer.css'
import '../components/education-item.css';
import '../components/list-courses.css';
import '../components/topbar.css';

//#region Pages
import '../pages/styles/index.css';
import '../pages/styles/projects.css'
import '../pages/styles/about.css';
import '../pages/styles/contact.css';
//#endregion Pages

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
