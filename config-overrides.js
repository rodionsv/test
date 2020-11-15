import path from 'path';

// eslint-disable-next-line import/no-extraneous-dependencies
import { override, addWebpackAlias, addWebpackResolve } from 'customize-cra';

module.exports = override(
    addWebpackAlias({
        '@components': path.resolve(__dirname, './srs/components'),
        '@const': path.resolve(__dirname, './srs/constants'),
        '@mocks': path.resolve(__dirname, './srs/__mocks__'),
        '@shared': path.resolve(__dirname, './srs/shared'),
        '@styles': path.resolve(__dirname, './srs/styles'),
    }),
    addWebpackResolve({
        modules: ['node_modules', path.resolve(__dirname, 'src')],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
);
