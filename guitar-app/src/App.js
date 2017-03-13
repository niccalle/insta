import React, { Component } from 'react';
import './App.css';
import Tab from './Tab'
import ReactPlayer from 'react-player'
// import HtmlToReact from 'html-to-react';
// var HtmlToReactParser = HtmlToReact.Parser;
// var htmlInput = '<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-version="7" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:658px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:8px;"> <div style=" background:#F8F8F8; line-height:0; margin-top:40px; padding:50.0% 0; text-align:center; width:100%;"> <div style=" background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;"></div></div> <p style=" margin:8px 0 0 0; padding:0 4px;"> <a href="https://www.instagram.com/p/BRYi7oig0F2/" style=" color:#000; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none; word-wrap:break-word;" target="_blank">Loopy groovin&#39; 🔁</a></p> <p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">A post shared by R H Y S  G I L C H R I S T🔹 (@rhysgilchrist) on <time style=" font-family:Arial,sans-serif; font-size:14px; line-height:17px;" datetime="2017-03-08T16:16:57+00:00">Mar 8, 2017 at 8:16am PST</time></p></div></blockquote><script async defer src="//platform.instagram.com/en_US/embeds.js"></script>'
// var htmlToReactParser = new HtmlToReactParser();
// var reactElement = htmlToReactParser.parse(htmlInput);
class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    Guitar Transcribe App
                </div>
                <div className="container">
                    <ReactPlayer width="100%" url="https://www.youtube.com/watch?v=N2JiHg41Lcc"/>
                </div>
                <div className="container" id="Tab-container">
                    <Tab />
                </div>
            </div>
        );
    }
}

export default App;
