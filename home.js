function addIconListener(badgeId, questionId) {
    bdg = document.getElementById(badgeId);
    qst = document.getElementById(questionId);
  
    if(bdg.innerHTML == "+"){
      bdg.innerHTML="-";
      bdg.style.color='#6B3CC9';
      qst.style.color='#6B3CC9';
    }else{
      bdg.innerHTML="+";
      bdg.style.color='#000000';
      qst.style.color='#000000';
    }
  }