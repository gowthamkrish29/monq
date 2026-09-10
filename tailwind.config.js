export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                dark: '#163828',
                'dark-muted': 'rgba(22, 56, 40, 0.7)',
                light: '#F4F1EA',
                white: '#FFFFFF',
            },
            fontFamily: {
                heading: ['Syne', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            boxShadow: {
                sm: '0 4px 6px -1px rgba(22, 56, 40, 0.05)',
                md: '0 10px 15px -3px rgba(22, 56, 40, 0.08)',
                lg: '0 20px 25px -5px rgba(22, 56, 40, 0.1)',
            }
        },
    },
    plugins: [],
}
