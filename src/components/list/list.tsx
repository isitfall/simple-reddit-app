import React, { FC } from "react";
import { BaseSearchItem } from "../../types/search-result";
import { Card } from "./components/card";

interface List {
  items: BaseSearchItem[];
}

export const List: FC<List> = ({ items }) => (
  <div className="flex flex-col items-center gap-y-2 max-w-xl w-full">
    {items.map(({ id, title, url }) => (
      <Card key={id} title={title} id={"id"} url={url} />
    ))}
  </div>
);
