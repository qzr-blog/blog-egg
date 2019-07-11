// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportInfo from '../../../app/controller/info';
import ExportOverview from '../../../app/controller/overview';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    info: ExportInfo;
    overview: ExportOverview;
  }
}
