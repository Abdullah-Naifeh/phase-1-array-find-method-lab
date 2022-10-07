// code your solution here
const record = [
    { year: "2015", result: "L"},
    { year: "2014", result: "W"},
    { year: "2013", result: "N/A"},
    //...
  ]

  function superbowlWin(record) {   
    const res = record.find( win => win.result === "W" )
    if (res){
      return res.year
    }else{
      return undefined 
    }
  };
