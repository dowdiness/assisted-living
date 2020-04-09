module.exports = {
  plugins: {
    tailwindcss: {},
    'postcss-preset-env': { stage: 1 },
    ...(process.env.NODE_ENV === 'production'
      ? {
          '@fullhuman/postcss-purgecss': {
            content: ['./components/**/*.js', './components/**/*.tsx', './pages/**/*.js', './pages/**/*.tsx'],
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          },
        }
      : {}),
  },
}
