import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx'
import Student from './Student.jsx'

function App() {
  return (
    <>
      <Header />
      <Food />
      <Card />
      <Button />
      <Student name="Krystian" age={20} isStudent={true} />
      <Student name="Sasha" age={34} isStudent={false} />
      <Student name="Pyndzel" age={12} isStudent={false} />
      <Student />
      <Footer />
    </>
  );
}

export default App