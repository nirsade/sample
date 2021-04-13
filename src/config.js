const defaultConfig = {
    lan: 'he',
}

const modes = {
    development: {
        ...defaultConfig,
        API: 'https://my-server-d.com',
    },
    staging: {
        ...defaultConfig,
        API: 'https://my-server-s.com',
    },
    production: {
        ...defaultConfig,
        API: 'https://my-server-p.com'
    }
}

const applicationMode = modes[process.env.REACT_APP_ENV] || modes.development;

export default applicationMode;
