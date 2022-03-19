export { AppWindow } from "./window.ts";
import { OSNames } from "../astrodon-manager/mod.ts";

export interface AppInfo {
  name: string;
  id: string;
  copyright: string;
  version: string;
  author: string;
  shortDescription: string;
  longDescription: string;
  homepage: string;
  icon: string[];
  resources: string[];
}

export interface AppBuildOptions {
  targets?: {
    [key in OSNames]?: {
      sufix?: string;
    };
  }
}

export interface AppConfig {
  entry: string;
  dist: string;
  info: AppInfo;
  build?: AppBuildOptions;
}
