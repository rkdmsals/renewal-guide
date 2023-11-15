import React from "react";
import "../uiContent.css";
function Comment() {
  return (
    <div className="ui_content_container">
      <div className="ui_content_wrap">
        <div className="ui_content_label">
          - 새롭게 개편된 UI로 댓글과 답글 작성이 더욱 편리해졌습니다.<br />
          - 다양한 의견을 자유롭게 나누고 공감 버튼으로 공감을 표현해보세요.

        </div>
      </div>
      <div className="img_wrap">
        <div className="ui_image">
          <div id="comment_before" className="pic"><div className="img_text">글쓴벗 확인</div></div>
        </div>
        <div className="ui_image">
          <div id="comment_after" className="pic"><div className="img_text">답글 작성</div></div>
        </div>
      </div>
    </div>

  );
}

export default Comment;