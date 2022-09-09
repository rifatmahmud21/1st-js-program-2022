
let countEl = document.getElementById("count-pe")
console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

function peopleOut() {
    count = count - 1
    countEl.innerText = count
}

let peopleGoOut = document.getElementById("reverse-count")
console.log(peopleGoOut)

let minusPeople = 0

function minusPpl() {
    minusPeople = minusPeople + 1
    peopleGoOut.innerText = minusPeople
}

let allTicket = document.getElementById("total-ticket")
console.log(totaltickets);

let tickets = 0

function totaltickets() {
    tickets = tickets + 1
    allTicket.innerText = tickets
}