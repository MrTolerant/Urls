const Html = ({
  body
}) => {
  return `
  <!DOCTYPE html>
  <html>
    <head class="is-preload">
      <meta charset="UTF-8">
      <title>MrTolerant</title>
      <link rel="stylesheet" type="text/css" href="/css/main.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
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
