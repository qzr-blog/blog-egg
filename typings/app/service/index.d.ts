// This file is created by egg-ts-helper@1.29.1
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportArchives from '../../../app/service/Archives';
import ExportBasic from '../../../app/service/Basic';
import ExportInfo from '../../../app/service/Info';
import ExportOverview from '../../../app/service/Overview';

declare module 'egg' {
  interface IService {
    archives: AutoInstanceType<typeof ExportArchives>;
    basic: AutoInstanceType<typeof ExportBasic>;
    info: AutoInstanceType<typeof ExportInfo>;
    overview: AutoInstanceType<typeof ExportOverview>;
  }
}
