import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';
import addKeywords from 'ajv-keywords';

import { AzionConfig } from '../../types';
import convertLegacyConfig from '../helpers/convertLegacyConfig';
import azionConfigSchema from '../helpers/schema';

/**
 * Validates the provided configuration against a JSON Schema.
 * This function uses AJV (Another JSON Schema Validator) to validate the configuration.
 * If the configuration is not valid, an exception is thrown with the error message of the first validation issue encountered.
 * @param {AzionConfig | Record<string, unknown>} config - The configuration to be validated.
 * @param {object} schema - The JSON Schema to be used for validation. Default is the Azion CDN configuration schema.
 * @throws {Error} Throws an error if the configuration fails validation.
 */
function validateConfig(
  config: AzionConfig | Record<string, unknown>,
  schema: Record<string, unknown> = azionConfigSchema,
) {
  /*  Converts legacy configuration properties to the new `behavior` format. */
  const configConverted = convertLegacyConfig(config);
  const ajv = new Ajv({ allErrors: true, $data: true, allowUnionTypes: true });
  ajvErrors(ajv);
  addKeywords(ajv, ['instanceof']);
  const validate = ajv.compile(schema);
  const valid = validate(configConverted);

  if (!valid) {
    if (validate.errors && validate.errors.length > 0) {
      throw new Error('Azion Config validation: ' + validate.errors[0].message);
    } else {
      throw new Error('Azion Config validation failed.');
    }
  }
}

export { validateConfig };
