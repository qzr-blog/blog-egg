// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBasic from '../../../app/controller/basic';
import ExportInfo from '../../../app/controller/info';
import ExportOverview from '../../../app/controller/overview';

declare module 'egg' {
  interface IController {
    basic: ExportBasic;
    info: ExportInfo;
    overview: ExportOverview;
  }
}
