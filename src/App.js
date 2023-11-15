import { appRouter } from './pages/AppRouter';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
// css 追加
import './App.css';

// import Title1 from './components/Title1';
import Title2 from './components/Title2';

// ページ情報を定義して appRouter に設定
const pages = [
  { key: 'Home', path: '/', element: <Home /> },
  { key: 'Page1', path: '/page1', element: <Page1 /> },
  { key: 'Page2', path: '/page2', element: <Page2 text="text sample" /> },
  { key: 'Page3', path: '/page3', element: <Page3 /> },
];
const router = appRouter(pages);

const App = () => {
  return (
    <>
      {router.navbarLink}
      <main>
        <Title2
          h1style={{ color: 'red', fontSize: '25px' }}
          h1text={'Hello World'}
          divstyle={{ color: 'blue', fontSize: '18px' }}
        >
          <p>App.jsx</p>
        </Title2>
        {router.browserRouter}
      </main>
    </>
  );
};

export default App;
