import './reset.css'
import './normalize.css'
import './style.css'
import Header from './header/header.js'
import HeaderLogo from './headerLogo/headerLogo.js'
import HeaderNav from './headerNav/headerNav.js'
import HeaderNavLink from './headerNavLink/headerNavLink.js'
import HeaderNavIcon from './headerNavIcon/headerNavIcon.js'
import PreHeader from './preHeader/preHeader.js'
import Main from './main/main.js'
import MainContainer from './mainContainer/mainContainer.js'
import MainContainerDiv from './mainContainerDiv/mainContainerDiv.js'
import MainContainerButton from './mainContainerButton/main.js'

const app = document.querySelector('#app')

new PreHeader(app).render()
new Header(app).render()
new HeaderLogo(document.getElementsByClassName("header")[0], '../assets/img/logo.svg').render()

new HeaderNav(document.getElementsByClassName("header")[0], 20, 15).render()
new HeaderNavLink(document.getElementsByClassName("nav")[0], "Collection", "#").render()
new HeaderNavLink(document.getElementsByClassName("nav")[0], "New In", "#").render()
new HeaderNavLink(document.getElementsByClassName("nav")[0], "Modiweek", "#").render()
new HeaderNavLink(document.getElementsByClassName("nav")[0], "Plus Size", "#").render()
new HeaderNavLink(document.getElementsByClassName("nav")[0], "Sustainability", "#").render()

new HeaderNav(document.getElementsByClassName("header")[0], 35, 30).render()
new HeaderNavIcon(document.getElementsByClassName("nav")[1], '../assets/img/HeaderSearch.svg', 'Search', '#').render()
new HeaderNavIcon(document.getElementsByClassName("nav")[1], '../assets/img/HeaderProfile.svg', 'Profile', '#').render()
new HeaderNavIcon(document.getElementsByClassName("nav")[1], '../assets/img/HeaderFavorite.svg', "Favorite", '#').render()
new HeaderNavIcon(document.getElementsByClassName("nav")[1], '../assets/img/HeaderBag.svg', "Bag", '#').render()

new Main(app).render()
new MainContainer(document.getElementsByClassName("main")[0]).render()
new MainContainerDiv(document.getElementsByClassName("mainContainer")[0]).render()
//new MainContainerButton(document.getElementsByClassName("mainContainerDiv")[0]).render()