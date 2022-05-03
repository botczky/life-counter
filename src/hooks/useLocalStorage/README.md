# useLocalStorage

так много реализаций этого хука но почему то блять нигде нет логики очистки
например если передавать value равное null
ведь если `localStorage[key] === undefined` то `localStorage.getItem(key) === null`

тестировать это щас для меня вообще никак, но кажется возможным
надо будет изучить такие инструменты как [WebdriverIO](https://webdriver.io/) или [Playwrite](https://playwright.dev/)
заметочка: к сожалению Cypress не даст возможности протестить изменения состояния из другой вкладки:
[https://docs.cypress.io/guides/references/trade-offs#Multiple-tabs](https://docs.cypress.io/guides/references/trade-offs#Multiple-tabs)
