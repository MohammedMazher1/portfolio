import { getCookies } from '@/lib/actions'
import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async () => {
    const availableLocales = ['en', 'ar']
    const userLocale = (await getCookies('locale')) || 'en' // Default to 'ar'
    const locale = availableLocales.includes(userLocale) ? userLocale : 'en'

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default,
    }
})
