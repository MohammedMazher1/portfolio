import { getCookies } from '@/lib/actions'
import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async () => {
    const availableLocales = ['en', 'ar']
    const userLocale = (await getCookies('locale')) || 'ar' // Default to 'ar'
    const locale = availableLocales.includes(userLocale) ? userLocale : 'ar'

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default,
    }
})
