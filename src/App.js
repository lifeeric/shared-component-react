import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Header } from "./Header";
import { Item } from "./Item";
import { List } from "./List";
import { BrowserRouter as Router, Route } from "react-router-dom";

function Store({ match }) {
  let { id } = match.params;
  console.log(id);
  const imageHasLoaded = true;

  return (
    <AnimateSharedLayout type="crossfade">
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default function App() {
  return (
    <div className="container">
      <Header />
      <Router>
        <Route path={["/:id", "/"]} component={Store} />
      </Router>
    </div>
  );
}
