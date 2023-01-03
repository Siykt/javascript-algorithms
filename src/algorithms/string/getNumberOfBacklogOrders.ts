type RN = [number, number][]

// 定义操作符方法
const isBig = (a: number, b: number) => a >= b
const isSmall = (a: number, b: number) => a <= b

const MAX = 10 ** 9 + 7

const insert = (arr: RN, [price, amount]: [number, number], desc: boolean) => {
  const index = arr.findIndex(([p]) => (desc ? p < price : p > price))
  if (index < 0) {
    arr.push([price, amount])
  } else {
    arr.splice(index, 0, [price, amount])
  }
}

/**
 * 积压订单中的订单总数
 * @param orders 订单
 */
export function getNumberOfBacklogOrders(orders: number[][]): number {
  let res = 0
  // 采购积压订单
  const buys: RN = []
  // 销售订单
  const sells: RN = []
  // 价格, 数量, 类型
  for (const [curPrice, curAmount, orderType] of orders) {
    // 抽象采购/销售记录表
    const pivotOrderRecord = orderType ? buys : sells
    const writeOrderRecord = orderType ? sells : buys
    // 抽象操作符
    // 卖的时候要比买的时候更便宜(价格更低)
    // 买的时候要比卖的时候更贵(价格更高)
    const op = orderType ? isSmall : isBig
    // 需要保存的数量
    let needSavingAmount = curAmount
    for (let i = 0; i < pivotOrderRecord.length; i++) {
      const [pivotPrice, pivotAmount] = pivotOrderRecord[i]
      if (pivotAmount && op(curPrice, +pivotPrice)) {
        // 多就把库存清空
        if (needSavingAmount >= pivotAmount) {
          pivotOrderRecord.splice(i--, 1)
          needSavingAmount -= pivotAmount
          res -= pivotAmount
        }
        // 否则清除对应的数量
        else {
          pivotOrderRecord[i][1] = pivotAmount - needSavingAmount
          res -= needSavingAmount
          needSavingAmount = 0
          break
        }
      }
    }

    if (needSavingAmount) {
      res += needSavingAmount
      insert(writeOrderRecord, [curPrice, needSavingAmount], orderType === 0)
    }
  }
  return res % MAX
}
