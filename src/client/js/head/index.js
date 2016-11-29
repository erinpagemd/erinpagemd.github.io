const el = document.getElementById('script');

if (el) {
  //Set window variables
  const queryVars = el.src.split('?')[1].split('&');

  queryVars.forEach(queryVar => {
    const qv = queryVar.split('=');
    window[qv[0]] = qv[1];
  });

  //Do Google Analytics
  if (window.GA_KEY) {
    /*eslint-disable */
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', window.GA_KEY, 'auto');
    ga('send', 'pageview');
    /*eslint-enable */
  }
}
