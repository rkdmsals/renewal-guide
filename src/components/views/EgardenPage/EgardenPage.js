import "./EgardenPage.css";

import React from 'react';

function EgardenPage() {

    return (
        <div className="EgardenPage_Background">

            <div className="EgardenPage_inner">
                <div className="EgardenPage_script">
                    <div className="EgardenPage_title">
                        편리해진 E-화원
                    </div>
                    <div className="EgardenPage_description">
                        전공, 취미, 시험 등등 관심 분야에 따라 E-화원을 자유롭게 생성하고 가입할 수 있습니다. <br />
                        자신이 가입한 E-화원들은 이화이언 메인 페이지에서도 바로 확인하실 수 있습니다. <br />
                        벗들과 함께 원하는 주제에 대해 자유롭게 소통할 수 있는 E-화원, 기대해주세요!
                    </div>
                </div>
                <div className="EgardenPage_pictures">
                    <div id="EgardenPage_pic1" className="EgardenPage_pic" />
                    <div id="EgardenPage_pic2" className="EgardenPage_pic" />
                    <div id="EgardenPage_pic3" className="EgardenPage_pic" />
                </div>
            </div>

        </div>
    )

}


export default EgardenPage;



