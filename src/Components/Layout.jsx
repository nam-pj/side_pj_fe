const Layout = ({ children }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* 헤더 */}
        <header className="h-28 bg-slate-400">
          <h1>콜로세움</h1>
        </header>

        {/* 메인 */}
        <main className="flex-1 p-4 bg-white overflow-auto">{children}</main>

        {/* 푸터 */}
        <footer className="h-16 bg-red-100 flex items-center justify-center">
          <p>&copy; 2026 My App. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
