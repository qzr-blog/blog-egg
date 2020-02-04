// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportArchives from '../../../app/service/Archives';
import ExportBasic from '../../../app/service/Basic';
import ExportInfo from '../../../app/service/Info';
import ExportOverview from '../../../app/service/Overview';

declare module 'egg' {
  interface IService {
    archives: ExportArchives;
    basic: ExportBasic;
    info: ExportInfo;
    overview: ExportOverview;
  }
}
