import dynamic from "next/dynamic";
import React, { memo } from "react";

const Website = dynamic(() => import("../Website/Website"), {
  ssr: false,
});

// if (process.env.NODE_ENV === "development") {
//   const whyDidYouRender = require("@welldone-software/why-did-you-render");
//   whyDidYouRender(React, {
//     trackAllPureComponents: true,
//   });
// }

const Index = memo(() => {
  // const { isAuthenticated } = useAuth0();
  // if (!isAuthenticated) {
  //   return <Website />;
  // }
  return <Website />;
});

export default Index;
