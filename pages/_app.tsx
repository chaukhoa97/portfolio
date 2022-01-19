//1 _app.js is Top-level component which will be common across all the different pages -> used for global styles or state
import '../styles/global.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
