import React from "react";
import "./App.css";
import { Container, Header } from "semantic-ui-react";

import PostList from "./components/PostList";

function App() {
  return (
    <div className="App">
      <Container text>
        <Header id="app-header" as="h2">Forum</Header>
        <PostList />
      </Container>
    </div>
  );
}

export default App;
