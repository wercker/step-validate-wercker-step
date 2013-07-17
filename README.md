# validate-wercker-step

Validates wercker-step.yml used for creating steps. The schema is publicly available at [wercker-step-schema.json](https://github.com/wercker/step-validate-wercker-step/blob/master/wercker-step-schema.json).

The steps looks for a `wercker-step.yml` file in the `$WERCKER_SOURCE_DIR` and fails if not present, or not valid.

## Options
none


## Dependencies
Node.js 0.6 or higher

## Example

- validate-wercker-step
