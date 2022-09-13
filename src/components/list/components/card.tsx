import React, { FC } from "react";
import { BaseSearchItem } from "../../../types/search-result";

export const Card: FC<BaseSearchItem> = ({ title, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noreferrer"
    className="rounded-md  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal bg-gradient-to-r from-cyan-500 to-blue-500 hover:to-blue-100 transition-all duration-200 w-full"
  >
    <p className="text-gray-900 text-base">{title}</p>
  </a>
);
