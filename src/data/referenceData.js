// Reference data. Person titles come from i18n, so getPeopleRefs is a function
// of `t` (call it inside a component). Company `logo` paths are relative to the
// public folder; components prefix them with import.meta.env.BASE_URL.

export const getPeopleRefs = (t) => [
    {
        name: 'Ramazan Ertunc',
        title: t('REFERENCES_PEOPLE_TITLE_1'),
        company: 'Admirise Digital Performance Agency',
        linkedin: 'https://linkedin.com/in/ramazanertunc',
    },
    {
        name: 'Necip Yolcu',
        title: t('REFERENCES_PEOPLE_TITLE_2'),
        company: 'Goldman Sachs',
        // TODO: verify — this currently duplicates Ramazan Ertunc's LinkedIn URL
        linkedin: 'https://linkedin.com/in/ramazanertunc',
    },
    {
        name: 'Doğan Nadi Varlı',
        title: t('REFERENCES_PEOPLE_TITLE_3'),
        company: 'Vartur',
        linkedin: 'https://linkedin.com/in/doğan-nadi-varli-b28a0354',
    },
    {
        name: 'Abdelrahman Mohamed',
        title: t('REFERENCES_PEOPLE_TITLE_4'),
        company: 'Vartur',
        linkedin: 'https://linkedin.com/in/mrabdelrahman10',
    },
    {
        name: 'Cengiz Yalçın',
        title: t('REFERENCES_PEOPLE_TITLE_5'),
        company: 'Infosim',
        linkedin: 'https://linkedin.com/in/cengiz-yalçin-a3843132',
    },
    {
        name: 'Murat Akdağ',
        title: t('REFERENCES_PEOPLE_TITLE_6'),
        company: 'BilgeAdam Teknoloji',
        linkedin: 'https://linkedin.com/in/muratakdağ',
    },
    {
        name: 'İsmail Uyar',
        title: t('REFERENCES_PEOPLE_TITLE_7'),
        company: 'Alignerr',
        linkedin: 'https://linkedin.com/in/ismail-uyar',
    },
];

export const getCompanyRefs = () => [
    {
        // Website not verified yet — card is rendered without a link.
        name: 'Multi Transport GmbH',
        logo: 'assets/multitransport-logo.webp',
    },
    {
        name: 'Albamedia',
        logo: 'assets/albamedia-logo.webp',
        website: 'https://albamedia.nl',
    },
    {
        name: 'NevaScholar',
        logo: 'assets/nevascholar-logo.webp',
        website: 'https://nevascholar.com',
    },
    {
        name: 'Tarım ve Orman Bakanlığı',
        logo: 'assets/orman.webp',
        website: 'https://www.tarimorman.gov.tr/',
    },
    {
        name: 'Su Verimliliği',
        logo: 'assets/suverimliligi.webp',
        website: 'https://www.suverimliligi.gov.tr/',
    },
    {
        name: 'Çevre ve Şehircilik Bakanlığı',
        logo: 'assets/cevre.webp',
        website: 'https://www.csb.gov.tr/',
    },
    {
        name: 'Sıfır Atık Vakfı',
        logo: 'assets/SifirAtik.svg',
        website: 'https://sifiratikvakfi.org/tr',
    },
    {
        name: 'Symmetric Holding',
        logo: 'assets/symmetric-logo.png',
        website: 'https://www.symmetricholding.com/',
    },
    {
        name: 'Infosim Yazılım & Bilişim',
        logo: 'assets/infosim.png',
        website: 'https://infosim.com.tr/',
    },
    {
        name: 'Huawei R&D',
        logo: 'assets/huawei.webp',
        website: 'https://www.huawei.com/tr/',
    },
    {
        name: 'Vartur Real Estate',
        logo: 'assets/vartur.jpg',
        logoPadding: '2rem',
        website: 'https://vartur.com/',
    },
    {
        name: 'RAsoft Teknoloji Danışmanlık',
        logo: 'assets/rasoft_logo.png',
        website: 'https://rasoft.com.tr/',
    },
];
