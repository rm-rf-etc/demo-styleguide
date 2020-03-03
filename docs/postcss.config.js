module.exports = ({ env }) => ({
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      browsers: [
        '> 5%',
        'last 2 chrome versions',
        'last 2 firefox versions',
        'last 2 safari versions',
        'last 2 edge versions',
        'last 1 ie versions',
        'Firefox ESR',
      ],
    },
    cssnano: env === 'production' ? { zindex: false, reduceIdents: false } : false,
    'postcss-zindex': false,
  },
});
