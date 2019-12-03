// After button clicked it adds one to it //
function counters() {
    const counters = document.querySelectorAll(".counter")
    for (const counter of counters) {
        const button = counter.querySelector(".counter__button")
        const counterCount = counter.querySelector(".counter__count")
        button.addEventListener("click", function () {
            const number = Number(counterCount.textContent)
            counterCount.textContent = number + 1
        })
    }
}
function resetCounter() {
    const resetButton = document.querySelector(".reset")
    resetButton.addEventListener("click", function () {
        const counters = document.querySelectorAll(".counter")
        for (const counter of counters) {
            const counterCount = counter.querySelector(".counter__count")
            counterCount.innerHTML = 0

        }
    })
}

// Gets The Current Date //
function currentDate() {
    const months = ["Jan", "Feb", "March", "April", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
    const weekDays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri']
    const currentDates = document.querySelectorAll(".current-date")
    const now = new Date()
    const dayOfWeek = weekDays[now.getDay()]
    const month = months[now.getMonth()]
    const day = now.getDate()
    const year = now.getFullYear()
    const dateString = `${dayOfWeek}, ${month} ${day} ${year}`
    for (const currentDate of currentDates) {
        currentDate.textContent = dateString
    }
}
// Gets The Current Time //
function currentTime() {
    function timeString() {
        const now = new Date()
        let hours = now.getHours()
        if (hours > 12) {
            hours = hours - 12
        }
        const minutes = now.getMinutes().toString().padStart(2, "0")

        let amPM;
        if (now.getHours() > 12 && now.getHours() < 24) {
            amPM = "PM"
        } else {
            amPM = "AM"
        }
        return `${hours}:${minutes} ${amPM}`
    }
    const currentTimes = document.querySelectorAll(".current-time")
    for (const currentTime of currentTimes) {
        const newString = timeString()
        currentTime.textContent = newString
    }
}
// ALERT //
function alert() {
    const alertContainer = document.createElement("div")
    alertContainer.id = "alert-container"
    document.body.appendChild(alertContainer)
    const button = document.querySelector(".open-alert")
    function createAlert(message) {
        const alert = document.createElement("div")
        alert.classList.add("alert")
        alertContainer.appendChild(alert)
        alert.textContent = message
        const exitButton = document.createElement("button")
        alert.appendChild(exitButton)
        exitButton.textContent = 'x'
        exitButton.classList.add("alert-dismiss")
        exitButton.addEventListener("click", function () {
            alertContainer.removeChild(alert)
        })
    }
    button.addEventListener("click", function () {
        for (let i = 0; i < 1; i++) {
            randomString = `${i}`

            createAlert(randomString)
        }
    })
}
function toasts() {
    const button = document.querySelector(".toast")
    const toastsContainer = document.createElement("div")
    toastsContainer.id = "toast-container"
    document.body.appendChild(toastsContainer)

    button.addEventListener("click", function () {
        createToast("Finally", 2000)
    })
    function createToast(message, duration) {
        const toast = document.createElement("div")
        toast.classList.add("toast")
        toast.textContent = message
        toastsContainer.appendChild(toast)
        colorChanger(toast)
        setTimeout(function () {
            toastsContainer.removeChild(toast)
        }, duration)
    }
    function colorChanger(toast) {
        let r = Math.floor(Math.random() * 360)
        toast.style.backgroundColor = `hsl(${r}, 100%, 70%)`
    }
}
toasts()
alert()
resetCounter()
counters()
currentDate()
currentTime()