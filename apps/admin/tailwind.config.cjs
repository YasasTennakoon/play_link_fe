const path = require('path');

module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        path.join(__dirname, '../../common/**/*.{js,ts,jsx,tsx}'),
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
