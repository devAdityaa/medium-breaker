
console.log("Injected!!!")

    var scripts = document.querySelectorAll('script');
    console.log(scripts.length)
        scripts.forEach(function(script) {
          script.remove();
        });


chrome.runtime.onMessage((req)=>{
  console.log(req.html)
})