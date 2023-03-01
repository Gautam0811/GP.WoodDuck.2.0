// WD_Footer
// Component Utility : The Component is created to render a footer on each page in the app
// Author Gautam Malhotra on 1-3-2023
// -------------------------
import * as React from "react";

export default function Footer() {
  return (
    <div className="fontsize" style={{ padding: '30px', display:'flex', justifyContent: "center", color: 'gray'}}>
        <span>© 2023 Georgia-Pacific. All rights reserved.</span> < br />
        <span>Component Time: / API: </span>
    </div>
  );
}

