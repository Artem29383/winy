module.exports = {
  parser: "babel-eslint",
  extends: ['airbnb', 'prettier/react', 'plugin:prettier/recommended'],
  plugins: [
    "react",
    "prettier"
  ],
  settings: {
    "react": {
      "version": "16.12"
    },
    "import/resolver": {
      "babel-module": {}
    }
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
        "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
      ],
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        experimentalDecorators: true,
      },
      plugins: ['import', '@typescript-eslint'],
      rules: {
        "import/no-unresolved": "error",
        "react/prop-types": 0,
      },
      settings: {
        "import/extensions": [".js", ".jsx", ".ts", ".tsx", ".mjs"],
        "import/resolver": {
          "node": {
            "extensions": [".js", ".jsx", ".ts", ".tsx"],
            moduleDirectory: ['node_modules', 'src/'],
          }
        },
        "typescript": {
          "directory": "./tsconfig.json"
        },
      }
    },
  ],
  // "overrides": [
  //   {
  //     "files": ["*.js", "*.jsx"],
  //     "rules": {
  //       "@typescript-eslint/*": "off",
  //     }
  //   }
  // ],
  env: {
    "browser": true,
    "node": true,
    "es6": true
  },
  rules: {
    'func-names': "off",
    'no-nested-ternary': "off",
    "global-require": "off",
    "no-console": "off",
    'react/jsx-props-no-spreading': 0,
    "no-underscore-dangle": "off",
    "function-paren-newline": "off",
    "import/first": "off",
    "comma-dangle": "off",
    "import/prefer-default-export": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
        ]
      }
    ],
    "import/no-extraneous-dependencies": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "react/forbid-prop-types": "off",
    "react/require-default-props": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "es5"
      }
    ]
  },
  globals: {
    "window": true,
    "document": true,
    "localStorage": true,
    "FormData": true,
    "FileReader": true,
    "Blob": true,
    "navigator": true,
    "Headers": true,
    "Request": true,
    "fetch": true
  },
  root: true,
};
