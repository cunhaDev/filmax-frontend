import Logo from '../../assets/img/Logo.svg';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';

function NavBar() {
  const currentDate = format(new Date(),
    'EEEEEE, d MMMM', { locale: ptBR, });
  return (
    <>
    <div className="d-flex flex-row flex-md-row align-items-center p-1 px-md-4 mb-3 bg-dark border-bottom shadow-sm justify-content-between">
    <div className="p-1">
      <div className="container">
        <nav className="flex-row">
          <img src={Logo} alt="Logo" width="70" />
        </nav>
      </div>
    </div>
    <span className="text-white">{currentDate}</span>
    </div>
    </>
  );
}

export default NavBar;
