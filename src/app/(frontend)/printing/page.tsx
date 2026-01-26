const PrintingPage = () => {
  const services = [
    {
      title: 'Визитки',
      description: 'Печать визиток на различных видах бумаги',
      features: ['Офсетная печать', 'Цифровая печать', 'Ламинация', 'Тиснение'],
      price: 'от 500 ₽/100 шт'
    },
    {
      title: 'Листовки и флаеры',
      description: 'Рекламные материалы для продвижения вашего бизнеса',
      features: ['Различные форматы', 'Односторонняя/двусторонняя печать', 'Глянцевая/матовая бумага'],
      price: 'от 1000 ₽/100 шт'
    },
    {
      title: 'Брошюры и каталоги',
      description: 'Многостраничные издания для презентации продукции',
      features: ['Скрепление на скобу', 'Склейка', 'Различные форматы', 'Цветная печать'],
      price: 'от 50 ₽/шт'
    },
    {
      title: 'Буклеты',
      description: 'Рекламные буклеты с различными видами фальцовки',
      features: ['Евробуклет', 'Гармошка', 'Окно', 'Двойная параллельная'],
      price: 'от 15 ₽/шт'
    },
    {
      title: 'Плакаты и постеры',
      description: 'Крупноформатная печать для рекламы и оформления',
      features: ['Форматы от A3 до A0', 'Матовая/глянцевая бумага', 'Ламинация'],
      price: 'от 200 ₽/шт'
    },
    {
      title: 'Наклейки и стикеры',
      description: 'Печать наклеек на самоклеющейся пленке',
      features: ['Любые формы и размеры', 'Контурная резка', 'Ламинация', 'Прозрачная пленка'],
      price: 'от 500 ₽/лист'
    },
    {
      title: 'Этикетки',
      description: 'Производство этикеток для продукции',
      features: ['Ролевая печать', 'Листовая печать', 'Термо-этикетки', 'Полуглянец'],
      price: 'от 3 ₽/шт'
    },
    {
      title: 'Бланки и конверты',
      description: 'Фирменные бланки и конверты с вашим логотипом',
      features: ['Различные форматы', 'Цветная печать', 'Нумерация', 'Перфорация'],
      price: 'от 8 ₽/шт'
    },
    {
      title: 'Календари',
      description: 'Настенные, настольные и карманные календари',
      features: ['Квартальные календари', 'Перекидные календари', 'Карманные календари'],
      price: 'от 100 ₽/шт'
    },
    {
      title: 'Папки',
      description: 'Фирменные папки для документов',
      features: ['Различные форматы', 'Ламинация', 'Тиснение', 'Выборочный УФ-лак'],
      price: 'от 50 ₽/шт'
    },
    {
      title: 'Блокноты',
      description: 'Фирменные блокноты с вашим логотипом',
      features: ['Различные форматы', 'Твердая/мягкая обложка', 'Скрепление на пружину/клей'],
      price: 'от 80 ₽/шт'
    },
    {
      title: 'Баннеры',
      description: 'Широкоформатная печать для наружной рекламы',
      features: ['Баннерная ткань', 'Сетка', 'Люверсы', 'Любые размеры'],
      price: 'от 300 ₽/м²'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl mb-4">Полиграфия / Типография</h1>
      <p className="text-xl text-gray-700 mb-8 max-w-3xl">
        Полный спектр полиграфических услуг в Калининграде. Качественная печать,
        быстрые сроки, доступные цены.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="border border-gray-300 p-6 hover:border-black transition-colors">
            <h3 className="text-xl mb-2 font-medium">{service.title}</h3>
            <p className="text-gray-700 text-sm mb-4">{service.description}</p>

            <div className="mb-4">
              <p className="text-sm font-medium mb-2">Особенности:</p>
              <ul className="space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 flex-shrink-0"/>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-gray-300">
              <p className="font-medium">{service.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Дополнительная информация */}
      <div className="mt-12 max-w-4xl">
        <h2 className="text-3xl mb-6">Почему выбирают нас</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-gray-300 p-6">
            <h3 className="text-xl mb-3 font-medium">Современное оборудование</h3>
            <p className="text-gray-700">
              Используем профессиональное полиграфическое оборудование последнего поколения,
              что гарантирует высокое качество печати.
            </p>
          </div>

          <div className="border border-gray-300 p-6">
            <h3 className="text-xl mb-3 font-medium">Быстрые сроки</h3>
            <p className="text-gray-700">
              Большинство заказов выполняем в течение 1-3 рабочих дней.
              Есть услуга срочной печати.
            </p>
          </div>

          <div className="border border-gray-300 p-6">
            <h3 className="text-xl mb-3 font-medium">Помощь с дизайном</h3>
            <p className="text-gray-700">
              Наши дизайнеры помогут создать макет или доработать ваш дизайн
              под требования печати.
            </p>
          </div>

          <div className="border border-gray-300 p-6">
            <h3 className="text-xl mb-3 font-medium">Доступные цены</h3>
            <p className="text-gray-700">
              Оптимальное соотношение цены и качества. Скидки при больших тиражах
              и для постоянных клиентов.
            </p>
          </div>
        </div>
      </div>

      {/* Контактная информация */}
      <div className="mt-12 bg-black text-white p-8">
        <h2 className="text-2xl mb-4">Нужна консультация?</h2>
        <p className="mb-4">
          Свяжитесь с нами, и мы поможем подобрать оптимальное решение для вашей задачи
        </p>
        <div className="space-y-2">
          <p>Телефон: +7 (999) 123-45-67</p>
          <p>Email: print@shop.ru</p>
          <p>г. Калининград, ул. Примерная, д. 1</p>
        </div>
      </div>
    </div>
  );
};

export default PrintingPage
