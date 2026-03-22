'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'zh'

interface LanguageContextType {
    language: Language
    toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    toggleLanguage: () => {}
})

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<Language>('en')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const match = document.cookie.match(new RegExp('(^| )googtrans=([^;]+)'))
        if (match && (match[2] === '/en/zh-CN' || match[2] === '/en/zh-TW')) {
            setLanguage('zh')
        }
    }, [])

    const toggleLanguage = () => {
        const newLang = language === 'en' ? 'zh' : 'en'
        setLanguage(newLang)
        
        if (newLang === 'zh') {
            document.cookie = "googtrans=/en/zh-CN; path=/;"
            document.cookie = "googtrans=/en/zh-CN; domain=" + window.location.hostname + "; path=/;"
        } else {
            // Clear cookies to revert to local EN DOM
             document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
             document.cookie = "googtrans=; domain=" + window.location.hostname + "; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
        }
        
        window.location.reload()
    }

    if (!mounted) return <>{children}</>

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext)
