import React, { Component } from 'react'
// import './jquery/yzcode'
import './css/test.css'
export default class test extends Component {
    render() {
        return (
            <div>
                  <div class="drag">
        <div class="bg"></div>
        <div class="text" onselectstart="return false;">请拖动滑块解锁</div>
        <div class="btn">>></div>
    </div>
     </div>
         )
    }
}
