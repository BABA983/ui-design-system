const fs = require('fs');
const path = require('path');
const sass = require('dart-sass');

const getComponents = () => {
  let allComponents = [];

  const types = ['atoms', 'molecules'];

  types.forEach((type) => {
    const allFiles = fs.readdirSync(`src/${type}`).map((file) => ({
      input: path.resolve('src', type, file),
      output: `src/lib/${file.slice(0, -4) + 'css'}`,
    }));

    allComponents = [...allComponents, ...allFiles];
  });

  return allComponents;
};

const compile = (src, fileName) => {
  const result = sass.renderSync({
    data: fs.readFileSync(path.resolve(src)).toString(),
    outputStyle: 'expanded',
    includePaths: [path.resolve('src')],
  });

  fs.writeFileSync(path.resolve(fileName), result.css.toString());
};

// try {
//   fs.mkdirSync(path.resolve('lib'));
// } catch (e) {}

compile('src/global.scss', 'src/lib/global.css');

getComponents().forEach((component) => {
  compile(component.input, component.output);
});
