// STEP 1

let name = "Кактус"
let age = 18
let subscription = "premium"
let lastLogin = 0

// STEP 2

function validateAge (age) {
    if (typeof age !== "number") {
        console.log("Возраст не может быть буквенным значением")
        return false
    }
    
    if (age <= 0) {
        console.log("Такого возраста не бывает")
        return false
    }

    else {
        // console.log("Доступ разрешен")
        return true
    }
}

let validateName = function (name) {
    if (typeof name !== "string") {
        console.log("Имя не может быть цифровы значением")
        return false
    }
    
    else if (name === "") {
        console.log("Имя не может быть пустым")
        return false
    }
    else {
        return true
        // console.log(`Привет, ${name}`)
    }
}

let validateSubscription =(subscription) => {
    if (subscription === "free" ||
        subscription === "basic" ||
        subscription === "premium") {
            return true
        // console.log("Активная подписка")
    }
    else {console.log("У вас нет подписки")
        return false
    }
}

// STEP 3

function getTimeOfDay (lastLogin) {
    if (lastLogin >= 5 && lastLogin <= 11) {
        return "утро"
    }
    else if (lastLogin >= 12 && lastLogin <= 17) {
        return "день"
    }
    else if (lastLogin >= 18 && lastLogin <= 21) {
        return "вечер"
    }
    else {
        return "ночь"
    }
}

// STEP 4

function getAccessLevel (subscription) {
    if (subscription === "premium") {
        return "Полный доступ"
    }
    else if (subscription === "basic") {
        return "Ограниченный доступ"
    }
    else if (subscription === "free") {
        return "Доступ только к бесплатному контенту"
    }
    else {
        return "У вас нет активной подписки"
    }
}

// STEP 5


function displayUserInfo () {
    if (validateAge(age) && validateName(name) && validateSubscription(subscription)) {
           
        let timeOfDay = getTimeOfDay (lastLogin)
        let accessLevel = getAccessLevel (subscription)
        console.log(`Привет, ${name}! Вам ${age} лет. Сейчас ${timeOfDay}. Уровень доступа: ${accessLevel}.`)
    
    if (age <18) {
        console.log("Вы несовершеннолетний пользователь.")
    }
    if (lastLogin >= 22 || lastLogin < 5) {
        console.log("Позднее время для входа.")
    }

    let bonus = age % 10
    bonus += 5
    console.log(`Ваш бонус ${bonus}`)

    return true
    }
    else {
        return false
    }
}

displayUserInfo()