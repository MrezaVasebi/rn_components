import { IFinalData } from "../components/insta_explorer/InstaExplorerLayout";

export const useInstaExplorerLayout = () => {
  const modifyData = (arr: any): IFinalData[] => {
    let finalData: IFinalData[] = [];
    let type1 = true;
    let type = 1;
    let add = true;
    for (let i = 0; i < arr.length; i += type1 ? 6 : 3) {
      let j = 0;
      let data: any[] = [];

      while (j < (type1 ? 3 : 6)) {
        arr[i + j] && data.push(arr[i + j]);
        j += 1;
      }

      finalData.push({
        id: Math.random().toString(),
        data,
        type,
      });

      type1 = !type1;

      if (type == 1) {
        add = true;
      }

      if (type == 4) {
        add = false;
      }

      add ? type++ : type--;
    }

    return finalData;
  };

  return { modifyData };
};
