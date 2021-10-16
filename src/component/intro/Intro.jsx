import React from 'react';
import "./Intro.css";

function Intro() {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2>Hello, My name is</h2>
                    <h1 className="i-name" >John Burton</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item"> Web Developer</div>
                            <div className="i-title-item">UI/UX Designer</div>
                            <div className="i-title-item">Photographer</div>
                            <div className="i-title-item">Writer</div>
                            <div className="i-title-item">Content Creator</div>
                            <div className="i-title-item">Web Developer</div>
                        </div>
                    </div>
                    <div className="i-desc">
                        I design and develop services for customers  of all sizes,
                        specializing in creating stylish, modern websites, web search online stores.
                    </div>
                </div>
            </div>
            <div className="i-right">
                <img src="" alt="" className="i-img" />
            </div>
        </div>
    )
}

export default Intro
