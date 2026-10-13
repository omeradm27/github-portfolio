// Experience entries in page order. Texts come from i18n; call inside a
// component with useTranslation()'s `t` so language switching re-renders.

const EXPERIENCE_KEYS = [
    'MULTITRANSPORT',
    'FREELANCE',
    'SYMMETRIC',
    'FELIXO',
    'VARTUR',
    'RASOFT',
    'FREELANCE_EARLY',
    'HUAWEI',
    'EDITSYSTEM',
];

export const getExperienceData = (t) =>
    EXPERIENCE_KEYS.map((key) => {
        const details = t(`EXPERIENCE_${key}_DETAILS`, { returnObjects: true });
        return {
            key,
            role: t(`EXPERIENCE_${key}_ROLE`),
            company: t(`EXPERIENCE_${key}_COMPANY`),
            period: t(`EXPERIENCE_${key}_PERIOD`),
            location: t(`EXPERIENCE_${key}_LOCATION`),
            details: Array.isArray(details) ? details : [],
        };
    });
