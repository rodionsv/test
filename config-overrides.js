import path from 'path';

// eslint-disable-next-line import/no-extraneous-dependencies
import { override, addWebpackResolve } from 'customize-cra';

module.exports = override(
    addWebpackResolve({
        modules: ['node_modules', path.resolve(__dirname, 'src')],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    }),
);
