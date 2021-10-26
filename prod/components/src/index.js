import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard />
      <CommentDetail
        author="Sam"
        avatar={faker.image.avatar()}
        content="Nice blog post!"
        postedOn="Today at 2:30PM"
      />
      <CommentDetail
        author="Alex"
        avatar={faker.image.avatar()}
        content="Great article"
        postedOn="Today at 4:02AM"
      />
      <CommentDetail
        author="Jane"
        avatar={faker.image.avatar()}
        content="You talk too much!"
        postedOn="Yesterday at 6:15AM"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
