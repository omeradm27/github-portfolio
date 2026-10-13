// Education entries. `logo` is relative to the public folder; components
// prefix it with import.meta.env.BASE_URL.
export const getEducationData = (t) => [
    {
        degree: t('EDUCATION_ENTRY_2_DEGREE'),
        grade: t('EDUCATION_ENTRY_2_GRADE'),
        institution: t('EDUCATION_ENTRY_2_INSTITUTION'),
        period: t('EDUCATION_ENTRY_2_PERIOD'),
        location: t('EDUCATION_ENTRY_2_LOCATION'),
        logo: 'assets/Ankara_University_logo.webp',
        link: 'https://comp.eng.ankara.edu.tr/',
    },
    {
        degree: t('EDUCATION_ENTRY_1_DEGREE'),
        grade: t('EDUCATION_ENTRY_1_GRADE'),
        institution: t('EDUCATION_ENTRY_1_INSTITUTION'),
        period: t('EDUCATION_ENTRY_1_PERIOD'),
        location: t('EDUCATION_ENTRY_1_LOCATION'),
        logo: 'assets/ikhal.webp',
        link: 'https://ikhal.meb.k12.tr/',
    },
];
