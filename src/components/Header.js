import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <>
    
  <div class="announcement-bar p-2">
    <a href="/"><img src="https://astrologyfutureeye.com/images/header/afe-1.png" alt="AstrologyFutureEye.Com" height="46" width="475" /></a>
    <p className="text-center">Indian Astrology Portal</p>
    </div>
    <Nav className='custom-navbar bg-dark tezt-white'
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
    </>
  );
}

export default Header;