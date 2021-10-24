let btn = document.getElementById('getTimeZone')
if (btn !== null) {
    btn.addEventListener('click', Timezone)
}

function Timezone() {
    let time = document.getElementById('showTimeZone')
    time.innerHTML = Date()
}