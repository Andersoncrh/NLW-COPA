let bg = document.querySelector('body')
function inWords(num) {
  var a = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  if ((num = num.toString()).length > 9) return "overflow"
  n = ("000000000" + num)
    .substr(-9)
    .match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/)
  if (!n) return
  var str = ""
  str +=
    n[1] != 0
      ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "crore "
      : ""
  str +=
    n[2] != 0
      ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "lakh "
      : ""
  str +=
    n[3] != 0
      ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "thousand "
      : ""
  str +=
    n[4] != 0
      ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "hundred "
      : ""
  str +=
    n[5] != 0
      ? (str != "" ? "and " : "") +
        (a[Number(n[5])] || b[n[5][0]] + a[n[5][1]]) 
      : ""
  return str
}
function changeColor(color){
  bg.classList.replace(bg.classList[0],color) 
}
function changeOrder(option){
  bg.classList.replace(bg.classList[1],option)
  gameCards.innerHTML = createCardBy(bg.classList[1])
  createGameBy(bg.classList[1])
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
    date: "20-11",
    weekDay: "domingo",
    time: "13:00",
    stadium: "al-bayt",
  },
  {
    teams: ["senegal", "netherlands"],
    group: "a",
    date: "21-11",
    weekDay: "segunda",
    time: "13:00",
    stadium: "al-thumama",
  },
  {
    teams: ["england", "iran"],
    group: "b",
    date: "21-11",
    weekDay: "segunda",
    time: "10:00",
    stadium: "khalifa-internat",
  },
  {
    teams: ["usa", "wales"],
    group: "b",
    date: "21-11",
    weekDay: "segunda",
    time: "16:00",
    stadium: "ahmad-bin-ali",
  },
  {
    teams: ["france", "australia"],
    group: "d",
    date: "22-11",
    weekDay: "terça",
    time: "16:00",
    stadium: "al-janoub",
  },
  {
    teams: ["denmark", "tunisia"],
    group: "d",
    date: "22-11",
    weekDay: "terça",
    time: "10:00",
    stadium: "education-city",
  },
  {
    teams: ["mexico", "poland"],
    group: "c",
    date: "22-11",
    weekDay: "terça",
    time: "13:00",
    stadium: "stadium-974",
  },
  {
    teams: ["argentina", "saudiarabia"],
    group: "c",
    date: "22-11",
    weekDay: "terça",
    time: "07:00",
    stadium: "lusail",
  },
  {
    teams: ["belgium", "canada"],
    group: "f",
    date: "23-11",
    weekDay: "quarta",
    time: "16:00",
    stadium: "ahmad-bin-ali",
  },
  {
    teams: ["spain", "costarica"],
    group: "e",
    date: "23-11",
    weekDay: "quarta",
    time: "13:00",
    stadium: "al-thumama",
  },
  {
    teams: ["germany", "japan"],
    group: "e",
    date: "23-11",
    weekDay: "quarta",
    time: "10:00",
    stadium: "khalifa-internat",
  },
  {
    teams: ["morocco", "croatia"],
    group: "f",
    date: "23-11",
    weekDay: "quarta",
    time: "07:00",
    stadium: "al-bayt",
  },
  {
    teams: ["switzerland", "cameroon"],
    group: "g",
    date: "24-11",
    weekDay: "quinta",
    time: "07:00",
    stadium: "al-janoub",
  },
  {
    teams: ["uruguay", "southkorea"],
    group: "h",
    date: "24-11",
    weekDay: "quinta",
    time: "10:00",
    stadium: "education-city",
  },
  {
    teams: ["portugal", "ghana"],
    group: "h",
    date: "24-11",
    weekDay: "quinta",
    time: "13:00",
    stadium: "stadium-974",
  },
  {
    teams: ["brazil", "serbia"],
    group: "g",
    date: "24-11",
    weekDay: "quinta",
    time: "16:00",
    stadium: "lusail",
  },
  {
    teams: ["wales", "iran"],
    group: "b",
    date: "25-11",
    weekDay: "sexta",
    time: "07:00",
    stadium: "ahmad-bin-ali",
  },
  {
    teams: ["qatar", "senegal"],
    group: "a",
    date: "25-11",
    weekDay: "sexta",
    time: "10:00",
    stadium: "al-thumama",
  },
  {
    teams: ["netherlands", "ecuador"],
    group: "a",
    date: "25-11",
    weekDay: "sexta",
    time: "13:00",
    stadium: "khalifa-internat",
  },
  {
    teams: ["england", "usa"],
    group: "b",
    date: "25-11",
    weekDay: "sexta",
    time: "16:00",
    stadium: "al-bayt",
  },
  {
    teams: ["tunisia", "australia"],
    group: "d",
    date: "26-11",
    weekDay: "sábado",
    time: "07:00",
    stadium: "al-janoub",
  },
  {
    teams: ["poland", "saudiarabia"],
    group: "c",
    date: "26-11",
    weekDay: "sábado",
    time: "10:00",
    stadium: "education-city",
  },
  {
    teams: ["france", "denmark"],
    group: "d",
    date: "26-11",
    weekDay: "sábado",
    time: "13:00",
    stadium: "stadium-974",
  },
  {
    teams: ["argentina", "mexico"],
    group: "c",
    date: "26-11",
    weekDay: "sábado",
    time: "16:00",
    stadium: "lusail",
  },
  {
    teams: ["japan", "costarica"],
    group: "e",
    date: "27-11",
    weekDay: "domingo",
    time: "07:00",
    stadium: "ahmad-bin-ali",
  },
  {
    teams: ["belgium", "morocco"],
    group: "f",
    date: "27-11",
    weekDay: "domingo",
    time: "10:00",
    stadium: "al-thumama",
  },
  {
    teams: ["croatia", "canada"],
    group: "f",
    date: "27-11",
    weekDay: "domingo",
    time: "13:00",
    stadium: "khalifa-internat",
  },
  {
    teams: ["spain", "germany"],
    group: "e",
    date: "27-11",
    weekDay: "domingo",
    time: "16:00",
    stadium: "al-bayt",
  },
  {
    teams: ["cameroon", "serbia"],
    group: "g",
    date: "28-11",
    weekDay: "segunda",
    time: "07:00",
    stadium: "al-janoub",
  },
  {
    teams: ["southkorea", "ghana"],
    group: "h",
    date: "28-11",
    weekDay: "segunda",
    time: "10:00",
    stadium: "education-city",
  },
  {
    teams: ["brazil", "switzerland"],
    group: "g",
    date: "28-11",
    weekDay: "segunda",
    time: "13:00",
    stadium: "stadium-974",
  },
  {
    teams: ["portugal", "uruguay"],
    group: "h",
    date: "28-11",
    weekDay: "segunda",
    time: "16:00",
    stadium: "lusail",
  },
  {
    teams: ["wales", "england"],
    group: "b",
    date: "29-11",
    weekDay: "terça",
    time: "16:00",
    stadium: "ahmad-bin-ali",
  },
  {
    teams: ["iran", "usa"],
    group: "b",
    date: "29-11",
    weekDay: "terça",
    time: "16:00",
    stadium: "al-thumama",
  },
  {
    teams: ["ecuador", "senegal"],
    group: "a",
    date: "29-11",
    weekDay: "terça",
    time: "12:00",
    stadium: "khalifa-internat",
  },
  {
    teams: ["netherlands", "qatar"],
    group: "a",
    date: "29-11",
    weekDay: "terça",
    time: "12:00",
    stadium: "al-bayt",
  },
  {
    teams: ["australia", "denmark"],
    group: "d",
    date: "30-11",
    weekDay: "quarta",
    time: "12:00",
    stadium: "al-janoub",
  },
  {
    teams: ["tunisia", "france"],
    group: "d",
    date: "30-11",
    weekDay: "quarta",
    time: "12:00",
    stadium: "education-city",
  },
  {
    teams: ["poland", "argentina"],
    group: "c",
    date: "30-11",
    weekDay: "quarta",
    time: "16:00",
    stadium: "stadium-974",
  },
  {
    teams: ["saudiarabia", "mexico"],
    group: "c",
    date: "30-11",
    weekDay: "quarta",
    time: "16:00",
    stadium: "lusail",
  },
  {
    teams: ["croatia", "belgium"],
    group: "f",
    date: "01-12",
    weekDay: "quinta",
    time: "12:00",
    stadium: "ahmad-bin-ali",
  },
  {
    teams: ["canada", "morocco"],
    group: "f",
    date: "01-12",
    weekDay: "quinta",
    time: "12:00",
    stadium: "al-thumama",
  },
  {
    teams: ["japan", "spain"],
    group: "e",
    date: "01-12",
    weekDay: "quinta",
    time: "16:00",
    stadium: "khalifa-internat",
  },
  {
    teams: ["costarica", "germany"],
    group: "e",
    date: "01-12",
    weekDay: "quinta",
    time: "16:00",
    stadium: "al-bayt",
  },
  {
    teams: ["ghana", "uruguay"],
    group: "h",
    date: "02-12",
    weekDay: "sexta",
    time: "12:00",
    stadium: "al-janoub",
  },
  {
    teams: ["southkorea", "portugal"],
    group: "h",
    date: "02-12",
    weekDay: "sexta",
    time: "12:00",
    stadium: "education-city",
  },
  {
    teams: ["serbia", "switzerland"],
    group: "g",
    date: "02-12",
    weekDay: "sexta",
    time: "16:00",
    stadium: "stadium-974",
  },
  {
    teams: ["cameroon", "brazil"],
    group: "g",
    date: "02-12",
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
          "GROUP " + i[option].toUpperCase(),
          "",
          i[option]
        )
        opt.push(i[option])
      } else if (option == "date") {
        cardsByOption += createCard(
          i[option].toUpperCase(),
          i.weekDay,
          inWords(i[option].substring(0, 2))
        )
        opt.push(i[option])
      } else if (option == "stadium") {
        cardsByOption += createCard(i[option].toUpperCase(),"",i[option])
        opt.push(i[option])
      }
    } else if (option == "teams" &&!opt.includes(i[option][0]) &&!opt.includes(i[option][1])) {
      cardsByOption +=
        createCard(i[option][0].toUpperCase(), "", i[option][0]) +
        createCard(i[option][1].toUpperCase(), "", i[option][1])
      opt.push(i[option][0])
      opt.push(i[option][1])
    }
  }
  delay = -0.3
  return cardsByOption
}
function createGameBy(option) {
  for (let i of matches) {
    if (option != "teams") {
      if (option == "group") {
        createGame(i.teams[0], i.date, i.time, i.stadium.toUpperCase(), i.teams[1], i.group)
      }else if(option == "date"){
        createGame(i.teams[0],i.date,  'Group '+i.group.toUpperCase(), i.stadium.toUpperCase(), i.teams[1], inWords(i.date.substring(0,2)))
    }else if(option == "stadium"){
        createGame(i.teams[0],i.date+' '+i.weekDay.toUpperCase(),  'Group '+i.group.toUpperCase(), i.stadium.toUpperCase(), i.teams[1], i.stadium)
    }
    } else{
      createGame(i.teams[0], i.date, i.time, i.stadium.toUpperCase(), i.teams[1], i.teams[0])
      createGame(i.teams[0], i.date, i.time, i.stadium.toUpperCase(), i.teams[1], i.teams[1])
    }
  }
}
let gameCards = document.querySelector("#cards")
gameCards.innerHTML = createCardBy(bg.classList[1])
createGameBy(bg.classList[1])