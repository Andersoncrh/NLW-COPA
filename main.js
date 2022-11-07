let bg = document.querySelector('body')
function changeColor(color){
  bg.className = color
}
function createGame(player1, day, time, stadium, player2, option) {
  document.querySelector("[data-name=" + option + "]").innerHTML += `
        
          <li>
            <img src="./assets/flags/icon=${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${day}<br>${time}<br>${stadium}</strong>
            <img src="./assets/flags/icon=${player2}.svg" alt="Bandeira do ${player2}">
          </li>   
  `
}
let delay = -0.3

function createCard(date, day, option) {
  delay = delay + 0.1
  if (!day)
    return `
      <div class="card"  style="animation-delay: ${delay}s">
        <h2>${date} </h2>
        <ul data-name="${option}">        
        </ul>
      </div>
  `
  else
    return `
      <div class="card" class="${option}" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul data-name="${option}">
        </ul>
      </div>
  `
}
let matches = [
  {
    teams: ["qatar", "ecuador"],
    group: "a",
    date: "20/11",
    weekDay: "domingo",
    time: "13:00",
    stadium: "albayt",
  },
  {
    teams: ["senegal", "netherlands"],
    group: "a",
    date: "21/11",
    weekDay: "segunda",
    time: "13:00",
    stadium: "althumama",
  },
  {
    teams: ["england", "iran"],
    group: "b",
    date: "21/11",
    weekDay: "segunda",
    time: "10:00",
    stadium: "khalifainternat",
  },
  {
    teams: ["usa", "wales"],
    group: "b",
    date: "21/11",
    weekDay: "segunda",
    time: "16:00",
    stadium: "ahmadbinali",
  },
  {
    teams: ["france", "australia"],
    group: "d",
    date: "22/11",
    weekDay: "terça",
    time: "16:00",
    stadium: "aljanoub",
  },
  {
    teams: ["denmark", "tunisia"],
    group: "d",
    date: "22/11",
    weekDay: "terça",
    time: "10:00",
    stadium: "educationcity",
  },
  {
    teams: ["mexico", "poland"],
    group: "c",
    date: "22/11",
    weekDay: "terça",
    time: "13:00",
    stadium: "stadium974",
  },
  {
    teams: ["argentina", "saudiarabia"],
    group: "c",
    date: "22/11",
    weekDay: "terça",
    time: "07:00",
    stadium: "lusail",
  },
  {
    teams: ["belgium", "canada"],
    group: "f",
    date: "23/11",
    weekDay: "quarta",
    time: "16:00",
    stadium: "ahmadbinali",
  },
  {
    teams: ["spain", "costarica"],
    group: "e",
    date: "23/11",
    weekDay: "quarta",
    time: "13:00",
    stadium: "althumama",
  },
  {
    teams: ["germany", "japan"],
    group: "e",
    date: "23/11",
    weekDay: "quarta",
    time: "10:00",
    stadium: "khalifainternat",
  },
  {
    teams: ["morocco", "croatia"],
    group: "f",
    date: "23/11",
    weekDay: "quarta",
    time: "07:00",
    stadium: "albayt",
  },
  {
    teams: ["switzerland", "cameroon"],
    group: "g",
    date: "24/11",
    weekDay: "quinta",
    time: "07:00",
    stadium: "aljanoub",
  },
  {
    teams: ["uruguay", "southkorea"],
    group: "h",
    date: "24/11",
    weekDay: "quinta",
    time: "10:00",
    stadium: "educationcity",
  },
  {
    teams: ["portugal", "ghana"],
    group: "h",
    date: "24/11",
    weekDay: "quinta",
    time: "13:00",
    stadium: "stadium974",
  },
  {
    teams: ["brazil", "serbia"],
    group: "g",
    date: "24/11",
    weekDay: "quinta",
    time: "16:00",
    stadium: "lusail",
  },
  {
    teams: ["wales", "iran"],
    group: "b",
    date: "25/11",
    weekDay: "sexta",
    time: "07:00",
    stadium: "ahmadbinali",
  },
  {
    teams: ["qatar", "senegal"],
    group: "a",
    date: "25/11",
    weekDay: "sexta",
    time: "10:00",
    stadium: "althumama",
  },
  {
    teams: ["netherlands", "ecuador"],
    group: "a",
    date: "25/11",
    weekDay: "sexta",
    time: "13:00",
    stadium: "khalifainternat",
  },
  {
    teams: ["england", "usa"],
    group: "b",
    date: "25/11",
    weekDay: "sexta",
    time: "16:00",
    stadium: "albayt",
  },
  {
    teams: ["tunisia", "australia"],
    group: "d",
    date: "26/11",
    weekDay: "sábado",
    time: "07:00",
    stadium: "aljanoub",
  },
  {
    teams: ["poland", "saudiarabia"],
    group: "c",
    date: "26/11",
    weekDay: "sábado",
    time: "10:00",
    stadium: "educationcity",
  },
  {
    teams: ["france", "denmark"],
    group: "d",
    date: "26/11",
    weekDay: "sábado",
    time: "13:00",
    stadium: "stadium974",
  },
  {
    teams: ["argentina", "mexico"],
    group: "c",
    date: "26/11",
    weekDay: "sábado",
    time: "16:00",
    stadium: "lusail",
  },
  {
    teams: ["japan", "costarica"],
    group: "e",
    date: "27/11",
    weekDay: "domingo",
    time: "07:00",
    stadium: "ahmadbinali",
  },
  {
    teams: ["belgium", "morocco"],
    group: "f",
    date: "27/11",
    weekDay: "domingo",
    time: "10:00",
    stadium: "althumama",
  },
  {
    teams: ["croatia", "canada"],
    group: "f",
    date: "27/11",
    weekDay: "domingo",
    time: "13:00",
    stadium: "khalifainternat",
  },
  {
    teams: ["spain", "germany"],
    group: "e",
    date: "27/11",
    weekDay: "domingo",
    time: "16:00",
    stadium: "albayt",
  },
  {
    teams: ["cameroon", "serbia"],
    group: "g",
    date: "28/11",
    weekDay: "segunda",
    time: "07:00",
    stadium: "aljanoub",
  },
  {
    teams: ["southkorea", "ghana"],
    group: "h",
    date: "28/11",
    weekDay: "segunda",
    time: "10:00",
    stadium: "educationcity",
  },
  {
    teams: ["brazil", "switzerland"],
    group: "g",
    date: "28/11",
    weekDay: "segunda",
    time: "13:00",
    stadium: "stadium974",
  },
  {
    teams: ["portugal", "uruguay"],
    group: "h",
    date: "28/11",
    weekDay: "segunda",
    time: "16:00",
    stadium: "lusail",
  },
  {
    teams: ["wales", "england"],
    group: "b",
    date: "29/11",
    weekDay: "segunda",
    time: "16:00",
    stadium: "ahmadbinali",
  },
  {
    teams: ["iran", "usa"],
    group: "b",
    date: "29/11",
    weekDay: "terça",
    time: "16:00",
    stadium: "althumama",
  },
  {
    teams: ["ecuador", "senegal"],
    group: "a",
    date: "29/11",
    weekDay: "terça",
    time: "12:00",
    stadium: "khalifainternat",
  },
  {
    teams: ["netherlands", "qatar"],
    group: "a",
    date: "29/11",
    weekDay: "terça",
    time: "12:00",
    stadium: "albayt",
  },
  {
    teams: ["australia", "denmark"],
    group: "d",
    date: "30/11",
    weekDay: "quarta",
    time: "12:00",
    stadium: "aljanoub",
  },
  {
    teams: ["tunisia", "france"],
    group: "d",
    date: "30/11",
    weekDay: "quarta",
    time: "12:00",
    stadium: "educationcity",
  },
  {
    teams: ["poland", "argentina"],
    group: "c",
    date: "30/11",
    weekDay: "quarta",
    time: "16:00",
    stadium: "stadium974",
  },
  {
    teams: ["saudiarabia", "mexico"],
    group: "c",
    date: "30/11",
    weekDay: "quarta",
    time: "16:00",
    stadium: "lusail",
  },
  {
    teams: ["croatia", "belgium"],
    group: "f",
    date: "1/12",
    weekDay: "quinta",
    time: "12:00",
    stadium: "ahmadbinali",
  },
  {
    teams: ["canada", "morocco"],
    group: "f",
    date: "1/12",
    weekDay: "quinta",
    time: "12:00",
    stadium: "althumama",
  },
  {
    teams: ["japan", "spain"],
    group: "e",
    date: "1/12",
    weekDay: "quinta",
    time: "16:00",
    stadium: "khalifainternat",
  },
  {
    teams: ["costarica", "germany"],
    group: "e",
    date: "1/12",
    weekDay: "quinta",
    time: "16:00",
    stadium: "albayt",
  },
  {
    teams: ["ghana", "uruguay"],
    group: "h",
    date: "2/12",
    weekDay: "sexta",
    time: "12:00",
    stadium: "aljanoub",
  },
  {
    teams: ["southkorea", "portugal"],
    group: "h",
    date: "2/12",
    weekDay: "sexta",
    time: "12:00",
    stadium: "educationcity",
  },
  {
    teams: ["serbia", "switzerland"],
    group: "g",
    date: "2/12",
    weekDay: "sexta",
    time: "16:00",
    stadium: "stadium974",
  },
  {
    teams: ["cameroon", "brazil"],
    group: "g",
    date: "2/12",
    weekDay: "sexta",
    time: "16:00",
    stadium: "lusail",
  },
]
function createCardBy(option) {
  let opt = []
  let cardsByOption = ""

  for (let i of matches) {
    if (option != "teams" && !opt.includes(i[option])) {
      if (option == "group") {
        cardsByOption += createCard(
          "GRUPO " + i[option].toUpperCase(),
          "",
          i[option]
        )
        opt.push(i[option])
      }
    } else if (
      option == "teams" &&
      !opt.includes(i[option][0]) &&
      !opt.includes(i[option][1])
    ) {
      cardsByOption +=
        createCard(i[option][0].toUpperCase(), "", i[option][0]) +
        createCard(i[option][1].toUpperCase(), "", i[option][1])
      opt.push(i[option][0])
      opt.push(i[option][1])
    }
  }
  return cardsByOption
}
function createGameBy(option) {
  for (let i of matches) {
    if (option != "teams") {
      if (option == "group") {
        createGame(i.teams[0], i.date, i.time, i.stadium.toLocaleUpperCase(), i.teams[1], i.group)
      }
    } else if (option == "teams") {
    }
  }
}
//createGame(i.teams[0], i.time,i.teams[1])
// createCard(
//   matches[0].date,
//   matches[0].weekDay)
let orderOption = document.querySelector
let gameCards = document.querySelector("#cards")
gameCards.innerHTML = createCardBy("group")
createGameBy("group")
//createGame(matches[0].teams[0], matches[0].time, matches[0].teams[1], matches[0].group)

//createGame(matches[0].teams[0], matches[0].time, matches[0].teams[1])

// document.querySelector("#cards").innerHTML =
//   createCard(
//     matches[0].date,
//     matches[0].weekDay,
//     createGame(matches[0].teams[0], matches[0].time, matches[0].teams[1]) +
//       createGame(matches[1].teams[0], matches[1].time, matches[1].teams[1])
//   ) +
//   createCard("28/11", "segunda", createGame("brazil", "16:00", "switzerland"))
