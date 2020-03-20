import { useState } from "react";

import NutritionFacts from "./NutritionFacts";
import PhoneManBigSVG from "./svg/PhoneManBigSVG";
import FoodSearchList from "./FoodSearchList";

export default function FoodSearchResults ({ searchResults }) {
    const [nutrInfo, setNutrInfo] = useState()

    const svg = (
      <div className="flex flex-col mt-40">
        <PhoneManBigSVG />
      </div>
    )

    return (
        <section className="flex flex-1">
            <FoodSearchList setNutrInfo={setNutrInfo} searchResults={searchResults}/> 
            <div className="w-1/2 max-h flex">
              <div className="flex-1"></div>
                {nutrInfo ? <NutritionFacts data={nutrInfo} /> : svg}   
              <div className="flex-1"></div>
            </div>
        </section>
    )
}