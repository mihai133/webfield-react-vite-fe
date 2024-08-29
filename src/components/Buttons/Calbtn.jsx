/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import ShiningBtn from "./ShiningBtn";
export default function CalBtn() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "ro-web-development-call" });
      cal("ui", {
        styles: { branding: { brandColor: "#0c9488" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <ShiningBtn
      color="#0c9488"
      data-cal-namespace="ro-web-development-call"
      data-cal-link="thewebfield/ro-web-development-call"
      data-cal-config='{"layout":"month_view"}'
    >
      Programează întâlnire online
    </ShiningBtn>
  );
}
