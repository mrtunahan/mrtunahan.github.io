$(document).ready(function () {
    new Typed('.firstText', {
        strings: ["Hello, I'am Tunahan"],
        typeSpeed: 20,
        startDelay: 900,
        showCursor: false
      });
    }),
    new Typed('.personalInfo', {
        strings: ["I'm frontend software developer.<br> I am interested in web and mobile applications!"],
        typeSpeed: 20,
        startDelay: 1800,
        showCursor: false
    }),
    new Typed('.mediaInfoStart', {
        strings: ["You can check out my"],
        typeSpeed: 30,
        startDelay: 5500,
        showCursor: false
    }),
    new Typed('.mediaInfoEnd', {
        strings: ["My CV ⬇️"],
        typeSpeed: 20,
        startDelay: 7000,
        showCursor: false
    }),
    new Typed('.mailInfo', {
        strings: ["Get in touch <a href='mailto:tunahankorkmaz6@gmail.com'>tunahankorkmaz6@gmail.com</a><span class='cursor'>_</span>"],
        typeSpeed: 20,
        startDelay: 8500,
        showCursor: false
    });

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());

    gtag("config", "UA-138208404-1");