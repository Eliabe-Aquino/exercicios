function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
  const listDays = document.getElementById('days')
  
  for (let days = 0; days < dezDaysList.length; days += 1 ){
      let daysDez = document.createElement('li')
      if(dezDaysList[days] === 4 || dezDaysList[days] === 11 || dezDaysList[days] === 18) {
        daysDez.className = 'day friday'
      } else if (dezDaysList[days] === 24 || dezDaysList[days] === 31){
        daysDez.className = 'day holiday'
      } else if(dezDaysList[days] === 25){
        daysDez.className = 'day holiday friday'
      } else daysDez.className = 'day'
      daysDez.innerText = dezDaysList[days]
      listDays.appendChild(daysDez)
        
  }

  function button(btnName){
    const divButton = document.querySelector('.buttons-container')
    const button = document.createElement('button')
    const buttonid = "btn-holiday"
      
        button.innerHTML = btnName
        button.id = buttonid
        divButton.appendChild(button)
      
  }
  button('Feriados')