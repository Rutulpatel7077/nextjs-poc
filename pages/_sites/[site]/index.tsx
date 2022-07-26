import type { NextPage } from "next";
import Script from "next/script";

const Index: NextPage = () => {
  return (
    <div>
      <div id="my-reform"></div>

      <Script
        id="reform-script-1"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html:
            "window.Reform=window.Reform||function(){(Reform.q=Reform.q||[]).push(arguments)};",
        }}
      />
      <Script
        id="reform-script"
        async
        src="https://embed.reform.app/v1/embed.js"
      ></Script>
      <Script
        id="reform-script-2"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          Reform('init', {
              url: 'https://forms.reform.app/Hx5lKz/untitled-form/ey7nc9',
              target: '#my-reform',
              background: 'transparent',
          })`,
        }}
      />
    </div>
  );
};

export default Index;
