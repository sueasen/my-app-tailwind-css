import { BrowserRouter, Routes, Route } from 'react-router-dom';

export const appRouter = (pages) => {
  const router = () => {
    return (
      <>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            {pages.map((p) => (
              <Route key={p.key} path={p.path} element={p.element} />
            ))}
          </Routes>
        </BrowserRouter>
      </>
    );
  };
  // タグ, クラスなど追加
  const links = () => (
    <header className="header">
      <div className="navtext-container">
        <div className="navtext">title</div>
      </div>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        {pages.map((p) => (
          <li key={p.key}>
            <a href={`${process.env.PUBLIC_URL}${p.path}`}>{p.key}</a>
          </li>
        ))}
      </ul>
    </header>
  );
  return {
    browserRouter: router(),
    navbarLink: links(),
  };
};
