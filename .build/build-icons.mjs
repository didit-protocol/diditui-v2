import fs from 'fs-extra';
import path from 'path';
import { PACKAGES_DIR, getAliases, toPascalCase, getAllIcons } from './helpers.mjs';
import { stringify } from 'svgson';

const kebabToCamelCase = (str) => {
  return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
};

const convertSVGAttributesToCamelCase = (attributes) => {
  const convertedAttributes = {};

  Object.keys(attributes).forEach(key => {
    // Convert kebab-case to camelCase
    const camelCaseKey = kebabToCamelCase(key);
    convertedAttributes[camelCaseKey] = attributes[key];
  });

  return convertedAttributes;
};

/**
 * Build icons
 *
 * @param name
 * @param componentTemplate
 * @param indexIconTemplate
 * @param indexTypeTemplate
 * @param extension
 * @param pretty
 */
export const buildJsIcons = ({
  name,
  componentTemplate,
  indexItemTemplate,
  aliasTemplate,
  extension = 'js',
  key = true,
  pascalCase = false,
  pascalName = true,
  indexFile = 'icons.ts',
}) => {
  const DIST_DIR = path.resolve(PACKAGES_DIR, name);
  const aliases = getAliases(),
    allIcons = getAllIcons(false, true);

  let index = [];
  Object.entries(allIcons).forEach(([type, icons]) => {
    icons.forEach((icon, i) => {
      process.stdout.write(
        `Building \`${name}\` ${type} ${i}/${icons.length}: ${icon.name.padEnd(42)}\r`,
      );

      const children = icon.obj.children
        .map(({ name, attributes }, i) => {
          if (key) {
            attributes.key = `svg-${i}`;
          }

          if (pascalCase) {
            attributes = convertSVGAttributesToCamelCase(attributes);
          }

          return [name, attributes];
        })
        .filter((i) => {
          const [name, attributes] = i;
          return !attributes.d || attributes.d !== 'M0 0h24v24H0z';
        });

      const iconName = `${icon.name}${type !== 'linear' ? `-${type}` : ''}`,
        iconNamePascal = `${icon.namePascal}${type !== 'linear' ? toPascalCase(type) : ''}`;

      let component = componentTemplate({
        type,
        name: iconName,
        namePascal: iconNamePascal,
        children,
        stringify,
        svg: icon.content,
      });

      let filePath = path.resolve(
        DIST_DIR,
        'src/icons',
        `${pascalName ? iconNamePascal : iconName}.${extension}`,
      );
      fs.writeFileSync(filePath, component, 'utf-8');

      index.push(
        indexItemTemplate({
          type,
          name: iconName,
          namePascal: iconNamePascal,
        }),
      );
    });
  });

  fs.writeFileSync(path.resolve(DIST_DIR, `src/icons/${indexFile}`), index.join('\n'), 'utf-8');

  // Write aliases
  let aliasesStr = '';
  if (aliases && aliasTemplate) {
    Object.entries(aliases).forEach(([from, to]) => {
      aliasesStr += aliasTemplate({
        from,
        to,
        fromPascal: toPascalCase(from),
        toPascal: toPascalCase(to),
      });
    });
  }

  fs.writeFileSync(path.resolve(DIST_DIR, `./src/aliases.ts`), aliasesStr || `export {};`, 'utf-8');
};

export const buildIconsList = (name) => {
  const DIST_DIR = path.resolve(PACKAGES_DIR, name);
  const allIcons = getAllIcons(false, true);

  let index = [];
  Object.entries(allIcons).forEach(([type, icons]) => {
    icons.forEach((icon, i) => {
      process.stdout.write(
        `Building \`${name}\` ${type} ${i}/${icons.length}: ${icon.name.padEnd(42)}\r`,
      );

      const iconName = `${icon.name}${type !== 'linear' ? `-${type}` : ''}`;

      index.push(iconName);
    });
  });

  fs.writeFileSync(
    path.resolve(DIST_DIR, `./src/icons-list.ts`),
    `export default ${JSON.stringify(index, null, 2)};`,
    'utf-8',
  );
};

export const buildIconsDynamicImport = (name) => {
  const DIST_DIR = path.resolve(PACKAGES_DIR, name);
  const allIcons = getAllIcons(false, true);

  let dynamicImportString = 'export default {';
  Object.entries(allIcons).forEach(([type, icons]) => {
    icons.forEach((icon, i) => {
      process.stdout.write(
        `Building \`${name}\` ${type} ${i}/${icons.length}: ${icon.name.padEnd(42)}\r`,
      );

      const iconName = `${icon.name}${type !== 'linear' ? `-${type}` : ''}`,
        iconNamePascal = `${icon.namePascal}${type !== 'linear' ? toPascalCase(type) : ''}`;

      dynamicImportString += `  '${iconName}': () => import('./icons/${iconNamePascal}'),\n`;
    });
  });

  dynamicImportString += '};\n';

  fs.writeFileSync(
    path.resolve(DIST_DIR, `./src/dynamic-imports.ts`),
    dynamicImportString,
    'utf-8',
  );
};
