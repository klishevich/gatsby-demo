import { Link } from "gatsby";
import React from "react";

const Menu = () => (
  <React.Fragment>
    <div>
      <Link to="/">Home Page</Link>
    </div>
    <div>
      <Link to="/page-2">Page 2</Link>
    </div>
    <div>
      <Link to="/page-3">Page 3: Data from gatsby-config.js</Link>
    </div>
    <div>
      <Link to="/page-4">Page 4: Data from Markdown files</Link>
    </div>
    <div>
      <Link to="/page-5">Page 5: Query Data Build Time</Link>
    </div>
    <br/>
  </React.Fragment>
);

export default Menu;
