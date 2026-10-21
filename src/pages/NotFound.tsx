import { useTranslation } from 'react-i18next'

export function NotFound() {
  const { t } = useTranslation()
  return <p>{t('notFound.message')}</p>
}