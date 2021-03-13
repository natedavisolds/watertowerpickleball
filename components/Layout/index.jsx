import Footer from "components/Footer"
import Header from "components/Header"

export default function Layout({children, title, reader=false, fullCourt=false, isModal=false}) {
  return (
    <div className={`site-wrap ${isModal ? 'modal' : ''}`}>
      <Header title={title} />

      <main className={`main ${isModal ? 'modal' : ''} ${fullCourt ? 'full-court' : ''} ${reader ? 'read-article' : ''}`}>
        {children}
      </main>

      <Footer />
    </div>
  );
}
