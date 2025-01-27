import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
import '../styles/header.css'

function Header() {
    const { t } = useTranslation();

    return (
        <header className="header">
            <h1>This app</h1>
            <nav>
                <ul>
                    <a href='/'>{t('Home')}</a>
                    <a href='/about'>{t('About')}</a>
                    <button id='fi' onClick={() => changeLanguage('fi')}>FI</button>
                    <button id='en' onClick={() => changeLanguage('en')}>EN</button>
                </ul>
            </nav>
        </header>
    )
}

export default Header;