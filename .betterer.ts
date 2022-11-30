import { typescript } from '@betterer/typescript'

export default {
  // Add tests here ☀️
  '[typescript] strictNullChecks': () => typescript(`./tsconfig.json`, {
    strictNullChecks: true
  }).include('./src/**/*.ts'),
  
  '[typescript] strictChecks': () => typescript(`./tsconfig.json`, {
    strict: true
  }).include('./src/**/*.ts'),
};
