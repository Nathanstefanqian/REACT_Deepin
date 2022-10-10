import Nav from './Nav.js'
const Header = () => {
    return (
        <header className="my-header-layout">
            <div className="my-header">
                <a href="index/html" className="deepinlogo">
                    <h1>
                        <span>Deepin</span>
                    </h1>
                </a>
                <Nav />
            </div>
        </header>
    )
}
export default Header