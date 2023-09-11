import React from "react";
import "../uiContent.css";
function BoardWrite() {
  return (
    <div className="ui_content_container">
      <div className="ui_content_wrap">
        <div className="ui_content_label">
            새로워진 게시글 작성 방법으로 더 쉽게 원하는 글을 찾을 수 있어요! <br />
            근무지역, 모집 기간 등의 상세정보를 간편하게 작성하고, 내가 원하는 알바,상품 등을 더욱 빠르게 찾아보세요.

        </div>
      </div>
      <div className="img_wrap">
      <div className="ui_image">
        <div id="board_before" className="pic"><div className="img_text">Before</div></div>
      </div>
      <div className="ui_image">
        <div id="board_after" className="pic"><div className="img_text">After</div></div>
      </div>
    </div>
  </div>

  );
}

export default BoardWrite;