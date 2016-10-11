/**================================================================================*\
 * Don't touch anything in this file please :)
 **================================================================================*/

require('../scss/index.scss');
const canUseDOM = require('../../utils/canUseDOM');
const logger = require('../../utils/logger')('index');

const question0 = require('../../questions/question0');
const question1 = require('../../questions/question1');
const question2 = require('../../questions/question2');
const question3 = require('../../questions/question3');
const question4 = require('../../questions/question4');

if (canUseDOM()) {
  console.log('');
  logger.info('Question 0')
  logger.log(question0());
  logger.info('--------------------');
  console.log('');

  console.log('');
  logger.info('Question 1')
  logger.log(question1());
  logger.info('--------------------');
  console.log('');

  console.log('');
  logger.info('Question 2')
  logger.log(question2());
  logger.info('--------------------');
  console.log('');

  console.log('');
  logger.info('Question 3')
  logger.log(question3());
  logger.info('--------------------');
  console.log('');
}

module.exports = {
  question0,
  question1,
  question2,
  question3,
  question4
};

