;(function(){
  setInterval(function () {
    [].slice.call(document.querySelectorAll(".truncate-by-height,.doc-viewer-value")).forEach(function (item) {
      if (item.innerText.trim().match(/^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$/)) {
        var time = item.baseURI.match(/time\:\(.*?\)/)[0];
        var uuid = item.innerText;
        var url = "http://kibana.shimo.run/app/kibana#/discover?_g=(refreshInterval:(display:Off,pause:!f,value:0)," + time + ")&_a=(columns:!(step,take),index:'logstash-*',interval:auto,query:(query_string:(analyze_wildcard:!t,query:%22" + uuid + "%22)),sort:!(step,asc))";
        item.innerHTML = '<a href="' + url + '" target="_blank">' + item.innerText + '</a>';
      }
    })
  }, 5000);
})();
