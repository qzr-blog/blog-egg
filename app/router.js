'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.resources('getContent', '/api/content', controller.content)
//   router.resources('setContent', '/api/setContent', controller.content)
//   router.resources('getContent', '/api/getContent', controller.content)
//   router.resources('delContent', '/api/delContent', controller.content)
};
