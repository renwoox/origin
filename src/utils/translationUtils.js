import { addLocaleData } from 'react-intl'
import translations from '../../translations/translated-messages.json'
import ar from 'react-intl/locale-data/ar'
import de from 'react-intl/locale-data/de'
import el from 'react-intl/locale-data/el'
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import fr from 'react-intl/locale-data/fr'
import he from 'react-intl/locale-data/he'
import hr from 'react-intl/locale-data/hr'
import it from 'react-intl/locale-data/it'
import ja from 'react-intl/locale-data/ja'
import ko from 'react-intl/locale-data/ko'
import nl from 'react-intl/locale-data/nl'
import pt from 'react-intl/locale-data/pt'
import ru from 'react-intl/locale-data/ru'
import th from 'react-intl/locale-data/th'
import tr from 'react-intl/locale-data/tr'
import zh from 'react-intl/locale-data/zh'

export function addLocales() {

  // If browser doesn't support Intl (i.e. Safari), then we manually import
  // the intl polyfill and locale data.
  if (!window.Intl) {
    require.ensure([
      'intl',
      'intl/locale-data/jsonp/en.js',
      'intl/locale-data/jsonp/es.js',
      'intl/locale-data/jsonp/fr.js',
      'intl/locale-data/jsonp/it.js',
    ], (require) => {
      require('intl')
      require('intl/locale-data/jsonp/en.js')
      require('intl/locale-data/jsonp/es.js')
      require('intl/locale-data/jsonp/fr.js')
      require('intl/locale-data/jsonp/it.js')
    })
  }

  addLocaleData([
    ...ar,
    ...de,
    ...el,
    ...en,
    ...es,
    ...fr,
    ...he,
    ...hr,
    ...it,
    ...ja,
    ...ko,
    ...nl,
    ...pt,
    ...ru,
    ...th,
    ...tr,
    ...zh])
}

export function getLangFullName(langAbbrev) {
  
  switch (langAbbrev) {
    case 'en':
      return 'English'
      
    case 'de':
      return 'Deutsch'

    case 'es':
      return 'Español'

    case 'fr':
      return 'Français'

    case 'hr':
      return 'Hrvatski'

    case 'it':
      return 'Italiano'

    case 'nl':
      return 'Nederlands'

    case 'pt':
      return 'Português'

    case 'tr':
      return 'Türkçe'

    case 'el':
      return 'Ελληνικά'

    case 'ru':
      return 'Русский'

    case 'he':
      return 'עברית'

    case 'ar':
      return 'العربية'

    case 'th':
      return 'ไทย'

    case 'ko':
      return '한국어'

    case 'ja':
      return '日本語'

    case 'zh':
      return '简体中文'
  }
}

export function getAvailableLanguages() {
  if (!translations || typeof translations !== 'object') {
    return [];
  }

  const availableLangs = []

  for (let languageAbbrev in translations) {

    // Don't include English b/c we hard-code it in the footer dropdown to make sure it's always available
    if (languageAbbrev !== 'en') {

      availableLangs.push({
        selectedLanguageAbbrev: languageAbbrev,
        selectedLanguageFull: getLangFullName(languageAbbrev)
      })

    }
  }

  return availableLangs
}