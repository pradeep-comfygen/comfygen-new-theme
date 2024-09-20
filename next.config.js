const withBundleAnalyzer = require('@next/bundle-analyzer')
  ({
    enabled: false,
    openAnalyzer: false,
  })

module.exports = withBundleAnalyzer({
  "env": {
    "URL": "https://www.comfygen.com",
    "NEXT_PUBLIC_MEASUREMENT_ID": "UA-228613134-1",
  },
  images: {
    domains: ['https://www.comfygen.com'],
  },
  compress: false,
})
