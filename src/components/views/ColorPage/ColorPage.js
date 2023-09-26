import "./ColorPage.css";
import React from 'react';

function ColorPage() {

    return (
        <div className="ColorPage_Background">

            <div className="ColorPage_inner">
                <div className="ColorPage_script">
                    <div className="ColorPage_title">
                        새로워진 컬러
                    </div>
                    <div className="ColorPage_text">
                        많은 분들이 기다리시고 원하시던 변화입니다. <br />
                        이화이언의 대표 컬러를 기존 사용하던 핑크에서 초록으로 변경하게 되었습니다. <br />
                        먼저, 바뀐 로고를 공개합니다! <br />
                        대표 컬러가 바뀐 이화이언의 모습을 기대해주세요.
                    </div>
                </div>
                <div className="ColorPage_pictures">
                    <img
                        src="../../../../img/logo_before.png"
                        alt="logo"
                        className="Color_logo" />
                    <img
                        src="../../../../img/logo_before.png"
                        alt="logo" 
                        className="Color_logo" />
                </div>
            </div>
            

        </div>
    )

}


export default ColorPage;



