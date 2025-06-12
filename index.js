function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }  

  function mondayWork(defActivity = "go to the office"){
    return `This Monday, I will ${defActivity}.`;
  }

  function wrapAdjective(wrapper = '*') {
    return function(adjective = 'special') {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    }
  }
  