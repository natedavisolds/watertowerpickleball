import Footer from "components/Footer"
import Header from "components/Header"

export default function Layout({children, title, reader=false, fullCourt=false}) {
  return (
    <div className="site-wrap">
      <Header title={title} />

      <main className={`main ${fullCourt ? 'full-court' : ''} ${reader ? 'read-article' : ''}`}>
        {children}
      </main>

      <Footer />
    </div>
  );
}
