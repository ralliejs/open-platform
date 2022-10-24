type ConstantItem = readonly [string, string, string | number]
type ConstantDeclare<T extends readonly ConstantItem[] = any> = T extends readonly [readonly [infer Enum, infer Label, infer Value], ...infer Rest]
  ? Rest extends readonly ConstantItem[]
    ? Enum extends string
      ? Value extends string | number
        ? {
            ENUMS: {
              [K in Enum]: Value // eslint-disable-line
            } & ConstantDeclare<Rest>['ENUMS']
            OPTIONS: ConstantDeclare<Rest>['OPTIONS'] extends any[]
              ? [
                  {
                    label: Label
                    value: Value
                  },
                  ...ConstantDeclare<Rest>['OPTIONS'],
                ]
              : []
            MAP: {
              [K in Value]: Label // eslint-disable-line
            } & ConstantDeclare<Rest>['MAP']
          }
        : never
      : never
    : never
  : {
      ENUMS: {}
      OPTIONS: []
      MAP: {}
    }

export type EnumType<T> = T extends { ENUMS: Record<string, any>; OPTIONS: any[]; MAP: Record<string, any> } ? keyof T['ENUMS'] : never

export function generateConstant<T extends readonly ConstantItem[]>(declares: T): ConstantDeclare<T> {
  const result: ConstantDeclare<T> = declares.reduce(
    (res, item) => {
      const [enums, label, value] = item
      res.ENUMS[enums] = value
      res.OPTIONS.push({
        label,
        value,
      })
      res.MAP[value as string] = label
      return res
    },
    {
      ENUMS: {},
      OPTIONS: [],
      MAP: {},
    } as any,
  )
  return result
}
