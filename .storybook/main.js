const path = require('path')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    // NOTE: nextの.module.css.をpostcssで解釈するためのプラグイン
    'storybook-css-modules-preset',
    // NOTE: Tailwindで使用するpostcssのプラグイン
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  // NOTE: TSのBaseUrl対応
  webpackFinal(config) {
    config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, '../src')]
    config.resolve.plugins = [...(config.resolve.plugins || []), new TsconfigPathsPlugin()]
    // NOTE: Sassをコンパイルする設定
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: true,
            },
            url: false,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [require('tailwindcss'), require('autoprefixer')],
            },
          },
        },
        'sass-loader',
      ],
      include: path.resolve(__dirname, '../src/'),
    })
    return config
  },
}
