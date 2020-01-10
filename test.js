var myObj = {
  name: " jksj",
  showThis: function() {
    console.log(this)
    function bar () {
      console.log(this)
    }
    bar()
  }
}

myObj.showThis()