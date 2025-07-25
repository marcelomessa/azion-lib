import { convertJsonConfigToObject, processConfig, validateConfig } from './configProcessor';
import { AzionConfig } from './types';

/**
 * Helper function to provide IntelliSense for Azion configuration.
 * Similar to Vite's defineConfig - provides type safety without runtime overhead.
 *
 * @param {AzionConfig} config - The configuration object for the Azion Platform.
 * @returns {AzionConfig} The same configuration object (no validation or processing)
 *
 * @example
 * import { defineConfig } from 'azion/config';
 *
 * export default defineConfig({
 *   build: {
 *     preset: 'typescript',
 *   },
 *   domain: {
 *     name: 'example.com',
 *   },
 *   // ... other configurations
 * });
 */
function defineConfig(config: AzionConfig): AzionConfig {
  return config;
}

export { convertJsonConfigToObject, defineConfig, processConfig, validateConfig };

export type * from './types';
