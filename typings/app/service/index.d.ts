// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBasic from '../../../app/service/Basic';
import ExportInfo from '../../../app/service/Info';
import ExportOverview from '../../../app/service/Overview';

declare module 'egg' {
  interface IService {
    basic: ExportBasic;
    info: ExportInfo;
    overview: ExportOverview;
  }
}
