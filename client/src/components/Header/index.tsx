import {
    MainContent,
    Logo,
    Pages
} from '../../assets/styles/components/Header/Header.style'
import ImgLogo from '../../assets/img/logo.png'

function Header() {
    return (
        <>
            <MainContent>
                <Logo src={ImgLogo} alt='image-logo'/>
                <Pages>HOME</Pages>
                <Pages>ABOUT</Pages>
                <Pages>PROJECTS</Pages>
                <Pages>CONTACT</Pages>
            </MainContent>
        </>
    )
}

export default Header