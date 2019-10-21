import React, { Component } from 'react'
import style from './css/allFooter.module.css'
export default class AllFooter extends Component {
    render() {
        return (
            <div>
                <footer>
                    <ul className={style.agreement}>
                        <li><a href="">注册协议</a></li>
                        <li><a href="">隐私协议</a></li>
                        <li><a href="">侵权投诉指引</a></li>
                    </ul>
                    <div className={style.footerText}>
                        <p>沪ICP备 13030189号 Copyright © 2014-2019 行吟信息科技（上海）有限公司| 地址：上海市黄浦区马当路388号C座| 电话：021-64224530| 自营经营者营业执照 2019 沪公网安备 31010102002533号 <i className={style.police}></i></p>
                        <p>网络文化经营许可证：沪网文[2018]4086-308号|增值电信业务经营许可证：沪B2-20150021|食品经营许可证：JY13101140093802|出版物经营许可证：新出发沪零字第M7553号| 网购(订餐)大家评</p>
                        <p>医疗器械经营许可证：沪嘉食药监械经营许20187006号|医疗器械网络交易服务第三方平台备案:（沪）网械平台备字[2019]第00006号|互联网药品信息服务资格证书：(沪)-经营性-2018-0011|违法不良信息举报电话：(027) 5931 3970|上海市互联网举报中心</p>
                    </div>
                </footer>
            </div>
        )
    }
}
