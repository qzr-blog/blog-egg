// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportInfo from '../../../app/model/info';

declare module 'egg' {
  interface IModel {
    Info: ReturnType<typeof ExportInfo>;
  }
}
