import { useTranslation } from 'react-i18next';

function MyContainer() {
    const {t} = useTranslation();

    return (
        <div className="my-container">
            <p>{t('This is the front page')}</p>
        </div>
    )
}

export default MyContainer;
