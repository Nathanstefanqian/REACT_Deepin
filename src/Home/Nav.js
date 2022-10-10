const Droplist = () => {
    return (
        <ul className="droplist">
            <li><a href="#">镜像下载</a></li>
            <li><a href="#">安装指南</a></li>
            <li><a href="#">发行注记</a></li>
            <li><a href="#">Wiki</a></li>
        </ul>
    )
}
const Nav = () => {
    return (
        <nav>
            <li>
                <a href="#"><span>首页</span></a>
            </li>
            <li>
                <a href="#"><span>新闻</span></a>
            </li>
            <li>
                <a href="#"><span>下载和帮助</span></a>
                <Droplist />
            </li>
            <li>
                <a href="#"><span>社区</span></a>
                <Droplist />
            </li>
            <li>
                <a href="#"><span>开发者</span></a>
                <Droplist />
            </li>
            <li>
                <a href="#"><span>SIG</span></a>
                <Droplist />
            </li>
            <li>
                <a href="#"><span>论坛</span></a>
                <Droplist />
            </li>
            <li>
                <a href="#"><span>语言：<img src={require("../img/flag.png")} alt="CHINA" /></span></a>
                <ul className="droplist">
                    <li><a href="#"><img src={require("../img/flag.png")} alt="CHINA" /> 中文</a></li>
                    <li><a href="#"><img src={require("../img/flag.png")} alt="CHINA" /> 中文</a></li>
                </ul>
            </li>
        </nav>
    )
}
export default Nav