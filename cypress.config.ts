// Cypress Core
import { defineConfig } from 'cypress';

// Cucumber Preprocessor
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import createEsbuildPlugin from '@badeball/cypress-cucumber-preprocessor/esbuild';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';

async function setupNodeEvents(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions): Promise<Cypress.PluginConfigOptions> {
  await addCucumberPreprocessorPlugin(on, config);

  on('file:preprocessor', 
    createBundler({
      plugins: [createEsbuildPlugin(config)]
    })
  );

  return config;
}

export default defineConfig({
  video: false,
  
  e2e: {
    baseUrl: 'https://advantageonlineshopping.com',

    screenshotOnRunFailure: true,
    setupNodeEvents,
    specPattern: '**/*.feature',
  },

  defaultCommandTimeout: 8000,
  requestTimeout: 8000,
  responseTimeout: 8000,

  viewportWidth: 1366,
  viewportHeight: 768,
  fixturesFolder: 'cypress/fixtures'
});
