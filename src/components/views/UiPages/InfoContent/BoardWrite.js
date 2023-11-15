import React from "react";
import "../uiContent.css";
function BoardWrite() {
  return (
    <div className="ui_content_container">
      <div className="ui_content_wrap">
        <div className="ui_content_label">
          - 구매/판매 등  분류 태그를 통해 더욱 쉽게 원하는 글을 찾을 수 있게 되었습니다! <br />
          - 앨범 탭, 썸네일 탭을 통해 게시글의 정보를 빠르게 확인해보세요.

        </div>
      </div>
      <div className="img_wrap">
        <div className="ui_image">
          <div id="board_before" className="pic"><div className="img_text">알바하자</div></div>
        </div>
        <div className="ui_image">
          <div id="board_after" className="pic"><div className="img_text">벼룩시장</div></div>
        </div>
      </div>
    </div>

  );
}

export default BoardWrite;