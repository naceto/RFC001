module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Generic rules
    'header-max-length': [2, 'always', 100],
  },
  plugins: [
    {
      rules: {
        'no-breaking-changes-on-maintenance': ({ header, body }, when = 'always') => {
          const branch = process.env.GITHUB_REF_NAME || '';
          const isMaintenance = /^v\d+(\.x)?$/.test(branch);

          const hasBang = /^(\w+)(\(.+\))?!:/.test(header);
          const hasFooterBreaking = /BREAKING CHANGE:/m.test(body || '');

          if (isMaintenance && (hasBang || hasFooterBreaking)) {
            return [
              false,
              `Breaking changes are not allowed on maintenance branches (${branch})`,
            ];
          }
          return [true];
        },
      },
    },
  ],
  rules: {
    'no-breaking-changes-on-maintenance': [2, 'always'],
  },
};
