const symbols = [
  'BTCUSDT',
  'ADAUSDT',
  'SOLUSDT',
  'MATICUSDT',
  'C98USDT',
  'VETUSDT',
  'XLMUSDT',
  'LUNAUSDT',
  'DOTUSDT',
  'ZILUSDT',
  'ETHUSDT',
  'ATOMUSDT',
  'LTCUSDT',
  'DARUSDT',
  'CHRUSDT',
  '1INCHUSDT',
  'DYDXUSDT',
  'XRPUSDT',
  'SHIBUSDT',
  'DOGEUSDT',
  'LINAUSDT',
  'SLPUSDT',
  'FIOUSDT',
  'JSTUSDT',
  'WRXUSDT',
  'TRXUSDT',
  'XTZUSDT',
  'DENTUSDT',
]

const getPrices = (symbols) => {
  const promises = symbols.map((symbol) => {
    return axios
      .get('https://api.binance.com/api/v3/ticker/price', {
        params: {
          symbol,
        },
      })
      .then((response) => {
        return { [symbol]: response.data.price }
      })
      .catch((error) => {
        console.log(error)
      })
  })
  return Promise.all(promises)
}

// My wallet

getPrices(symbols)
  .then((prices) => {
    const result = Object.assign({}, ...prices)
    const objects = [
      { name: 'BTCUSDT', qty: 0.00445, exp: 211.7 },
      { name: 'ADAUSDT', qty: 167.6586, exp: 338 },
      { name: 'SOLUSDT', qty: 3.37, exp: 726 },
      { name: 'MATICUSDT', qty: 72.2383, exp: 100 },
      { name: 'C98USDT', qty: 40.7592, exp: 156 },
      { name: 'VETUSDT', qty: 1131.3675, exp: 150 },
      { name: 'XLMUSDT', qty: 288.711, exp: 100 },
      { name: 'LUNAUSDT', qty: 4.18, exp: 148 },
      { name: 'DOTUSDT', qty: 3.85, exp: 205 },
      { name: 'ZILUSDT', qty: 102.6, exp: 11 },
      { name: 'ETHUSDT', qty: 0.106, exp: 500 },
      { name: 'ATOMUSDT', qty: 4.35, exp: 100 },
      { name: 'LTCUSDT', qty: 0.66, exp: 100 },
      { name: 'DARUSDT', qty: 47.928, exp: 50 },
      { name: 'CHRUSDT', qty: 156, exp: 100 },
      { name: '1INCHUSDT', qty: 39.96, exp: 100 },
      { name: 'DYDXUSDT', qty: 12, exp: 100 },
      { name: 'XRPUSDT', qty: 127, exp: 100 },
      { name: 'ETHUSDT', qty: 0.40946, exp: 1000 },
      { name: 'XRPUSDT', qty: 268.09, exp: 500 },
      { name: 'ADAUSDT', qty: 199.62, exp: 500 },
    ]

    const objectsWithPrices = objects.map((obj) => {
      const price = result[obj.name]
      return { ...obj, price }
    })

    objectsWithPrices.forEach((obj) => {
      obj.totalCost = obj.qty * obj.price
    })
    console.log(objectsWithPrices)

    const totalCostCells = document.querySelectorAll(
      '.my-wallet tr td:nth-of-type(5)'
    )
    const priceCells = document.querySelectorAll(
      '.my-wallet tr td:nth-of-type(4)'
    )
    const qtyCells = document.querySelectorAll(
      '.my-wallet tr td:nth-of-type(2)'
    )
    const expCells = document.querySelectorAll(
      '.my-wallet tr td:nth-of-type(3)'
    )

    priceCells.forEach((cell, index) => {
      cell.textContent = parseFloat(objectsWithPrices[index].price)
    })

    qtyCells.forEach((cell, index) => {
      cell.textContent = objects[index].qty
    })
    expCells.forEach((cell, index) => {
      cell.textContent = objects[index].exp
    })
    totalCostCells.forEach((cell, index) => {
      cell.textContent = parseFloat(
        objectsWithPrices[index].totalCost.toFixed(2)
      )
    })
    const totalCostSum = objectsWithPrices.reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue.totalCost
      },
      0
    )

    const expSum = objectsWithPrices.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.exp
    }, 0)

    document.getElementById('totalCost-sum').value = parseFloat(
      totalCostSum.toFixed(2)
    )
    document.getElementById('exp-sum').value = expSum
    console.log(totalCostSum)
    console.log(expSum)
  })
  .catch((error) => {
    console.log(error)
  })

// Bomzh wallet

getPrices(symbols)
  .then((prices) => {
    const result = Object.assign({}, ...prices)
    const objects = [
      { name: 'BTCUSDT', qty: 0.00236, exp: 100 },
      { name: 'LTCUSDT', qty: 0.638, exp: 100 },
      { name: 'ETHUSDT', qty: 0.0336, exp: 100 },
      { name: 'SOLUSDT', qty: 0.74, exp: 100 },
      { name: 'DOTUSDT', qty: 3.52, exp: 100 },
      { name: 'ATOMUSDT', qty: 2.96, exp: 100 },
      { name: 'ADAUSDT', qty: 48.6, exp: 100 },
      { name: 'LUNAUSDT', qty: 3.76, exp: 100 },
      { name: 'MATICUSDT', qty: 89.3, exp: 100 },
      { name: 'XRPUSDT', qty: 108, exp: 100 },
    ]

    const objectsWithPrices = objects.map((obj) => {
      const price = result[obj.name]
      return { ...obj, price }
    })

    objectsWithPrices.forEach((obj) => {
      obj.totalCost = obj.qty * obj.price
    })
    console.log(objectsWithPrices)

    const totalCostCells = document.querySelectorAll(
      '.bomzh-wallet tr td:nth-of-type(5)'
    )
    const priceCells = document.querySelectorAll(
      '.bomzh-wallet tr td:nth-of-type(4)'
    )
    const qtyCells = document.querySelectorAll(
      '.bomzh-wallet tr td:nth-of-type(2)'
    )
    const expCells = document.querySelectorAll(
      '.bomzh-wallet tr td:nth-of-type(3)'
    )

    priceCells.forEach((cell, index) => {
      cell.textContent = parseFloat(objectsWithPrices[index].price)
    })

    qtyCells.forEach((cell, index) => {
      cell.textContent = objects[index].qty
    })
    expCells.forEach((cell, index) => {
      cell.textContent = objects[index].exp
    })
    totalCostCells.forEach((cell, index) => {
      cell.textContent = parseFloat(
        objectsWithPrices[index].totalCost.toFixed(2)
      )
    })
    const totalCostSum = objectsWithPrices.reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue.totalCost
      },
      0
    )

    const expSum = objectsWithPrices.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.exp
    }, 0)

    document.getElementById('bomzh-totalCost-sum').value = parseFloat(
      totalCostSum.toFixed(2)
    )
    document.getElementById('bomzh-exp-sum').value = expSum
    console.log(totalCostSum)
    console.log(expSum)
  })
  .catch((error) => {
    console.log(error)
  })

//   Lucky wallet

getPrices(symbols)
  .then((prices) => {
    const result = Object.assign({}, ...prices)
    const objects = [
      { name: 'SHIBUSDT', qty: 190236.57, exp: 10 },
      { name: 'DOGEUSDT', qty: 37, exp: 10 },
      { name: 'LINAUSDT', qty: 140.8, exp: 10 },
      { name: 'SLPUSDT', qty: 132.8, exp: 10 },
      { name: 'FIOUSDT', qty: 53, exp: 10 },
      { name: 'JSTUSDT', qty: 132.2, exp: 10 },
      { name: 'WRXUSDT', qty: 6.49, exp: 10 },
      { name: 'TRXUSDT', qty: 92.9, exp: 10 },
      { name: 'XTZUSDT', qty: 1.6, exp: 10 },
      { name: 'DENTUSDT', qty: 1468.53, exp: 10 },
    ]

    const objectsWithPrices = objects.map((obj) => {
      const price = result[obj.name]
      return { ...obj, price }
    })

    objectsWithPrices.forEach((obj) => {
      obj.totalCost = obj.qty * obj.price
    })
    console.log(objectsWithPrices)

    const totalCostCells = document.querySelectorAll(
      '.lucky-wallet tr td:nth-of-type(5)'
    )
    const priceCells = document.querySelectorAll(
      '.lucky-wallet tr td:nth-of-type(4)'
    )
    const qtyCells = document.querySelectorAll(
      '.lucky-wallet tr td:nth-of-type(2)'
    )
    const expCells = document.querySelectorAll(
      '.lucky-wallet tr td:nth-of-type(3)'
    )

    priceCells.forEach((cell, index) => {
      cell.textContent = parseFloat(objectsWithPrices[index].price)
    })

    qtyCells.forEach((cell, index) => {
      cell.textContent = objects[index].qty
    })
    expCells.forEach((cell, index) => {
      cell.textContent = objects[index].exp
    })
    totalCostCells.forEach((cell, index) => {
      cell.textContent = parseFloat(
        objectsWithPrices[index].totalCost.toFixed(2)
      )
    })
    const totalCostSum = objectsWithPrices.reduce(
      (accumulator, currentValue) => {
        return accumulator + currentValue.totalCost
      },
      0
    )

    const expSum = objectsWithPrices.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.exp
    }, 0)

    document.getElementById('lucky-totalCost-sum').value = parseFloat(
      totalCostSum.toFixed(2)
    )
    document.getElementById('lucky-exp-sum').value = expSum
    console.log(totalCostSum)
    console.log(expSum)
  })
  .catch((error) => {
    console.log(error)
  })
