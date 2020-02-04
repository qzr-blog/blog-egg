// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArchives from '../../../app/controller/archives';
import ExportBasic from '../../../app/controller/basic';
import ExportInfo from '../../../app/controller/info';
import ExportOverview from '../../../app/controller/overview';

declare module 'egg' {
  interface IController {
    archives: ExportArchives;
    basic: ExportBasic;
    info: ExportInfo;
    overview: ExportOverview;
  }
}
