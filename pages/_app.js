import '@styles/globals.css'
import '../components/Footer.css'
import '../components/education-item.css';
import '../components/list-courses.css';

//#region Pages
import '../pages/styles/index.css';
import '../pages/styles/projects.css'
import '../pages/styles/topbar.css';
import '../pages/styles/about.css';
//#endregion Pages

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default Application
