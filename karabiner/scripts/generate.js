const fs = require("fs");
const path = require("path");

const TEMPLATE_KARABINER_JSON_FILENAME = path.resolve(
  __dirname,
  "../karabiner.template.json"
);
const DIST_KARABINER_JSON_FILENAME = path.resolve(
  __dirname,
  "../dist/karabiner.json"
);

const config = JSON.parse(fs.readFileSync(TEMPLATE_KARABINER_JSON_FILENAME));

const rules = config.profiles[0].complex_modifications.rules;

rules.push({
  description: "Numbers layer",
  manipulators: [
    {
      from: {
        key_code: "grave_accent_and_tilde",
        modifiers: {
          mandatory: [],
          optional: ["any"]
        }
      },
      to: [
        {
          set_variable: {
            name: "numbers_layer",
            value: 1
          }
        }
      ],
      to_after_key_up: [
        {
          set_variable: {
            name: "numbers_layer",
            value: 0
          }
        }
      ],
      type: "basic"
    },
    {
      conditions: [
        {
          name: "numbers_layer",
          type: "variable_if",
          value: 1
        }
      ],
      from: {
        key_code: "j",
        modifiers: {
          mandatory: [],
          optional: ["any"]
        }
      },
      to: [
        {
          key_code: "4"
        }
      ],
      type: "basic"
    }
  ]
});

fs.writeFileSync(DIST_KARABINER_JSON_FILENAME, JSON.stringify(config, true, 4));
