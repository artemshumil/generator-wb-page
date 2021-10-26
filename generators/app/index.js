'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const { camelCase, kebabCase, startCase, lowerCase, upperFirst, snakeCase, toUpper } = require('lodash');

const sentenceCase = v => upperFirst(lowerCase(startCase(v)));
const constantCase = v => toUpper(snakeCase(v));

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(
        `Welcome to the sweet ${chalk.red('generator-333')}!`
      )
    );

    const prompts = [
      {
        type: String,
        name: 'pageName',
        message: 'Навзание страницы (на русском)',
      },
      {
        type: String,
        name: 'state',
        message: 'Навзание стейта',
      },
      {
        type: String,
        name: 'saga',
        message: 'Навзание первой саги',
      },
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    const replaceParams = {
      page_SentenceCase: sentenceCase(this.props.pageName),
      saga_CamelCase: camelCase(this.props.saga),
      saga_KebabCase: kebabCase(this.props.saga),
      state_CamelCase: camelCase(this.props.state),
      state_PascalCase: upperFirst(camelCase(this.props.state)),
      state_ConstantCase: constantCase(this.props.state),
      state_KebabCase: kebabCase(this.props.state),
    };

    const filesArray = [
      { src: 'dummyfile.txt', dest: `${replaceParams.state_KebabCase}/dummyfile.txt` },
      { src: 'index.tsx', dest: `${replaceParams.state_KebabCase}/index.tsx` },
      { src: 'node.ts', dest: `${replaceParams.state_KebabCase}/node.ts` },
      { src: 'route.ts', dest: `${replaceParams.state_KebabCase}/route.ts` },
      { src: 'page/index.module.scss', dest: `${replaceParams.state_KebabCase}/page/index.module.scss` },
      { src: 'page/index.tsx', dest: `${replaceParams.state_KebabCase}/page/index.tsx` },
      { src: '_redux/constants.ts', dest: `${replaceParams.state_KebabCase}/_redux/constants.ts` },
      { src: '_redux/index.ts', dest: `${replaceParams.state_KebabCase}/_redux/index.ts` },
      { src: '_redux/selectors.ts', dest: `${replaceParams.state_KebabCase}/_redux/selectors.ts` },
      { src: '_redux/slice.ts', dest: `${replaceParams.state_KebabCase}/_redux/slice.ts` },
      { src: '_redux/types.ts', dest: `${replaceParams.state_KebabCase}/_redux/types.ts` },
      { src: '_redux/sagas/index.ts', dest: `${replaceParams.state_KebabCase}/_redux/sagas/index.ts` },
      { src: `_redux/sagas/saga/index.ts`, dest: `${replaceParams.state_KebabCase}/_redux/sagas/${replaceParams.saga_KebabCase}/index.ts` },
    ]

    filesArray.forEach((file) => {
      this.fs.copyTpl(
        this.templatePath(file.src),
        this.destinationPath(file.dest),
        replaceParams,
      )
    })
  }
};
