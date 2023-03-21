import ky from "ky";
import { useEffect, useState } from "react";

interface CodeName {
  name: string;
}

export function useBorder(borders: string[]) {
  const [border, setBorder] = useState([]);

  const getBordersCodes = async (borders: string[]) => {
    try {
      if (borders.length > 0) {
        const data: any = await ky(
          "https://restcountries.com/v2/alpha?codes=" + borders.join(",")
        ).json();

        setBorder(data.map((i: CodeName) => i.name));
      }
    } catch (error: any) {
      error.message;
    }
  };

  useEffect(() => {
    getBordersCodes(borders);
  }, [borders]);

  return { border };
}
