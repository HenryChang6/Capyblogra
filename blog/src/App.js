import './App.css';


function Header() {
  return (
    <div class = 'header'>
      <img src="/me.png" alt="me" />
      <span>Henry Chang</span>
    </div>
  )
}

function Intro() {
  return (
    <div class = 'intro-container'>
      <div class = 'blur'>
        <span id = 'welcome-header'>Welcome To My Blog!</span>
        <span id = 'welcome-text'>Hi! My name is Henry Chang, currently studying at NCKU CSIE Dpt. I will post some interesting experience from life and coding stuff in this blog. Follow me if you like my post !</span>
        <LinkBar/>
      </div>
    </div>
  )
}

function LinkBar() {
  return (
    <div id = 'link-bar'>
      <BarIcon url = 'https://github.com/HenryChang6/' dir_src = '/icon_github.png' description = 'github icon'/>
      <BarIcon url = 'https://www.instagram.com/hung.6_19/' dir_src = '/icon_ig.png' description = 'instagram icon'/>
      <BarIcon url = 'www.linkedin.com/in/henrychang2026' dir_src = '/icon_linkedin.png' description = 'linkedIn icon'/>
      <BarIcon url = 'https://www.facebook.com/profile.php?id=100006015376476' dir_src = '/icon_fb.png' description = 'facebook icon'/>
    </div>
  )
}

function BarIcon(props) {
  return (
    <a href = {props.url} target="_blank" rel="noopener noreferrer">
      <img class = "link-icon" src = {props.dir_src} alt = {props.description} />
    </a>
  )
}

export default function main() {
  return(
      <div class='welcome-container'>
        <Header/>
        <Intro/>
      </div>
  )
}
