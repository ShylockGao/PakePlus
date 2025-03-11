console.log(
    '%cbuild from PakePlus： https://github.com/Sjj1024/PakePlus',
    'color:orangered;font-weight:bolder'
)

const hookClick = (e) => {
    e.preventDefault()
    const origin = e.target.closest('a')
    if (origin && origin.href) {
        location.href = origin.href
    }
}

function init_desktop_air(){
    localStorage.setItem("modelingAppType","TRURI");
}
init_desktop_air()