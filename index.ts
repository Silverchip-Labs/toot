export const coolMap = <TInput, TOutput> (arr: TInput[], fn: (item: TInput, index: number, array: TInput[]) => TOutput): TOutput[] => {
    const result = [];
    for (let i = 0; i < arr.length; i++){
        const element = arr[i];
        const resultElement = fn(element, i, arr);
        result.push(resultElement);
    }

    return result
}

export const coolFilter = <T> (arr: T[], fn: (item: T, index: number, array: T[]) => T): T[] => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) result.push(arr[i]);
    }
    return result;
}

export const coolReduce = <TSource, TResult> (arr: TSource[], fn: (prevValue: TResult, curValue: TSource, index: number, array: TSource[]) => TResult, initialValue?: TResult | undefined) => {
    return;
}