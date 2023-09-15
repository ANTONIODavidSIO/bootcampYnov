import "./style.css";


const Index = () => {
  const menu = [
    { title:"contact"},
    { title:"news"},
    { title:"register"},
  ]

  return (
    
    <header className="header__main">
      <nav className="header__nav">
        <ul className="header__list">
          
          {
            menu.map(menuItem => (
              <li className="item__nav">
                <a className="item__link" href={`http://localhost:5173/${menuItem.title}`}>{menuItem.title}</a>
              </li>
            ))
          }
          { 
           }
        </ul>
      </nav>
    </header>
  );
}

export default Index;