const Html = ({
  body
}) => {
  return `
  <!DOCTYPE html>
  <html>
    <head class="is-preload">
      <meta charset="UTF-8">
      <title>MrTolerant</title>
      <link rel="icon" href="/images/favicon.png">
      <link rel="stylesheet" type="text/css" href="/css/main.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <meta name="og:image" content="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
    </head>
    <body>
      <div id="root">${body}</div>
      <script>
        window.onload = function() { document.body.classList.remove('is-preload'); }
        window.ontouchmove = function() { return false; }
        window.onorientationchange = function() { document.body.scrollTop = 0; }
      </script>
      <script type="text/javascript" src="/js/bundle.js?v=COMMITHASH"></script>
    </body>
  </html>
`
}

export default Html
