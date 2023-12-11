import {
    MainContainer
} from '../../assets/styles/pages/BasePage/BasePage.style'
import { Outlet } from 'react-router-dom'

function BasePage() {
    return (
        <>
            <main>
                <MainContainer>
                    <Outlet/>
                </MainContainer>
            </main>
        </>
    )
}

export default BasePage