import { Telegraf, Markup } from 'telegraf'

const token = '7406615102:AAE4NVSpMWDrVxYOEaRAAOnOKccy3q0gMF0'
const webAppUrl = 'https://meduza-clickerd.web.app'

const bot = new Telegraf(token)

bot.command('start', (ctx) => {
  ctx.reply(
    'Hello! Click REGISTER for starters!',
    Markup.inlineKeyboard([
      Markup.button.webApp('REGISTER', `${webAppUrl}?ref=${ctx.payload}`),
    ])
  )
})

bot.launch()
