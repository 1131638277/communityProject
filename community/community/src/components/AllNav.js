import React, { Component } from 'react'
import { Tabs } from 'antd';
import style from './css/allNav.module.css'
import Footer from './AllFooter'
import WrappedNormalLoginForm from './NormalLoginForm.module'
import RegisterForm from './RegisterForm'
const { TabPane } = Tabs;
export default class AllNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navFlag: true,
            loginFlag: false
        }
        this.signOut = this.signOut.bind(this);
        this.signIn = this.signIn.bind(this);
    }
    // 数据挂载后，滚动条事件触发
    componentDidMount() {
        // 触发
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 25) {
                this.setState({
                    navFlag: true,

                })
            } else {
                this.setState({
                    navFlag: false
                })
            }
        });
    }
    // 登录与注册局部组件改变后的回调函数
    callback(key) {
        console.log(key);
    }

    //进入登录注册模态框
    signIn() {
        this.setState({
            loginFlag: true
        })
    }
    //退出登录注册模态框
    signOut() {
        this.setState({
            loginFlag: false
        })
    }

    //登录注册
    render() {
        return (
            <div>
                <div className={style.bgcVideo}>
                    <video src="https://dc.xhscdn.com/9379abe0-7ad8-11e9-8794-9320f6c9d557/背景视频.mp4" muted="muted" loop="loop" autoplay='autoplay'></video>
                </div>
                <div className={this.state.loginFlag ? style.bgcLogin : style.registerLoginDis}>
                    <div className={style.registerLogin}>
                        <div className={style.cha} onClick={this.signOut}></div>
                        <div className={style.option}>
                            <Tabs className="loginAssembly" defaultActiveKey="1" onChange={this.callback}>
                                <TabPane className={style.optionTitle} tab="登录" key="1">
                                    <div className={style.leftLogin}>
                                        <WrappedNormalLoginForm />
                                    </div>
                                </TabPane>
                                <TabPane className={style.optionTitle} tab="注册" key="2">
                                <div className={style.rightRegister}>
                                    <RegisterForm />
                                    </div>
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                </div>
                <nav className={this.state.navFlag ? style.longNavNone : style.longNavBlock}>
                    <div className={style.divLogo}>
                        <a href=""><img className={style.imgLogo} src={require('./imgs/weblogo.png')} alt="" /></a>
                    </div>
                    <ul className={style.navPage}>
                        <li className={style.homePage}><a href="">首页</a></li>
                        <li><a href="">社区精选</a></li>
                        <li><a href="">业务合作</a></li>
                        <li><a href="">新闻中心</a></li>
                        <li><a href="">关于我们</a></li>
                        <li><a href="">社会责任</a></li>
                        <li className={style.imgHeader} onClick={this.signIn}>
                            <img src={require('./imgs/header-w.png')} alt="" />
                            <div className={style.arrow}></div>
                            <div className={style.login}>请登录~</div>
                        </li>
                    </ul>
                </nav>
                <nav className={this.state.navFlag ? style.shortNavBlock : style.shortNavNone}>
                    <div className={style.divLogo}>
                        <a href=""><img className={style.imgLogo} src={require('./imgs/weblogo.png')} alt="" /></a>
                    </div>
                    <ul className={style.navPage} >
                        <li className={style.homePage}><a href="">首页</a></li>
                        <li><a href="">社区精选</a></li>
                        <li><a href="">业务合作</a></li>
                        <li><a href="">新闻中心</a></li>
                        <li><a href="">关于我们</a></li>
                        <li><a href="">社会责任</a></li>
                        <li className={style.imgHeader} onClick={this.signIn}>
                            <img src={require('./imgs/header-w.png')} alt="" />
                            <div className={style.arrow}></div>
                            <div className={style.login}>请登录~</div>
                        </li>
                    </ul>
                </nav>
                <div className={style.ss}></div>
                <Footer />
            </div>
        )
    }
}
