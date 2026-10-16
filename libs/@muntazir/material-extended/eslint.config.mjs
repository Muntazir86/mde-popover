import nx from '@nx/eslint-plugin';
import baseConfig from '../../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...nx.configs['flat/angular'],
  ...nx.configs['flat/angular-template'],
  {
    files: ['**/*.ts'],
    rules: {
      // Public selectors are `mde-popover`, `[mdePopoverTriggerFor]`,
      // `[mdePopoverTarget]`, and `mde-popover-target`. The `mde` prefix is the
      // library's API (see README), not the Nx `lib` placeholder.
      // `mde-popover-target` is an element selector and `[mdePopoverTarget]` /
      // `[mdePopoverTriggerFor]` are attribute selectors, so both forms are allowed.
      '@angular-eslint/directive-selector': [
        'error',
        [
          {
            type: 'attribute',
            prefix: 'mde',
            style: 'camelCase',
          },
          {
            type: 'element',
            prefix: 'mde',
            style: 'kebab-case',
          },
        ],
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'mde',
          style: 'kebab-case',
        },
      ],
      // Template bindings (`mdePopoverPositionX`, `mdePopoverTriggerFor`, …) are
      // the documented public API and intentionally differ from the class
      // property names (`positionX`, `popover`, …). Renaming either side would
      // break existing applications.
      '@angular-eslint/no-input-rename': 'off',
      // `@Output() close` is the documented public API. The name matches the
      // native `close` event, which this rule forbids, but renaming it would
      // break subscribers.
      '@angular-eslint/no-output-native': 'off',
    },
  },
  {
    files: ['**/*.html'],
    rules: {},
  },
];
