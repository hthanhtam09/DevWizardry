import React from "react";
import { isEmpty } from "lodash";
import Card from "./PostCard";
import { data } from "../../data";

const CardList: React.FC = () => {
  //   if (isEmpty(data)) {
  //     return null;
  //   }

  return (
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-10">
        {data.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
  );
};

export default CardList;
